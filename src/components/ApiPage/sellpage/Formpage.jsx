import React from "react";

const Formpage = () => {
  return (
    <div className="border-2 bg-white md:w-1/3 mx-auto my-10 rounded-lg h-3/4">
      <h2 className="font-sans text-xl text-center mb-4 font-bold text-gray-700">Enter the Details bellow</h2>
      <form className="flex flex-col gap-8 mt-2" action="">
        <div className="flex flex-col text-center justify-center ">
          <label htmlFor="bookname">Book Name</label>
          <input
            className="w-1/2 mt-2 mx-auto   border-b-2 border-gray-600"
            type="text"
            id="bookname"
            placeholder="eg: Think and grow rich "
          />


        </div>

        <div className="flex flex-col text-center justify-center ">
          <label htmlFor="aname">Author Name</label>
          <input
            className="w-1/2 mt-2 mx-auto border-b-2 border-gray-600"
            type="text"
            id='aname'
            placeholder="Nepolean hill "
          />

          
        </div>

        <div className="flex flex-col text-center justify-center ">
          <label htmlFor="code">Book Code</label>
          <input
            className="w-1/2 mt-2 mx-auto border-b-2 border-gray-600"
            type="text"
            id='code'
            placeholder="eg: 1f2b334 "
          />

          
        </div>

        <div className="flex flex-col text-center justify-center ">
          <label htmlFor="date">Date of Purchase</label>
          <input
            className="w-1/2 mt-2 mx-auto border-b-2 border-gray-600"
            type="date"
            id="date"
            placeholder=" "
          />

          
        </div>
        <div className="flex flex-row  justify-center gap-2 -mt-4 text-center">
        <i>I have enterd all the details correctly :</i>
          <input type="checkbox"  className=""name="confirm" id="chek"  />
          {/* <button >hello</button> */}
        </div>
      
      <button className="bg-blue-500 hover:bg-green-500 w-1/2 text-center mx-auto -mt-6 rounded-md font-semibold h-8 ">Submit</button>
      </form>
    </div>
  );
};

export default Formpage;
