import React from "react";

export const Customer = () => {
  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <div className="w-full h-96 -mt-16 bg-[rgb(44,44,81)] ">
          <div className=" text-slate-100 mt-28 flex justify-center  text-4xl font-serif font-bold italic ">
            <div className="">Customer</div>
          </div>
        </div>
      </div>
      <div className="flex justify-around py-10 ">
        <div className="h-80 w-80 rounded-xl shadow-2xl">
          <div className="bg-gradient-to-t to-purple-600 from-pink-200 h-20 text-2xl italic py-5 px-16 font-extrabold rounded-t-xl text-white">
            {" "}
            Wedding plan
          </div>
          <div>
            <img
              className="rounded-b-xl"
              src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-406162,resizemode-75,msid-100353674/news/how-to/how-to-select-a-suitable-wedding-planner-for-your-big-fat-wedding.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="h-80 w-80 rounded-xl shadow-2xl">
          <div className="bg-gradient-to-t to-purple-600 from-pink-200  h-20 text-2xl italic py-5 px-16 font-extrabold rounded-t-xl text-white">
            Corporate Event
          </div>
          <div>
            <img
              className="h-[240px] rounded-b-xl"
              src="https://www.oyorooms.com/blog/wp-content/uploads/2018/03/fe-30.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="h-80 w-80 rounded-xl shadow-2xl">
          <div className="bg-gradient-to-t to-purple-600 from-pink-200  h-20 text-2xl italic py-5 px-16 font-extrabold rounded-t-xl text-white">
            Birthday Party
          </div>
          <div>
            <img
              className="h-[240px] rounded-b-xl"
              src="https://img.freepik.com/premium-photo/girl-with-parents-friends-home-celebrating-birthday-firing-confetti-poppers-party_562859-2318.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-around py-10">
        <div className="h-80 w-80 rounded-xl shadow-2xl">
          <div className="bg-gradient-to-t to-purple-600 from-pink-200  h-20 text-2xl italic py-5 px-16 font-extrabold rounded-t-xl text-white">
            Surprise Party
          </div>
          <div>
            <img
              className="h-[240px] rounded-b-xl"
              src="https://media.newyorker.com/photos/5b561bc7a84d943c2eadec73/master/w_2560%2Cc_limit/Caplan-Surprise-Birthday-Party.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="h-80 w-80 rounded-xl shadow-2xl">
          <div className="bg-gradient-to-t to-purple-600 from-pink-200  h-20 text-2xl italic py-5 px-20 font-extrabold rounded-t-xl text-white">
            Theme Event
          </div>
          <div>
            <img
              className="h-[240px] rounded-b-xl"
              src="https://www.mgnevents.co.uk/wp-content/uploads/2018/09/18th-Black-White-Birthday-Party-Kent-073.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="h-80 w-80 rounded-xl shadow-2xl">
          <div className="bg-gradient-to-t to-purple-600 from-pink-200  h-20 text-2xl italic py-5 px-28 font-extrabold rounded-t-xl text-white">
            Other's
          </div>
          <div>if u want another type of Party</div>
        </div>
      </div>
      <div className="py-10 ">
        <img
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
