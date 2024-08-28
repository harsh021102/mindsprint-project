import { Link} from "react-router-dom"
import mindsprint from "../assets/mindsprint-logo.svg"

const Navbar = () => {
  // console.log(showbtn);
  
  return (
    <nav className="w-full h-16 flex justify-between lg:justify-between" style={{border: '1px solid gray'}}>
        <div className="w-3/12 lg:w-2/12 ml-10 flex justify-center ">
            <img src={mindsprint} alt="mindsprint logo" className="bg-cover bg-no-repeat bg-center  rounded-md cursor-pointer"/>
        </div>
        <div className="links flex justify-center items-center mr-4 gap-4 md:mr-16 text-md">
            <button className="p-2 text-blue-600 text-sm md:text-normal">
              <Link to="/login" className="no-underline">Login</Link>
            </button>
            <button className="py-2 px-2 text-blue-600 border-2 border-blue-600 rounded-md text-sm md:text-normal"><Link to="/register" className="no-underline">Join for Free</Link></button>
        </div>
    </nav>
  )
}

export default Navbar