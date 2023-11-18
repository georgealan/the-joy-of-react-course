import React from 'react'

import { range } from '../utils'

function Graph({ from, to }) {
  return (
    <div className="graph">
      {range(from, to + 1, 10).map((num) => (
        <div key={num} className="peg">{num}</div>
      ))}
    </div>
  )
}

export default Graph
