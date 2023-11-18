import Friend from "./Friend"

function App() {
  return (
    <ul className="friend-list">
    <Friend name="Andrew" isOnline={false} />
    <Friend name="Beatrice" isOnline={true} />
    <Friend name="Chen" isOnline={true} />
    </ul>
  )
}

export default App
