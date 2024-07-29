import React, { useEffect, useRef, useState } from 'react'
import { BiPurchaseTag } from 'react-icons/bi'
import { FaBookReader } from 'react-icons/fa'
import { MdFavoriteBorder, MdLibraryBooks, MdRateReview } from 'react-icons/md'
import { Link } from 'react-router-dom'
import CartPreview from './cart/cartPreview'
const Sidebar = () => {



  return <div className={`fixed  `}  >
    <div class="d-flex flex-column   hello" >
    <a href="/" class="d-block p-3  text-lg font-md mb-5 link-body-emphasis text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
    <div className='w-4 font-medium ml-4 text-white'>Home </div>
    </a>
    <ul class="flex flex-col gap-3">
      <li class="nav-item">
        <Link to="/ebook" className=" text-black bg-green-500 font-semibold hover:bg-green-400  flex gap-3 h-14 pt-4 rounded-md" aria-current="page" >
     <span  className='pt-1 pl-2 text-2xl'> <MdLibraryBooks /> </span>  eBooks
        </Link>
   </li>
   

      
  
   <li class="nav-item">
        <Link to="/ebook" className=" text-black bg-red-500 font-semibold hover:bg-red-400  flex gap-3 h-14 pt-4 rounded-md" aria-current="page" >
     <span  className='pt-1 pl-2 text-2xl'> <MdFavoriteBorder />  </span>    Favorites
        </Link>
   </li>
   <li class="nav-item">
        <Link to="/ebook" className=" text-black bg-purple-500 font-semibold hover:bg-purple-400  flex gap-3 h-14 pt-4 rounded-md" aria-current="page" >
     <span  className='pt-1 pl-2 text-2xl'>    <MdRateReview />   </span>        Reviews
        </Link>
   </li>
   <li class="nav-item">
        <Link to="/ebook" className=" text-black bg-yellow-500 font-semibold hover:bg-yellow-400  flex gap-3 h-14 pt-4 rounded-md" aria-current="page" >
     <span  className='pt-1 pl-2 text-2xl'>  <BiPurchaseTag />    </span>  orders
        </Link>
   </li>
   <li class="nav-item">
        <Link to="/ebook" className=" text-black bg-slate-600 font-semibold hover:bg-slate-500  flex gap-3 h-14 pt-4 rounded-md" aria-current="page" >
     <span  className='pt-1 pl-2 text-2xl'>  <FaBookReader />
</span>       To Read
        </Link>
   </li>
    </ul>
   
  </div>
  </div>
}

export default Sidebar
