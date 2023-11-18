
// import './App.css'
import Listing from './components/Listing'
import etsy from "../data/etsy.js"

function App() {

  return (
    <>
      <Listing items = {etsy} />
    </>
  )
}

export default App
