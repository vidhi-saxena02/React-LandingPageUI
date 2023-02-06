import { RxCross1 } from "react-icons/rx";

function LetsGo({ handleClick }) {
  return (
    <div className="relative">
      <img
        src="https://i.pinimg.com/originals/b7/05/8a/b7058a79cf0842455ecf0eb129fff021.gif"
        alt="gif"
        className="w-screen"
      />

      <div className="absolute top-2 right-3">
        <div className="absolute top-10 right-12 font-bold text-4xl ">
          <RxCross1 className="cursor-pointer" onClick={handleClick} />
        </div>
        <div>
          <section
            id="login"
            class="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto"
          >
            <div class="p-6 bg-sky-100 rounded">
              <div class="flex items-center justify-center font-black m-3 mb-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 mr-3 text-red-600 animate-pulse"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 class="tracking-wide text-3xl text-gray-900">
                  Here's 10% Off.
                </h1>
              </div>
              <form
                id="login_form"
                action="api_login"
                method="POST"
                class="flex flex-col justify-center"
              >
                <div class="flex justify-between items-center mb-3">
                  <div class="inline-flex items-center self-start">
                    <span class="font-bold text-gray-900">
                      Enter you email to recieve Coupon Code
                    </span>
                  </div>
                  <div class="flex"></div>
                </div>
                <label class="text-sm font-medium text-gray-500">
                  Be Sure to check Spam folder*
                </label>
                <input
                  class="mb-3 px-2 py-1.5
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  type="text"
                  name="username"
                  placeholder="Email"
                />

                <button
                  class="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300"
                  type="submit"
                >
                  <span>
                    Submit<span></span>
                  </span>
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default LetsGo;
