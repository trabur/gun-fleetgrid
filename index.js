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
    console.log('get:field', field)
    // handle read
  },
  put: function(node, done) {
    console.log('put:node', node)
    // handle write
  }
});

Flint.register(fgGunAdapter);