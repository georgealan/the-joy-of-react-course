# Keys

## Key rules
Let's look at some of the rules that govern how keys should be used.

### Top-level element

In order to satisfy this requirement, the key needs to be applied to the very top-level element within the ```.map()``` call.

For example, this is incorrect:

```js
function NavigationLinks({ links }) {
  return (
    <ul>
      {links.map(item => (
        <li>
          <a
            key={item.id}
            href={item.href}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
```
From React's perspective, it has a group of <li> React elements, and it doesn't see any unique identifiers on them. It doesn't "dig in" and look for keys on children elements.

Here's how to fix it:
```js
function NavigationLinks({ links }) {
  return (
    <ul>
      {links.map(item => (
        <li key={item.id}>
          <a href={item.href}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
```

When using fragments, it's sometimes required to switch to the long-form React.Fragment, so that we can apply the key:

```js
// 🚫 Missing key:
function Thing({ data }) {
  return (
    data.map(item => (
      <>
        <p>{item.content}</p>
        <button>Cancel</button>
      </>
    ))
  );
}

// ✅ Fixed!
function Thing({ data }) {
  return (
    data.map(item => (
      <React.Fragment key={item.id}>
        <p>{item.content}</p>
        <button>Cancel</button>
      </React.Fragment>
    ))
  );
}
```

### Not global
Many developers believe that keys has to be globally unique, across the entire application, but this is a misconception. Keys only have to be unique within their array.

For example, this is totally valid:

```js
function App() {
  return (
    <ul>
      {data.map(contact => (
        <ContactCard
          key={contact.id}
          name={contact.name}
          job={contact.job}
          email={contact.email}
        />
      ))}
      {data.map(contact => (
        <ContactCard
          key={contact.id}
          name={contact.name}
          job={contact.job}
          email={contact.email}
        />
      ))}
    </ul>
  );
}
```