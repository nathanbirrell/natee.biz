---
title: Building a reusable, customisable and composable React components
date: "2018-06-08T00:00:00.000Z"
hide: true
---

TODO: proper intro

Recently been building out a simple expand collapse component with _reuse_, _cusomisation_ and _composition_ in mind. Shouldn’t be that difficult right?

Challenges:

* **Reusability**: have it manage its own open/close states, hold it’s own core styles and accessibility features. This reduces overhead of implementing the `Expandable` for users of the component.
* Allow it to be **customisable** when necessary, so that special implementations stay DRY but not overly limited in how it is styled or how the DOM structure looks.
* **Composable** in the sense that the component, when used, reads like a logical set of subcomponents. For example, a wrapper `<Expandable>` might have it’s `<Expandable.Header>` and `<Expandable.Content>` within it.

Although you could, don't use `React.Context` - this is [not what this API is designed for](https://reactjs.org/docs/context.html#when-to-use-context).

## Option #1 Pass individual render props

A very simple approach to this problem would be to pass a few render props to an `Expandable` component. Passing `renderHeader` and `renderContent` as props would work, then let the component handle where and when (i.e. show content when visible is toggled to true) things are displayed.

The tradeoff here is that it's not very customisable. For example, if I want to change where the _content_ renders (i.e. on-top of the Header, not below) I either need to do that for _all_ or create a varation with another prop (which could get messy with too many variations).

## Option #2 Higher-Order Component

[Higher-Order Components](https://reactjs.org/docs/higher-order-components.html) (HOCs) are common patterns in React. Applying them to this context can solve our customisation problem. Essentially, it would allow us to abstract-out our toggle functionality (via `withExpandable`, `isOpen` state and other things that `Expandable` has that custom variations would need.

<!-- Pros:
 - Customisable
 - DRY

Cons:
 - HOCs aren't overly obvious when used
 - Difficult to enforce consistency -->

Implementing the `withExpandable` HOC is actually fairly straightforward. At its core, it's a function that takes a component and returns a component _with expandable functionality_ (things like the open state and toggle function).

What you don't get with this take is the consistency that a prop-driven component gets, but you definitely get plenty of customisability. For example, we know in every use case the `Header` will be a button element, we want this to be built-in and not have to remember to implement this for each usage. To mitigate _some_ of that lacking consistency, I've also added imports for a header and content components, wherein transitions, accessibilty, DOM elements and all can be defined in a consistent manner.

The other tradeoff to consider here is that HOCs in general aren't overly obvious when used, depending on where you apply them.

https://codepen.io/nathanbirrell/pen/oyNROL

<!-- <p data-height="265" data-theme-id="dark" data-slug-hash="oyNROL" data-default-tab="js,result" data-user="nathanbirrell" data-embed-version="2" data-pen-title="Expandable: HOC" class="codepen">See the Pen <a href="https://codepen.io/nathanbirrell/pen/oyNROL/">Expandable: HOC</a> by Nathan Birrell (<a href="https://codepen.io/nathanbirrell">@nathanbirrell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script> -->

```javascript

const withExpandable = (WrappedComponent) => class extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <WrappedComponent
        isOpen={this.state.isOpen}
        toggleOpen={this.toggleOpen}
        {...this.props}
      >
        {this.props.children}
      </WrappedComponent>
    )
  }
}

const CustomExpandable = withExpandable(class extends React.Component {
  render() {
    const { isOpen, toggleOpen } = this.props
    return (
      <div>
        {/* NOTE: in here you'd likely recycle a few Expandable subcomponents, like Expandable.Header and Expandable.Content */}
        <button onClick={toggleOpen}>Click me</button>
        { isOpen && (
          <p>Hellooooooooooooooooooooooooooooooooooooooooooooooooooo</p>
        )}
      </div>
    )
  }
})

```

## Option #3 Render Prop Pattern (or, FACCs)

Also known as Function as Child Component (FACC)

* Don't render `children` as a function prop (antipattern!)
* pass `render` function prop

Expandable contains the reusable functionality/props used by different implementations of it. It takes a render prop as a way of managing the cross-cutting concerns.

Pros:

 - More obvious in render method that Expandable is wrapping this CustomExpandable component
 - Looks more "composable" (than a HOC)

Cons:

 - Edge case with PureComponents to be aware of https://reactjs.org/docs/render-props.html#be-careful-when-using-render-props-with-reactpurecomponent
 - Decreased testability (read https://medium.com/@PhilippSpo/i-agree-with-all-of-the-above-and-after-this-pitch-i-am-sold-on-render-prop-components-more-than-9e0e4305a4bf)

Read more:
- Render props (React docs) https://reactjs.org/docs/render-props.html
- FaCCs as antipattern https://americanexpress.io/faccs-are-an-antipattern/

https://codepen.io/nathanbirrell/pen/vrEzWv

<!-- <p data-height="265" data-theme-id="dark" data-slug-hash="vrEzWv" data-default-tab="js,result" data-user="nathanbirrell" data-embed-version="2" data-pen-title="Expandable: Render Prop" class="codepen">See the Pen <a href="https://codepen.io/nathanbirrell/pen/vrEzWv/">Expandable: Render Prop</a> by Nathan Birrell (<a href="https://codepen.io/nathanbirrell">@nathanbirrell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script> -->

```javascript


class Expandable extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isOpen } = this.state

    return this.props.render(isOpen, this.toggleOpen)
  }
}

class CustomExpandable extends React.Component {
  render() {
    const { isOpen, toggleOpen } = this.props
    return (
      <Expandable
        render={(isOpen, toggleOpen) => (
          <React.Fragment>
            {/* NOTE: in here you'd likely recycle a few Expandable subcomponents, like Expandable.Header and Expandable.Content */}
            <button onClick={toggleOpen}>Click me</button>
            { isOpen && (
              <p>Hellooooooooooooooooooooooooooooooooooooooooooooooooooo</p>
            )}
          </React.Fragment>
        )}
      />
    )
  }
}

```

## Option #4 Component Injection

In this case, the `Expandable` component receives Header and Content as _component_ props (known as Component Injection).

Pros:

 - Very obvious in render method that Expandable is wrapping this CustomExpandable component
 - Looks most "composable"
 - Should work very well with component prop types
 - Fairly nice namespacing
 - Enforces structure at the Expandable level, rather than the custom implementation

Cons:

 - Maybe not as customisable? ie: if I want Content to render before Header, I can't. NOTE: could be mitigated with a renderProp ;)
 - You have to write out separate components for each prop (is this even a con?)

Read more:
- Intro to this concept https://americanexpress.io/faccs-are-an-antipattern/#component-injection---a-better-solution

https://codepen.io/nathanbirrell/pen/gKbddV

<!-- <p data-height="265" data-theme-id="dark" data-slug-hash="gKbddV" data-default-tab="js,result" data-user="nathanbirrell" data-embed-version="2" data-pen-title="Expandable: Component Injection" class="codepen">See the Pen <a href="https://codepen.io/nathanbirrell/pen/gKbddV/">Expandable: Component Injection</a> by Nathan Birrell (<a href="https://codepen.io/nathanbirrell">@nathanbirrell</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script> -->

```javascript

class Expandable extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isOpen } = this.state
    const {
      Header,
      Content,
    } = this.props

    const propsForInjectedComponents = {
      isOpen: isOpen,
      toggleOpen: this.toggleOpen,
    }

    // TODO: maybe check for a props.render() here, if it exists, render that instead!

    return (
      <div>
        <button onClick={this.toggleOpen}>
          <Header {...propsForInjectedComponents} />
        </button>
        {isOpen && <Content {...propsForInjectedComponents} />}
      </div>
    )
  }
}

class CustomExpandable extends React.Component {
  ExpandableHeader = (isOpen, toggleOpen) => (
    <span>Click me</span>
  )

  // Pass isOpen and toggleOpen if needed
  ExpandableContent = (isOpen, toggleOpen) => (
    <p>Hellooooooooooooooooooooooooooooooooooooooooooooooooooo</p>
  )

  render() {
    return (
      <Expandable
        Header={this.ExpandableHeader}
        Content={this.ExpandableContent}
      />
    )
  }
}

```


TODO: conclude