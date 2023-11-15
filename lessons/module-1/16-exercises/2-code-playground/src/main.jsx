import React from 'react'
import ReactDOM from 'react-dom/client'
import Buttom from './components/Button'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Buttom description='Cancel' classStyle='buttom-cancel'/>
    <Buttom description='Confirm' classStyle='buttom-confirm'/>
  </React.StrictMode>,
)
