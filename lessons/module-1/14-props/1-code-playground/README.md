# Props

## Nullish Coalescing operator

Another option for setting fallback values is with the Nullish Coalescing operator:

```js
function FriendlyGreeting({ name }) {
  return (
    <p>
      Hey {name ?? 'there'}!
    </p>
  );
}
```
If you haven't seen this curious fella, it's very similar to ||, but it only guards against nullish values (null and undefined). It means we don't have to worry about “surprising” falsy values like 0.

