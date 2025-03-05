import React from 'react'
import { CircleX } from 'lucide-react';
import { useRef } from 'react';


export default function SchoolProfile() {

    const handleVarify = () => {
        alert('It will take atlist 2 days to varify')
    }

    const handleEdit = () => {
        document.querySelectorAll('.edit').forEach(input => {
            input.style.display = "block"; // Hide inputs properly
        });
        document.querySelectorAll('.displayWindow').forEach(displayWindow => {
            displayWindow.style.display = "none";
        });

        document.querySelector('.editSubmitBtn').style.display = 'block';
        document.querySelector('.varifyBtn').style.display = 'block';
        document.querySelector('.addPost').style.display = 'none';
        document.querySelector('.applicationList').style.display = 'none';



    };

    const handleNoEdit = () => {

        document.querySelectorAll('.displayWindow').forEach(displayWindow => {
            displayWindow.style.display = "block";
        });
        document.querySelectorAll('.edit').forEach(input => {
            input.style.display = "none"; // Hide inputs properly
        });
        document.querySelector('.editSubmitBtn').style.display = 'none';
        document.querySelector('.varifyBtn').style.display = 'none';
        document.querySelector('.addPost').style.display = 'block';
        document.querySelector('.applicationList').style.display = 'block';



    }

    const popUp = useRef(null);
    const popUpWindow = useRef(null);
    const notification = useRef(null);

    const addPostBtn = () => {
        if (popUp.current && popUpWindow.current) {
            popUp.current.style.filter = 'blur(1px)';
            popUpWindow.current.style.display = 'block';
        }
    };

    const closePopUp = () => {
        if (popUp.current && popUpWindow.current) {
            popUp.current.style.filter = 'blur(0px)';
            popUpWindow.current.style.display = 'none';
        }
    };

    const postSubmitBtn = () => {
        if (notification.current) {
            notification.current.style.display = 'block';
            setTimeout(() => {
                notification.current.style.display = 'none';
            }, 5000);
        }
    };

    return (
        <>
            <div className="red-hat max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mainForm">
                    <div className="flex justify-end items-center ">
                        <button type="button" onClick={handleEdit} className='bg-green-400 text-white px-6 py-2 rounded-xl'>EDIT</button>
                    </div>

                    <form action="">
                        <div className="grid md:grid-cols-4 max-[600px]:grid-cols-1 gap-6 items-center">
                            <div className="">
                                <img src="/Images/SGU.jpg" alt="unversityimage" className=" rounded-full max-[600px]:justify-self-center " />
                            </div>

                            <div className="col-span-3 flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="" className="text-gray-700">College Name</label>
                                    <p className="font-semibold text-xl flex gap-3 items-center">Sanjay Ghodawat Unversity <span className="text-green-400"><i className="fa-solid fa-circle-check"></i></span></p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="" className="text-gray-700">College Location</label>
                                    <input type="text" name="" id="" className='w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400 hidden edit' />
                                    <p className="displayWindow font-semibold text-xl">Atigre, Kolhapur</p>
                                </div>

                                <div className="flex justify-between items-center">

                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="" className="text-gray-700">State</label>
                                        <input type="text" name="" id="" className='w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400 hidden edit' />
                                        <p className="displayWindow font-semibold text-xl">Maharashtra</p>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="" className="text-gray-700">City</label>
                                        <input type="text" name="" id="" className='w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400 hidden edit' />
                                        <p className="displayWindow font-semibold text-xl">Atigre</p>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="" className="text-gray-700">Pin Code</label>
                                        <input type="number" name="" id="" className='w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400 hidden edit' />
                                        <p className="displayWindow font-semibold text-xl">140018</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <hr className="w-full border-[1.5px] border-gray-500 mt-8 rounded-4xl" />

                        <div className="grid grid-cols-3 items-center gap-10 mt-8">



                            <div className="col-span-3 flex flex-col gap-2">
                                <label htmlFor="" className="text-gray-700">Description</label>
                                <textarea name="" id="" className='w-full px-6 py-2 rounded-2xl outline-0 border-2 border-gray-400 hidden edit'></textarea>
                                <p className="displayWindow ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis culpa, odio quaerat necessitatibus eveniet fuga mollitia placeat commodi tempora itaque, recusandae distinctio sequi nobis porro alias officia incidunt, fugiat at quisquam laborum neque corporis! Libero facilis eligendi dolorum consequuntur atque dolores repudiandae dolore qui natus aperiam corporis dicta totam amet numquam autem ratione earum inventore ipsa nostrum maxime, perspiciatis recusandae nisi corrupti. Iusto, tempora magni veniam ducimus mollitia ad voluptate ut excepturi tempore asperiores recusandae alias deleniti hic sapiente labore eius repudiandae quisquam? Aliquam adipisci neque laborum quas in iusto numquam delectus, alias reprehenderit fugiat ex nisi, repellat odio similique.</p>
                            </div>

                            <div className="col-span-3 grid grid-cols-3 items-center gap-2">
                                <label htmlFor="" className="text-gray-700 col-span-3">Affiliation No. </label>
                                <input type='text' name="" id="" className='w-full col-span-2 px-6 py-2 rounded-2xl outline-0 border-2 border-gray-400 hidden edit'></input>
                                <p className="displayWindow font-semibold text-xl">123456789987456321</p>

                                <div className=" ">
                                    <button type="submit" onClick={handleVarify} className='bg-blue-500 hidden text-white w-full py-2 rounded-2xl cursor-pointer varifyBtn'>Varify</button>
                                </div>
                            </div>

                            <div className="flex justify-center items-center col-span-3">
                                <button type='button' onClick={handleNoEdit} className="bg-blue-500 hidden text-white py-2 px-10 rounded-2xl cursor-pointer editSubmitBtn">Submit</button>
                            </div>




                        </div>
                    </form>

                    <div className="my-4 applicationList">
                        <div className="grid grid-cols-5 items-center  gap-6">
                            <p className="justify-self-center font-semibold">Post Name</p>
                            <p className="justify-self-center font-semibold">Grade</p>
                            <p className="justify-self-center font-semibold">Salary</p>
                            <p className="justify-self-center font-semibold">Job Type</p>
                            <p className="justify-self-center font-semibold">Applied</p>

                            <p className=" justify-self-center">Mathmatic</p>
                            <p className=" justify-self-center">1st</p>
                            <p className="bg-green-400 text-white px-6 py-1 rounded-2xl text-center justify-self-center">₹20,000 - ₹30,000</p>
                            <p className="bg-blue-400 text-white px-6 py-1 rounded-2xl text-center justify-self-center">Full Time</p>
                            <p className="justify-self-center">10</p>
                        </div>

                    </div>

                    <div className="red-hat max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" ref={popUp}>
                        <button type='button' onClick={addPostBtn} className="bg-blue-500 text-white py-2 px-10 rounded-xl cursor-pointer addPost">Add Post</button>
                    </div>
                </div>

                <div ref={popUpWindow} className="w-1/2 hidden shadow-2xl rounded-3xl bg-white fixed z-10 top-[50%] left-[50%] translate-[-50%] px-10 py-4 submitForm">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-end items-center">
                        <button type="button" className='cursor-pointer' onClick={closePopUp}><CircleX /></button>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="post" className="text-gray-700">Required Post</label>
                        <input type="text" id="post" className='w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400 ' />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="grade" className="text-gray-700">Grade</label>
                        <input type="text" id="grade" className='w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400 ' />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="salary" className="text-gray-700">Salary</label>
                        <input type="text" id="salary" placeholder='In Indian Rupees' className='w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400 ' />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-2">
                        <label htmlFor="jobType" className="text-gray-700">Job Type</label>
                        <select id="jobType" className='w-full col-span-3 py-2 border-2 border-gray-500'>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="description" className="text-gray-700">Post Description</label>
                        <textarea id="description" className='w-full px-6 py-2 rounded-xl outline-0 border-2 border-gray-400 ' />
                    </div>
                </div>

                <div className="mt-4">
                    <button type="button" onClick={postSubmitBtn} className='bg-blue-500 text-white w-full py-2 rounded-xl cursor-pointer'>Submit</button>
                </div>
            </div>

            <div ref={notification} className="w-1/2 hidden bg-white fixed z-10 top-[10%] left-[50%] transform translate-[-50%] shadow-2xl px-10 py-4 notification">
                <div className="grid grid-cols-4">
                    <p className="py-3 px-6 text-green-500 col-span-3">Your Post Added Successfully</p>
                    <button type="button" className='cursor-pointer justify-self-end' onClick={closePopUp}><CircleX /></button>
                    <hr className="w-full border-2 col-span-4 border-green-500 rounded-2xl loading" />
                </div>
            </div>

                <div className="w-1/2 hidden  bg-white fixed z-10 top-[10%] left-[50%] transform translate-[-50%] shadow-2xl px-10 py-4 notification">
                    <div className="grid grid-cols-4">
                        <p className="py-3 px-6 text-green-500 col-span-3">Your Post Added Successfull</p>
                        <button type="button" className='cursor-pointer justify-self-end' onClick={closePopUp}><CircleX /></button>

                        <hr className="w-full border-2 col-span-4 border-green-500  rounded-2xl loading" />
                    </div>
                </div>


            </div>

        </>
    )
}
