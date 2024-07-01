import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbStars } from "react-icons/tb";
import { GiShoppingCart } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa";
import { GetUserData } from "../../store/cartStore";

const CardBuy = ({ BookData }) => {
  const { AddBookData } = useContext(GetUserData);
  return (
    BookData.map(items => {
      let thumbnail = items.volumeInfo.imageLinks?.smallThumbnail;
      let done = "";

    
        const bookID = items.id;
        const bookName = items.volumeInfo.title;
        const bookPrice = items.saleInfo.retailPrice?.amount || 0; // Default to 0 if not available
        const bookAuthor = items.volumeInfo.authors?.join(", ") || "Unknown"; // Handle multiple authors

       ;
  

      return (
        <div key={items.id} className="card12">
          <button type="button" className="btn rating">
            <TbStars style={{ color: "gold" }} />
            <span className="badge" style={{ backgroundColor: "gold", color: "black" }}>
              {items.volumeInfo.averageRating}
            </span>
          </button>

          <img src={thumbnail} className="card-img" alt="Book Thumbnail" />
          <div className="card-body">
            <div className="crTitle">{items.volumeInfo.title}</div>
            <p className="textcard">
              {items.volumeInfo.authors}
            </p>
            <p className="Pricecard">
              <FaRupeeSign /> : {items.saleInfo.retailPrice?.amount}
            </p>

            <Link to="/pricePage" className="btn btn-light buy">
              Buy Now
            </Link>

            <button className="btn btn-warning" onClick={()=>{
             AddBookData(bookID, bookName, bookPrice, bookAuthor)
       
            }}>
              <GiShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      );
    })
  );
};

export default CardBuy;
