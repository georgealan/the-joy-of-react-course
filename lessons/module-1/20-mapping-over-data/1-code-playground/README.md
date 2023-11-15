# Mapping Over Data

## Parentheses vs. squigglies?

There's a pretty common syntactical gotcha here. Consider the following code:

```js
return (
  <ul>
    {data.map((contact) => {
      <ContactCard
        name={contact.name}
        job={contact.job}
        email={contact.email}
      />
    })}
  </ul>
);
```
Instead of using parentheses, ```(``` and ```)```, we're using squiggly brackets, ```{``` and ```}```. It seems like a pretty innocuous change, but it causes big problems here: none of the contact cards will show up!

Here's what's going on: in order for the ```<ContactCard>``` elements to be rendered, they need to be returned from the ```.map()``` callback.

We can fix this by adding the return keyword:

```js
return (
  <ul>
    {data.map((contact) => {
      return <ContactCard
        name={contact.name}
        job={contact.job}
        email={contact.email}
      />
    })}
  </ul>
);
```
This is the “long-form” way of writing arrow functions. The squiggly brackets give us the space to add 1 or more JavaScript statements. We need to use the return keyword, to control what gets returned.

There's also a “short-form” syntax for arrow functions. In this alternative format, we omit the squiggly brackets. We can only pass a single expression, and it gets returned automatically. The parentheses are added for formatting purposes.
