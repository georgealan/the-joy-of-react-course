# Conditional Rendering

## With an If Statement

With the curly brackets, we can add JavaScript expressions within our JSX. Unfortunately, though, we can't add JavaScript statements.

As a result, this sort of thing is illegal:
```js
function Friend({ name, isOnline }) {
  return (
    <li className="friend">
      {if (isOnline) {
        <div className="green-dot" />
      }}

      {name}
    </li>
  );
}
```
Why doesn't this work? Well, let's consider how this would compile down to JavaScript:

```js
function Friend({ name, isOnline }) {
  return React.createElement(
    'li',
    { className: 'friend' },
    if (isOnline) {
      React.createElement('div', { className: 'green-dot' });
    },
    name
  );
}
```
The problem is that we can't put an if statement in the middle of a function call like this — to look at a simpler example, it would be equivalent to trying to do this:

```js
console.log(
  if (isLoggedIn) {
    "Logged in!"
  } else {
    "Not logged in"
  }
)
```
Here's the good news, though: we can still use an if statement! But we have to pull it up so that it's not in the middle of a React.createElement call:

```js
function Friend({ name, isOnline }) {
 let prefix;

 if (isOnline) {
 prefix = <div className="green-dot" />;
 }

 return (
 <li className="friend">
 {prefix}
 {name}
 </li>
 );
}

export default Friend;
```
There's no rule that says that our JSX has to be part of the return statement. We can absolutely assign chunks of JSX to a variable, anywhere within our component definition!

The JSX compiles to this:

```js
function Friend({ name, isOnline }) {
  let prefix;

  if (isOnline) {
    prefix = React.createElement(
      'div',
      { className: 'green-dot' }
    );
  }

  return React.createElement(
    'li',
    { className: 'friend' },
    prefix,
    name
  );
}
```
In the code above, prefix will either be assigned to a React element, or it won't be defined at all. This works because React ignores undefined values.

## Undefined attributes

Consider the following code:

```js
function Greeting() {
  let someClass;

  return (
    <div className={someClass}>
      Hello World
    </div>
  );
}
```
What do you expect the markup to look like? The following HTML will be produced:

```html
<div>
  Hello World
</div>
```
In the code above, a variable named someClass is created, but it isn't given a value. This means that it resolves to undefined.

When React sees that an attribute is being set to undefined, it omits that attribute entirely from the DOM node. Rather than give it an empty value like className="", it acts as though we haven't even tried to set a value.

This is true for some other falsy values as well, like null and false.
