README.md
========
A key:value FLEETGRID adapter for GunJS.

### Installation
make sure to have included GUN and METAHEAP before instantiating
- https://github.com/trabur/head-team/

```js
const Gun = require('gun')

// Must be added after Gun but before instantiating Gun
let ht = require('metaheap')

// Instantiate Gun
let gun = new Gun({
  // public
  fleetgrid: {
    library: ht,
  }
})
/* -- or -- */
let gun = new Gun({
  // private
  fleetgrid: {
    library: ht,
    token: '...' // use ht.checkpoint() to get this
  }
})
```