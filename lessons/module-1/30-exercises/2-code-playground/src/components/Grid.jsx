import { range } from '../utils'

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(numRows).map((row) => (
        <div key={row} className="row">
          {range(numCols).map((column) => (
            <div key={column} className="cell"/>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid