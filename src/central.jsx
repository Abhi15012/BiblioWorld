import React, { useState, useEffect } from "react";
import styles from "./central.module.css";
import { MdBookmarkAdded } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthO } from "./components/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { RiLoginBoxFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { redirect, useNavigate } from "react-router-dom";

const Central = () => {
  const [getUser, setUser] = useState(null);
const navigator =useNavigate();
const getNav=useNavigate();
const SellNav=useNavigate();
const navigation= useNavigate()
  useEffect( (getUser) => {

onAuthStateChanged(AuthO, (currentUser) => {
  if(currentUser){
      setUser(currentUser);
  
 
    }
    else{
     setUser(null)
   navigation('/log')
    }
  
   } )
   
    
    
    ;
 
  }, []);


  


  const handleLogOut = async () => {
    try {
      await signOut(AuthO);
      navigator('/log')
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  const BuyPage=()=>{
    getNav('/buy')
 

  }
  const SellPage=()=>{
  SellNav('/Sell')

  }

  return (

  <>
    <div className={styles.empty}>
      <div className={styles.login}>
        <h4>
          <RiLoginBoxFill />: {getUser?.email}
        </h4>
        <button type="button" className="btn btn-danger" onClick={handleLogOut}>
          <IoLogOut /> LogOut
        </button>
      </div>
      <div className={styles.box}>
        <button className={styles.compBuy} onClick={BuyPage}>
          <h2>
            <FaBookReader /> Buy Books
          </h2>
        </button>
        <button className={styles.sellBuy} onClick={SellPage} >
          <h2>
            <MdBookmarkAdded /> Sell Books
          </h2>
        </button>
      </div>
    </div>
    </>
  );
};

export default Central;
