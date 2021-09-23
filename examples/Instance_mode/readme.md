# Instance mode example

This is a copy of the color layering example, but demonstrating the
use of P5's [instance mode](https://p5js.org/reference/#/p5/p5)

In order for p5.riso to be usable in this mode, you must set the
`window._p5Instance` global variable to point to your local p5 instance.

```javascript
const sketch = function (p) {
  p.setup = function() {
    window._p5Instance = p;
    // ...
  }
  p.draw = function() {
    // ...
  }
}

// Create the custom instance.
const myp5 = new p5(sketch);

```
