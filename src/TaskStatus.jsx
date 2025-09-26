import React from 'react';
import RemoveShowTickets from './RemoveShowTickets';

const TaskStatus = ({tickets,removeItem}) => {
   



    return (
        <div className='border-0 p-3 text-center rounded-xl'>
           {tickets.length>0?(tickets.map(ticket => (
          <RemoveShowTickets 
            key={ticket.id} 
            ticket={ticket} 
            removeItem={removeItem} 
          />
        ))
      )
      :
        (<div className='flex justify-start'><p className=''>No Tickets Added</p></div>)
        
        }
           
        </div>
    );
};

export default TaskStatus;