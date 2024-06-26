import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Link,
  Outlet,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import {GiShoppingCart } from "react-icons/gi";
import { onAuthStateChanged } from "firebase/auth";
import { AuthO } from "../firebase";
import { useNavigation } from "react-router-dom";
import { signOut } from "firebase/auth";
import CardBuy from "../buyPageComp/cardBuy";
const BuyPage = () => {
  const navigator = useNavigate();
  const nav = useNavigate();
  const NavCart=useNavigate()

  const [user, setUser] = useState(null);
  const navigation = useNavigation();
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
  // console.log(user.userId);
  console.log(user);
  async function fetchData() {
    const searchRef = inputData.current.value;
    console.log(searchRef);

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
    console.log("hello");
    try {
      await signOut(AuthO);
      navigator("/log");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      <div className="Page">
        <div className="sidebar"></div>
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
              <button type="button" className="btn btn-warning position-relative lo"   onClick={()=>{

NavCart("/cart")
              }}>
              <GiShoppingCart /> Cart
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>

</button>

              <button
                  className="btn btn-danger logout"
                  onClick={handleSignOut}
                >
                  SignOut
                </button>
            </div>
          </div>

          <div className="mainBar">
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
