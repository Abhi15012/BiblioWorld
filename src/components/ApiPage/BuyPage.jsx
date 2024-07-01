import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import {
  Link,
  Outlet,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { onAuthStateChanged } from "firebase/auth";
import { AuthO } from "../firebase";
// import { useNavigation } from "react-router-dom";
import { signOut } from "firebase/auth";
import CardBuy from "../buyPageComp/cardBuy";
import { toast } from "react-toastify";
import CartStore from "../../store/cartStore";
;
const BuyPage = () => {
  const navigator = useNavigate();
  const nav = useNavigate();
  const NavCart = useNavigate();

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
    toast.success("signOut successful"<{

      autoClose:1000
    });
    try {
      await signOut(AuthO);
      navigator("/log");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  {getData.length !==0 ? inputData.current.value="" :inputData.current.value }



  return (
    
    <>
   <CartStore>
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
              <button
                type="button"
                className="btn btn-warning position-relative lo"
                onClick={() => {
                  NavCart("/cart");
                }}
              >
                <GiShoppingCart /> Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  99+
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>

              <button className="btn btn-danger logout" onClick={handleSignOut}>
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
      </CartStore>
    </>
  );
};

export default BuyPage;
