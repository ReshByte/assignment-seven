import React from 'react';

const RemoveShowTickets = ({ticket,removeItem}) => {


const handleCompleteBtn =()=>{
   removeItem(ticket);
 
   
}

    return (
         <div className=' mb-3 bg-white p-4 rounded-sm shadow-sm'>
                    <h1 className='text-[#001931] font-medium text-[18px] mb-2'>{ticket.title}</h1>
                    <button onClick={handleCompleteBtn} className=' font-semibold text-white bg-[#02A53B] w-full rounded-sm py-1'>Complete</button>
                </div>
    );
};

export default RemoveShowTickets;