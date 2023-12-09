import React from "react";
import {useRef} from "react";
import { Link,} from "react-router-dom";
import emailjs from '@emailjs/browser';
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_csyc6wx', 'template_ycsnzqx', form.current, 'JlWl7xSIX7NNlAKik')
      .then((result) => {
          console.log(result.text);
          console.log("message send")
      }, (error) => {
          console.log(error.text);
      });
  };
 
  return (
    <>
    <div className="flex justify-center items-center h-screen ">
      <div className="  h-screen ">
        <div>
          <div className="flex justify-center  text-4xl font-serif font-bold italic">
            <div className="mt-24 ">Contact Us</div>
          </div>
          <div className="flex justify-evenly mt-20 ml-[200px]">
          <form ref={form} onSubmit={sendEmail}>
            <div className="w-[50%] mr-80">
              <div className="">
                <input
                  type="text"
                  name="to_name"
                  placeholder="Name"
                  className="border-black p-2 border-[2px] w-full  rounded"
                />
                <br></br>
                <br></br>
                <input
                  type="email"
                  name="User_email"
                  placeholder="Email"
                  className="border-black p-2 border-[2px] w-full rounded "
                />
                <br></br>
                <br></br>
                <input
                  type="text"
                  name="User_subject"
                  placeholder="Subject"
                  className="border-black p-2 border-[2px] w-full rounded "
                />
                <br></br>
                <br></br>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="border-black p-2 border-[2px] w-full rounded"
                />
                <br></br>
                <br></br>
                <input
                  type="submit"
                  value="SEND EMAIL"
                  className="w-full text-white bg-[#4caf50] p-2.5 3.5 rounded cursor-pointer hover:bg-[#45a049]"
              
                />
              </div>
            </div>
            </form>
            <div>
              <div className="mr-60">
                <div className="flex">
                  <FaPhone className="mt-1"/>
                  <Link>+91 9852463851</Link>
                </div> <br></br>

                <div className="flex ">
                  <IoIosMail className="mt-1"/>
                  <a href="mailto:ranjaykumar73.rk@gmail.com">ranjaykumar73.rk@gmail.com</a>
                </div><br></br>

                <div className="flex ">
                  <FaLinkedin className="mt-1"/>
                  <Link to="https://www.linkedin.com/in/ranjay-kumar-4aa6011b4">LinkedIn</Link>
                </div><br></br>

                <div className="flex ">
                  <FaTwitter className="mt-1" />
                  <Link to="https://x.com/RanjayK78517566?t=qwGQOgOH2S8ok9Qn3D6nXg&s=08">Twitter</Link>
                </div><br></br>

                <div className="flex ">
                  <FaFacebookSquare className="mt-1" />
                  <Link to="https://www.facebook.com/ranjay.kumar.39108">Facebook</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
