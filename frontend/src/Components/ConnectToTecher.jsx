import React, { useRef } from 'react'
import { CircleX } from 'lucide-react';


export default function ConnectToTecher() {

    const popUpRef = useRef(null);
    const notificationRef = useRef(null);

    const applyPopUp = () => {
        if (popUpRef.current && notificationRef.current) {
            popUpRef.current.style.filter = 'blur(1px)';
            notificationRef.current.style.display = 'block';

            setTimeout(() => {
                popUpRef.current.style.filter = 'blur(0px)';
                notificationRef.current.style.display = 'none';
            }, 5000);
        }
    };

    const closePopUp = () => {
        if (notificationRef.current) {
            notificationRef.current.style.display = 'none';
        }
    };

  

  return (
    <div className="red-hat max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
                <form action="" className='mainForm'>
                    <div className="grid min-[650px]:grid-cols-4 grid-cols-1 gap-6 items-center">
                        <div className="">
                            <img src="/Images/TeacherProfile.svg" alt="unversityimage" className=" rounded-full max-[650px]:justify-self-center " />
                        </div>

                        <div className="col-span-3 flex flex-col gap-6">
                            <div className="flex items-center gap-2">
                                <label htmlFor="" className="text-gray-700">Teacher Name: </label>
                                <p className="font-semibold">Krishna Kadukar</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <label htmlFor="" className="text-gray-700">Teacher Location :</label>
                                <p className="font-semibold">Atigre, Kolhapur</p>
                            </div>

                            <div className="flex justify-between max-md:text-sm items-center">

                                <div className="flex items-center gap-1">
                                    <label htmlFor="" className="text-gray-700">State : </label>
                                    <p className="font-semibold">Maharashtra</p>
                                </div>

                                <div className="flex items-center gap-1">
                                    <label htmlFor="" className="text-gray-700">City : </label>
                                    <p className="font-semibold">Kolhapur</p>
                                </div>

                                <div className="flex items-center gap-1">
                                    <label htmlFor="" className="text-gray-700">Pin Code : </label>
                                    <p className="font-semibold">140008</p>
                                </div>

                            </div>

                            <div className="flex justify-between items-center">

                                <div className="flex items-center gap-1">
                                    <label htmlFor="" className="text-gray-700">Contact No : </label>
                                    <p className="font-semibold">1234567890</p>
                                </div>

                                <div className="flex items-center gap-1">
                                    <label htmlFor="" className="text-gray-700">Email : </label>
                                    <p className="font-semibold">xyz@gmail.com</p>
                                </div>

                            

                            </div>

                        </div>
                    </div>

                    <hr className="w-full border-[1.5px] border-gray-500 mt-8 rounded-4xl" />

                    <div className="grid md:grid-cols-3 grid-cols-1 items-center gap-2 md:gap-10 mt-8 max-[980px]:text-sm">

                        <div className="flex items-center gap-2 max-[700px]:row-start-1">
                            <label htmlFor="" className="text-gray-700">Last Job :</label>
                            <p className="font-semibold">Sanjay Ghodawat Unversity</p>
                        </div>

                        <div className="flex items-center gap-2 max-[700px]:row-start-2">
                            <label htmlFor="" className="text-gray-700">Experience :</label>
                            <p className="font-semibold">4+ Years</p>
                        </div>

                        <div className="flex items-center gap-2 max-[700px]:row-start-3">
                            <label htmlFor="" className="text-gray-700">Salary :</label>
                            <p className="font-semibold">₹ 25,000 - ₹ 50,000</p>
                        </div>

                        <div className="col-span-3 grid md:grid-cols-12 gap-4  md:gap-10">
                            <label htmlFor="" className="text-gray-700 md:justify-self-center ">Description:</label>
                            <p className="md:col-span-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis inventore rerum fuga quia, odio saepe fugit sapiente eaque laborum ducimus, perferendis accusantium, molestiae dignissimos cupiditate. Distinctio voluptatum ea nam qui quo quas laudantium in, accusamus corporis placeat perferendis tempora corrupti blanditiis deserunt eos quae inventore enim perspiciatis! Quisquam aut sit quis nisi quibusdam ut in modi perspiciatis autem neque? Quaerat fugit optio sit animi, mollitia impedit hic aut neque ipsam illum alias veritatis aliquid consectetur, odit voluptate obcaecati, dolorem quam a exercitationem saepe earum illo! Cum maiores autem enim similique ipsa sequi voluptas tenetur illo, tempore, inventore doloremque adipisci?</p>

                            <div className="lg:col-start-11 lg:col-span-2 md:col-span-3">
                                <h2 className="font-semibold">Skills</h2>
                                <ul className="list-disc">
                                    <li className="">Degree Complited</li>
                                    <li className="">English Communiction</li>
                                    <li className=''>Experience of 4 Year</li>

                                </ul>
                            </div>
                        </div>



                       


                    </div>

                    <div className="flex justify-center items-center mt-6">
                    <button type="button" onClick={applyPopUp} className='bg-blue-500 text-white px-20 font-semibold py-2 rounded-xl hover:bg-blue-800 cursor-pointer'>
                        Connect
                    </button>
                    </div>
                </form>

                

                <div ref={notificationRef} className="md:w-1/2 w-full hidden bg-white fixed z-10 top-[10%] left-[50%] transform translate-[-50%] shadow-2xl px-10 py-4 notification">
                <div className="grid grid-cols-4">
                    <p className="py-3 px-6 text-green-500 col-span-3">You are connected successfully</p>
                    <button type="button" className='cursor-pointer justify-self-end' onClick={closePopUp}>
                        <CircleX />
                    </button>
                    <hr className="w-full border-2 col-span-4 border-green-500 rounded-2xl loading" />
                </div>
                </div>
            </div>
  )
}
