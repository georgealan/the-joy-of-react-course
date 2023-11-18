# Common gotcha: the number zero

React will actually render the number 0. And when we think about it, this makes sense. There are lots of situations where we'd want to render this number:

```js
function Banner({ ticketsRemaining }) {
  return (
    <h2>
      Number of JIRA tickets left: {ticketsRemaining}.
    </h2>
  );
}
```
If ticketsRemaining is equal to 0, we want to show the number 0, not an empty space!

## Solution: Always use boolean values with &&
To avoid having random 0 characters sprinkled around your application, I suggest following a “golden rule”: make sure that the left-hand side of && always evaluates to a boolean value, either true or false.

For example, we can check if the number is greater than zero:

```js
function App() {
  const shoppingList = ['avocado', 'banana', 'cinnamon'];
  const numOfItems = shoppingList.length;

  return (
    <div>
      {numOfItems > 0 && (
        <ShoppingList items={shoppingList} />
      )}
    </div>
  );
}
```

I really like this approach. We're being really specific with what the condition is: if we have 1 or more items in the shopping list, we should render the ```<ShoppingList>``` element. The “greater than” operator ```(>)``` will always produce a boolean value, either true or false.

We can also convert any non-boolean value to a boolean value with ```!!```:

```js
function App() {
  const shoppingList = ['avocado', 'banana', 'cinnamon'];
  const numOfItems = shoppingList.length;

  return (
    <div>
      {!!numOfItems && (
        <ShoppingList items={shoppingList} />
      )}
    </div>
  );
}
```

# With Ternary

The ```&&``` operator allows us to conditionally render something if a condition is met. But what if we want to render something else if the condition isn't met?

For example, suppose we're building an admin dashboard. If the user is logged in, we want to render the charts and tables and everything. If they're not logged in, we want to render a short message asking them to log in.

We could use two ```&&``` operators, like this:

```js
function App({ user }) {
  const isLoggedIn = !!user;

  return (
    <>
      {isLoggedIn && <AdminDashboard />}
      {!isLoggedIn && <p>Please login first</p>}
    </>
  );
}
```

This works, but it's a bit clunky. Fortunately, we can use the ternary operator to help us out.

Here's what it looks like:

```js
function App({ user }) {
  const isLoggedIn = !!user;

  return (
    <>
      {isLoggedIn
        ? <AdminDashboard />
        : <p>Please login first</p>}
    </>
  );
}
```

The ternary operator isn't new; it's been a part of the JavaScript language since Internet Explorer 3 launched in 1996! But for a long time, it was a pretty obscure language feature.

It's particularly useful in a React context because it allows us to embed if/else logic within our JSX. Because the ternary operator is an operator instead of a statement, it can be used inside JavaScript expressions.

A ternary operator consists of three parts:

```js
condition ? firstExpression : secondExpression
```

If condition is truthy, the first expression will be the one that gets evaluated. If it's falsy, the second expression will be evaluated instead.

# Short circuiting

Quick question: what do you think will happen when the following code runs?
``` js
console.log('condition')
  ? console.log('first condition')
  : console.log('second condition');
```
Which log(s) will fire? And in what order? This will:
``` js
condition
second condition
```

First, the condition needs to be evaluated, so that we know which "branch" to follow. All ```console.log``` expressions evaluate to ```undefined```, which is a falsy value, and so the "second condition" branch is followed.

The interesting thing here is that the code in that first branch is never executed. We'll never see "first condition" in our console.

The && operator works in much the same way:
``` js
false && console.log('I will never run!');
// Nothing is logged
```
When the evaluator sees that the left-hand value is falsy, it "short-circuits" and ignores everything that comes afterwards.

In other words, it's safe to do something like this:

```js
const networkRequest = isLoggedIn && fetch('/user/login-details');
```
The ```fetch()``` call will only execute if isLoggedIn is ```true```. So we don't have to worry about "wasted" network requests.
