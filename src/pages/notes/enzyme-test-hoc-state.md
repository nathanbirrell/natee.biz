---
title: Test internal state of higher-order components with Enzyme
date: "2018-05-04T00:00:00.000Z"
---

When testing your store-connected containers (be those in Mobx or Redux or any state management library) you may have noticed you can't access that component's internal state or instance methods. This is because they're wrapped as [higher-order components](https://reactjs.org/docs/higher-order-components.html) (HOC).

Of course, in order to test thoroughly, we often need access to the internal state.

## Library-agnostic solution

Define your React component separately from the HOC one, export the HOC as default (for use in your app) and use a named export for the component (for your tests). Then Enzyme provides a [`instance()`](http://airbnb.io/enzyme/docs/api/ReactWrapper/instance.html) method to get the mounted instance's state (for example: `wrapper.instance().state`)

It's probably a good idea to use a naming convention to split them up, maybe something like a `Hoc` suffix, ie: `AccountContainerHoc`.

A Mobx with decorators example:

```javascript
export class AccountContainer extends React.Component {
  // Account stuff...
}

@inject('store')
@observer
class AccountContainerHoc extends AccountContainer {}

export defualt AccountContainerHoc
```

Then in your test somewhere, access state like so:

```javascript
import { AccountContainer } from '.'
const wrapper = mount(<AccountContainer />)
expect(wrapper.instance().state.someValue).toBe(true)
```

## Mobx alternative

If rewriting your store container definitions is too painful, a quick helper for Mobx users is: `AccountContainer.instance().wrappedInstance`. This should give you access to the internals.

## Redux alternative

It [appears](https://github.com/airbnb/enzyme/issues/1002#issuecomment-310796612) when shallow-rendering (preferable when testing these components anyway) you can use the [`.dive()`](http://airbnb.io/enzyme/docs/api/ShallowWrapper/dive.html) method, although I haven't tested this.

Usually it's easier to follow the pattern mentioned above anyway with Redux (and no decorators), because you can export your react component like above, and simply `export default` your `connect`ed container.