import { HorizontalCard } from "../components/HorizontalCard"
import { bannerimage } from "../assets/links"
import { categories } from "../assets/links"
import Testimonial from "../components/Testimonial"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Homepage = () => {
  
  return (
    <>
    <section className="my-12 md:my-0 md:h-screen  flex justify-center items-center md:gap-0">
        <div className="text-section  h-full w-5/6 md:flex-1 flex flex-col gap-5 justify-center items-center md:items-start md:ml-10">
            <h1 className="text-6xl md:text-7xl mx-9 md:m-0 font-oswald">Learn without limits</h1>
            <h4 className="text-xl md:text-xl mx-7 md:m-0 font-oswald font-extralight text-gray-500">Start, switch, or advance your career with more than 7,000 courses, Professional Certificates, and degrees from world-class universities and companies.</h4>
            <button className="w-10/12 md:w-3/12 mt-10 md:m-0 text-normal md:text-normal bg-blue-700 py-4 px-8 md:py-4 md:px-2 rounded-md text-white">Join for Free</button>
        </div>
        <div className="hidden image-section md:flex-1 md:flex justify-center items-center h-10/12">
            <img src={bannerimage} alt="banner" className="bg-cover bg-no-repeat bg-center md:h-1/2 lg:h-full"/>
        </div>
    </section>
    <section className="py-12 my-12 mx-2 md:mx-4 md:my-0 flex flex-col px-3 lg:px-24">
      <h1 className="text-4xl mt-6 mb-14">Explore Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
        {
            categories.map((item,index)=>(
                <HorizontalCard key={index} name={item.name} number={item.number} image={item.image}/>
            ))
        }
      </div>
    </section>
    <section className="py-24 my-12 md:my-0 px-3 lg:px-24 bg-slate-200">
      <Testimonial/>
    </section>
    <section className="px-3 lg:px-24  pt-14">
      <Footer/>
    </section>
    </>
  )
}

export default Homepage