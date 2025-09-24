import React from 'react';
import RemoveShowTickets from './RemoveShowTickets';

const TaskStatus = ({tickets,removeItem}) => {
   



    return (
        <div className='border-0 p-3 text-center rounded-xl'>
            {
                tickets.map(ticket => <RemoveShowTickets ticket={ticket} removeItem={removeItem}></RemoveShowTickets>
               
            )
            } 
           
        </div>
    );
};

export default TaskStatus;