# bigint-json

This package adds support to pass BigInt values through JSON.

It does this by adding a `BigInt.prototype.toJSON` function and providing a `JSON.parse` reviver method to parse the value back to a BigInt.

## Usage
```js
import { parse } from '@osirisdev/bigint-json'
import { reviver } from '@osirisdev/bigint-json'
import * as bigintJson from '@osirisdev/bigint-json'

const { parse } = require('@osirisdev/bigint-json')
const { reviver } = require('@osirisdev/bigint-json')
require('@osirisdev/bigint-json')
```

`bigint-json` uses an IIFE (immediately invoked function expression) to monkey-patch `BigInt` with a `toJSON` function

The module also exports two functions

`parse` - Calls `JSON.parse` with a custom reviver function that parses strings of `"BigInt::"` to `BigInt` values
`reviver` - The reviver function used in `parse` so you can use it yourself however you want

## Examples
```js
import { parse, reviver } from '@osirisdev/bigint-json'

const val = { num: 5, big: 5n }
const json = JSON.stringify(val)
// {"num":5,"big":"BigInt::5"}
const parsed = parse(json)
// { num: 5, big: 5n }
const parsed2 = JSON.parse(json, reviver)
// { num: 5, big: 5n }
```

or

```js
const { parse, reviver } = require('@osirisdev/bigint-json')

const val = { num: 5, big: 5n }
const json = JSON.stringify(val)
// {"num":5,"big":"BigInt::5"}
const parsed = parse(json)
// { num: 5, big: 5n }
const parsed2 = JSON.parse(json, reviver)
// { num: 5, big: 5n }
```


