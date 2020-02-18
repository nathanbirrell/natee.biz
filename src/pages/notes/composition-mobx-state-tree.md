---
title: Composition in mobx-state-tree
date: "2018-08-14T00:00:00.000Z"
---

One part of building state management in mobx-state-tree that isn’t immediately obvious when starting, is composition. Usually you come across this issue when you want to share logic between multiple stores.

While mobx-state-tree (MST) doesn’t quite provide inheritance (in the way of `extends`), it does provide a little `compose` method that can be used for similar means. In effect, it [simulates inheritance](https://github.com/mobxjs/mobx-state-tree#simulate-inheritance-by-using-type-composition) by composing two models together.

## Usage

Composing two stores is as simple as:

```javascript

const AppleStore = types
  .compose(
    FruitStore,
    AppleModel,
  )
  .named('AppleStore')

```

### Example: compose a reusable base API store

Consider an application with many calls to different resources on an API, one that fetches Products and Posts. Rather that having duplicate code that handles loading/error/success logic and views between Products and Posts, we could compose them with an ApiStore.

`stores/ApiStore.ts`:

```javascript

// Shared model attributes between Products and Posts
const Model = {
  isLoading: false,
  hasFetched: false,
  error: types.maybe(ApiError)
}

const Views = (self: any) => ({
  get hasError() {
    return !!self.error
  },
  // ... and other shared views here, for example, hasData() might check if there are items in a self.data array
})

const Actions = (self: any) => ({
  // Note: the flow() and generator function is MST's way of handling asynchronous actions
  fetch: flow(function* (endpoint: string, parameters: object = {}) {
    self.loading = true

    try {
      // Note: for the sake of example, YourTransportLayer constructs a URL and performs a window.fetch()
      const response = yield YourTransportLayer.get(endpoint, parameters)

      self.onFetchSuccess(response) // callback to be overriden in composed model

      self.error = null
    } catch (error) {
      self.error = error

      self.onFetchError(error) // callback to be overriden in composed model

      // ... any logging, etc.
    } finally {
      self.isLoading = false
      self.hasFetched = true
    }
  }),

  // If you like, you could create the callbacks `onFetchSuccess` and `onFetchError` with a simple error log to remind you to define these in your Products and Posts models
})

const ApiStore = types
  .model('ApiStore', Model)
  .views(Views)
  .actions(Actions)

export default ApiStore

```

Now that you have your base API store, you can compose it with the stores that need it.

`stores/ProductStore.ts`:

```javascript

const Product = types.model('Product', {
  name: types.string,
  category: types.number,
  onSale: types.boolean,
  price: types.number,
})

// Define things that are Product-store-specific
const Model = {
  data: types.optional(types.array(Product), []),
}

const Views = (self: any) => ({
  recent: () => {
    // sort by recent products
  },
  onSale: () => {
    // get products on sale
  }
})

const Actions = (self: any) => ({
  getProducts: () => {
    // run the ApiStore fetch method
    self.fetch('/products')
  },
  // these are the callbacks that ApiStore runs
  onFetchSuccess: (response) => {
    self.data = response.products
  },
  onFetchError: (error) => {
    // do something...
  }
})

// the Product-only part of the store
const Products = types
  .model('Products', Model)
  .views(Views)
  .actions(Actions)

// Finally, compose the ApiStore with the Proucts store
const ProductStore = types
  .compose(
    ApiStore,
    Products,
  )
  .named('ProductStore')

export default ProductStore

```

## Considerations

A few tradeoffs that come with using `.compose` include:

* Readability: it's not quite obvious that `ProductStore` is composed with `ApiStore`, until the very end of the file. This can impact readability in a way you wouldn't get if we were working with ES6 classes.
* Typing issues: `ProductStore` doesn't exactly know that `ApiStore` methods are in scope, until it's composed, so typing on `self` can be tricky. This is an [existing consideration](https://github.com/mobxjs/mobx-state-tree#typing-self-in-actions-and-views) with MST, composition aside.
* Potentially easy to forget to create those callbacks (like `onFetchSuccess`).
* This isn't _inheritance_, unfortunately.


Overall, this pattern should help keep your MST stores DRY, quicker to write and less error-prone.
