import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
// import "react-slideshow-image/dist/styles.css"
// import { Slider } from "./ImageSlider";

export const Home = () => {
  const obj = [
    {
      Image:
        "https://content.jdmagicbox.com/comp/seoni/b4/9999p7695.7695.221221192903.f5b4/catalogue/j-and-d-events-seoni-city-seoni-fun-n-fair-organisers-2gc58jwx8y.jpg",
      name: "event photos",
    },
    {
      Image:
        "https://www.mbatuts.com/wp-content/uploads/2019/11/Event-Planning-Business-in-plan.jpg",
      name: "event photos",
    },
    {
      Image:
        "https://scopeims.com/wp-content/uploads/2019/03/PHOTOFINE-51-compressor.jpg",
      name: "event photos",
    },
    {
      Image:
        "https://eclipse.global/wp-content/uploads/2018/11/So-Sri-Lanka-CS-2.jpg",
      name: "event photo",
    },
  ];

  const story = [
    {
      Image:
        "https://img.shaadi.com/success-story/oSH20938186-2SH24831868-big.jpg",
      name: "story",
    },
    {
      Image:
        "https://img.shaadi.com/success-story/RSH84475362-lSH12132678-big.jpg",
      name: "story",
    },
    {
      Image:
        "https://img.shaadi.com/success-story/mSH34115731-TSH40335062-big.jpg",
      name: "story",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % obj.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [obj.length]);
  return (
    <>
      <div className=" h-screen mt">
        <div className=" flex justify-center">
          <div className="mt-10 h-[350px] w-auto  "></div>
          <img
            src={obj[currentImageIndex].Image}
            alt="imag"
            className="h-[45rem] w-[100rem] mt-20"
          />
          {/* <Slider images={obj}/> */}
        </div>
        <div className=" flex justify-evenly mt-10">
          <div>
            <img src={story[0].Image} alt="story" />
            <p className="text-4xl font-serif font-bold italic">
              Divyesh & Amee
            </p>
            <p>
              I am very glad that i found a perfect match <br></br>for me on
              your website. I am very grateful <br></br>for your services.Thank
              you so Much.
            </p>
          </div>
          <div>
            <img src={story[1].Image} alt="story" />
            <p className="text-4xl font-serif font-bold italic">
              Pranav & Nikita
            </p>
            <p>
              Still in india ,where arranged marriages where the <br></br> norm,
              a remarkable love story Unfolded that defied <br></br>all
              convention.It all began on a typical day when density...
            </p>
          </div>
          <div>
            <img src={story[2].Image} alt="story" />
            <p className="text-4xl font-serif font-bold italic">
              Heena & Chause
            </p>
            <p>
              We had initially sent requests to each other, <br></br>and Heena
              declined my request because her <br></br> bucket list already had
              many people. However,<br></br> unknowingly sh...{" "}
            </p>
          </div>
        </div>
        <div className="py-10 ml-24 ">
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
      </div>
    </>
  );
};
