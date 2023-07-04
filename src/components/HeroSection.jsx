import React from "react";
import Curl from "../assets/website-curl.png";
import BottomMiddle from "../assets/bottom-middle.png";
import BottomRight from "../assets//bottom-right.png";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <>
      <section className="md:h-[70vh] h-[60vh] flex items-center ">
        <div className="text-center flex flex-col gap-4">
          <h1 className="md:text-4xl text-xl font-font1">
            Unleash the Digital Potential
            <br /> Elevate Your Online Presence with Cutting-Edge-Solutions <br />
            <div className="inline relative">
            <TypeAnimation
              sequence={['Web Development', 500, 'Ux/Ui Design', 500, 'Mobile Application', 500]}
              style={{ fontSize: '1em' }}
              repeat={Infinity}
            />
              <div className="absolute md:top-[2.5rem] top[-3rem] left-[6px] w-3/5 ">
                <img src={Curl} alt="curl" />
              </div>
            </div>
          </h1>
          <p className="md:w-2/6 w-full mx-auto md:text-base text-xs font-font1">
            Step into the World of Next-Generation Web Design: Where Creativity
            Meets Seamless User Experiences. Our team of skilled developers and
            designers harness the latest technologies to craft stunning websites
            that captivate, engage, and drive tangible results for your business
          </p>
          <button className="bg-pink p-2 block mx-auto border-2 border-black rounded">
            <h1 className="text-white">Find Out How?</h1>
          </button>
          <div className="w-44 mx-auto">
            <img src={BottomMiddle} alt="bootom-middle" />
          </div>
          <div className="absolute bottom-[1.5rem] right-12 overflow-hidden hidden md:inline ">
            <img src={BottomRight} alt="bottom-right" />
          </div>
        </div>
      </section>
    </>
  );
}
