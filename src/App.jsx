
import './App.css'

function App() {


  return (
    <>
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


    </>
  )
}

export default App
