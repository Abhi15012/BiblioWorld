import React from "react";
import { useForm } from "react-hook-form";


const Formpage = () => {
  const{
    register,
    handleSubmit,
    watch,
    setError,
    formState:{errors,isSubmitting}
  }=useForm()
  const inputform=()=>{

  }
  return (
    <div className="border-2 bg-white md:w-1/3 mx-auto my-10  rounded-lg h-fit ">
      <h2 className="font-sans text-xl text-center mb-4 font-bold text-gray-700">
        Enter the Details bellow
      </h2>
      <form className="flex flex-col gap-8 mt-2" action="" onSubmit={handleSubmit(inputform)}>
        <div className="flex flex-col text-center justify-center ">
          <label htmlFor="bookname">Book Name</label>
          <input
          {...register("Name",{required:{value:true, message:"Please enter the Book name"}})}
            className="w-1/2 mt-2 mx-auto   border-b-2 border-gray-600"
            type="text"
            id="bookname"
            placeholder="eg: Think and grow rich "
          />
      {errors.Name && <><div className="italic text-red-600"  >{errors.Name.message}</div></>}
        </div>

        <div className="flex flex-col text-center justify-center ">
          <label htmlFor="aname">Author Name</label>
          <input
          {...register("Author",{required:{value:true, message:"Please enter the Author name"}})}
          className="w-1/2 mt-2 mx-auto border-b-2 border-gray-600"
            type="text"
            id="aname"
            placeholder="Napoleon hill "
          />
          {errors.Author && <><div className="italic text-red-600" >{errors.Author.message}</div></> }
        </div>

        <div className="flex flex-col text-center justify-center ">
          <label htmlFor="code">Book Code</label>
          <input
          {...register("code",{required:{value:true, message:"Book code is required"}})}

            className="w-1/2 mt-2 mx-auto border-b-2 border-gray-600"
            type="text"
            id="code"
            placeholder="eg: 1f2b334 "
          />
          {errors.code && <><div className="italic text-red-600" >{errors.code.message}</div></> }

        </div>

        <div className="flex flex-col text-center justify-center ">
          <label htmlFor="date">Date of Purchase</label>
          <input
                    {...register("date",{required:{value:true, message:"Date of purchase is required**"}})}

            className="w-1/2 mt-2 mx-auto border-b-2 border-gray-600"
            type="date"
            id="date"
            placeholder=" "
          />

{errors.date && <><div className="italic text-red-600" >{errors.date.message}</div></> }

        </div>
        <div className="flex flex-row  justify-center gap-2 -mt-4 text-center">

          <i>I have enterd all the details correctly :</i>
          <input type="checkbox"  onClick={(event)=>{
            console.log(event.target.checked)
          }}className="" name="confirm" id="chek" />
          {/* <button >hello</button> */}
        </div>

        <button className="bg-blue-500 hover:bg-green-500 w-1/2 text-center mx-auto -mt-6 rounded-md font-semibold h-8 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formpage;
