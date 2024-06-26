import React from "react";
import { Link } from "react-router-dom";
import { TbStars } from "react-icons/tb"
import { GiShoppingCart } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa";
const CardBuy = ({ BookData }) => {





  return( BookData.map(items=>{
   let thumbnail= items.volumeInfo.imageLinks.smallThumbnail 
let done=""

    return(<>
   
    <div className=" card12" style={{ width: "18rem" }}>
    <button type="button" class="btn rating">
    <TbStars  style={{"color":"gold" }}/>
 <span class="badge " style={{"background-color":"gold", "color" : "black"}}> {items.volumeInfo.averageRating}</span>

</button>
    
        <img src={thumbnail} className="card-img" alt="..." />
        <div className="card-body">
          <div className=" crTitle">{items.volumeInfo.title}</div>
          <p className="textcard">
           {items.volumeInfo.authors}
          </p>
          <p className="Pricecard"  >
          <FaRupeeSign  /> : {items.saleInfo.retailPrice?.amount}
          </p>
       
          <Link to="/pricePage" className="btn btn-light buy">
            Buy Now
          </Link>

          <Link to="/cart" className="btn btn-warning ">
          <GiShoppingCart /> Add to Cart
          </Link>
        </div>
      </div>
  </>)
})
)
};

export default CardBuy;
