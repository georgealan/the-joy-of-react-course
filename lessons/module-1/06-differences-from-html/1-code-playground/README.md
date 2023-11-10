# Differences from HTML

JSX looks like HTML, but there are some fundamental differences. In this lesson, we'll dig into those differences.

## Reserved words

JavaScript has a couple dozen "reserved words". Reserved words are keywords with built-in functionality. Because they do something already, we can't use them in our JSX.

For example:

```js
const while = 10;
```
If we run this code, we'll get a syntax error, because while is a reserved word. It's used for “while loops” like this:

```js
let count = 5;

while (count > 0) {
  console.log('Countdown:', count);
  count -= 1;
}
```
Because JSX gets transformed into JS, we can't use any reserved words in our JSX. And this is a problem, because HTML attributes sometimes overlap with JavaScript reserved words.

Consider this JSX:
```js
const element = (
  <div>
    <label for="name">
      Name:
    </label>
    <input
      id="name"
      class="fun-input"
    />
  </div>
);
```
If we compile this into JavaScript, we'll discover that we're using two reserved words:
* for
* class

To work around this conflict, React uses slight variations on these two terms:
```js
const element = (
  <div>
    <label htmlFor="name">
      Name:
    </label>
    <input
      id="name"
      className="fun-input"
    />
  </div>
);
```

Specifically:

* for is changed to htmlFor
* class is changed to className

## Self-closing tags

HTML is a pretty loosey-goosey language. For example, this is perfectly valid HTML:
```html
<div>
  <p>This paragraph is opened… but never closed.
  <p>We're omitting the closing tags!
</div>
```
Paragraph tags can't be nested. The browser is smart enough to figure out that the first paragraph must end before the second paragraph starts, and it will automatically insert the ```</p>``` for you, similar to how the JavaScript engine can insert missing semi-colons for you.

JSX is a bit of a wet blanket. We absolutely need to close every tag we open:

```js
const element = (
  <div>
    <p>These paragraphs are valid.</p>
    <p>They include the closing tags.</p>
  </div>
);
```
In HTML5, certain elements don't have closing tags. For example, the img tag can't have children, and so it doesn't need to be closed:
```html
<img
  alt="A friendly kitten"
  src="/images/kitten.jpg"
>
```
Our JSX compiler won't like this one bit. We need to explicitly close this tag. We can do this with a "self-closing" tag:
```js
const element = (
  <img
    alt="A friendly kitten"
    src="/images/kitten.jpg"
  />
);
```
(This self-closing syntax, ```<img />```, comes from earlier versions of HTML. It isn't necessary in modern HTML, but it's still valid, and many developers continue to use it out of habit.)

## Case-sensitive tags
HTML is a case-insensitive language. In fact, it was common many years ago for HTML to be written in all-uppercase:
```html
<MAIN>
  <HEADER>
    <H1>Hello World!</H1>
  </HEADER>
  <P>
    This HTML is so loud!
  </P>
</MAIN>
```
JSX, by contrast, is case-sensitive. Our tags must all be lowercase:
```js
const element = (
  <main>
    <header>
      <h1>Hello World!</h1>
    </header>
    <p>
      This HTML is so loud!
    </p>
  </main>
);
```
This restriction might seem arbitrary, but there's a very good reason for it: the JSX compiler uses the tag's case to tell whether it's a "primitive" (part of the DOM) or a custom component. We'll learn more about this when we learn about components.

## Case-sensitive attributes
In JSX, our attributes need to be “camelCase”?.

For example, this is valid HTML:
```html
<video
  src="/videos/cat-skateboarding.mp4"
  autoplay="true"
>
```
In JSX, we need to capitalize the “p” in “autoplay”, since “auto” and “play” are distinct words:
```js
const element = (
  <video
    src="/videos/cat-skateboarding.mp4"
    autoPlay={true}
    //  ^ Capital “P”
  />
);
```
(I've also switched to use an expression slot, {true}, instead of keeping it as a string. This is slightly more idiomatic in React, although both options will work.)

It can be hard to tell whether an attribute contains multiple words or not, especially if English isn't your first language! Fortunately, you'll get a helpful warning in the developer tools if you make a mistake.

Other properties that need to be "camelCased" include:

* onclick → onClick
* tabindex → tabIndex
* stroke-dasharray → strokeDasharray (this one is specific for SVGs)

## Data and ARIA attributes keep their dashes(warning)
There are two exceptions to the "camelCasing" of attributes: data attributes and ARIA attributes.

For example, this is valid JSX:
```js
const element = (
  <button
    data-test-id="close-dialog-button"
    aria-label="Close dialog"
  >
    <img alt="" src="/icons/x.svg" />
  </button>
);
```
Data attributes aren't used that often in React, but they can be helpful for labelling elements for automated testing. ARIA attributes are used by assistive technologies like screen readers to improve the accessibility of our applications.

## Inline styles
In HTML, the style attribute allows us to apply some styles inline, to a specified element:
```html
<h1 style="font-size: 2rem;">
  Hello World!
</h1>
```
In JSX, style instead takes an object:
```js
const element = (
  <h1 style={{ fontSize: '2rem' }}>
    Hello World!
  </h1>
);
```
All CSS properties are written in “camelCase”. Every dash is replaced by capitalizing the subsequent word:

* background-position becomes backgroundPosition
* border-bottom-color becomes borderBottomColor

For vendor prefixes like ```-webkit-font-smoothing```, we capitalize the first letter as well: ```WebkitFontSmoothing```.

Also, React will automatically apply the ```px``` suffix for certain CSS properties. For example:

```js
<div
  style={{
    width: 200, // Equivalent to `width: 200px`
    paddingTop: 8, // Equivalent to `padding-top: 8px`
  }}
>
```

Watch out for properties that take a unitless value by default, like ```flex``` or ```lineHeight```.

For example, this code will produce lines that are twenty times taller than default, not lines that are 20px tall:
```js
<p
  style={{
    lineHeight: 20, // Equivalent to `line-height: 20`
  }}
>
```
While it's a common convention in React to use unitless values where possible, you can absolutely use full units if you prefer!
```js
<p
  style={{
    width: '200px',
    paddingTop: '8px',
  }}
>
```
