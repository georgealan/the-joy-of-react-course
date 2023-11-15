function CartTable({ items }) {
  // TODO: Map through “items”, creating 1 row per item.

  return (
    <table className="shopping-cart">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, imgSrc, imgAlt, title, price }) => (
          <tr key={id} className="cart-row">
            <td>
              <img
                className="product-thumb"
                src={imgSrc}
                alt={imgAlt}
              />
            </td>
            <td>
              {title}
            </td>
            <td>
              ${price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CartTable