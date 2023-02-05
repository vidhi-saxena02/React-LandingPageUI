import {
  Animator,
  batch,
  Fade,
  FadeIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Move,
  StickyIn,
  ZoomIn,
  MoveIn,
} from "react-scroll-motion";
import kit from "./assets/kit.webp";
import cup from "./assets/cup.webp";
import bambo from "./assets/bambo.webp";
// import cup1 from "./assets/cup1.webp";
import cont from "./assets/cont.webp";
import straw from "./assets/straw.webp";
import brush from "./assets/brush.webp";
import LandPage from "./components/LandPage";
import Card from "./components/Card";
import cup2 from "./assets/cup2.webp";
import { useState } from "react";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const Fadeup = batch(Fade(), Sticky(), Move());

function New() {
  const [add, setAdd] = useState(false);
  const [added, setAdded] = useState(false);
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={MoveOut(0, -200)}>
          <LandPage />
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <div className="bg-blue-200 h-80 flex flex-row items-center justify-center">
          <Animator animation={MoveIn(0, -1000)}>
            <div className="font-bold text-4xl mr-3 sus">Sustainable</div>
          </Animator>
          <Animator animation={MoveIn(1000, -1000)}>
            <div className="font-bold text-4xl mr-3 sus">Products</div>
          </Animator>
          <Animator animation={MoveIn(-1000, -1000)}>
            <div className="font-bold text-4xl mr-3 sus">At</div>
          </Animator>
          <Animator animation={MoveIn(-1000, -1000)}>
            <div className="font-bold text-4xl mr-3 sus">Affordable</div>
          </Animator>
          <Animator animation={MoveIn(1000, -1000)}>
            <div className="font-bold text-4xl mr-3 sus">Prices</div>
          </Animator>
        </div>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
          <img src={cup} class=" rounded-lg " alt="cup" />
          <div class="container ">
            <h2 class="title mr-96">
              <span class="title-word title-word-1">Exp</span>
              <span class="title-word title-word-2">lore</span>
              <span class="title-word title-word-3 m-4">Our</span>
              <span class="title-word title-word-4">Products</span>
            </h2>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
          <Animator animation={MoveIn(-1000, 0)}>
            <div className="text-xl font-bold text-gray-700">
              Sustainability Starter Kit
            </div>
          </Animator>
          <Animator animation={MoveIn(1000, 0)}>
            <div className="text-xl font-bold text-white border border-green-500 bg-green-900 rounded-xl w-28 px-2 ">
              Bestseller
            </div>
          </Animator>

          <div className="relative cursor-pointer" onClick={() => setAdd(!add)}>
            <img src={kit} class=" rounded-lg" alt="kit" />
            {!add ? (
              <></>
            ) : (
              <div className="absolute top-1/2  left-1/4  ml-24 rounded-md text-white border border border-green-100 bg-green-900 px-10 py-2 font-bold text-2xl">
                Added
              </div>
            )}
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={Fadeup}>
          <div className="relative">
            <img src={bambo} class=" rounded-lg" alt="bamboo" />
            <div
              onClick={() => setAdded(!added)}
              className="myDIV absolute left-1 top-0 px-3 py-1 cursor-pointer rounded-full object-cover bg-blue-900 flex justify-center items-center text-white text-x font-bold"
            >
              A
            </div>
            <div class="hide absolute top-10 text-l text-white px-2 py-1 border border-gray-700 bg-slate-700 rounded-lg">
              {!added ? "Add to Cart" : "Added"}
            </div>
            <div className="absolute right-2 bottom-2 text-white rounded px-2 py-1 font-bold text-l border border-white bg-black">
              Natural Bamboo Loofah €2.99
            </div>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
        <div className=" p-0 bg-purple-100 h-full flex flex-row items-center  justify-center">
          <Animator animation={MoveIn(0, -1000)}>
            <Card
              images={brush}
              name="Bamboo Toothbrush (set-2)"
              price="3.59"
            />
          </Animator>
          <Animator animation={MoveIn(0, 1000)}>
            <Card images={cup2} name="Plant Based Reusable Cups" price="2.39" />
          </Animator>
          <Animator animation={MoveIn(0, -1000)}>
            <Card
              images={cont}
              name="Plant Based Reusable Containers"
              price="2.99"
            />
          </Animator>
          <Animator animation={MoveIn(0, 1000)}>
            <Card images={straw} name="Reusable Bambo Straws" price="1.99" />
          </Animator>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default New;
