---
title: Accept any property in a Typescript interface (for use on component props)
date: "2018-05-09T00:00:00.000Z"
---

Sometimes we have core React componentry that passes all props given to it, down to a base DOM UI element. For example, a button element, whilst it may accept a few _known_ props (ie: variations on a button, `type={'primary'}`) it probably also passes any other _unknown_ props down to the base UI element (ie: `aria-label`).

To achieve this in Typescript, we can add an [indexer](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#strict-object-literal-assignment-checking) to our interface. This is simply a property on the interface that accepts any given property from an object literal. It is still good practice to specify known properties in the interface, _especially ones used inside the component itself_, not just the props that get spread to the underlying element.

## Example on a React component with object destructuring

Combine the indexer with [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring) and the [rest/spread operator](https://github.com/tc39/proposal-object-rest-spread), the result is a fairly elegant solution. Take our simple Button component for example:

```javascript
interface IProps {
  onClick: Function
  type: string,
  // 'Indexer'
  [x: string]: any
}

class Button extends React.PureComponent<IProps> {
  render() {
    const {
      onClick,
      type,
      ...otherProps // Assume any other props are for the base element
    } = this.props

    // do stuff with the type...

    return (
      <button
        onClick={onClick}
        {...otherProps} // Spread those otherProps
      />
    )
  }
}

```

This is a reasonable approach to avoid Typescript complaining about type mismatches for unknown props, while still getting the autocomplete and all on the _known_ props for a component.
