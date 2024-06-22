import React from 'react'
import EBooksSB from './eBooksSB'
import FavoritesSB from './FavoritesSB'
import ReviewSB from './ReviewSB'
import PurchasedSB from './purshasedSB'
import ToReadSb from './toReadSb'
import styles from  './sidebar.module.css'
import { FaBarsProgress } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom'
import { MdLibraryBooks ,MdFavoriteBorder} from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import { FaBookReader } from "react-icons/fa";
import { Button } from 'bootstrap'
const Sidebar = () => {

  const MenuArr=[
{ path:"/ebook",
  icon:<MdLibraryBooks/>,
name: "eBooks"},
{ path:"/info",
  icon:  <FaBookReader /> ,
name: "To Read"
},

{ path:"/fav",
  icon:<MdFavoriteBorder /> ,
name:"Favorites" },

{ path:"/Rev",
  icon:<MdRateReview /> ,
name:"Reviews"

},

{ path:"/",
  icon:<BiPurchaseTag />,
name: "orders"

}


  ]


 
  return (
    <div className={styles.SBContainer}>
<div className={styles.sidebar}>
<div className="topsection">
<h1 className="logo">Logo</h1>
<div className="bars"> <FaBarsProgress /></div>

</div>
<div className={styles.Mainsec}>

{MenuArr.map((item, index)=><button  className={styles.bars}>
<NavLink to={item.path} key={index} activeclassName="active" >
<div className="icons">{item.icon}</div>
<div className="names">{item.name}</div>
  </NavLink>
   </button>


)}
</div>


</div>



    </div>
  )
}

export default Sidebar
