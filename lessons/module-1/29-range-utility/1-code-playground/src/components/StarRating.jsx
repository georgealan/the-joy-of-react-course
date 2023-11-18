function StarRating({ rating }) {
  /*
    Here's the markup for a single star:
    
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
    
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.

    This is a tricky problem!

    Our default tool in JavaScript to do this sort of thing would be a for loop. 
    As we've learned, though, for is a statement, and we can't use statements within our JSX.
  */
  
  let stars = []

  for(let i = 0; i < rating; i++) {
    stars.push(
      <img
        key={i}
        alt=""
        className="gold-star"
        src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
      />
    )
  }
  /*
    We create an array of image elements with a for loop, and then we render that array inside our JSX. 
    As we saw with .map, React can “unpack” arrays for us, and render each of the elements inside, so long 
    as we provide a unique key for each element.
  */

  return (
    <div className="star-wrapper">
      {stars}
    </div>
  );
}

export default StarRating;