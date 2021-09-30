(function BigIntJSON() {
  try {
    if (typeof globalThis.BigInt !== 'function') {
      throw new Error('BigInt type does not exist')
    }
    if (typeof globalThis.BigInt.prototype.toJSON !== 'undefined') {
      throw new Error('BigInt.prototype.toJSON already exists')
    }
    
    globalThis.BigInt.prototype.toJSON = function toJSON() { return `BigInt::${this.toString()}` }
  } catch (e) {
    console.error('bigint-json: There was an error adding JSON support for BigInt', e.message)
    throw e
  }
})()

const matchBigInt = /^BigInt::(\d+)$/

function reviver(key, value) {
  return typeof value === 'string' && value.startsWith('BigInt::')
    ? BigInt(matchBigInt.exec(value)[1]) 
    : value
}

module.exports = {
  parse: (value) => JSON.parse(value, reviver),
  reviver
}

