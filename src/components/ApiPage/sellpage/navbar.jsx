import React from 'react'
import { Link, Router, useRoutes } from 'react-router-dom'
const Navbar = () => {
  


  return< div className=''>
<div className="navbar mx-auto rounded-xl bg-slate-900 w-3/4 flex h-16 justify-between p-4">
  <div className="navbar ">
   
    <a className="btn btn-ghost md:text-3xl title12 text-white">BibilioWorld!</a>
    <a className="btn btn-ghost md:text-xl m-3 font-semibold text-red-400">/ Sell</a>

  </div>

  <div className="flex justify-between h-10 gap-4 ">
  <Link to={'/'}  className='md:w-1/6 '><button className="btno md:h-10 rounded-lg  glass md:w-20 bg-slate-400 text-slate-800  hover:bg-green-500 text-[17px] "> Buy</button></Link>
 <Link className=''><button className=" bg-slate-400 rounded-lg md:w-20 text-slate-800 text-[17px] md:h-10  hover:bg-red-500" >Sign out</button></Link>

  </div>
</div>
  </div>
}

export default Navbar
