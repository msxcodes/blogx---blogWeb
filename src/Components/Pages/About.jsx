import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div className='px-4 py-32 bg-black mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-4'>Our About Page</h1>
            <p className='text-lg text-gray-200 lg:w-2/4 mx-auto mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolor, ratione in ipsa eligendi provident harum reiciendis odit quia, vero quaerat iste adipisci hic facilis ipsam temporibus voluptatum sunt odio sint ducimus, laboriosam culpa minima. Soluta explicabo porro harum. Explicabo.</p>
            <div className=''>
                <Link to="/" className='transition-all duration-300 font-medium hover:text-orange-500 inline-flex items-center'>Learn More <FaArrowRight className='ml-2 mt-1'/></Link>
            </div>
        </div>
    </div>


    

    <div class="mx-auto max-w-7xl ">
    <div class="flex flex-col space-y-8 md:pb-10 md:pt-12 md:mx-0 mx-6 md:mt-0 mt-6">

    <div class="flex flex-col items-center gap-x-4 gap-y-4 md:flex-row">
      <div class="space-y-6">
        <p class="text-sm font-semibold md:text-base">Join our team →</p>
        <p class="text-3xl font-bold md:text-4xl">
          We&#x27;re just getting started
        </p>
        <p class="text-base text-gray-600 md:text-lg">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
        <button
          type="button"
          class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Join Now
        </button>
      </div>
      <div class="md:mt-o mt-10 w-full">
        <img
          src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2340&amp;q=80"
          alt="Getting Started"
          class="rounded-lg"
        />
      </div>
    </div>

    <hr class="mt-6" />

      <div class="max-w-max rounded-full border bg-gray-50 p-1 px-3">
        <p class="text-xs font-semibold leading-normal md:text-sm">
          About the company
        </p>
      </div>
      <p class="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
        Made with love, right here in India
      </p>
      <p class="max-w-4xl text-base text-gray-600 md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        veritatis voluptates neque itaque repudiandae sint, explicabo assumenda
        quam ratione placeat?
      </p>
    </div>
    <div class="w-full space-y-4">
      <img
        class="h-[200px] md:px-0 px-6 w-full rounded-xl object-cover md:h-full "
        src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
        alt=""
      />
    </div>
    <div class="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around md:mx-0 mx-6">
      <div class="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <p class="w-full text-xl font-semibold  text-gray-900">
          Bengaluru office
        </p>
        <p class="w-full text-base text-gray-700">Mon-Sat 9am to 5pm.</p>
        <p class="text-sm font-medium">
          100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN
        </p>
      </div>
      <div class="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <p class="w-full text-xl font-semibold  text-gray-900">Head office</p>
        <p class="w-full text-base text-gray-700">Mon-Sat 9am to 5pm.</p>
        <p class="text-sm font-medium">
          12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN
        </p>
      </div>
      <div class="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-5 w-5"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <p class="w-full text-xl font-semibold  text-gray-900">
          Karnataka office
        </p>
        <p class="w-full text-base text-gray-700">Mon-Sat 9am to 5pm.</p>
        <p class="text-sm font-medium">
          42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka
          560025 IN
        </p>
      </div>
    </div>
    <hr class="mt-20" />
    
   
    
  </div>
  
  <div class="mx-auto max-w-7xl"></div>
    </>
  )
}

export default About
