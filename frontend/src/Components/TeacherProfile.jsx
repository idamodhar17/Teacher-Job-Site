import React, { useRef } from 'react'
import { CircleX } from 'lucide-react';


export default function TeacherProfile() {
    const popUpRef = useRef(null);
    const notificationRef = useRef(null);

    const handleEdit = () => {
        document.querySelectorAll('.edit').forEach(input => {
            input.style.display = "block";
        });
        document.querySelectorAll('.displayWindow').forEach(displayWindow => {
            displayWindow.style.display = "none";
        });

        document.querySelector('.editSubmitBtn').style.display = 'block';
        document.querySelector('.varifyBtn').style.display = 'block';
        document.querySelector('.addPost').style.display = 'none';
    };

    const handleNoEdit = () => {
        document.querySelectorAll('.displayWindow').forEach(displayWindow => {
            displayWindow.style.display = "block";
        });
        document.querySelectorAll('.edit').forEach(edit => {
            edit.style.display = "none";
        });
        document.querySelector('.editSubmitBtn').style.display = 'none';
        document.querySelector('.varifyBtn').style.display = 'none';
        document.querySelector('.addPost').style.display = 'block';
    };

    const addPostBtn = () => {
        if (popUpRef.current) {
            popUpRef.current.style.display = 'block';
        }
    };

    const closePopUp = () => {
        if (popUpRef.current) {
            popUpRef.current.style.display = 'none';
        }
    };

    const postSubmitBtn = () => {
        if (notificationRef.current) {
            notificationRef.current.style.display = 'block';
            setTimeout(() => {
                notificationRef.current.style.display = 'none';
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
                        <div className="grid grid-cols-4 gap-6 items-center">
                            <div className="">
                                <img src="/Images/TeacherProfile.svg" alt="unversityimage" className=" rounded-full" />
                            </div>

                            <div className="col-span-3 flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="" className="text-gray-700">Teacher Name</label>
                                    <p className=" font-semibold text-xl">Krishna Kadukar</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="" className="text-gray-700">Teacher Location</label>
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

                        <div className="flex flex-col gap-1">
                                        <label htmlFor="" className="text-gray-700">Education</label>
                                        <input type="text" name="" id="" className='w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400 hidden edit' />
                                        <p className="displayWindow font-semibold text-xl">B.Tech</p>
                                    </div> 


                            <div className="col-span-3 flex flex-col gap-2">
                                <label htmlFor="" className="text-gray-700">Description</label>
                                <textarea name="" id="" className='w-full px-6 py-2 rounded-2xl outline-0 border-2 border-gray-400 hidden edit'></textarea>
                                <p className="displayWindow ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis culpa, odio quaerat necessitatibus eveniet fuga mollitia placeat commodi tempora itaque, recusandae distinctio sequi nobis porro alias officia incidunt, fugiat at quisquam laborum neque corporis! Libero facilis eligendi dolorum consequuntur atque dolores repudiandae dolore qui natus aperiam corporis dicta totam amet numquam autem ratione earum inventore ipsa nostrum maxime, perspiciatis recusandae nisi corrupti. Iusto, tempora magni veniam ducimus mollitia ad voluptate ut excepturi tempore asperiores recusandae alias deleniti hic sapiente labore eius repudiandae quisquam? Aliquam adipisci neque laborum quas in iusto numquam delectus, alias reprehenderit fugiat ex nisi, repellat odio similique.</p>
                            </div>

                            <div className="col-span-3 grid grid-cols-3 items-center gap-2">
                                <div className="flex items-center gap-4">
                                    <label htmlFor="" className='text-gray-700'>Number</label>
                                    <input type="tel" className="w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400 hidden edit" />
                                    <p className="displayWindow ">6361607370</p>

                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="number" className="w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400 hidden edit" />
                                    <button type="button" className='px-6 py-2 rounded-xl text-white hidden bg-blue-500 edit'>Verify</button>
                                </div>
                            </div>

                            <div className="col-span-3 grid grid-cols-3 items-center gap-2">
                                <div className="flex items-center gap-4">
                                    <label htmlFor="" className='text-gray-700'>Email</label>
                                    <input type="email" className="w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400 hidden edit" />
                                    <p className="displayWindow ">xyz@gmail.com</p>

                                </div>

                                <div className="flex items-center gap-2">
                                    <input type="number" className="w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400 hidden edit" />
                                    <button type="button" className='px-6 py-2 rounded-xl text-white hidden bg-blue-500 edit'>Verify</button>
                                </div>
                            </div>

                           

                            <div className="flex justify-center items-center col-span-3">
                                <button type='button' onClick={handleNoEdit} className="bg-blue-500 hidden text-white py-2 px-10 rounded-2xl cursor-pointer editSubmitBtn">Submit</button>
                            </div>




                        </div>
                    </form>

                    <div className="">
                    <button type='button' onClick={addPostBtn} className="bg-blue-500 text-white py-2 px-10 rounded-xl cursor-pointer">Add Skills</button>
                    </div>
                </div>

                <div ref={popUpRef} className="w-1/2 hidden shadow-2xl rounded-3xl bg-white fixed z-10 top-[50%] left-[50%] translate-[-50%] px-10 py-4">
                <div className="flex justify-end items-center">
                    <button type="button" className='cursor-pointer' onClick={closePopUp}><CircleX /></button>
                </div>
                
                <div className="flex flex-col gap-2">
                    <label className="text-gray-700">Skill 1</label>
                    <input type="text" className='w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400' />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-700">Skill 2</label>
                    <input type="text" className='w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400' />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-700">Skill 3</label>
                    <input type="text" className='w-full px-6 py-2 rounded-4xl outline-0 border-2 border-gray-400' />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-700">Other Skills</label>
                    <textarea className='w-full px-6 py-2 rounded-xl outline-0 border-2 border-gray-400' />
                </div>
                
                <button type="button" onClick={postSubmitBtn} className='bg-blue-500 text-white w-full py-2 rounded-xl cursor-pointer mt-4'>Submit</button>
            </div>
            
            <div ref={notificationRef} className="w-1/2 hidden bg-white fixed z-10 top-[10%] left-[50%] transform translate-[-50%] shadow-2xl px-10 py-4">
                <div className="grid grid-cols-4">
                    <p className="py-3 px-6 text-green-500 col-span-3">Your Skills are Added Successfully</p>
                    <button type="button" className='cursor-pointer justify-self-end' onClick={closePopUp}><CircleX /></button>
                </div>
                <hr className="w-full border-2 border-green-500 rounded-2xl loading" />
            </div>


            </div>

        </>
    )
}
