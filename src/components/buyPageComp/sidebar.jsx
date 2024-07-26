import React from 'react'
import { BiPurchaseTag } from 'react-icons/bi'
import { FaBookReader } from 'react-icons/fa'
import { MdFavoriteBorder, MdLibraryBooks, MdRateReview } from 'react-icons/md'
import { Link } from 'react-router-dom'
import CartPreview from './cart/cartPreview'
const Sidebar = () => {
  return <>
    <div class="d-flex flex-column   hello" >
    <a href="/" class="d-block p-3  mb-5 link-body-emphasis text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
    <div className='w-4'>hello</div>
    </a>
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <Link to="/ebook" className=" text-black bg-success nav-link mt-5  py-3 border-bottom rounded-md" aria-current="page" >
        <MdLibraryBooks /> eBooks
        </Link>
   </li>
   
    
      

      <li>
        <Link to="fav" className="text-black bg-danger nav-link mt-2 py-2 border-bottom rounded-md" data-bs-toggle="tooltip" >
        <MdFavoriteBorder />Favorites
        </Link>
      </li>
      <li>
        <Link  to="Rev" class=" text-black bg-white nav-link mt-2 py-3 border-bottom rounded-md" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Orders" data-bs-original-title="Orders">
        <MdRateReview />          Reviews
        </Link>
      </li>
      <li>
        <Link  to="orders" class=" nav-link  text-black bg-warning  py-3 border-bottom mt-2 rounded-md " data-bs-toggle="tooltip"  data-bs-placement="right" aria-label="Products" data-bs-original-title="Products">
        <BiPurchaseTag />   orders
        </Link>
      </li>
      <li>
        <Link  to="info" class=" text-black bg-info nav-link py-3  mt-2 border-bottom rounded-md " data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Customers" data-bs-original-title="Customers">
         
          <FaBookReader />
           To Read
        </Link>
      </li>
    </ul>
   
  </div>
  </>
}

export default Sidebar
