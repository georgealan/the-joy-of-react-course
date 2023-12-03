# Specifying Arguments

Here's a conundrum? for you: what if we want to specify arguments to this function?

For example, let's suppose that our function is called ```setTheme```, and we'll use it to change the user's color theme from Light Mode to Dark Mode.

In order for this to work, we need to supply the name of the theme we're switching to, like this:

```js
// Switch to light mode:
setTheme('light');

// Switch to dark mode:
setTheme('dark');
```

How do we do this, though?

If we pass setTheme as a reference to ```onClick```, we can't supply arguments:

```html
// 🚫 Invalid: calls the function without 'dark'
<button onClick={setTheme}>
  Toggle theme
</button>
```

In order to specify the argument, we need to wrap it in parentheses, but then it gets called right away:

```html
// 🚫 Invalid: calls the function right away
<button onClick={setTheme('dark')}>
  Toggle theme
</button>
```

We can solve this problem with a wrapper function:

```html
// ✅ Valid:
<button onClick={() => setTheme('dark')}>
  Toggle theme
</button>
```

We're creating a brand-new anonymous arrow function, ```() => setTheme('dark')```, and passing it to React. When the user clicks the button, the function will run, and the code inside the function is executed ```(setTheme('dark'))```.