import React, { useEffect, useState } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { AuthO } from "../firebase";
import Spinner from "./spinner";
import styles from './cartComp.module.css';

const ListComponent = () => {
  const [accountData, setAccountData] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const [arrId, setArrId] = useState([]); 
  const [cart, setCart] = useState([]);

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
          const keys = Object.keys(obj);
          const lastKey = keys[keys.length - 1];
          const finalData = obj[lastKey];
          setAccountData(finalData);

          // Update ArrId state
          if (Array.isArray(finalData)) {
            const newArrId = finalData.map(item => item.BookID);
            setArrId(newArrId);
          }
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

  return (
    <div className={styles.name}>
      {Array.isArray(accountData) ? (
        accountData.map((item, index) => {
          const Quantity = 1;
          const bookPrice = item.BooKPrice * Quantity;

          return (
            <div className={styles.container} key={index}>
              <ul className={styles.list}>
                <li>{item.BookName}</li>
                <li>{item.BookAuthor}</li>
                <li>{Quantity}</li>
                <li>{bookPrice}</li>
                <button className="btn btn-danger">Remove item</button>
              </ul>
            </div>
          );
        })
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default ListComponent;
