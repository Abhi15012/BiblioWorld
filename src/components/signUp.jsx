import React, { useState } from "react";
import styles from "./signUp.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthO } from './firebase'; // Ensure this import is correct
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const SignUp = () => {
  const [getEmail, setEmail] = useState("");
  const [getName, setName] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getConfirmPassword, setConfirmPassword] = useState("");
const navigate=useNavigate()
  async function handleSignUp(event) {
    event.preventDefault(); // Prevent default form submission behavior

    if (getPassword !== getConfirmPassword) {
      toast.warn("Passwords do not match",{
        position:"top-right"
      });
  
    }

    const obj = {
      name: getName,
      email: getEmail,
      password: getPassword,
    };

    try {
      const user = await createUserWithEmailAndPassword(AuthO, getEmail, getPassword);
      console.log(user);
      toast.success("User created successfully",{
        
          position:"top-right"
        
      });
      if(user){
    setTimeout(()=>{navigate('/log')},3100)

      }

      // await axios.post('https://bookbuy-8cca8-default-rtdb.firebaseio.com/register.json', obj);
      // alert("Submitted successfully");
    } catch (error) {
      console.error('Error creating user:', error);
      toast.error(`Error: ${error.message}`,{
        position:"top-right"
      });
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container12}>
        <form onSubmit={handleSignUp} className={styles.container}>
          <h4>Create an account</h4>

          <div className={styles.InputBar}>
            <label htmlFor="name" className="label" id="name">
              Name
            </label>
            <input
              type="text"
              name="Fullname"
              onChange={(event) => setName(event.target.value)}
              id="name"
              className={styles.email}
              required
            />

            <label htmlFor="email" className="label" id="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              className={styles.email}
              required
            />

            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              className={styles.email}
              placeholder="Password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <label htmlFor="ConfirmPassword" className="label">
              Confirm Password
            </label>
            <input
              type="password"
              className={styles.email}
              placeholder="Password"
              id="ConPassword"
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="submit"
              value="Create account"
              className={`btn btn-success ${styles.buttonbar}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
