
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { use } from 'react';

const Ticket = ({ticketData}) => {

    const alldata = use(ticketData);
    // console.log(alldata)
    return (
        <div className='grid grid-cols-2 gap-5'>
            
            {
                alldata.map(data=>{
                    console.log(data)
                    return(
                        <div key={data.id} className='border mt-2 p-2 rounded-lg'>
                            <div className='flex justify-between'>
                                <h4>{data.title}</h4>
                                <button>{data.status}</button>
                            </div>
                            <p>{data.description} </p>
                            <div>
                                <div>
                                    <h4>#{data.id} </h4>
                                    <h3>{data.priority} </h3>
                                </div>
                                <div>
                                    <p>{data.customer} </p>
                                    <p>
                                        <FontAwesomeIcon icon={faCalendar}/>
                                        {data.createdAt}
                                    </p>

                                </div>
                            </div>
                        </div>
                    )})
            }
        </div>
    );
};

export default Ticket;