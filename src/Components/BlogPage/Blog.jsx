import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import BlogPage from './BlogPage'

function Blog() {
  return (
    <>
    <div className='px-4 py-32 bg-black mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-4'>Our Blog Page</h1>
            <p className='text-lg text-gray-200 lg:w-2/4 mx-auto mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolor, ratione in ipsa eligendi provident harum reiciendis odit quia, vero quaerat iste adipisci hic facilis ipsam temporibus voluptatum sunt odio sint ducimus, laboriosam culpa minima. Soluta explicabo porro harum. Explicabo.</p>
            <div className=''>
                <Link to="/" className='transition-all duration-300 font-medium hover:text-orange-500 inline-flex items-center'>Learn More <FaArrowRight className='ml-2 mt-1'/></Link>
            </div>
        </div>
    </div>
    <div>
      <BlogPage/>
    </div>
    </>
    
  )
}

export default Blog
