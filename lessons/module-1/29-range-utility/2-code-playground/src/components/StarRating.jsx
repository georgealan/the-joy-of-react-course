function StarRating({ rating }) {
  return (
    <div className="star-wrapper">
      {range(rating).map((num) => (
        <img
          key={num}
          alt=""
          className="gold-star"
          src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
        />
      ))}
    </div>
  )
}

const range = (start, end, step = 1) => {
  let output = []

  if (typeof end === 'undefined') {
    end = start
    start = 0
  }

  for (let i = start; i < end; i += step) {
    output.push(i)
  }

  return output
}

export default StarRating;