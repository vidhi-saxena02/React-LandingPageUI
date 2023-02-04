import lake from "./assets/lake.jpg";
import pink from "./assets/pink.png";

function App() {
  return (
    <div className="relative">
      <img
        src={lake}
        alt="landscape"
        className=" w-screen h-screen object-fill"
      />
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
        <img src={pink} alt="sun" />
      </div>
      <div className="absolute top-2/3   right-2/4 w-32">
        <button className="border border-white bg-white rounded-full px-8 py-3 text-purple-700 text-2xl font-bold">
          Explore
        </button>
      </div>
    </div>
  );
}

export default App;
