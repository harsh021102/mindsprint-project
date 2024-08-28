import React from 'react'
import mindsprint from "../assets/mindsprint-logo.svg"
import DropdownBtn from "../components/DropdownBtn"
import Footer from '../components/Footer'
const CourseDetails = () => {
    return (
      <>
        {/* Details */} 
        <section className='md:h-screen flex justify-center bg-slate-500'>
          <div className="grid grid-cols-8 grid-rows-7 pt-16">
              <div className='col-span-8 md:col-span-5 row-span-4 bg-green-500 flex flex-col mx-16 justify-between'>
                <div className='flex flex-col gap-7 bg-purple-300'>
                  <h1 className='text-4xl'>Architecting Solutions on AWS</h1>
                  <p className='text-2xl font-extralight'>This course is part of multiple programs.</p>
                </div>
                <button className="w-full md:w-5/12 md:m-0 mt-14 md:mt-0 text-normal md:text-normal bg-blue-700 py-4 px-8 md:py-4 md:px-2 rounded-md text-white ">Go to Course</button>
              </div>
              <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/e1/58b36d811b4978a586b8f7c4ad94a2/Project-management-professional-certificate-SP-Logo.png?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=216&fit=crop&q=50" alt="" className='hidden md:flex col-span-2 bg-slate-600 bg-cover bg-no-repeat rounded-md shadow-lg'/>
          </div>
        </section>
        <section className='flex justify-center bg-red-300 pb-28'>
          <div className="flex flex-col w-10/12 gap-8 flex-wrap">
            <h1 className='bg-purple-500 w-full text-start text-2xl font-oswald font-medium'>About</h1>
            <p className='text-sm font-extralight pr-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptatibus earum tempora doloribus! Nostrum, inventore porro a accusantium soluta consequuntur nihil voluptas, placeat vel quia doloremque dolorem suscipit eaque consequatur culpa expedita? Voluptas architecto dicta, ab at fugit error, ut porro, mollitia officiis odit tempora?</p>
          </div>
        </section>
      </>
    )
}

export default CourseDetails