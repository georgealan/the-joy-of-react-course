# The Whitespace Gotcha

Let's talk about one of the most common "gotchas" with JSX.

In the code of this exercise notice how there's no space between the bold text and the number? Instead of returns: 123, it's showing as: returns:123.

To understand why this happens, let's consider how this JSX compiles to JavaScript:

```js
const element = React.createElement(
  'div',
  {},
  React.createElement(
    'strong',
    {},
    'Days until Santa returns:'
  ),
  daysUntilSantaReturns
);
```
Our ```<div>``` has two children, the ```<strong>``` tag and the daysUntilSantaReturns variable.

Remember, JSX doesn't compile to HTML, it compiles to JavaScript. And when that JavaScript is executed, it's only going to create and append two HTML nodes:

A ```<strong>``` tag with some text.
A text node, for the number 123.
So how do we fix it? The most common solution is to add a single whitespace character, in curly braces:
```js
<div>
  <strong>Days until Santa returns:</strong>
  {' '}
  {daysUntilSantaReturns}
</div>
```
Here's how this compiles:

``` js
const element = React.createElement(
  'div',
  {},
  React.createElement(
    'strong',
    {},
    'Days until Santa returns:'
  ),
  ' ',
  daysUntilSantaReturns
);
```
I'll admit, when I first learned this trick, I thought it was really hacky. I wished that the React team would fix this bug, and make it handle whitespace the same way that HTML does.

I've come to realize, though, that this behavior is actually more of a feature than a bug.

