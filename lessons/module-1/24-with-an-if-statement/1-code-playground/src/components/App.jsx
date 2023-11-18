import Friend from "./Friend";

function App() {
  return (
    <ul className="friend-list">
      <Friend name="George" isOnline={false} />
      <Friend name="Alan" isOnline={true} />
      <Friend name="Carlos" isOnline={true} />
      <Friend name="Vera" isOnline={false} />
    </ul>
  )
}

export default App