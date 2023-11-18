import Graph from './Graph'

function App() {
  return (
    <>
      <Graph
        from={0}
        to={40}
      />
      <Graph
        from={20}
        to={70}
      />
      <Graph
        from={-20}
        to={20}
      />
    </>
  )
}

export default App