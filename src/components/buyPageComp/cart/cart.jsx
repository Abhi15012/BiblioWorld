import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { AuthO } from "../../firebase";
import Spinner from "../spinner";
import styles from "./cartComp.module.css";

const ListComponent = ({ delitem }) => {
  let [accountData, setAccountData] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const [arrId, setArrId] = useState([]);
  const [cart, setCart] = useState([]);

  let mergedarr;
  async function handleDelete(id) {
    const DelItem = {};


  const data=  mergedarr.map((item) => {
      DelItem[item.BookID] = { ...item };
      if (id === item.BookID && item.quantity > 1) {
        DelItem[item.BookID].quantity -1;

    return(mergedarr= Object.values(DelItem))
 
      }
    });

    setCart(data)
  }

  useEffect(() => {
    onAuthStateChanged(AuthO, (currentUser) => {
      if (currentUser) {
        setUserUid(currentUser.uid);
      } else {
        setUserUid(null);
      }
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (userUid) {
        try {
          const response = await axios.get(
            `https://bookbuy-8cca8-default-rtdb.firebaseio.com/${userUid}.json`
          );
          const obj = response.data;
          const keys12 = Object.keys(obj);
          const lastKey = keys12[keys12.length - 1];
          const finalData = obj[lastKey];
          const key = "quantity";
          const value = 1;
          // console.log(obj)
          let updatedItems = finalData.map((item) => {
            return {
              ...item,
              [key]: value,
            };
          });
          setAccountData(updatedItems);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [userUid]);

  if (!accountData) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  const combinedItems = {};
  {
    accountData.forEach((element) => {
      if (combinedItems[element.BookID]) {
        combinedItems[element.BookID].quantity += element.quantity;
      } else {
        combinedItems[element.BookID] = { ...element };
      }
    });
  }
mergedarr= Object.values(combinedItems);

  return (
    <div className={styles.name}>
      {Array.isArray(mergedarr) ? (
       mergedarr.map((item, index) => {
          return (
            <div className="cartComp">
              <ul key={index}>
                <li>{item.BookName}</li>
                <li>{item.BookAuthor}</li>
                <li>{item.BooKPrice}</li>
                <li>{item.quantity}</li>
              </ul>
              <button
                className="btn btn-danger"
                onClick={() => {
                  handleDelete(item.BookID);
                }}
              >
                remove
              </button>
            </div>
          );
        })
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};


