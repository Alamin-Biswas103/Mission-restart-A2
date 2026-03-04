
import { Suspense } from 'react'
import './App.css'
import Spinner from './components/Spinner'
import Ticket from './components/Ticket'

function App() {

  const ticketData = fetch('../public/ticketData.json')
    .then(res => res.json())

  return (
    <div className='max-w-400 mx-auto'>
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm px-[5%] flex justify-between">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
              <li><a className="btn btn-primary bg-linear-to-r from-[#632EE3] to-[#9F62F2]">+ New Ticket</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-lg font-bold">CS-Ticket System</a>
        </div>
        <div className='flex items-center'>
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <div className="">
            <a className="btn max-[400px]:hidden btn-primary bg-linear-to-r from-[#632EE3] to-[#9F62F2]">+ New Ticket</a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className='px-[5%] py-10 bg-gray-100'>
        {/* Count Section  */}
        <section className='flex flex-col md:flex-row items-center justify-center gap-10 '>
          <div className='text-center py-16 w-full flex-1 rounded-md bg-linear-to-r from-[#632EE3] to-[#9F62F2]
          relative
          '>
            <div className="absolute
             
             inset-0
              bg-[url('./assets/vector1.png'),url('./assets/vector2.svg')]
              bg-no-repeat
              bg-position-[left_center,right_center]
            ">

            </div>
            <h3 className='text-lg text-white mb-2'>In-Progress</h3>
            <h1 className='text-5xl font-bold text-white'>0</h1>
          </div>


          <div className='text-center w-full py-16 flex-1 rounded-md bg-linear-to-r from-[#54CF68] to-[#00827A] relative'>
            <div className="absolute
             inset-0
              bg-[url('./assets/vector1.png'),url('./assets/vector2.svg')]
              bg-no-repeat
              bg-position-[left_center,right_center]
            ">
            </div>
            <h3 className='text-lg text-white mb-2'>Resolved</h3>
            <h1 className='text-5xl font-bold text-white'>0</h1>
          </div>
        </section >





        {/* Ticket Show Section */}
        <section className='mt-10 grid grid-cols-4'>
          {/* Customer Tickets */}
          <div className='col-span-3'>
            <h2 className='font-bold text-gray-600 text-lg'>Customer Tickets</h2>

            <Suspense fallback={<Spinner></Spinner>}>
              <Ticket ticketData={ticketData}></Ticket>
            </Suspense>

          </div>

          {/* Task Status */}
          <div>
            <h2 className='font-bold text-gray-600 text-lg'>Tast Status</h2>
          </div>
        </section>


      </div >


    </div>
  )
}

export default App
