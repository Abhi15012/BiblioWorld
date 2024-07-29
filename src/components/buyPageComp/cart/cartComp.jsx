import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { AuthO } from "../../firebase";
import Spinner from "../spinner";
import styles from "./cartComp.module.css";
import CartPreview from "./cartPreview";
import { GetUserData } from "../../../store/cartStore";
import { MdDeleteForever } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const ListComponent = ({ delitem }) => {
  const nav = useNavigate();
  const [accountData, setAccountData] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const [cart, setCart] = useState([]);
  const { quantitydata } = useContext(GetUserData);
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
          combinedItems[element.BookID] = {
            ...element,
            quantity: element.quantity + 1,
          };
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
  let quantity = 0;

  let price = 0;
  cart.map((item, index) => {
    quantity += item.quantity;
    price += item.BooKPrice * item.quantity;
  });

  console.log(price);
  quantitydata(quantity);

  const backToBuy = () => {
    let ab = confirm("Add more items");
    if (ab) {
      nav("/");
    }
  };

  return (
    <>
      <div className=" h-screen flex bg-gradient-to-r from-sky-500 to-indigo-500 justify-center">
        <div className=" flex flex-col pt-10 items-center gap-2 max-w-[2000px] bg-gradient-to-r from-purple-500 rounded-xl to-pink-300 overflow-y-auto">
          <h2 className="text-2xl font-semibold text-slate-900 font-serif flex gap-1 pt-3">
            Cart{" "}
            <span className="mt-1 text-yellow-400">
              <FaCartShopping />{" "}
            </span>
          </h2>
          <h2
            className="text-xl text-green-700 font-bold float-right  cursor-pointer "
            onClick={backToBuy}
          >
            <IoMdAddCircle />
          </h2>

          <br />
          <div className="flex md:gap-24 gap-1 text-2xl font-bold text-slate-900 justify-start  md:mr-10">
            <h2 className="">Book Name</h2>|<h2> Authour</h2>|
            <h2> Price (Rs)</h2>|<h2> Quantity</h2>
          </div>
          {Array.isArray(cart) && cart.length > 0 ? (
            cart.map((item, index) => {
              const price = item.BooKPrice * item.quantity;

              return (
                <>
                  <div
                    key={index}
                    className="flex justify-start   md:min-h-28 w-full items-center  overflow-hidden rounded-md bg-gradient-to-r from-yellow-300 to-red-300  "
                  >
                    <div className="text-gray-900 text-lg font-serif font-semibold w-40 float-left mt-1 md:ml-20 md:mr-20  h-20 ">
                      {item.BookName}
                    </div>
                    <div className="text-cyan-950 text-md w-28 ml-2 md:mr-8 flex  font-semibold ">
                      {item.BookAuthor}
                    </div>

                    <div className="text-red-600 font-bold text-lg md:ml-40  ml-2 mr-20">
                      {item.BooKPrice}
                    </div>
                    <div className="text-black text-xl font-bold  md:ml-80 md:mr-10">
                      {item.quantity}
                    </div>

                    <button
                      className="w-10 text-center flex justify-center items-center  h-10 rounded-lg hover:from-pink-500 hover:to-red-600 bg-gradient-to-r from-red-500 to-red-600  ml-10 "
                      onClick={() => handleDelete(item.BookID)}
                    >
                      <p className="text-2xl">
                        <MdDeleteForever />
                      </p>
                    </button>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <div>No data available</div>
            </>
          )}
          <div className="flex flex-row">
            <p className="text-xl font-mono font-semibold w-full ">
              Total :{price}
            </p>{" "}
            <Link to="/pricePage">
            {price===0 ? null :    <button
                className="  ml-10 bg-gradient-to-r from-green-500 w-20 to-green-400 hover:bg-green-400 h-10 text-xl font-medium rounded-lg"
                onClick={nav}
              >
                {" "}
                Buy{" "}
              </button>}
           
            </Link>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default ListComponent;
