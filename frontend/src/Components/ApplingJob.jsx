// import React from 'react'
// import { CircleX } from 'lucide-react';

// export default function ApplingJob() {

//     const popUp = document.querySelector('.mainForm')
//     const popUpWindow = document.querySelector('.submitForm')
//     const notification = document.querySelector('.notification')

//     const applyPopUp = () => {
//         popUp.style.filter = 'blur(1px)';
//         popUpWindow.style.display = 'block';

//     }

//     const closePopUp = () => {
//         popUp.style.filter = 'blur(0px)';
//         popUpWindow.style.display = 'none';
//     }

//     const submitBtn = () => {
//         notification.style.display = 'block';
//         setTimeout(() => {
//             notification.style.display = 'none';
//         }, 5000);
//     }

//     return (
//         <>
//             <div className="red-hat max-w-7xl mx-auto px-4  lg:px-8 py-12  ">
//                 <form action="" className='mainForm'>
//                     <div className="grid md:grid-cols-4 gap-6 items-center">
//                         <div className="">
//                             <img src="/Images/SGU.jpg" alt="unversityimage" className=" rounded-full sm:w-72 justify-self-center " />
//                         </div>

//                         <div className="md:col-span-3 flex flex-col gap-6">
//                             <div className="flex items-center gap-2">
//                                 <label htmlFor="" className="text-gray-700">College Name: </label>
//                                 <p className="font-semibold">Sanjay Ghodawat Unversity, Kolhapur <span className="text-green-400"><i className="fa-solid fa-circle-check"></i></span></p>
//                             </div>

//                             <div className="flex items-center gap-2">
//                                 <label htmlFor="" className="text-gray-700">College Location :</label>
//                                 <p className="font-semibold">Atigre, Kolhapur</p>
//                             </div>

//                             <div className="flex justify-between max-[600px]:flex-col md:items-center max-[600px]:text-sm">

//                                 <div className="flex items-center gap-1">
//                                     <label htmlFor="" className="text-gray-700">State : </label>
//                                     <p className="font-semibold">Maharashtra</p>
//                                 </div>

//                                 <div className="flex items-center gap-1">
//                                     <label htmlFor="" className="text-gray-700">City : </label>
//                                     <p className="font-semibold">Kolhapur</p>
//                                 </div>

//                                 <div className="flex items-center gap-1">
//                                     <label htmlFor="" className="text-gray-700">Pin Code : </label>
//                                     <p className="font-semibold">140008</p>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>

//                     <hr className="w-full border-[1.5px] border-gray-500 mt-8 rounded-4xl" />

                  

//                     <div className="flex justify-center items-center mt-3">
//                         <button type="button" onClick={applyPopUp} className='bg-blue-500 text-white px-20 font-semibold py-2 rounded-xl hover:bg-blue-800 cursor-pointer'>Apply</button>
//                     </div>
//                 </form>

//                 <div className="md:w-1/2 w-full  hidden bg-white fixed z-10 top-[50%] left-[50%] transform translate-[-50%] shadow-2xl px-10 py-4 submitForm ">
//                     <div className="flex justify-end items-center my-4">
//                         <button type="button" className='cursor-pointer' onClick={closePopUp}><CircleX /></button>
//                     </div>
//                     <form className="flex flex-col gap-6">
//                         <div className="grid grid-cols-4 items-center  ">
//                             <label htmlFor="" className='font-semibold col-span-2'>Uplode CV</label>
//                             <label htmlFor="Uplode" className='px-6 py-2 text-center rounded-xl bg-blue-400 text-white col-span-2 cursor-pointer'>Upload</label>
//                             <input type="file" name="Uplode" id="Uplode" className='hidden' />
//                         </div>

//                         <div className="grid grid-cols-4 items-center  gap-3 ">
//                             <label htmlFor="" className='font-semibold col-span-2'>Expected Salary : </label>
//                             <input type="number" name="" id="" className='py-2 px-4 rounded-xl border-[1.5px] border-gray-500 col-span-2 ' />
//                         </div>

//                         <div className="grid grid-cols-6 items-center ">
//                             <label htmlFor="" className='font-semibold col-span-2'>Why we give this post?</label>
//                             <textarea name="" id="" className='border-gray-500 border-[1.5px] px-4 py-2 rounded-xl col-span-4' ></textarea>
//                         </div>

//                         <div className="">
//                             <button type="button" onClick={submitBtn} className='bg-blue-500 text-white w-full py-2 rounded-xl cursor-pointer'>Submit</button>
//                         </div>
//                     </form>
//                 </div>

//                 <div className="md:w-1/2 w-full  hidden  bg-white fixed z-10 top-[10%] left-[50%] transform translate-[-50%] shadow-2xl px-10 py-4 notification">
//                     <div className="grid grid-cols-4">
//                         <p className="py-3 px-6 text-green-500 col-span-3">Your Application Is Submited Successfull</p>
//                         <button type="button" className='cursor-pointer justify-self-end' onClick={closePopUp}><CircleX /></button>

//                         
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }


import React, { useRef } from "react";
import { CircleX } from "lucide-react";

export default function ApplingJob() {
  const popUpRef = useRef(null);
  const popUpWindowRef = useRef(null);
  const notificationRef = useRef(null);

  const applyPopUp = () => {
    if (popUpRef.current && popUpWindowRef.current) {
      popUpRef.current.style.filter = "blur(1px)";
      popUpWindowRef.current.style.display = "block";
    }
  };

  const closePopUp = () => {
    if (popUpRef.current && popUpWindowRef.current) {
      popUpRef.current.style.filter = "blur(0px)";
      popUpWindowRef.current.style.display = "none";
    }
  };

  const submitBtn = () => {
    if (notificationRef.current) {
      notificationRef.current.style.display = "block";
      setTimeout(() => {
        if (notificationRef.current) {
          notificationRef.current.style.display = "none";
        }
      }, 5000);
    }
  };

  return (
    <>
      <div className="red-hat max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <form ref={popUpRef} className="mainForm">
          <div className="grid md:grid-cols-4 gap-6 items-center">
            <div>
              <img
                src="/Images/SGU.jpg"
                alt="universityimage"
                className="rounded-full sm:w-72 justify-self-center"
              />
            </div>
            <div className="md:col-span-3 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <label htmlFor="" className="text-gray-700">
                  College Name:
                </label>
                <p className="font-semibold">
                  Sanjay Ghodawat University, Kolhapur{" "}
                  <span className="text-green-400">
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="" className="text-gray-700">
                  College Location :
                </label>
                <p className="font-semibold">Atigre, Kolhapur</p>
              </div>
              <div className="flex justify-between max-[600px]:flex-col md:items-center max-[600px]:text-sm">
                <div className="flex items-center gap-1">
                  <label htmlFor="" className="text-gray-700">
                    State :
                  </label>
                  <p className="font-semibold">Maharashtra</p>
                </div>
                <div className="flex items-center gap-1">
                  <label htmlFor="" className="text-gray-700">
                    City :
                  </label>
                  <p className="font-semibold">Kolhapur</p>
                </div>
                <div className="flex items-center gap-1">
                  <label htmlFor="" className="text-gray-700">
                    Pin Code :
                  </label>
                  <p className="font-semibold">140008</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="w-full border-[1.5px] border-gray-500 mt-8 rounded-4xl" />

          <div className="grid md:grid-cols-3 items-center md:gap-10 max-md:gap-y-4 mt-8 max-md:text-sm">

<div className="flex items-center gap-2">
    <label htmlFor="" className="text-gray-700">Required Post :</label>
    <p className="font-semibold">Post Name</p>
</div>

<div className="flex items-center gap-2 max-[500px]:row-start-2" >
    <label htmlFor="" className="text-gray-700">Grade :</label>
    <p className="font-semibold">10th Grade</p>
</div>

<div className="flex items-center gap-2  max-[500px]:row-start-3">
    <label htmlFor="" className="text-gray-700">Salary :</label>
    <p className="font-semibold">₹ 25,000 - ₹ 50,000</p>
</div>

<div className="col-span-3 grid md:grid-cols-12 gap-4  md:gap-10">
    <label htmlFor="" className="text-gray-700 justify-self-center ">Description:</label>
    <p className="col-span-8 max-lg:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis inventore rerum fuga quia, odio saepe fugit sapiente eaque laborum ducimus, perferendis accusantium, molestiae dignissimos cupiditate. Distinctio voluptatum ea nam qui quo quas laudantium in, accusamus corporis placeat perferendis tempora corrupti blanditiis deserunt eos quae inventore enim perspiciatis! Quisquam aut sit quis nisi quibusdam ut in modi perspiciatis autem neque? Quaerat fugit optio sit animi, mollitia impedit hic aut neque ipsam illum alias veritatis aliquid consectetur, odit voluptate obcaecati, dolorem quam a exercitationem saepe earum illo! Cum maiores autem enim similique ipsa sequi voluptas tenetur illo, tempore, inventore doloremque adipisci?</p>

    <div className="lg:col-start-11 md:col-start-10  col-span-2">
        <h2 className="font-semibold">Eligibility</h2>
        <ul className="list-disc max-lg:text-sm">
            <li className="">Degree Complited</li>
            <li className="">English Communiction</li>
            <li className=''>Experience of 3 Year</li>

        </ul>
    </div>
</div>



<div className="col-span-3 flex items-center gap-2">
    <label htmlFor="" className="text-gray-700 col-span-1">Affiliation No. </label>
    <p className="font-semibold">123456789987456321</p>
</div>


</div>

          

          <div className="flex justify-center items-center mt-3">
            <button
              type="button"
              onClick={applyPopUp}
              className="bg-blue-500 text-white px-20 font-semibold py-2 rounded-xl hover:bg-blue-800 cursor-pointer"
            >
              Apply
            </button>
          </div>
        </form>

        {/* Pop-Up Form */}
        <div
          ref={popUpWindowRef}
          className="md:w-1/2 w-full hidden bg-white fixed z-10 top-[50%] left-[50%] transform translate-[-50%] shadow-2xl px-10 py-4 submitForm"
        >
          <div className="flex justify-end items-center my-4">
            <button type="button" className="cursor-pointer" onClick={closePopUp}>
              <CircleX />
            </button>
          </div>
          <form className="flex flex-col gap-6">
          <div className="grid grid-cols-4 items-center  ">
                             <label htmlFor="" className='font-semibold col-span-2'>Uplode CV</label>
                             <label htmlFor="Uplode" className='px-6 py-2 text-center rounded-xl bg-blue-400 text-white col-span-2 cursor-pointer'>Upload</label>
                             <input type="file" name="Uplode" id="Uplode" className='hidden' />
                         </div>

                         <div className="grid grid-cols-4 items-center  gap-3 ">
                             <label htmlFor="" className='font-semibold col-span-2'>Expected Salary : </label>
                             <input type="number" name="" id="" className='py-2 px-4 rounded-xl border-[1.5px] border-gray-500 col-span-2 ' />
                         </div>

                         <div className="grid grid-cols-6 items-center ">
                             <label htmlFor="" className='font-semibold col-span-2'>Why we give this post?</label>
                             <textarea name="" id="" className='border-gray-500 border-[1.5px] px-4 py-2 rounded-xl col-span-4' ></textarea>
                         </div>

            <div>
              <button
                type="button"
                onClick={submitBtn}
                className="bg-blue-500 text-white w-full py-2 rounded-xl cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Notification */}
        <div
          ref={notificationRef}
          className="md:w-1/2 w-full hidden bg-white fixed z-10 top-[10%] left-[50%] transform translate-[-50%] shadow-2xl px-10 py-4 notification"
        >
          <div className="grid grid-cols-4">
            <p className="py-3 px-6 text-green-500 col-span-3">
              Your Application Is Submitted Successfully
            </p>
            <button type="button" className="cursor-pointer justify-self-end" onClick={closePopUp}>
              <CircleX />
            </button>
          </div>

          <hr className="w-full border-2 col-span-4 border-green-500  rounded-2xl loading" />
        </div>
      </div>
    </>
  );
}

