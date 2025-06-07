import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";

function Shortly() {
  const [message, setMessage] = useState(null);
  const inputRef = useRef(null);

  // Validate a URL
  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(str);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputRef.current.value) {
      setMessage("Enter an URL");
    } else if (!validURL(inputRef.current.value)) {
      setMessage("Enter a valid URL");
    } else {
      setMessage(null);
      toast.success("Success");
    }
  }

  useEffect(() => {
    document.title = "Shortly";

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) favicon.href = "/shortly/favicon-32x32.png";
  }, []);

  return (
    <div className="bg-white">
      {/* nav container */}
      <nav className="relative container mx-auto p-6">
        {/* flex container for all items */}
        <div className="flex items-center justify-between">
          {/* flex container for log and menu */}
          <div className="flex items-center space-x-20">
            {/* logo */}
            <img src="/shortly/logo.svg" alt="" />
            {/* left menu */}
            <div className="hidden lg:flex font-bold space-x-8">
              <a
                href="#"
                className="text-[hsl(257,7%,63%)] hover:text-[hsl(260,8%,14%)]"
              >
                Features
              </a>
              <a
                href="#"
                className="text-[hsl(257,7%,63%)] hover:text-[hsl(260,8%,14%)]"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-[hsl(257,7%,63%)] hover:text-[hsl(260,8%,14%)]"
              >
                Resources
              </a>
            </div>
          </div>
          {/* right menu */}
          <div className="hidden lg:flex items-center space-x-6 font-bold text-[hsl(257,7%,63%)]">
            <div className="hover:text-[hsl(260,8%,14%)]">Login</div>
            <a
              href="#"
              className="px-8 py-3 font-bold text-white bg-[hsl(180,66%,49%)] rounded-full hover:opacity-70"
            >
              Sign Up
            </a>
          </div>
          {/* TODO hamburger menu */}
        </div>
        {/* TODO mobile menu */}
      </nav>
      {/* hero section */}
      <section id="hero">
        {/* hero container */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          {/* content container */}
          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 lg:mb-52">
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
              More than just shorter links
            </h1>
            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              Build your brand's recongnition and get detailed insights on how
              your links are performing.
            </p>
            <div className="mx-auto lg:mx-0">
              <a
                href=""
                className="py-5 px-10 text-2xl font-bold text-white bg-[hsl(180,66%,49%)] rounded-full lg:py-4 hover:opacity-70"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* image */}
          <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
            <img src="/shortly/illustration-working.svg" alt="" />
          </div>
        </div>
      </section>
      {/* shorten section */}
      <section id="shorten" className="relative bg-gray-100">
        {/* shorten container */}
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* form */}
          <form
            onSubmit={handleSubmit}
            action=""
            id="link-form"
            className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-[hsl(257,27%,26%)] rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          >
            <input
              type="text"
              ref={inputRef}
              className={`flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 bg-white focus:outline-none ${
                message && "border-[hsl(0,87%,67%)]"
              }`}
              placeholder="Shorten a link here"
              id="link-input"
            />
            <button className="px-10 py-3 text-white bg-[hsl(180,66%,49%)] rounded-lg hover:bg-[hsl(180,66%,69%)] focus:outline-none md:py-2">
              Shorten It!
            </button>
            <div className="absolute left-7 bottom-3 text-[hsl(0,87%,67%)] text-sm italic">
              {message}
            </div>
          </form>

          {/* link 1 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-[hsl(260,8%,14%)] md:text-left">
              https://frontendmenter.io
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-[hsl(180,66%,49%)]">
                https://rel.ink/k4IKyK
              </div>
              <button className="p-2 px-8 text-white bg-[hsl(180,66%,49%)] rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
          {/* link 2 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-[hsl(260,8%,14%)] md:text-left">
              https://twitter.com/frontendmenter
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-[hsl(180,66%,49%)]">
                https://rel.ink/gx0Xp9
              </div>
              <button className="p-2 px-8 text-white bg-[hsl(260,8%,14%)] rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
          {/* link 3 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-[hsl(260,8%,14%)] md:text-left">
              https://linkedin.com/frontend-menter
            </p>
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-[hsl(180,66%,49%)]">
                https://rel.ink/gob3X9
              </div>
              <button className="p-2 px-8 text-white bg-[hsl(180,66%,49%)] rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shortly;
