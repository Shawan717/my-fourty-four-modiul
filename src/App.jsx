
import './App.css'
import LineChart from './components/LineChart/LineChart'
import Navber from './components/Navber/Navber'
import PriceOptions from './components/Navber/PriceOptions/PriceOptions'


function App() {
 

  return (
    <>

    <Navber></Navber>
 
      <h1 className='text-4xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>



      <LineChart></LineChart>


    </>
  )
}

export default App
