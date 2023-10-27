import { Link, NavLink } from "react-router-dom"
import logo from '../../../assets/logo.svg'
import { useContext } from "react"
import { AuthContext } from "../AuthProbider/AuthProbider"


const Navbar = () => {

  const {user,logOut}=useContext(AuthContext)

  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }
  const link = <>
    <li className="mx-1"><NavLink to="/">Home</NavLink></li>
    <li className="mx-1"><NavLink to="/about">About</NavLink></li>
    <li className="mx-1"><NavLink to="/service">Service</NavLink></li>
    {
      user?.email?<>
      <li className="mx-1"><NavLink to="/bookings" >My Bokings</NavLink></li>
      <li className="mx-1"><NavLink ><button onClick={handleLogOut}>Log Out</button></NavLink></li>
      </>:
      <li className="mx-1"><NavLink to="/login">Login</NavLink></li>
    }


  </>
  return (
    <div className="navbar btn-outline btn-secondary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {link}
          </ul>
        </div>
        <Link to="/" className="btn sm-btn  btn-ghost normal-case text-xl">
          <img className="h-12 w-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>
      <div className="navbar-end">
       <Link><button className="btn btn-outline btn-warning">Appointment</button></Link>
      </div>
    </div>

  )
}

export default Navbar
