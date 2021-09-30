const bigintJson = require('.')
const assert = require('assert')

const val = { num: 5, big: 5n }

console.log('Stringify: ')
assert.equal(JSON.stringify(val), '{"num":5,"big":"BigInt::5"}')
console.log(JSON.stringify(val))
console.log('  PASSED')

console.log('Parse: ')
assert.deepEqual(bigintJson.parse(JSON.stringify(val)), val)
console.log(bigintJson.parse(JSON.stringify(val)))
console.log('  PASSED')

console.log('Reviver: ')
assert.deepEqual(JSON.parse(JSON.stringify(val), bigintJson.reviver), val)
console.log(JSON.parse(JSON.stringify(val), bigintJson.reviver))
console.log('  PASSED')

console.log('Error on second require')
assert.throws(() => {
    delete require.cache[require.resolve('.')]
    require('.')
}, /already exists/)
console.log('  PASSED')
