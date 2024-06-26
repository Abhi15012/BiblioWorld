import React, { createContext, useEffect, useMemo, useReducer, useState } from "react";
import axios from "axios"; // Add this line to import axios
import CartComp from "../components/buyPageComp/cartComp";
import { useNavigate } from "react-router-dom";
import { Flip, toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { AuthO } from "../components/firebase";
export const GetUserData = createContext({
  AddBookData: () => {},
  DeleteBookCart: () => {},
  LinkArr: [],
});




const DummyData = [
  {
    BookName: "The Hitchhiker's Guide to the Galaxy",
    BookAuthor: "Douglas Adams",
    BookID: "A12awes",
    BooKPrice: 216,
  },
];

const redFun = (storeGetData, action) => {
  switch (action.type) {
    case "BOOK_DATA":
      return [...storeGetData, action.payload];
    case "DEL_ITEM":
      return storeGetData.filter((book) => book.BookID !== action.payload.BookID);
    default:
      return storeGetData;
  }
};

const CartStore = ({ children }) => {


const [userData, setUserData]=useState()

  useEffect(
    (user12) => {
      onAuthStateChanged(AuthO, (currentUser) => {
        if (currentUser) {
          setUserData(currentUser.uid);
        } else {
          setUserData(null);
       
        }
      });
    },
  
    []
  );
  const [storeGetData, dispatchStoreData] = useReducer(redFun, DummyData);
  const nav = useNavigate();

  const AddBookData = (Bid, Bname, BPrice, BAuthor) => {
    dispatchStoreData({
      type: "BOOK_DATA",
      payload: {
        BookID: Bid,
        BookName: Bname,
        BooKPrice: BPrice,
        BookAuthor: BAuthor,
      },
    });
    // nav('/cart')
  };

  const DeleteBookCart = (Bid) => {
    dispatchStoreData({
      type: "DEL_ITEM",
      payload: {
        BookID: Bid,
      },
    });
  };

  // const memoizedStoreGetData = useMemo(() => storeGetData, [storeGetData]);

  useEffect(() => {
    const submitData = async () => {
      try {
        await axios.post(`https://bookbuy-8cca8-default-rtdb.firebaseio.com/${userData}.json`, storeGetData);
        toast.success('Added To Cart', {
          position: "top-center",
          theme:"dark",
       transition:Flip,
       autoClose:700
        });
      } catch (error) {
        toast.error("Network Error" ,  {
          position: "top-center",
          theme:"dark",
          transition:Flip,
          autoClose:1000
       
        }) ;
      }
    };

    if (storeGetData !== DummyData) { // Prevent initial dummy data from being sent
      submitData();
    }
  }, [storeGetData]);

  return (
    <GetUserData.Provider value={{ LinkArr: storeGetData, AddBookData, DeleteBookCart }}>
      {children}
      <CartComp />
      {/* <CardBuy /> */}
    </GetUserData.Provider>
  );
};

export default CartStore;
