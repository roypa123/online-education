import { Link } from "react-router-dom"
import logo from '../../assets/logo.svg';

function Header() {
  

  return (
    <div className="h-[100px] flex px-10  justify-between items-center ">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="" className="w-10 h-8" />
          <div className="text-[20px] font-bold">Book Store</div>
        </div>
        <div className="flex space-x-4 items-center">
          <nav className="flex space-x-6">
            <Link to="" className="text-[16px] font-semibold">Home</Link>
            <Link to="" className="text-[16px] font-semibold">About us</Link>
            <Link to="" className="text-[16px] font-semibold">Courses</Link>
            <Link to="" className="text-[16px] font-semibold">Our Service</Link>
            <Link to="" className="text-[16px] font-semibold">Contact us</Link>
          </nav>
          <div>
             <button className="bg-[#4D2C5E] font-bold text-white px-8 py-2 rounded-full ml-4">Sign in</button>
          </div>
        </div>
        
    </div>
  )
}

export default Header