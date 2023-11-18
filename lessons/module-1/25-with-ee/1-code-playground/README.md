# Conditional Rendering

## With &&

The downside with using an ```if``` statement is that we need to pull the logic up, away from the rest of the markup. While this is perfectly valid, it can make it harder to understand how a component is structured, especially in larger and more-complex components. We'd have to hop all over the place to understand what gets returned!

Fortunately, there's a way for us to embed if logic right in our JSX: using the ```&&``` operator.

Here's how we'd do it:

```js
function Friend({ name, isOnline }) {
 return (
 <li className="friend">
 {isOnline && <div className="green-dot" />}
 {name}
 </li>
 );
}

function App() {
 return (
 <ul className="friend-list">
 <Friend name="Andrew" isOnline={false} />
 <Friend name="Beatrice" isOnline={true} />
 <Friend name="Chen" isOnline={true} />
 </ul>
 );
}

export default App;
```

In JavaScript, && is a control flow operator. It works quite a bit like if/else, except it's an expression instead of a statement.