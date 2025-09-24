
import { Suspense, useState } from 'react';
import './App.css'
import ShowTickets from './ShowTickets';
import TaskStatus from './TaskStatus';
import ResolveTasks from './ResolveTasks';

const promiseData = fetch("/data.json").then(res=>res.json());

function App() {
  
  const[tickets,setTickets] = useState([]);
  
  const removeItem =(r)=>{
   
   const filteredData = tickets.filter(pro => pro.id!==r.id);
    setTickets(filteredData);
  
  }
  


  return (
    <>
     <div className="navbar shadow-sm !bg-white">
 <div className='w-11/12 mx-auto flex items-center justify-between '>
   <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-black font-medium">CS — Ticket System</a>
  </div>
 
  <div className=" ">
    <a href="" className='text-black ml-[32px]'>Home</a>
    <a href="" className='text-black ml-[32px]'>FAQ</a>
    <a href="" className='text-black ml-[32px]'>Changelog</a>
    <a href="" className='text-black ml-[32px]'>Blog</a>
    <a href="" className='text-black ml-[32px]'>Download</a>
    <a href="" className='text-black ml-[32px]'>Contact</a>
    <a className="btn !text-white border-0 font-semibold ml-[32px] bg-linear-to-r from-[#632EE3] to-[#9F62F2]">+ New Ticket</a>
  </div>
 </div>
</div>

<div className='w-11/12 mx-auto mt-[80px] grid grid-cols-2 gap-10 '>
   <div className=' h-[250px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-xl flex justify-center items-center ' >
    <div className='text-center'>
      <p className='text-[24px] text-white'>In-Progress</p>
    <h1 className='text-3xl font-semibold text-white'>{tickets.length}</h1>
    </div>
   </div>
   <div className=' h-[250px] bg-linear-to-r from-[#54CF68] to-[#00827A] rounded-xl flex justify-center items-center' >
    <div className='text-center'>
      <p className='text-[24px] text-white'>Resolve</p>
    <h1 className='text-3xl font-semibold text-white'>0</h1>
    </div>
   </div>
 
</div>


<div className=' w-11/12 mx-auto mt-[80px] grid grid-cols-12 gap-5 mb-[80px]'>
  <section className='col-span-9'>
  <p className='text-[24px] font-semibold text-[#34485A] mb-5'>Customer Tickets</p>
  <div className='grid grid-cols-2 gap-5'>
   <Suspense fallback="Loading...">
    <ShowTickets tickets={tickets} setTickets={setTickets} promiseData={promiseData}></ShowTickets>
   </Suspense>
  </div>
  </section>




  <section className='col-span-3'>
  <p className='text-[24px] font-semibold text-[#34485A] mb-2'>Task Status</p>
  <div>
    <TaskStatus tickets={tickets} setTickets={setTickets} removeItem={removeItem} ></TaskStatus>
  </div>

  <p className='text-[24px] font-semibold text-[#34485A] mb-10'>Resolve Task</p>
  <div>
    <ResolveTasks ></ResolveTasks>
  </div>
  </section>
</div>

    </>
  )
}

export default App
