import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
function Contact() {
  
  return (
    <div className='bg-[url("https://img.freepik.com/free-photo/top-view-blue-monday-concept-composition-with-telephone_23-2149139103.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid")] bg-cover bg-center h-screen'>
    <h2 className="italic text bg-gray-800 text-2xl font-bold mb-4">
      Get In Touch With Us
    </h2>
    <form className="space-y-9" >
      <input
        className="w-full p-2 border rounded bg-gray-700"
        type="text"
        placeholder="Name"
      ></input>
      <input
        className="w-full p-2 border rounded bg-gray-700"
        type="text"
        placeholder="Email"
      ></input>
      
      <textarea
        placeholder="Your message"
        className=" w-1/2 p-2 border rounded h-24"
      ></textarea>
<div>
      <input
        className="animate-bounce bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        type="submit"
        value="Submit Response"
      ></input>
      </div>
    </form>
    <div className="flex justify-center mt-8 space-x-4">
      <a
        href="#"
        className="text-blue-600 hover:text-blue-800 transition duration-300"
      >
        <FaFacebookF size={24} />
      </a>
      <a
        href="#"
        className="text-blue-400 hover:text-blue-600 transition duration-300"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href="#"
        className="text-blue-700 hover:text-blue-900 transition duration-300"
      >
        <FaLinkedinIn size={24} />
      </a>
      <a
        href="#"
        className="text-pink-600 hover:text-pink-800 transition duration-300"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  </div>
  )
}

export default Contact