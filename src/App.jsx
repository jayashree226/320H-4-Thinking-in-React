import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable'
import {data} from "./data/data"

import './App.css'

function App() {
  

  return (
    <>
      <h1>Thinking in React</h1>
      <FilterableProductTable products={data}/>
     
    </>
  )
}

export default App
