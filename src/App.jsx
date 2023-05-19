import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className='bg-slate-200 font-link'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
