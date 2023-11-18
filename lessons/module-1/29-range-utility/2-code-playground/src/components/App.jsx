import StarRating from './StarRating'

function App() {
  return (
    <>
      <section>
        <h2>Winter's Orbit</h2>
        <p>
          Rating: 5 / 5
        </p>
        <StarRating rating={5} />
      </section>
      <section>
        <h2>Dial D for Deadman</h2>
        <p>
          Rating: 4 / 5
        </p>
        <StarRating rating={4} />
      </section>
      <section>
        <h2>Words And Things</h2>
        <p>
          Rating: 0 / 5
        </p>
        <StarRating rating={0} />
      </section>
      <section>
        <h2>The Galaxy, And The Ground Within</h2>
        <p>
          Rating: 5 / 5
        </p>
        <StarRating rating={5} />
      </section>
    </>
  )
}

export default App