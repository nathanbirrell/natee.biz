---
title: Use React's defaultProps with Typescript strictNullChecks
date: "2018-05-18T00:00:00.000Z"
---

Getting React's defaultProps to play nicely with Typescript's [strictNullChecks](https://www.tsmean.com/articles/learn-typescript/strict-null-checks-best-practice/) can be a bit of a pain. Errors like this will pop up: `error TS2322: Type 'string | undefined' is not assignable to type 'string'`, because your Prop interface has an optional property on it. Even though at runtime you know the optional prop on your component will exist.

_NOTE: This issue is [currently being worked on](https://github.com/Microsoft/TypeScript/issues/23812) by Typescript, so hopefully this workaround isn't required for too long._

## Hack

The quickest (hacky) way to avoid this error is to use the TS not-null operator (`!`). For example: `this.props.myOptionalProp!`.

## Better

A better solution, however, to avoid abusing the not-null operator, but still retain good typechecking would be:

1. define the `Prop` interface as normal, with the optional properties
1. define a new interface for `DefaultProps`, where each property is required
1. create a new type `PropsWithDefaults` (using [intersection types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types)) consisting of `Props` and `DefaultProps`
1. assign your component `defaultProps` as normal
1. when destructuring your props in `render`, use [type assertion](https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions) on `this.props` to the new `PropsWithDefaults`

```javascript
interface Props {
  requiredProp: string;
  optionalProp?: string;
}

interface DefaultProps {
  optionalProp: string;
}

// Intersection type of both Props interface and DefaultProps
type PropsWithDefaults = Props & DefaultProps;

export class MyComponent extends React.PureComponent<Props> {
  public static defaultProps: DefaultProps = {
    // Setting defaultProps as normal
    optionalProp: 'None',
  }

  public render () {
    // Asserting type PropsWithDefaults to `this.props`
    const { requiredProp, optionalProp } = this.props as PropsWithDefaults;

    return (
      <div>{requiredProp} {optionalProp}</div>
    )
  }
}
```

[Source](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11640#issuecomment-295155472)