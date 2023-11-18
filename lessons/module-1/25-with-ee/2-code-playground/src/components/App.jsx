import ShoppingList from "./ShoppingList"

function App() {
  const shoppingList = []
  const numOfItems = shoppingList.length

  return (
    <div>
      {numOfItems && (<ShoppingList items={shoppingList}/>)}
    </div>
  )
}

export default App

/*
Here we wind up with 0 being rendered!
Why is this happening? We need to keep two things in mind:

1 - The && operator doesn't return true or false. It returns either the left-hand side or the right-hand side. So, when our list is empty, this expression evaluates to 0.
2 - React will render any number you give it, even zero!
React will ignore most falsy values like false or null, but it won't ignore the number zero.
*/
