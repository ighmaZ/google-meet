import React from 'react'
import pic1 from '../assets/1.jpeg'
import pic2 from '../assets/2.jpeg'
import pic3 from '../assets/3.jpeg'
import pic4 from '../assets/4.jpeg'
import pic5 from '../assets/5.jpeg'
import pic6 from '../assets/6.jpeg'
import pic7 from '../assets/7.jpeg'
import pic8 from '../assets/8.jpeg'
import { useState } from 'react';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { BsMic } from 'react-icons/bs';
import { BsCameraVideo } from 'react-icons/bs';
import { FaRegClosedCaptioning } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineMessage } from 'react-icons/md';
import { FaShapes } from 'react-icons/fa';
import { MdOutlineCallEnd } from 'react-icons/md';

const Participate = () => {

  const inputRef = useRef(null);   // useref to get the entered value of the input field
  const [message, setmessage] = useState(false);
  const [inputText, setinputText] = useState("sure 🙂 ");
  const navigate = useNavigate();

  const goToHome = () =>{ // to go to Home page on click

    navigate("/");
  }
  return (
    <>
    <div className="  pt-12 grid grid-cols-4 gap-2">

    
    <img src={pic2}/>
    <img src={pic1}/>
    <img src={pic3}/>
    <img src={pic4}/>
    <img src={pic5}/>
    <img src={pic6}/>
    <img src={pic7}/>
    <img src={pic8}/>

  </div>
  <div className="flex pt-36 ml-96   ">
  <button className="bg-gray-700 hover:bg-blue-700 text-white  font-bold py-4 px-4 mx-2 rounded-full"><BsMic /></button> 
  <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-4 px-4 mx-2 rounded-full"><BsCameraVideo /></button> 
  <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-4 px-4 mx-2 rounded-full"><FaRegClosedCaptioning /></button> 
  <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-4 px-4 mx-2 rounded-full"><HiDotsVertical /></button> 
    <button className="bg-red-600 hover:bg-red-400 text-white font-bold py-4 px-4 mx-2 rounded-full"><MdOutlineCallEnd /></button> 
    <div className="mx-20  ml-32 pt-3">
    <button className="text-white font-bold hover:text-gray-700 mx-2 text-2xl "><AiOutlineInfoCircle /></button> 
  <button  onClick={goToHome} className=" text-white font-bold hover:text-gray-700 mx-2 text-2xl"><FiUsers /></button> 
  <button onClick={() => setmessage(true)} className="  text-white font-bold hover:text-gray-700 mx-2 text-2xl"><MdOutlineMessage /></button> 
  <button className="  text-white font-bold hover:text-gray-700 mx-2 text-2xl"><FaShapes /></button> 

 {/* if pop up is true */}

  {message ? (
        <>
          <div className="flex  overflow-auto  fixed inset-0 z-50 ">
            <div className="absolute  right-0 bottom-0">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-300 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b  border-gray-300 rounded-t ">
                  <button
                    className="bg-transparent border-0 text-red  float-right"
                    onClick={() => setmessage(false)}
                  >
                    <span className="text-red opacity-7 h-8 w-8 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="mb-6  ml-0 ">You: Can u guys hear me?</p>
                  <p className="mb-6  ml-0 ">Kacie: No</p>
                  <p className="mb-6  ml-0 ">You: I think i need to restart</p>
                  <p className="mb-6  ml-0 ">Kacie: sure</p>
                  <p className="mb-6  ml-0 ">Mira: Please do it quickly</p>
                  <p className="mb-6  ml-0 ">You: {inputText}  🙂</p>

                </div>
                <div className="flex items-center justify-end p-3">
                <input
                 type="text" 
                 ref={inputRef}
                //  onChange={(e) => setinputText(e.target.value)}

                 placeholder="  send message"/>

                  <button
                    className="ml-3 text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setinputText(inputRef.current.value)}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
   

    </div>
</div>


</>
  );
  
  
 
  }
export default Participate;