---
title: Test window-bound events on React components using Enzyme/Jest
date: "2018-04-27T00:00:00.000Z"
---

Enzyme is built for testing _React components_, it handles React's synthetic event system quite well (things like `onClick` events, for example).

But what happens when you want to test event handlers that must be bound to the `window`? Interactive components often require these, for `keydown` events and so on.

A quick solution is to mock the `window.addEventListener` function implmentation and use it to assign each callback to an object that is easy to call in your tests, to simulate those events firing.

```javascript
// Set-up event listener mock
const map = {};
window.addEventListener = jest.genMockFn().mockImpl((event, callback) => {
  map[event] = callback;
});

// Mount component that has set callback for keydown event
const component = mount(<SomeComponent />);

// Trigger keydown event
map.keydown({ key: 'Escape' });
```

[Source](https://github.com/airbnb/enzyme/issues/426#issuecomment-253515886)