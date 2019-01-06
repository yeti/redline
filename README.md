# redline

> reusable react component library

[![NPM](https://img.shields.io/npm/v/redline.svg)](https://www.npmjs.com/package/redline)

## Install

```bash
yarn add @yeti-dev/redline
```


## What is this?

This library attempts to create a single library 
for React and React Native components that
don't use platform-specific APIs.


### Component Library

#### Parameters for `<ProfileImage />`

```js
{
	uri: ?string = http://www.placecage.com/c/40/40
	size: number = 40
}
```



## Usage

```tsx
import * as React from 'react'

import MyComponent from 'redline'

class Example extends React.Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

## License

MIT © [yeti](https://github.com/yeti)
