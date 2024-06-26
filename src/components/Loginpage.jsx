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

const LoginPage = () => {
  const navigate = useNavigate();
  const [visibleEye, setVisibleEye] = useState(false);
  const [displayText, setText] = useState("password");
  const [getEmail, setEmail] = useState("");

  const [getPassword, setPassword] = useState("");

  const toggleVisibility = () => {
    setVisibleEye(!visibleEye);
    setText("text");
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
      }, 3100);
      // await axios.post(
      //   "https://bookbuy-8cca8-default-rtdb.firebaseio.com/register.json",
      //   obj
      // );
      // alert("Submitted successfully");
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error(`Error: ${error.message}`);
    }
  }

  return (
    <div className={styles.cont}>
      <div className="container12">
        <form className={styles.container}>
          <h2>Login</h2>

          <div className={styles.InputBar}>
            <input
              type="email"
              placeholder="email id"
              onChange={(event) => setEmail(event.target.value)}
              // value={getEmail}
              id="id"
              className={styles.email}
            />
            <div className={styles.eye}>
              <input
                type={displayText}
                className={styles.email}
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                id="Password"
                // value={getPassword}
              />

              <button onClick={toggleVisibility}>
                {visibleEye === false ? <FaEye /> : <FaRegEyeSlash />}
              </button>
            </div>
          </div>

          <div>
            <input
              type="button"
              value="Login"
              className={`btn btn-info ${styles.buttonbar}`}
              onClick={handleLogin}
            />
          </div>

          <div className={styles.text}>
            <p>Forgot Password ? </p>
            <a href="x.com">generate new password</a>
          </div>

          <div className={styles.text1}>
            <p>Don't have an account ? </p>
            <Link to="/signup">sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
