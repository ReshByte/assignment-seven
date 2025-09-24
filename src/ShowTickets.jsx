import React, { use } from 'react';
import dateImg from './assets/ri_calendar-line.png';



const ShowTickets = ({ promiseData, addTicket, completedIds }) => {
  const shows = use(promiseData);

  // Filter out only completed tickets
  const availableShows = shows.filter(show => 
    !completedIds.includes(show.id)
  );

    return (
     availableShows.map(show => 
           <div onClick={()=>addTicket(show)} className='p-5 border-0 cursor-pointer bg-white shadow-xl rounded-xl'>
         <div className='flex justify-between items-center'>
            <h2 className='text-[18px] text-[#001931] font-medium'>{show.title}</h2>
            <p className='font-medium'>{show.status}</p>
         </div>
         <p className='text-[#627382] mt-3'>{show.description}</p>
         <div className='flex justify-between items-center mt-3'>
            <div className='flex gap-3'>
                 <p className='font-medium'>#<span className='font-medium text-[#627382]'>{show.id}</span></p>
                 <p className={`font-medium`}>{show.priority}</p>
            </div>
            <div className='flex gap-4'>
               <p>{show.customer}</p>
               <div className='flex items-center gap-2'>
                <img src={dateImg} alt="" />
                <p>{show.createdAt}</p>
               </div>
               
            </div>
         </div>
        </div>
     )
    );
};

export default ShowTickets;