import lake from "../assets/lake.jpg";
import pink from "../assets/pink.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

function LandPage({ handleClick }) {
  const [Home, setHome] = useState("text-white text-2xl mr-14  font-bold");
  const [Shop, setShop] = useState("text-white text-2xl mr-14  font-bold");
  const [touch, setTouch] = useState("text-white text-2xl mr-14  font-bold");

  const onChangeHome = () => {
    setHome(
      "text-white text-2xl font-bold mr-14 border border-purple-300 bg-violet-900 px-3 py-1 rounded-full"
    );
    setTouch("text-white text-2xl mr-14  font-bold");
    setShop("text-white text-2xl mr-14  font-bold");
  };
  const onChangeShop = () => {
    setShop(
      "text-white text-2xl font-bold mr-14 border border-purple-300 bg-violet-900 px-3 py-1 rounded-full"
    );
    setHome("text-white text-2xl mr-14  font-bold");
    setTouch("text-white text-2xl mr-14  font-bold");
  };
  const onChangeTouch = () => {
    setTouch(
      "text-white text-2xl font-bold mr-14 border border-purple-300 bg-violet-900 px-3 py-1 rounded-full"
    );
    setHome("text-white text-2xl mr-14  font-bold");
    setShop("text-white text-2xl mr-14  font-bold");
  };
  const img = useRef(null);
  const tagdiv = useRef(null);

  useEffect(() => {
    const el = img.current;
    gsap.to(el, {
      y: 100,
      duration: 3,
      scrollTrigger: {
        scrub: true,
        pin: true,
        start: "top top",
        end: "bottom -3 %",
        toggleClass: "active",
        ease: "power2",
        trigger: el,
        // markers: true,
      },
    });
  }, []);
  return (
    <div className="relative h-screen">
      <img src={lake} alt="landscape" className=" w-full object-cover" />
      <div></div>
      <div className="absolute top-4 left-32 font-bold text-4xl text-white">
        EARTHLY
      </div>
      <div className="absolute  right-4 top-4 sus  ">
        <button className={Home} onClick={onChangeHome}>
          Home
        </button>
        <button className={Shop} onClick={onChangeShop}>
          Shop
        </button>
        <button className={touch} onClick={onChangeTouch}>
          Get in touch
        </button>

        <button
          className="neon hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={handleClick}
        >
          Tap here Cutie
        </button>
      </div>
      <div className="absolute top-14  right-2/4 w-32 ">
        <img src={pink} alt="sun" ref={img} />
      </div>
    </div>
  );
}

export default LandPage;
