import CartTable from "./CartTable"

const items = [
  {
    id: 'hk123',
    imgSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-coffee-machine.jpg',
    imgAlt: 'A pink drip coffee machine with the “Hello Kitty” logo',
    title: '“Hello Kitty” Coffee Machine',
    price: '89.99',
    inStock: true,
  },
  {
    id: 'co999',
    imgSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-can-opener.jpg',
    imgAlt: 'A black can opener',
    title: 'Safety Can Opener',
    price: '19.95',
    inStock: false,
  },
  {
    id: 'cnl333',
    imgSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-night-light.png',
    imgAlt: 'A kid-friendly nightlight sculpted to look like a dog astronaut',
    title: 'Astro-pup Night Light',
    price: '130.00',
    inStock: true,
  },
  {
    id: 'scb777',
    imgSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-backpack.jpg',
    imgAlt: 'A pink backpack with a unicorn illustration',
    title: 'Magical Unicorn Backpack',
    price: '74.98',
    inStock: true,
  },
]

function App() {
  const itemsInStock = items.filter(item => item.inStock)
  const itemsOutOfStock = items.filter(item => !item.inStock)

  return (
    <>
      <h2>Shopping cart</h2>
      <CartTable items={itemsInStock} />
      <div className="actions">
        <button>Continue checkout</button>
      </div>

      <h2>Sold out</h2>
      <CartTable items={itemsOutOfStock} />
    </>
  );
}

export default App
