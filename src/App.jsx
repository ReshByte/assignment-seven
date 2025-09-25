
import { Suspense, useState } from 'react';
import './App.css'
import ShowTickets from './ShowTickets';
import TaskStatus from './TaskStatus';
import ResolveShow from './ResolveShow';
  import { toast, ToastContainer} from 'react-toastify';





const promiseData = fetch("/data.json").then(res=>res.json());

function App() {

  
 const [tickets, setTickets] = useState([]); 
  const [resolvedCount, setResolvedCount] = useState(0);
  const [completedIds, setCompletedIds] = useState([]); 

  
  const addTicket = (show) => {
    if (!tickets.some(t => t.id === show.id) && !completedIds.includes(show.id)) {
      setTickets([...tickets, show]);
      toast('Tickets Added')
    }
  };
  

  
  const removeItem = (r) => {
    
    setTickets(tickets.filter(pro => pro.id !== r.id));
    setResolvedCount(prev => prev + 1);
    
    setCompletedIds([...completedIds, r.id]); 
    toast('Remove ticket')
    console.log(completedIds);
  };
  
  


  return (
    <>
     <div className="navbar shadow-sm !bg-white">
 <div className='max-sm:flex-col  md:w-11/12 mx-auto flex items-center justify-between '>
   <div className="">
    {/* <div className="dropdown">
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
    </div> */}
    <a className="btn btn-ghost text-xl text-black font-medium">CS — Ticket System</a>
  </div>
 
  <div className="max-sm:flex flex-col text-center gap-5">
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
   <div className='bg-design h-[250px]   rounded-xl flex justify-center items-center ' >
   {/* <img className='border-1 border-amber-600 text-left' src={logImg} alt="" /> */}
    <div className='text-center mx-auto'>
      <p className='text-[24px] text-white'>In-Progress</p>
    <h1 className='text-3xl font-semibold text-white'>{tickets.length}</h1>
    </div>
   
   </div>
   <div className=' h-[250px] bg-linear-to-r from-[#54CF68] to-[#00827A] rounded-xl flex justify-center items-center' >
    <div className='text-center'>
      <p className='text-[24px] text-white'>Resolve</p>
    <h1 className='text-3xl font-semibold text-white'>{resolvedCount}</h1>
    </div>
   </div>
 
</div>


<div className='max-sm:grid-cols-1  md: w-11/12 mx-auto mt-[80px] grid grid-cols-12 gap-5 mb-[80px]'>
  <section className='col-span-9'>
  <p className='text-[24px] font-semibold text-[#34485A] mb-5'>Customer Tickets</p>
  <div className='max-sm:grid-cols-1  md:grid grid-cols-2 gap-5'>
   <Suspense fallback="Loading...">
    <ShowTickets promiseData={promiseData} 
        addTicket={addTicket}
        completedIds={completedIds}></ShowTickets>
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
 <ResolveShow completedIds={completedIds}></ResolveShow>
  </div>
  </section>
</div>


<div>
  <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <a href="">HIii</a>
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
</div>




<ToastContainer></ToastContainer>
    </>
  )
}

export default App
