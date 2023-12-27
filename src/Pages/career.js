import React from "react";
import "../App.css"

export const Career = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full bg-[rgb(126,92,229)] -mt-24">
          <div className="">
            <div className=" text-slate-100 mt-44 flex justify-center text-4xl font-serif font-bold italic ">
              Job Application
            </div>
            <p className=" text-center text-slate-100 h-60">
              Work for the Best and Most Powerful Virtual Event Platform to
              create the best Online Virtual Events for a global audience.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-4xl font-serif font-bold italic -mt-10">
        Leave a Message
      </div>
      <div className=" px-20 py-10 m-auto w-[1300px]">
        <form className="bg-gradient-to-t to-purple-600  from-pink-200 mt-12 rounded-xl w-12/12">
          <div className="">
            <div className="flex justify-around py-10 px-10 mr-16">
              <div className="w-96 mr-10 ">
                <label className="font-bold">Your name</label>
                <br />
                <input
                  type="text"
                  placeholder="enter your name......"
                  className=" p-5 w-96 rounded mb-4"
                />
              </div>
              <div className="w-96">
                <label className="font-bold">Your email</label>
                <br />
                <input
                  type="email"
                  placeholder="enter your email......"
                  className=" p-5 w-96  rounded mb-4"
                />
              </div>
            </div>
            <div className="flex justify-around px-10 mr-16">
              <div className="w-96 mr-10">
                <label className="font-bold">Your Phone Number</label>
                <br />
                <input
                  type="number"
                  placeholder="enter your number......"
                  className=" p-5 w-96 rounded mb-4"
                />
              </div>
              <div className="w-96">
                <label className="font-bold">Job Title</label>
                <br />
                <input
                  type="text"
                  placeholder="Title......"
                  className=" p-5 w-96 rounded mb-4"
                />
              </div>
            </div>
            <div className=" px-20 ">
              <label className="font-bold">Job Profile</label>
              <br />
              <select className="w-full p-5  rounded mb-2 text-gray-500 ">
                <option>--Please choose an option--</option>
                <option>Full Stack Developer</option>
                <option>Front end Developer</option>
                <option>Backend Developer</option>
                <option>Sales & BD</option>
                <option>Marketing </option>
                <option>Others</option>
              </select>
            </div>
            <div className=" px-20 ">
              <label className="font-bold">Description</label>
              <br />
              <textarea
                type="text"
                placeholder="Tell us About your self!"
                className="w-full h-40 p-2 border-[2px]  rounded mb-4"
              />
            </div>
            <div className="ml-14 px-5">
              <input type="file" className="bg-white p-1" />
            </div>
            <div className="ml-20 py-5">
              <input type="checkbox" />
              <span className="ml-2">I agree to Term & Condition</span>
            </div>
            <div className="ml-14 py-10 px-5 -mt-8">
              <input
                type="submit"
                className="w-32 text-white bg-[#4caf50] p-2.5 3.5 rounded cursor-pointer hover:bg-[#45a049] -mt-4"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="py-10">
          <img
          className="ml-24"
            src="https://t9f7w6d4.rocketcdn.me/wp-content/uploads/2023/07/footer_bg.png"
            alt=""
          ></img>
          <div className="flex -mt-[53px] ">
            <img
              className="animate-slidein1"
              src="https://samaaro.com/wp-content/uploads/2023/07/car-footer.png"
              alt=""
            />
            <img
              className="animate-slidein"
              src="https://samaaro.com/wp-content/uploads/2023/07/bike-footer.png"
              alt=""
            />
          </div>
      </div>
    </>
  );
};
