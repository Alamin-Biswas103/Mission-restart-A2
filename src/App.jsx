
import { Suspense, useMemo, useState } from 'react'
import './App.css'
import Spinner from './components/Spinner'
import Ticket from './components/Ticket'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import Footer from './components/Footer'

function App() {
  const [leftResolvedList, setLeftResolvedList] = useState([])
  const [resolvedList, setResolvedList] = useState([])
  const [resolved, setResolved] = useState(0)
  const [progressCount, setProgressCount] = useState(0)
  const [ticket, setTicket] = useState([])

  const ticketData = useMemo(() => {
    return fetch('/ticketData.json').then(res => res.json());
  }, []);

  
  const handleClickToRemove = (ID) =>{
    setLeftResolvedList(prev=>prev.filter(item=>item.id !==ID))
   
  }
   console.log(leftResolvedList)

   
  const handleCompleteBtn = (progressTicket) => {
    setTicket(prev => prev.filter(item => item.id !== progressTicket.id))
    setResolved(resolved + 1)
    setProgressCount(progressCount - 1)
    toast.success(`Issue is completed`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    setResolvedList(prev =>[...prev, progressTicket])
    setLeftResolvedList(prev => [...prev, progressTicket])
  }
  function handleCard(card) {
    const exists = ticket.some(item => item.id === card.id)

    if (exists) {
      toast.error(`This ticket Already is in progress`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    else {
      setProgressCount(prev => prev + 1)
      setTicket(prev => [...prev, card])

      toast.success(`In Progress id:${card.id}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  }

  // console.log(ticket)

  return (
    <div className='max-w-400 mx-auto'>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
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
            <h1 className='text-5xl font-bold text-white'>{progressCount}</h1>
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
            <h1 className='text-5xl font-bold text-white'>{resolved}</h1>
          </div>
        </section >





        {/* Ticket Show Section */}
        <section className='mt-10 grid grid-cols-4'>
          {/* Customer Tickets */}
          <div className='col-span-3'>
            <h2 className='font-bold text-gray-600 text-lg'>Customer Tickets</h2>

            <Suspense fallback={<Spinner></Spinner>}>
              <Ticket resolvedList={resolvedList} handleCard={handleCard} ticketData={ticketData}></Ticket>
            </Suspense>

          </div>

          {/* Task Status */}
          <div className='ml-5 bg-white p-2  '>
            <div className='mb-5'>
              <h2 className='font-bold  text-gray-600 text-lg'>Task Status</h2>
              {ticket.length > 0
                ? ticket.map((item) => {
                  // console.log(item)
                  return (
                    <div className='bg-gray-100 mt-3 border-2 border-gray-300 p-4 rounded-md' key={item.id}>
                      <h3 className='font-bold text-md mb-3'>{item.title}</h3>
                      <button onClick={() => handleCompleteBtn(item)} className='btn btn-success text-white font-semibold bg-green-500 w-full'>Complete</button>
                    </div>
                  )
                })
                : <p className='text-gray-400'>Select a ticket to add to Task Status</p>}

            </div>
            <div>
              <h2 className='font-bold text-gray-600 text-lg'>Resolved Task</h2>
              {
                leftResolvedList.length>0
                ?leftResolvedList.map(ticketInfo=>{
                  return(
                    <div key={ticketInfo.id} className='bg-green-100 mt-3 p-2 rounded-lg border border-gray-300'>
                      <h3 className='font-bold text-md mb-3'>{ticketInfo.title}</h3>
                      <div className='flex justify-between'>
                        <p className=' flex items-center gap-2 p-3 text-green-500 font-semibold rounded-md '><FontAwesomeIcon className=' h-10 w-10' icon={faCheckCircle} />Completed</p>
                        <button onClick={()=>handleClickToRemove(ticketInfo.id)} className='text-xs'>Click to Remove</button>
                      </div>
                    </div>
                  )
                })
                :<p className='text-gray-400'>No resolved tasks yet.</p>
              }
              
            </div>
          </div>

        </section>


      </div >

      <Footer></Footer>


    </div>
  )
}

export default App
