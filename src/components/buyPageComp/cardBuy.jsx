import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbStars } from "react-icons/tb";
import { GiShoppingCart } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa";
import { GetUserData } from "../../store/cartStore";

const CardBuy = ({ BookData }) => {
  const { AddBookData } = useContext(GetUserData);
  return BookData.map((items) => {
    let thumbnail = items.volumeInfo.imageLinks?.smallThumbnail;
    let done = "";

    const bookID = items.id;
    const bookName = items.volumeInfo.title;
    const bookPrice = items.saleInfo.retailPrice?.amount || 0; // Default to 0 if not available
    const bookAuthor = items.volumeInfo.authors?.join(", ") || "Unknown"; // Handle multiple authors

    return (
      <div key={items.id} className="card12 ">
        <button type="button" className="float-right bg-green-300 mr-4">
          <TbStars     className="text-yellow-600  mr-5 "  />
          <p
        className="text-black text-sm font-bold mr-4"
          
          >
            {items.volumeInfo.averageRating}
          </p>
        </button>

        <img src={thumbnail} className="mt-9 mx-28 shadow-md shadow-gray-500" alt="Book Thumbnail" />
        <div className="card-body">
          <div className="text-lg font-bold text-orange-300  h-14 overflow-y-hidden">{items.volumeInfo.title}</div>
          <p className="text-md font-bold text-sky-300 ">{items.volumeInfo.authors}</p>
          <p className="flex  justify-center text-white ">
        <FaRupeeSign />    <p className="-mt-1 text-white "> : {items.saleInfo.retailPrice?.amount}</p>
          </p>

          <Link to="/pricePage">
         <button  className="bg-green-600  hover:bg-green-500 w-2/6 h-10 rounded-md font-semibold ">Buy Now</button>
          </Link>

          <button
            className="bg-yellow-400 w-2/6 ml-3 h-10 mt-4 hover:bg-yellow-300 rounded-lg text-center font-semibold"
            onClick={() => {
              AddBookData(bookID, bookName, bookPrice, bookAuthor);
            }}
          >
          Add to Cart
          </button>
        </div>
      </div>
    );
  });
};

export default CardBuy;
