import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import ListComponent from "../buyPageComp/cart/cartComp";
import { onAuthStateChanged } from "firebase/auth";
import { AuthO } from "../firebase";
// import { useNavigation } from "react-router-dom";
import { signOut } from "firebase/auth";
import CardBuy from "../buyPageComp/cardBuy";
import { toast } from "react-toastify";
import CartStore from "../../store/cartStore";
import CartPreview from "../buyPageComp/cart/cartPreview";
import { FcSearch } from "react-icons/fc";
import Sidebar from "../buyPageComp/sidebar";



const BuyPage = () => {
  const navigator = useNavigate();
  const nav = useNavigate();

  const [user, setUser] = useState(null);
  const navigation = useNavigate();
  const inputData = useRef("");
  const [getData, setData] = useState([]);
  useEffect(
    (user) => {
      onAuthStateChanged(AuthO, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
        } else {
          setUser(null);
          navigation("/log");
        }
      });
    },

    []
  );

  async function fetchData() {
    const searchRef = inputData.current.value;

    try {
      const getdata = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchRef}&key=AIzaSyBEWWdDIKV-_3Bgb06FYbASntJK8cDbOCQ`
      );
      const jsonArr = getdata.data.items;

      setData(jsonArr);
   
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleSignOut = async () => {
    toast.success(
      "signOut successful" <
        {
          autoClose: 1000,
        }
    );
    try {
      await signOut(AuthO);
      navigator("/log");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  {
    getData.length !== 0
      ? (inputData.current.value = "")
      : inputData.current.value;
  }

  return (
    <>
   
        <div className= "Page" >
          <div className="sidebar"><Sidebar/></div>
          <div className="mainbox">
            <div className="searchBar">
              <div className="searchComp">
                <input
                  type="text"
                  className="search"
                  placeholder="bookname or Author" 
                 
                  ref={inputData}
                />
                <button className="btn btn-info searchBut" onClick={fetchData}>
                  Search
                </button>
              </div>
              <div className="buttons">
                <div className="butSell">
                  {" "}
                  <button
                    className="btn btn-success "
                    onClick={() => {
                      nav("/sell");
                    }}
                  >
                    Sell Books
                  </button>
                </div>

                <CartPreview></CartPreview>

                <button
                  className="btn btn-danger logout"
                  onClick={handleSignOut}
                >
                  SignOut
                </button>
              </div>
            </div>

            <div className="mainBar">
              <div className="welcomeMsg"><h3> Welcome to Biblioworld! </h3> 
              <i>   Use the SearchBar <FcSearch />to find your next great read </i>
           <p> Enjoy exploring and happy reading! </p>
                </div>
              <div className="carddata">
                {" "}
                <CardBuy BookData={getData} />
              </div>
            </div>
          </div>
        </div>
   
    </>
  );
};

export default BuyPage;
