import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import styles from "./Loginpage.module.css";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthO } from "./firebase";
import { toast } from "react-toastify";
import "../index.css";
const LoginPage = () => {
  const navigate = useNavigate();

  const [displayText, setText] = useState(true);
  const [getEmail, setEmail] = useState("");

  const [getPassword, setPassword] = useState("");

  const toggleVisibility = () => {
    setText(!displayText);
  };

  async function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const user = await signInWithEmailAndPassword(
        AuthO,
        getEmail,
        getPassword
      );
      console.log(user);
      toast.success("User LOGIN successfully");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error(`Error: ${error.message}`);
    }
  }

  return (
    <div className={styles.cont}>
      <div className="loginText">
        <h3 className="welcome text-white text-4xl font-extrabold">
          {" "}
          Biblioworld!{" "}
        </h3>
      </div>
      <div className="container12">
        <form className={styles.container}>
          <h2 className="font-semi-bold text-2xl">Login</h2>

          <div className={styles.InputBar}>
            <input
              type="email"
              placeholder="email id"
              onChange={(event) => setEmail(event.target.value)}
              // value={getEmail}
              id="id"
              className={styles.email}
            />
            <div className="flex justify-items-start ">
              <input
                type={displayText ? "password" : "text"}
                className={styles.password}
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                id="Password"
                // value={getPassword}
              />
              <div className="box123 " onClick={toggleVisibility}>
                {displayText ? <FaEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>

          <div>
            <button
              className="bg-sky-500 rounded-md h-10 w-24 hover:bg-sky-400 mb-10"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>

          <div className={styles.text}>
            <p>Forgot Password ? </p>
            <a href="x.com" className="text-blue-600">generate new password</a>
          </div>

          <div className={styles.text1}>
            <p>Don't have an account ? </p>
            <Link to="/signup" className="text-blue-600">sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
