
import { Outlet } from 'react-router-dom'
import Footer from '../payges/Shayerd/Footer/Footer'
import Navbar from '../payges/Shayerd/Navbar/Navbar'

const Mein = () => {
  return (
    <div>
        <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Mein
