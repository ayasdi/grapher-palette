Grapher.palette
===============

Palette module for [Grapher](https://github.com/ayasdi/grapher).

Files
-----

  * [palette.js](https://raw.githubusercontent.com/ayasdi/grapher-palette/master/palette.js)
  * [palette-min.js](https://raw.githubusercontent.com/ayasdi/grapher-palette/master/palette-min.js)

Usage
-----

See the example in the [examples folder](https://github.com/ayasdi/grapher-palette/tree/master/examples).

Installing
----------

Import palette.js after the main grapher script.

    <script src="grapher.js"></script>
    <script src="palette.js"></script>

You can build Grapher with grapher-palette using [Duo](http://duojs.org/) and
providing Grapher as the argument:

    var Grapher = require('ayasdi/grapher');
    require('ayasdi/grapher-palette')(Grapher);
