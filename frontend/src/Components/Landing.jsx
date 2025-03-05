import React from 'react'
import { BriefcaseIcon, SearchIcon, BuildingIcon, MapPinIcon, MenuIcon, BellIcon, UserCircleIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon, UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../Style/Landing.css'



export default function Landing() {

  return (
    <>
      <div className="min-h-screen bg-gray-50">

        <div className="grid lg:grid-cols-12 max-[700px]:grid-cols-2 max-[500px]:hidden  items-center px-20 py-3">
          <div className="flex justify-center items-center md:col-span-2 gap-2">
            <i className="fa-solid fa-location-dot text-blue-600"></i>
            <p className="">Bangalore</p>
          </div>

          <div className="flex justify-center items-center md:col-span-3 gap-2">
            <i className="fa-regular fa-clock text-blue-600"></i>
            <p className="">Mon - Sat 8.00 - 18.00.</p>

          </div>

          <div className="flex justify-evenly items-center md:col-end-12 max-[700px]:col-span-2  gap-4">
            <i className="fa-brands fa-facebook-f text-blue-600 bg-white rounded-4xl p-3 transform duration-500 hover:bg-blue-500 hover:text-white"></i>
            <i className="fa-brands fa-twitter text-blue-600 bg-white rounded-4xl p-3 transform duration-500 hover:bg-blue-500 hover:text-white"></i>
            <i className="fa-brands fa-instagram text-blue-600 bg-white rounded-4xl p-3 transform duration-500 hover:bg-blue-500 hover:text-white"></i>
            <i className="fa-brands fa-linkedin-in text-blue-600 bg-white rounded-4xl p-3 transform duration-500 hover:bg-blue-500 hover:text-white"></i>
          </div>
        </div>


        {/* Navigation */}
        <nav className="bg-white shadow-sm ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <BriefcaseIcon className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">teacherjob</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/Jobs" className="text-gray-700 hover:text-blue-600">Find Jobs</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Unversitys</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Post a Job</a>
                <div className="flex items-center space-x-4">
                  <BellIcon className="h-6 w-6 text-gray-500" />
                  <Link to="/Login" className='cursor-pointer'>
                    <button onClick={() => setCurrentPage('login')}>
                      <UserCircleIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <MenuIcon className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative bg-white">
          <div className="grid lg:grid-cols-2 max-[850px]:grid-cols-1 md:mx-20 ">
            <div className="relative flex items-center justify-center max-[850px]:hidden " >
              <img src="/Images/Bluebg.svg" alt="" className='absolute bg-1 w-96' />
              {/* <img src="/Images/bg2.png" alt="" className="relative w-full" /> */}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 justify-self-center">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Find Your Dream Job</span>
                  <span className="block text-blue-600">Today</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Discover thousands of job opportunities with all the information you need.
                </p>

                {/* Search Form */}
                <div className="mt-10">
                  <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center border rounded-lg px-4 py-2">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Job title or keyword"
                          className="ml-2 w-full focus:outline-none"
                        />
                      </div>
                      <div className="flex items-center border rounded-lg px-4 py-2">
                        <BuildingIcon className="h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Unversity"
                          className="ml-2 w-full focus:outline-none"
                        />
                      </div>
                      <div className="flex items-center border rounded-lg px-4 py-2">
                        <MapPinIcon className="h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Location"
                          className="ml-2 w-full focus:outline-none"
                        />
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                      Search Jobs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*    */}
        <section className='landing max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className="grid md:grid-cols-2 max-md:gap-4">
            <div className="">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 ">Suits jobs for you.</h2>
              <p className="border-l-4 border-blue-600 pl-2 font-semibold text-lg text-gray-500 ">There are many variations of passages of Lorem Ipsum Fasts Fastsby humour, by injected humour, or coved ceilings.</p>
              <div className="flex items-center gap-4  mt-6">
                <i className="fa-regular fa-bookmark text-blue-600 text-2xl"></i>
                <p className="text-gray-500 red-hat">Bookmark Jobs</p>
              </div>

              <div className="flex items-center gap-4  mt-6">
                <i className=" fa-regular fa-address-card text-blue-600 text-2xl"></i>
                <p className="text-gray-500 red-hat">Apply with your Resume</p>
              </div>

              <div className="flex items-center gap-4  mt-6">
                <i className="fa-regular fa-envelope text-blue-600 text-2xl"></i>
                <p className="text-gray-500 red-hat">Get notified</p>
              </div>

              <div className="mt-6">
                <button type="button" className='px-10 py-3 bg-blue-600 text-white  text-lg transform duration-500  hover:bg-white hover:text-black hover:border-1 border-blue-600'>Browse Job</button>
              </div>

            </div>

            <div className="shadow-2xl ">
              <img src="/Images/bg3.jpg" alt="Teacherjob" className="rounded-2xl" />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className='landing  w-full'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
            <h2 className="text-6xl font-bold text-gray-900  text-center">Categories</h2>
            <p className="text-center red-hat py-2 text-gray-500">Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
            <div className=" grid md:grid-cols-4 grid-cols-2 gap-6 items-center mt-10">
              <div className="card transform duration-700">
                <a href="#" className='card-img mb-2 '>
                  <div className="">
                    <img className="rounded-t-lg" src="/Images/bg3.jpg" alt="" />
                    <div className="overlay flex justify-center items-center">

                      <i className="fa-solid fa-arrow-right text-white text-4xl"></i>
                    </div>
                  </div>

                </a>

                <div className="p-8 card-item bg-white -mt-6">
                  <a href="#" className=''>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">It Softwawre</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center gap-2">Posted Jobs: <span className='bg-blue-500 rounded-xs px-1 py-[0.5px] text-sm text-white'>100 </span></p>

                </div>
              </div>

              <div className="card transform duration-700">
                <a href="#" className='card-img mb-2 '>
                  <div className="">
                    <img className="rounded-t-lg" src="/Images/bg3.jpg" alt="" />
                    <div className="overlay flex justify-center items-center">

                      <i className="fa-solid fa-arrow-right text-white text-4xl"></i>
                    </div>
                  </div>

                </a>

                <div className="p-8 card-item bg-white -mt-6">
                  <a href="#" className=''>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">It Softwawre</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center gap-2">Posted Jobs: <span className='bg-blue-500 rounded-xs px-1 py-[0.5px] text-sm text-white'>100 </span></p>

                </div>
              </div>

              <div className="card transform duration-700">
                <a href="#" className='card-img mb-2 '>
                  <div className="">
                    <img className="rounded-t-lg" src="/Images/bg3.jpg" alt="" />
                    <div className="overlay flex justify-center items-center">

                      <i className="fa-solid fa-arrow-right text-white text-4xl"></i>
                    </div>
                  </div>

                </a>

                <div className="p-8 card-item bg-white -mt-6">
                  <a href="#" className=''>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">It Softwawre</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center gap-2">Posted Jobs: <span className='bg-blue-500 rounded-xs px-1 py-[0.5px] text-sm text-white'>100 </span></p>

                </div>
              </div>

              <div className="card transform duration-700">
                <a href="#" className='card-img mb-2 '>
                  <div className="">
                    <img className="rounded-t-lg" src="/Images/bg3.jpg" alt="" />
                    <div className="overlay flex justify-center items-center">

                      <i className="fa-solid fa-arrow-right text-white text-4xl"></i>
                    </div>
                  </div>

                </a>

                <div className="p-8 card-item bg-white -mt-6">
                  <a href="#" className=''>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">It Softwawre</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center gap-2">Posted Jobs: <span className='bg-blue-500 rounded-xs px-1 py-[0.5px] text-sm text-white'>100 </span></p>

                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="landing mt-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="head">
              <h2 className="text-6xl font-bold text-gray-900  text-center">Latest Jobs</h2>
              <p className="text-center red-hat py-4 text-gray-500">Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>

            </div>

            <div className="flex justify-center items-center">

              <Link>
                <button type="button" className='border-[1.5px] border-[#f1f1f1]  hover:text-blue-500 focus:bg-blue-600 focus:text-white px-6 py-2'>All</button>
              </Link>
              <Link>
                <button type="button" className='border-[1.5px] border-[#f1f1f1] hover:text-blue-500 focus:bg-blue-600 focus:text-white px-6 py-2'>Collage</button>
              </Link>
              <Link>
                <button type="button" className='border-[1.5px] border-[#f1f1f1] hover:text-blue-500 focus:bg-blue-600 focus:text-white px-6 py-2'>School</button>
              </Link>
              <Link>
                <button type="button" className='border-[1.5px] border-[#f1f1f1] hover:text-blue-500 focus:bg-blue-600 focus:text-white px-6 py-2'>Online</button>
              </Link>

            </div>

            <div className="grid md:grid-cols-2 gap-10 mt-6 gap-y-10">
            <div className="grid grid-cols-3">
                <div className="border-2 border-[#f1f1f1] p-6 flex items-center gap-4 col-span-2">
                  <img src="/Images/Bluebg.svg" alt="" className="w-20 p-4 border-2 border-[#f1f1f1]" />
                  <div className="">
                    <h1 className='font-bold text-2xl'>Post Name</h1>
                    <p className="text-lg">College Name</p>
                  </div>
                </div>
                <div className="border-2 border-l-0 border-[#f1f1f1] flex justify-center items-center">
                  <Link to=""><button type="button" className='px-4 py-1 border-2 border-[#f1f1f1] hover:bg-blue-500 hover:text-white'>Apply</button></Link>
                </div>
                <div className="col-span-3 border-2 border-[#f1f1f1] text-gray-500 border-t-0 flex justify-start lg:gap-8 md:gap-4 md:text-sm py-2 lg:px-6 md:px-2 items-center">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-location-dot text-gray-500"></i>
                    <p className="red-hat">Address</p>
                  </div>


                  <li className=" items-center gap-3 list-disc red-hat">
                    <i className="fa-regular fa-money-bill-1 text-gray-500 pr-2"></i>
                    50000 - 100000
                  </li>


                  <li className="list-disc red-hat  gap-3">
                    <i className="fa-regular fa-clock text-gray-500 pr-2"></i>
                    Full Time
                  </li>
                </div>



              </div>

              <div className="grid grid-cols-3">
                <div className="border-2 border-[#f1f1f1] p-6 flex items-center gap-4 col-span-2">
                  <img src="/Images/Bluebg.svg" alt="" className="w-20 p-4 border-2 border-[#f1f1f1]" />
                  <div className="">
                    <h1 className='font-bold text-2xl'>Post Name</h1>
                    <p className="text-lg">College Name</p>
                  </div>
                </div>
                <div className="border-2 border-l-0 border-[#f1f1f1] flex justify-center items-center">
                  <Link to=""><button type="button" className='px-4 py-1 border-2 border-[#f1f1f1] hover:bg-blue-500 hover:text-white'>Apply</button></Link>
                </div>
                <div className="col-span-3 border-2 border-[#f1f1f1] text-gray-500 border-t-0 flex justify-start lg:gap-8 md:gap-4 md:text-sm py-2 lg:px-6 md:px-2 items-center">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-location-dot text-gray-500"></i>
                    <p className="red-hat">Address</p>
                  </div>


                  <li className=" items-center gap-3 list-disc red-hat">
                    <i className="fa-regular fa-money-bill-1 text-gray-500 pr-2"></i>
                    50000 - 100000
                  </li>


                  <li className="list-disc red-hat  gap-3">
                    <i className="fa-regular fa-clock text-gray-500 pr-2"></i>
                    Full Time
                  </li>
                </div>



              </div>

              <div className="grid grid-cols-3">
                <div className="border-2 border-[#f1f1f1] p-6 flex items-center gap-4 col-span-2">
                  <img src="/Images/Bluebg.svg" alt="" className="w-20 p-4 border-2 border-[#f1f1f1]" />
                  <div className="">
                    <h1 className='font-bold text-2xl'>Post Name</h1>
                    <p className="text-lg">College Name</p>
                  </div>
                </div>
                <div className="border-2 border-l-0 border-[#f1f1f1] flex justify-center items-center">
                  <Link to=""><button type="button" className='px-4 py-1 border-2 border-[#f1f1f1] hover:bg-blue-500 hover:text-white'>Apply</button></Link>
                </div>
                <div className="col-span-3 border-2 border-[#f1f1f1] text-gray-500 border-t-0 flex justify-start lg:gap-8 md:gap-4 md:text-sm py-2 lg:px-6 md:px-2 items-center">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-location-dot text-gray-500"></i>
                    <p className="red-hat">Address</p>
                  </div>


                  <li className=" items-center gap-3 list-disc red-hat">
                    <i className="fa-regular fa-money-bill-1 text-gray-500 pr-2"></i>
                    50000 - 100000
                  </li>


                  <li className="list-disc red-hat  gap-3">
                    <i className="fa-regular fa-clock text-gray-500 pr-2"></i>
                    Full Time
                  </li>
                </div>



              </div>

              <div className="grid grid-cols-3">
                <div className="border-2 border-[#f1f1f1] p-6 flex items-center gap-4 col-span-2">
                  <img src="/Images/Bluebg.svg" alt="" className="w-20 p-4 border-2 border-[#f1f1f1]" />
                  <div className="">
                    <h1 className='font-bold text-2xl'>Post Name</h1>
                    <p className="text-lg">College Name</p>
                  </div>
                </div>
                <div className="border-2 border-l-0 border-[#f1f1f1] flex justify-center items-center">
                  <Link to=""><button type="button" className='px-4 py-1 border-2 border-[#f1f1f1] hover:bg-blue-500 hover:text-white'>Apply</button></Link>
                </div>
                <div className="col-span-3 border-2 border-[#f1f1f1] text-gray-500 border-t-0 flex justify-start lg:gap-8 md:gap-4 md:text-sm py-2 lg:px-6 md:px-2 items-center">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-location-dot text-gray-500"></i>
                    <p className="red-hat">Address</p>
                  </div>


                  <li className=" items-center gap-3 list-disc red-hat">
                    <i className="fa-regular fa-money-bill-1 text-gray-500 pr-2"></i>
                    50000 - 100000
                  </li>


                  <li className="list-disc red-hat  gap-3">
                    <i className="fa-regular fa-clock text-gray-500 pr-2"></i>
                    Full Time
                  </li>
                </div>



              </div>


            </div>


          </div>
        </section>

      
        {/* Featured Jobs Section */}
        <sections className="landing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((job) => (
              <div key={job} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">Senior Frontend Developer</h3>
                    <p className="text-gray-600 mt-1">Google Inc.</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      San Francisco, CA
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">Full-time</span>
                      <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">Remote</span>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=64&h=64&fit=crop&auto=format"
                    alt="Google Logo"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">$120k - $150k</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </sections>

        {/* Job Categories */}
        <section>
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {['Design', 'Development', 'Marketing', 'Business', 'Sales', 'Customer Service', 'Finance', 'HR'].map((category) => (
                <div key={category} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition duration-200">
                  <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                  <p className="text-gray-500 mt-1">1,234 jobs</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>
        
      </div>
    </>
  )
}
