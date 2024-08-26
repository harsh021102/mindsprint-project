import { Link } from "react-router-dom"
import mindsprint from "../assets/mindsprint-logo.svg"

const ChoiceRegister = () => {
  return (
    <>
        <nav className="w-full h-16 flex justify-between lg:justify-between" style={{border: '1px solid gray'}}>
            <div className="w-3/12 lg:w-2/12 ml-10 flex justify-center ">
                <img src={mindsprint} alt="mindsprint logo" className="bg-cover bg-no-repeat bg-center  rounded-md"/>
            </div>
            <div className="links flex justify-center items-center gap-4 mr-4 text-md">
                <button className="p-2 hidden lg:flex"><a href="#">Degrees</a></button>
                <button className="p-2 hidden lg:flex"><a href="#">Find Careers</a></button>
                <button className="py-2 px-4 text-blue-600 border-2 border-blue-600 rounded-md"><Link to="/login">Login</Link></button>
            </div>
        </nav>
        <section className="h-screen flex flex-col md:flex-row">
            <div className="md:w-1/2 h-full flex justify-center items-center flex-col gap-5 bg-blue-100 py-16 md:py-2">
                <h1 className="text-4xl font-oswald font-bold text-blue-700">For admins</h1>
                <p className="text-center font-light text-xl  w-8/12">We are the market–leading technical interview platform to identify and hire developers with the right skills.</p>
                <button className="w-8/12 md:w-4/12 mt-10 md:m-0 text-2xl md:text-lg bg-blue-700 py-4 px-8 md:py-2 md:px-6 rounded-md text-white font-medium">Sign up</button>
            </div>
            <div className="md:w-1/2 h-full flex justify-center items-center flex-col gap-5 py-16">
                <h1 className="text-4xl font-oswald font-bold ">For users</h1>
                <p className="text-center font-light text-xl w-8/12">We are the market–leading technical interview platform to identify and hire developers with the right skills.</p>
                <button className="w-8/12 md:w-4/12 mt-10 md:m-0 text-2xl md:text-lg py-4 px-8 md:py-2 md:px-6 rounded-md font-medium" style={{border: '1px solid black'}}>Sign up</button>
            </div>
        </section>
    </>
  )
}

export default ChoiceRegister