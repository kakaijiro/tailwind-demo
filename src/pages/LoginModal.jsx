function LoginModal() {
  return (
    <div>
      {/* global container */}
      <div className="flex items-center justify-center min-h-screen bg-rose-50">
        {/* card container */}
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
          {/* left side */}
          <div className="p-6 md:p-20">
            {/* top content */}
            <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
            <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
              Log in your account to upload or download pictures, videos or
              music.
            </p>
            <input
              type="text"
              className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your email address"
            />
            {/* middle content */}
            <div className="flex flex-col items-center justify-between mt-6 space-y-4 md:flex-row md:space-y-0">
              <div className="font-thin text-cyan-700">Forgot password?</div>
              <button className="w-full md:w-auto flex justify-center items-center p-4 space-x-4 font-sans font-bold text-white rounded-md shaodow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-6 object-cover"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="13" y1="18" x2="19" y2="12" />
                  <line x1="13" y1="6" x2="19" y2="12" />
                </svg>
              </button>
            </div>
            {/* border */}
            <div className="mt-12 border-b border-b-gray-300"></div>
            {/* bottom content */}
            <p className="py-6 text-sm font-thin text-center text-gray-400">
              or log in with
            </p>
            {/* bottom buttons container */}
            <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                <img
                  src="./loginModal/facebook.png"
                  alt="facebook"
                  className="w-9 h-9 object-cover"
                />
                <span className="font-thin">Facebook</span>
              </button>
              <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                <img
                  src="./loginModal/google.png"
                  alt="google"
                  className="w-9 h-9 object-cover"
                />
                <span className="font-thin">Google</span>
              </button>
            </div>
          </div>
          {/* right side */}
          <img
            src="./loginModal/image.jpg"
            alt=""
            className="w-[430px] hidden md:block"
          />

          {/* close button */}
          <div className="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-black group-hover:text-gray-600"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
