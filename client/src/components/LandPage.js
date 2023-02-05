import lake from "../assets/lake.jpg";
import pink from "../assets/pink.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function LandPage() {
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
      <div
        className="absolute top-64 right-1/3 overflow-hidden text-white w-1/3 h-10 px-1 text-2xl font-bold  "
        ref={tagdiv}
      >
        {/* <div>Sustainable products at affordable prices</div> */}
      </div>
      <div className="absolute top-4 left-32 font-bold text-4xl text-white">
        EARTHLY
      </div>
      <div className="absolute  right-4 top-4  ">
        <button className="text-white text-2xl font-bold mr-14 border border-purple-300 bg-violet-900 px-3 py-1 rounded-full ">
          Home
        </button>
        <button className="text-white text-2xl font-bold mr-14">Shop</button>
        <button className="text-white text-2xl mr-14  font-bold ">
          Get in touch
        </button>
      </div>
      <div className="absolute top-14  right-2/4 w-32 ">
        <img src={pink} alt="sun" ref={img} />
      </div>

      <div className="absolute top-2/3 right-2/4 w-32">
        <button className="border border-white bg-white rounded-full px-8 py-3 text-purple-700 text-2xl font-bold">
          Explore
        </button>
      </div>
    </div>
  );
}

export default LandPage;
