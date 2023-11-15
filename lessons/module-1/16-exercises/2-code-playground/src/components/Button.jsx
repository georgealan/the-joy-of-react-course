import React from "react";
import './button.css'

function Button({ description, classStyle }) {
  return (
    <button className={classStyle}>
      {description}
    </button>
  )
}
export default Button