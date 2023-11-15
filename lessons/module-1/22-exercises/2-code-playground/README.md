# Exercise: Shopping cart

Let's imagine we're building a shopping cart UI. We receive an array of items being held in the cart from the server.

Sometimes, an item in the user's shopping cart will be out of stock. If the item is out of stock, they can't purchase it. And so it should be displayed separately.

In the folder assets have a image for what we're trying to build.

We've started working on it, but two problems remain:

* We need to show all of the items in the user's shopping cart, not just the first one.
* We need to show two separate tables. One for the in-stock items, one for the sold-out items.

## Acceptance criteria:

* Update the CartTable component (in the second file) to use iteration.
* Make sure that there are no key warnings in the console.
* In App, we should be rendering two CartTable elements:
  * One for the “in stock” elements, in the current spot
  * One for the “out of stock” elements, below the “Sold Out” heading.