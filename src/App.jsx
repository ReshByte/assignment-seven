
import { Suspense, useState } from 'react';
import './App.css'
import ShowTickets from './ShowTickets';
import TaskStatus from './TaskStatus';
import ResolveShow from './ResolveShow';
import { toast, ToastContainer} from 'react-toastify';
import img1 from './assets/vector1.png';






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
   
    <a className="btn-ghost text-xl text-black font-medium">CS — Ticket System</a>
  </div>
 
  <div className="max-sm:flex flex-col text-center gap-5 pr-7 mt-5">
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
   <div className='bg-design h-[250px] bg-linear-to-r from-[#632EE3] to-[#9F62F2]  rounded-xl flex justify-center items-center ' >
   
    <div className='text-center mx-auto'>
      <p className='text-[24px] text-white'>In-Progress</p>
    <h1 className='text-3xl font-semibold text-white'>{tickets.length}</h1>
    <div>
      <div className='max-sm:hidden md:absolute top-36 left-16'>
      <img src={img1} alt="" />
    </div>
    <div className='max-sm:hidden md:absolute transform scale-x-[-1] left-107 top-36'>
      <img src={img1} alt="" />
    </div>
    </div>
    </div>
    
   
   </div>
   <div className='  md:h-[250px] bg-linear-to-r from-[#54CF68] to-[#00827A] rounded-xl flex justify-center items-center' >
    <div className='text-center'>
      <p className='text-[24px] text-white'>Resolve</p>
    <h1 className='text-3xl font-semibold text-white'>{resolvedCount}</h1>
     <div>
      <div className='max-sm:hidden md:absolute top-36 left-194'>
      <img src={img1} alt="" />
    </div>
    <div className='max-sm:hidden md:absolute transform scale-x-[-1] left-286 top-36'>
      <img src={img1} alt="" />
    </div>
    </div>  
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
  <footer className="footer  sm:footer-horizontal bg-neutral text-neutral-content p-10 border-b-1 border-gray-00">
  <nav>
    <h2 className='text-white text-[20px]'>CS — Ticket System</h2>
    <p className='text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and <br /> scrambled it to make a type specimen book.</p>
  </nav>
  <nav>
    <h2 className="text-white text-[20px]">Company</h2>
    <a className="link link-hover text-[#A1A1AA]">About Us</a>
    <a className="link link-hover text-[#A1A1AA]">Our Mission</a>
    <a className="link link-hover text-[#A1A1AA]">Contact Saled</a>
  </nav>
  <nav>
    <h2 className="text-white text-[20px]">Services</h2>
    <a className="link link-hover text-[#A1A1AA]">Products & Services</a>
    <a className="link link-hover text-[#A1A1AA]">Customer Stories</a>
    <a className="link link-hover text-[#A1A1AA]">Download Apps</a>
  </nav>
  <nav>
    <h2 className="text-white text-[20px]">Information</h2>
    <a className="link link-hover text-[#A1A1AA]">Privacy Policy</a>
    <a className="link link-hover text-[#A1A1AA]">Terms & Conditions</a>
    <a className="link link-hover text-[#A1A1AA]">Join Us</a>
  </nav>

  
</footer>
<p className='bg-black text-white py-5 text-center'>© 2025 CS — Ticket System. All rights reserved.</p>

</div>




<ToastContainer></ToastContainer>
    </>
  )
}

export default App
