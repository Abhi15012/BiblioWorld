import React, { Children } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/Loginpage.jsx";
import SignUp from "./components/signUp.jsx";
import CartStore from "./store/cartStore.jsx";
import BuyPage from "./components/ApiPage/BuyPage.jsx";
import SellPage from "./components/ApiPage/SellPage.jsx";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, Flip, ToastContainer, Zoom } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import EBooksSB from "./components/buyPageComp/eBooksSB.jsx";
import FavoritesSB from "./components/buyPageComp/FavoritesSB.jsx";
import PurchasedSB from "./components/buyPageComp/purshasedSB.jsx";
import ReviewSB from "./components/buyPageComp/ReviewSB.jsx";
import ToReadSb from "./components/buyPageComp/toReadSb.jsx";
import CartComp from "./components/buyPageComp/cart/cartComp.jsx";
import PricePage from "./components/buyPageComp/pricePage.jsx";
import CartPreview from "./components/buyPageComp/cart/cartPreview.jsx";

const router = createBrowserRouter([
  
  { path: "/log", element: <LoginPage /> },

  // { path: "/App", element: <App /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/cart", element: <CartComp /> },
  { path: "/previw", element: <CartPreview/> },

  { path: "/", element: <BuyPage></BuyPage> },
  { path: "/Sell", element: <SellPage></SellPage> },
  { path: "/ebook", element: <EBooksSB /> },
  { path: "/fav", element: <FavoritesSB /> },
  { path: "/Buy", element: <PurchasedSB /> },
  { path: "/Rev", element: <ReviewSB /> },
  { path: "/info", element: <ToReadSb /> },
  { path: "/PricePage", element: <PricePage /> }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <ToastContainer
      position="top-center"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
    />
<CartStore >
    <RouterProvider router={router} />
    </CartStore>
  </React.StrictMode>
);
