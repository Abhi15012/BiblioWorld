import React, { useContext } from "react";
import ListComponent from "./cartComp";
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

import { GetUserData } from "../../../store/cartStore";
const CartPreview = () => {

const {dataQuant} = useContext(GetUserData)
  const NavCart = useNavigate();

 
  return (
 
    <>
      <div>
    
        <button
          type="button"
          className=" bg-gradient-to-r from-yellow-600 to-yellow-300 hover:from-yellow-300 hover:to-yellow-700  md:w-20 w-full justify-center flex gap-2 h-10 pt-2 pl-2 rounded-xl "
          onClick={() => {
            NavCart("/cart");
          }}
        >
          <span className="pt-1 text-center ">  <GiShoppingCart /> </span>
        Cart
    

       
        </button>
      </div>
    </>
  
  );
};

export default CartPreview;
