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
          className="btn btn-warning position-relative "
          onClick={() => {
            NavCart("/cart");
          }}
        >
          <GiShoppingCart /> Cart
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {dataQuant}

            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    </>
  
  );
};

export default CartPreview;
