# Study Notebook <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [React supporting screen readers](#react-supporting-screen-readers)
  - [VisuallyHidden vs. aria-label](#visuallyhidden-vs-aria-label)
- [Class utilities](#class-utilities)
- [Working With State](#working-with-state)
  - [Event Handlers](#event-handlers)
  - [Staying within the abstraction](#staying-within-the-abstraction)
  - [Specifying Arguments](#specifying-arguments)

## React supporting screen readers

We've used JavaScript operators to conditionally render a green circle next to online users' names, but there's a problem: what happens when someone visits our application using a screen reader?

Let's consider the following DOM structure:

```html
<ul class="friends-list">
  <li class="friend">
    Andrew
  </li>
  <li class="friend">
    <div class="green-dot"></div>
    Beatrice
  </li>
  <li class="friend">
    <div class="green-dot"></div>
    Chen
  </li>
</ul>
```

The trouble is that the ```<div class="green-dot">``` is semantically meaningless, and so screen readers will ignore it. If someone can't see the screen, they'll have no idea that this random div is meant to signify that someone is online!

How can we make this information available to folks who use a screen reader? Well, there are a number of valid approaches, but my personal favourite is to use some CSS to visually hide a chunk of text.

Here's what this looks like, using a custom ```VisuallyHidden``` component:

```html
<p>
  This text is shown normally.
  <VisuallyHidden>
    This text isn't on the screen, but is announced by screen readers.
  </VisuallyHidden>
</p>
```

This is the VisuallyHidden component:

```js
// These styles will make sure the component
// is not visible, but will still be announced
// by screen readers.
//
// Adding “display: none” would hide the
// element from ALL users, including those
// using screen-readers.
const hiddenStyles = {
  display: 'inline-block',
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
};

const VisuallyHidden = ({ children }) => {
  return (
    <span style={hiddenStyles}>
      {children}
    </span>
  );
};

export default VisuallyHidden;
```

### VisuallyHidden vs. aria-label

You might be wondering: could we solve this problem using the aria-label attribute instead?

```js
function Friend({ name, isOnline }) {
  return (
    <li className="friend">
      {isOnline && (
        <div
          className="green-dot"
          aria-label="(Online)"
        />
      )}
      {name}
    </li>
  );
}
```

The ```aria-label``` attribute is a way to add additional semantic data to our markup. It doesn't affect the visual presentation at all, but assistive tools like screen readers will read it aloud.

**In this particular case, however, we can't use** aria-label. This is because aria-label only works on interactive elements like buttons.

As a general rule, I prefer to use this VisuallyHidden component over aria-label, because it requires less expertise to use correctly. It also gives us more control over the screen reader experience, since we can place the VisuallyHidden element wherever it makes the most sense.

## Class utilities

The className prop expects a string. This string can include multiple classes, separated by spaces.

We can dynamically create this string using string interpolation 👀, like this:

```js
<button
  className={`
    ${styles.btn}
    ${type === 'primary' ? styles.primary : ''}
    ${user ? styles.loggedIn : styles.notLoggedIn}
`}
>
```

This works, but it can be tricky to make sure the string we're constructing is perfectly valid. In cases like this, it's easier to use a class utility.

For example, here's how we could apply this logic using the clsx package:

```js
import clsx from 'clsx';

<button
  className={clsx(
    styles.btn,
    type === 'primary' && styles.primary,
    user ? styles.loggedIn : styles.notLoggedIn
  )}
>
```

The ```clsx``` function will take each of these arguments and produce a unified string that satisfies the ```className``` prop requirements. It'll automatically remove falsy values like ```false``` or ```null```.

Ultimately, it's not a game-changer, but it can be a handy little utility! It shaves off some of the rough edges of trying to construct the string ourselves.

## Working With State

In the early days of the web, websites were essentially fancy documents. We'd load one HTML file, read the content, and then load another one.

The beautiful, amazing, magical thing about the modern web is that web applications are interactive. The app can respond to user actions in real-time, without needing to fetch a whole new page.

React has a really novel approach towards managing this interactivity. And once you get used to it, it's really hard to imagine managing it any other way.

### Event Handlers

As the user interacts with the page, hundreds of events are fired off in response. The browser is like an invasive private investigator, tracking every little thing you do.

When we're building dynamic web applications, these events become super important. We'll listen for these events, and use them to trigger state changes. When the user clicks the "X" button, we dismiss the prompt. When the user submits the form, we show a loading spinner.

In order to respond to an event, we need to listen for it. JavaScript provides a built-in way to do this, with the ```addEventListener``` method:

```js
const button = document.querySelector('.btn');

function doSomething() {
  // Stuff here
}

button.addEventListener('click', doSomething);
```

In this code, we're listening for a specific event (clicks) targeting a specific element (.btn). We have a function which is meant to handle this event, doSomething. When the user clicks this particular button, our handler function will be invoked, allowing us to do something in response.

The web platform offers another way to do this as well. We can embed our handler right in the HTML:

```html
<button onclick="doSomething()">
  Click me!
</button>
```

React piggybacks on this pattern, allowing us to pass an event handler right in the JSX:

```js
function App() {
  function doSomething() {
    // Stuff here
  }

  return (
    <button onClick={doSomething}>
      Click me!
    </button>
  );
}
```

As with addEventListener, this code will perform the same duty: when the user clicks the button, the doSomething function will be called.

This is the recommended way to handle events in React. While we do sometimes have to use addEventListener for window-level events (covered in Module 3), we should try and use the “on X” props like onClick and onChange whenever possible.

There are a few good reasons why:

1. **Automatic cleanup.** Whenever we add an event listener, we're also supposed to remove it when we're done, with removeEventListener. If we forget to do this, we'll introduce a memory leak?. React automatically removes listeners for us when we use “on X” handler functions.
2. **Improved performance.** By giving React control over the event listeners, it can optimize things for us, like batching multiple event listeners together to reduce memory consumption.
3. **No DOM interaction.** React likes for us to stay within its abstraction. We generally try and avoid interacting with the DOM directly. In order to use addEventListener, we have to look up the element with querySelector. This is something we should avoid. The “happy path” in React involves letting React do the DOM manipulation for us.

### Staying within the abstraction

I want to expand on that last bullet point a bit, because it gets at something really important.

One of the core ideas behind React is that it does the DOM manipulation for you. When using React, **you shouldn't really be using querySelector at all.** We want to stay within React's abstraction, rather than trying to compete with it to manage the DOM.

When I first started learning React in 2015, my tool of choice was jQuery. If you're not familiar, jQuery is a tool that makes it easy to select and modify the DOM. It's a DOM manipulation tool.

I remember being frustrated that my “tried and true” conventions were suddenly considered bad practices in React. Sometimes, it seems much simpler to manage the DOM with jQuery, rather than trying to figure out how to do it with React.

Honestly, though, I set myself back with this mindset. I tried to bend React into a shape that was familiar to me, but React just isn't that flexible. Once I finally learned how to do things properly, everything became so much simpler and easier.

When learning a new technology, it's natural to try and squeeze it into a familiar shape. But I promise you, you'll have a much better time learning to swim with the current, rather than trying to fight against it.

### Specifying Arguments
