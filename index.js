const {Flint, KeyValAdapter} = require('gun-flint')

const fgGunAdapter = new KeyValAdapter({
  opt: function(context, options) {
    console.log('gun-fleetgrid')
    let {fleetgrid} = options
    if (fleetgrid) {
      this.initialized = true
      this.ht = fleetgrid.library
      this.token = fleetgrid.token
    } else {
      this.initialized = false
    }
  },
  get: function(key, field, done) {
    console.log('get:key', key)
    // get:key test
    // handle read
  },
  put: function(node, done) {
    console.log('put:node', node)
    // put:node [{state: 1589606526747, field: "hello", key: "test", val: "world"}]
    // handle write
  }
});

Flint.register(fgGunAdapter);