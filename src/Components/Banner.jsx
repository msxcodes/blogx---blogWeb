import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-4'><span className=''>Welcome</span> To Blog<span className='text-orange-500'>X</span> </h1>
            <p className='text-lg text-gray-200 lg:w-2/4 mx-auto mb-6'>Start your blog today and join our community of writers and readers who are passionate about sharing their stories and ideas.We offer everything you need to get started, from helpful tips and tutorials. </p>
            <div className=''>
                <Link to="/" className='transition-all duration-300 font-medium hover:text-orange-500 inline-flex items-center'>Learn More <FaArrowRight className='ml-2 mt-1'/></Link>
            </div> 
        </div>
        
    </div>
  )
}

export default Banner
