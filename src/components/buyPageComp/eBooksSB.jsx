import axios from "axios";
import React, { useEffect } from "react";

const EBooksSB = () => {
  useEffect(() => {
    async function Bookshelves() {
      try {
        const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=AIzaSyBEWWdDIKV-_3Bgb06FYbASntJK8cDbOCQ")
         

        console.log(response.data);
      } catch (error) {
        console.log("error");
      }
    }
    Bookshelves()
  } ,[]);
  return <div>this is e_books component</div>;
};

export default EBooksSB;
