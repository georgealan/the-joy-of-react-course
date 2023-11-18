function Friend({ name, isOnline }) {
  let prefix

  if(isOnline) {
    prefix = <div className="green-dot" />
  }
  // We can use if statement outside return like above and use the variable in the return statement.

  return (
    <li className="friend">
      {prefix}
      {name}
    </li>
  )
}

export default Friend