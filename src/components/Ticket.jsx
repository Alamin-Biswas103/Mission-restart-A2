
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { use } from 'react';

const Ticket = ({ ticketData, handleCard }) => {

    const alldata = use(ticketData);
    // console.log(alldata)
    return (
        <div className='grid grid-cols-2 gap-5'>

            {
                alldata.map(data => {
                    // console.log(data)
                    return (
                        <div onClick={()=>{handleCard(data)}} key={data.id} className=' mt-2 p-3 rounded-lg bg-white'>
                            <div className='flex justify-between'>
                                <h4 className='font-bold'>{data.title}</h4>
                                <div className={`py-1 px-3 font-semibold flex items-center gap-1 text-gray-600 rounded-full ${data.status === "Open" ? "bg-green-400" : "bg-yellow-200"}`}>
                                    <div
                                        className={`h-4 w-4 rounded-full 
                                            ${data.status === "Open" 
                                                ? "bg-green-800" 
                                                : "bg-yellow-600"
                                            }`}
                                    ></div>
                                    <button >

                                        {data.status}
                                    </button>
                                </div>
                            </div>
                            <p className='text-gray-500 py-3'>{data.description} </p>
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-2 items-center'>
                                    <h4 className='text-gray-400'>#{data.id} </h4>
                                    <h3 className={` font-semibold text-sm 
                                        ${data.priority === "HIGH PRIORITY"?"text-red-600"
                                            :data.priority === "MEDIUM PRIORITY"?"text-yellow-400 text-sm"
                                            :"text-green-500"
                                        }
                                        
                                        `}>{data.priority} </h3>
                                </div>
                                <div  className='flex gap-2 items-center text-gray-400'>
                                    <p>{data.customer} </p>
                                    <p>
                                        <FontAwesomeIcon icon={faCalendar} />
                                        {data.createdAt}
                                    </p>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Ticket;