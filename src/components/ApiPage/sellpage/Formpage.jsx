import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Formpage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [popup, setpopup] = useState(true);
  const datadelay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(20);
      }, d * 1000);
    });
  };
  async function inputform(data) {
    await datadelay(3);
    console.log(data);
    reset();
  }

  // const handlePopup = (event) => {
  //   if (event.target.checked == true) {
  //     setpopup(true);
  //   } else {
  //     setpopup(false);
  //   }
  // };

  const [check1, setcheck1] = useState(false);
  const [check2, setcheck2] = useState(false);
  const[button,setbutton]=useState(false)

  function buttonpop(e){
if(e.target.checked===true){
  setbutton(true)
}
else{
  setbutton(false )
}
  }

  useEffect(() => {
    if (check1 && check2) {
      setpopup(false);
    }
  }, [check1, check2]); 

 

  return (
    <>
      {popup && (
        <>
          {" "}
          <div className="h-screen fixed top-28 md:left-96  backdrop-blur-[3px]">
            <div className="popup mx-auto  h-fit bg-gradient-to-b from-cyan-100 to-blue-200 w-[500px] rounded-md filter-blur(20)">
              <h1 className="text-xl font-medium text-center shadow-sm shadow-black">
                Terms and Conditions
              </h1>

              <div className="overflow-y-scroll h-[350px] ml-2">
                <ol typeof="1">
                  <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellendus ab laudantium voluptatibus consectetur velit
                    doloremque eos natus, cupiditate non ipsa.
                  </li>
                  <li></li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellendus ab laudantium voluptatibus consectetur velit
                    doloremque eos natus, cupiditate non ipsa.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellendus ab laudantium voluptatibus consectetur velit
                    doloremque eos natus, cupiditate non ipsa.
                  </li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus ab laudantium voluptatibus consectetur velit
                  doloremque eos natus, cupiditate non ipsa.
                  <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellendus ab laudantium voluptatibus consectetur velit
                    doloremque eos natus, cupiditate non ipsa.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellendus ab laudantium voluptatibus consectetur velit
                    doloremque eos natus, cupiditate non ipsa.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellendus ab laudantium voluptatibus consectetur velit
                    doloremque eos natus, cupiditate non ipsa.
                  </li>
                </ol>

                <div>
                  <label htmlFor="" className="font-medium">
                    I accept all the terms and conditions:
                  </label>
                  <input type="checkbox" className="m-3" name="" id=""
                  onClick={(event) => setcheck1(event.target.checked)}  />
                  <br />
                  <label htmlFor="" className="font-medium">
                    I am selling books in before expire dates:
                  </label>
                  <input type="checkbox" className="m-2" name="" id="" 
           onClick={(event) => setcheck2(event.target.checked)} />
                </div>

                <div className="flex justify-center gap-2"></div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="border-2 bg-white md:w-1/3 mx-auto my-10  rounded-lg h-fit ">
        {isSubmitting && (
          <>
            <div>Loading</div>
          </>
        )}
        <h2 className="font-sans text-xl text-center mb-4 font-bold text-gray-700">
          Enter the Details bellow
        </h2>
        <form
          className="hell flex flex-col gap-8 mt-2"
          action=""
          onSubmit={handleSubmit(inputform)}
        >
          <div className="flex flex-col text-center justify-center ">
            <label htmlFor="bookname">Book Name</label>
            <input
              {...register("Name", {
                required: {
                  value: true,
                  message: "Please enter the Book name",
                },
              })}
              className="w-1/2 mt-2 mx-auto   border-b-2 border-gray-600"
              type="text"
              id="bookname"
              placeholder="eg: Think and grow rich "
            />
            {errors.Name && (
              <>
                <div className="italic text-red-600">{errors.Name.message}</div>
              </>
            )}
          </div>

          <div className="flex flex-col text-center justify-center ">
            <label htmlFor="aname">Author Name</label>
            <input
              {...register("Author", {
                required: {
                  value: true,
                  message: "Please enter the Author name",
                },
              })}
              className="w-1/2 mt-2 mx-auto border-b-2 border-gray-600"
              type="text"
              id="aname"
              placeholder="Napoleon hill "
            />
            {errors.Author && (
              <>
                <div className="italic text-red-600">
                  {errors.Author.message}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col text-center justify-center ">
            <label htmlFor="code">Book Code</label>
            <input
              {...register("code", {
                required: { value: true, message: "Book code is required" },
              })}
              className="w-1/2 mt-2 mx-auto border-b-2 border-gray-600"
              type="text"
              id="code"
              placeholder="eg: 1f2b334 "
            />
            {errors.code && (
              <>
                <div className="italic text-red-600">{errors.code.message}</div>
              </>
            )}
          </div>

          <div className="flex flex-col text-center justify-center ">
            <label htmlFor="date">Date of Purchase</label>
            <input
              {...register("date", {
                required: {
                  value: true,
                  message: "Date of purchase is required**",
                },
              })}
              className="w-1/2 mt-2 mx-auto border-b-2 border-gray-600"
              type="date"
              id="date"
              placeholder=" "
            />

            {errors.date && (
              <>
                <div className="italic text-red-600">{errors.date.message}</div>
              </>
            )}
          </div>
          <div className="flex flex-row  justify-center gap-2 -mt-4 text-center">
            <i className="text-md">I have enterd all my details correctly :</i>
            <input
              type="checkbox"
              // onClick={handlePopup}
              className="text-2xl mt-1"
              name="confirm"
              onClick={buttonpop}
              id="chek"
            />
          </div>
          {button &&   <button className="bg-yellow-400   font-medium mx-auto mb-3 hover:bg-emerald-600 h-8 w-1/3 rounded-md ">
            Submit{" "}
          </button>}
        
        </form>
      </div>
    </>
  );
};

export default Formpage;
