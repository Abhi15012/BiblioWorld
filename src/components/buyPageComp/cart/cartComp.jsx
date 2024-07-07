import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { AuthO } from "../../firebase";
import Spinner from "../spinner";
import styles from "./cartComp.module.css";
import CartPreview from "./cartPreview";
import { GetUserData } from "../../../store/cartStore";

const ListComponent = ({ delitem }) => {
  const [accountData, setAccountData] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const [cart, setCart] = useState([]);
const {quantitydata} = useContext(GetUserData)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(AuthO, (currentUser) => {
      if (currentUser) {
        setUserUid(currentUser.uid);
      } else {
        setUserUid(null);
      }
    });


    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (userUid) {
        try {
          const response = await axios.get(
            `https://bookbuy-8cca8-default-rtdb.firebaseio.com/${userUid}.json`
          );
          const obj = response.data;
          if (!obj) {
            setAccountData([]);
            return;
          }

          const keys = Object.keys(obj);
          const lastKey = keys[keys.length - 1];
          const finalData = obj[lastKey];
          const key = "quantity";
          const value = 0;

          const updatedItems = finalData.map((item) => ({
            ...item,
            [key]: value,
          }));

          setAccountData(updatedItems);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [userUid]);

  useEffect(() => {
    if (accountData) {
      const combinedItems = {};
      accountData.forEach((element) => {
        if (combinedItems[element.BookID]) {
          combinedItems[element.BookID].quantity += element.quantity + 1;
        } else {
          combinedItems[element.BookID] = { ...element, quantity: element.quantity + 1 };
        }
      });
      setCart(Object.values(combinedItems));
    }
  }, [accountData]);

  const handleDelete = async (id) => {
    const updatedCart = cart
      .map((item) =>
        item.BookID === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  if (!accountData) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  let quantity= 0; 

let price=0;
  cart.map((item, index) => {
   
   price=item.BooKPrice
   quantity +=item.quantity
 
})

quantitydata(quantity)


  return <><div className={styles.name}>
      {Array.isArray(cart) && cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className="cartComp">
            <ul>
              <li>{item.BookName}</li>
              <li>{item.BookAuthor}</li>
              <li>{item.BooKPrice}</li>
              <li>{item.quantity}</li>
            </ul>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(item.BookID)}
            >
              Remove
            </button>
          </div>
        ))

      ) : (
        <>
        <div>No data available</div>
   
</>
        
      )}
    </div> </> 
    

  
    
  ;
};

export default ListComponent;
