---
title: Define key types in Typescript interfaces
date: "2018-04-20T00:00:00.000Z"
---

Use bracket notation to define _key_ types on Typescript interfaces. This is useful on key-driven data structures.

For example, if we have an object of `PositionError`s, where the key is our numeric error code and the value is an object with information about the error type.

```javascript
interface IErrorType {
  [key:number]: {
    code: string,
    message: string
  }
}

// For example:
export const PositionError:IErrorType = {
  1: {
    code: 'PERMISSION_DENIED',
    message: 'Please allow permission'
  },
  2: {
    code: 'POSITION_UNAVAILABLE',
    message: 'Something went wrong :('
  }
}
```