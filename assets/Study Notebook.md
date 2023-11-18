# Study Notebook <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [React supporting screen readers](#react-supporting-screen-readers)
  - [VisuallyHidden vs. aria-label](#visuallyhidden-vs-aria-label)
- [Class utilities](#class-utilities)

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
