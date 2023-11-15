import './fancyButton.css'

function FancyButton({ children }) {
  return (
    <button className="fancy-button">
      { children }
    </button>
  )
}

export default FancyButton