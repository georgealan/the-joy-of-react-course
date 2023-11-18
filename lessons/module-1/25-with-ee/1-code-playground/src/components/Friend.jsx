function Friend({ name, isOnline }) {
  return (
    <li className="friend">
      {isOnline && <div className="green-dot" />}
      {name}
    </li>
  )
}

export default Friend

/* 
Here we are using the && control flow operator, It works like if/else, except 
it's an expression instead of a statement.
*/