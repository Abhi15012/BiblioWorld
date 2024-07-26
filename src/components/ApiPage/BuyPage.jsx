import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
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
import WelcomeMsg from "../buyPageComp/cart/welcomeMsg";

const BuyPage = () => {
  const navigator = useNavigate();
  const nav = useNavigate();
  const nav12 = useNavigate();
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
      <div className="Page">
        <div className="mainbox ">
          <div className=" w-screen flex-shrink-2 flex-col md:h-16 h-screen md:w-full  flex md:flex-row rounded-2xl ">
            <div className="">
              <h2 className="title12 text-white mt-3 ml-10 text-3xl text-g w-fit ">
                BiblioWorld!
              </h2>
            </div>
            <div className="flex mt-5 md:mt-0 ml-2 ">
              {" "}
              <input
                type="text"
                className="ml-0 md:ml-[200px] bg-gray-300 w-3/4  mt-2 h-10 rounded-xl md:w-60 md:pl-2 "
                placeholder="Bookname or Author"
                ref={inputData}
              />
              <button
                className=" mt-3  w-12 ml-2 md:w-14 h-9 bg-sky-500  text-center rounded-xl"
                onClick={fetchData}
              >
                Search
              </button>
            </div>
            <div className="flex md:flex-row md:ml-[300px] gap-4 mt-3 flex-col ">
              <div className="butSell">
                {" "}
                <button
                  className="bg-gradient-to-r from-green-600 to-green-400 hover:from-blue-400 hover:to-sky-500  w-full md:w-20 h-10 rounded-xl"
                  onClick={() => {
                    nav("/sell");
                  }}
                >
                  Sell Books
                </button>
              </div>
              <CartPreview></CartPreview>

              <button
                className=" bg-gradient-to-r text-md from-red-400 to-pink-600 hover:from-red-500 hover:to-yellow-500 h-10 md:w-20 w-full rounded-xl  logout"
                onClick={handleSignOut}
              >
                SignOut
              </button>
            </div>
          </div>

          <div className="mainBar scale-0 md:scale-100">
            <Outlet />
            <WelcomeMsg />
            <div className="carddata ">
              {" "}
              <CardBuy BookData={getData} />
            </div>

            <div className="sidebar">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyPage;
