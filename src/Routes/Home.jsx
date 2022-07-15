
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


function Home() {

  const inputRef = useRef(null);   // useref to get the entered value of the input field
  const [message, setmessage] = useState(false);
  const [inputText, setinputText] = useState("sure 🙂 ");
  const navigate = useNavigate();

  const goToParticipate = () =>{ // to go to participate page on click

    navigate("/Participate");
  }
  
  return (
    <div className=" h-screen  ml-60  pt-8 "> 
<div className=" relative  h-4/5 w-4/5   bg-black  ">
  <h1 className="absolute bottom-0 left-0 p-3 flex flex-row text-white  ">You</h1>
  </div>
<div className="flex pt-9 mx-48  ">
  <button className="bg-gray-700 hover:bg-blue-700 text-white  font-bold py-4 px-4 mx-2 rounded-full"><BsMic /></button> 
  <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-4 px-4 mx-2 rounded-full"><BsCameraVideo /></button> 
  <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-4 px-4 mx-2 rounded-full"><FaRegClosedCaptioning /></button> 
  <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-4 px-4 mx-2 rounded-full"><HiDotsVertical /></button> 
    <button className="bg-red-600 hover:bg-red-400 text-white font-bold py-4 px-4 mx-2 rounded-full"><MdOutlineCallEnd /></button> 
    <div className="mx-20  ml-32 pt-3">
    <button className="text-white font-bold hover:text-gray-700 mx-2 text-2xl "><AiOutlineInfoCircle /></button> 
  <button  onClick={goToParticipate} className=" text-white font-bold hover:text-gray-700 mx-2 text-2xl"><FiUsers /></button> 
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

</div>
  );
}

export default Home;

 