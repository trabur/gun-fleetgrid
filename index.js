import {Flint, KeyValAdapter} from 'gun-flint'

const myGunAdapter = new KeyValAdapter({
  opt: function(context, options) {
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
      // handle read
  },
  put: function(node, done) {
      // handle write
  }
});

Flint.register(myGunAdapter);