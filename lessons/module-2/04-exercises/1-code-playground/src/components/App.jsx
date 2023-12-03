import React from 'react'

import VisuallyHidden from './VisuallyHidden'

function ClickBallGame() {
  function handleClick() {
    window.alert('You win!')
  }

  return (
    <div className="wrapper">
      <button
        className="ball"
        onClick={handleClick}
      >
        <VisuallyHidden>
          Ball
        </VisuallyHidden>
      </button>
    </div>
  )
}

export default ClickBallGame