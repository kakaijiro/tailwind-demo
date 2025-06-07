import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";

function Shortly() {
  const [message, setMessage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
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
      inputRef.current.value = "";
    }
  }

  function toggleMenu() {
    setIsOpen((prev) => !prev);
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
          {/* hamburger icon */}
          <div className="block lg:hidden">
            <button
              id="menu-btn"
              className={`hamburger  focus:outline-none ${
                isOpen ? "open" : ""
              }`}
              type="button"
              onClick={toggleMenu}
            >
              <span className={`hamburger-top !bg-gray-700`}></span>
              <span className={`hamburger-middle !bg-gray-700`}></span>
              <span className={`hamburger-bottom !bg-gray-700`}></span>
            </button>
          </div>
        </div>
        {/* mobile menu */}
        <div
          id="menu"
          className={`absolute ${
            !isOpen && "hidden"
          } p-6 rounded-lg bg-[hsl(257,27%,26%)] left-6 right-6 top-20 z-100`}
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <a href="#" className="w-full text-center">
              Features
            </a>
            <a href="#" className="w-full text-center">
              Pricing
            </a>
            <a href="#" className="w-full text-center">
              Resources
            </a>
            <a
              href="#"
              className="w-full text-center pt-6 border-t border-gray-400"
            >
              Login
            </a>
            <a
              href="#"
              className="w-full text-center py-3 rounded-full bg-[hsl(171,66%,44%)]"
            >
              Sign Up
            </a>
          </div>
        </div>
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
      {/* stats section */}
      <section id="stats" className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Adnaced Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how your links are performing across the web with our advanced
            statiscs dashboard.
          </p>
        </div>
      </section>
      {/* feature box section */}
      <section id="features" className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6  mx-auto md:flex-row md:space-x-7">
          {/* horizontal line */}
          <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-[hsl(180,66%,49%)] md:block"></div>
          {/* vertical line */}
          <div className="absolute w-2 left-1/2 h-full -ml-1 bg-[hsl(180,66%,49%)] md:hidden"></div>
          {/* box 1 */}
          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* image positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* image container for background & cnter */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-[hsl(260,8%,14%)]">
                <img src="/shortly/icon-brand-recognition.svg" alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Brand Recognition
            </h5>
            <p className="text-center texty-gray-400 md:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          {/* box 2 */}
          <div className="relative flex flex-col p-6 mt-24 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3">
            {/* image positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* image container for background & cnter */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-[hsl(260,8%,14%)]">
                <img src="/shortly/icon-detailed-records.svg" alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Detailed Records
            </h5>
            <p className="text-center texty-gray-400 md:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          {/* box 3 */}
          <div className="relative flex flex-col p-6 mt-24 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3">
            {/* image positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* image container for background & cnter */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-[hsl(260,8%,14%)]">
                <img src="/shortly/icon-fully-customizable.svg" alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Fully Customizable
            </h5>
            <p className="text-center texty-gray-400 md:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
      {/* cta section */}
      <section
        id="cia"
        className="py-24 bg-[hsl(257,27%,26%)] bg-[url('/shortly/bg-boost-desktop.svg')] bg-no-repeat bg-cover bg-top"
      >
        <div className="flex flex-col p-2 space-y-6">
          <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
            Boost your links today
          </h5>
          <button className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-[hsl(180,66%,49%)] hover:bg-[hsl(180,66%,69%)] md:text-base md:py-3 focus:outline-none">
            Get Started
          </button>
        </div>
      </section>
      {/* footer */}
      <footer className="py-16 bg-[hsl(260,8%,14%)]">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
          {/* logo */}
          <img src="/shortly/logo.svg" alt="" />
          {/* menu container */}
          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
            {/* menu 1 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Features
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href=""
                  className="capitalize text-[hsl(257,7%,63%)] hover:text-[hsl(180,66%,49%)]"
                >
                  Link Shortening
                </a>
                <a
                  href=""
                  className="capitalize text-[hsl(257,7%,63%)] hover:text-[hsl(180,66%,49%)]"
                >
                  Branded Links
                </a>
                <a
                  href=""
                  className="capitalize text-[hsl(257,7%,63%)] hover:text-[hsl(180,66%,49%)]"
                >
                  Analytics
                </a>
              </div>
            </div>
            {/* menu 2 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Resources
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href=""
                  className="capitalize text-[hsl(257,7%,63%)] hover:text-[hsl(180,66%,49%)]"
                >
                  Blog
                </a>
                <a
                  href=""
                  className="capitalize text-[hsl(257,7%,63%)] hover:text-[hsl(180,66%,49%)]"
                >
                  Developers
                </a>
                <a
                  href=""
                  className="capitalize text-[hsl(257,7%,63%)] hover:text-[hsl(180,66%,49%)]"
                >
                  Support
                </a>
              </div>
            </div>
            {/* menu 3 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">
                Company
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href=""
                  className="capitalize text-[hsl(257,7%,63%)] hover:text-[hsl(180,66%,49%)]"
                >
                  About
                </a>
                <a
                  href=""
                  className="capitalize text-[hsl(257,7%,63%)] hover:text-[hsl(180,66%,49%)]"
                >
                  Our team
                </a>
                <a
                  href=""
                  className="capitalize text-[hsl(257,7%,63%)] hover:text-[hsl(180,66%,49%)]"
                >
                  Careers
                </a>
                <a
                  href=""
                  className="capitalize text-[hsl(257,7%,63%)] hover:text-[hsl(180,66%,49%)]"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          {/* social container */}
          <div className="flex space-x-6">
            <a href="#">
              <img src="/shortly/icon-facebook.svg" alt="" className="ficon" />
            </a>
            <a href="#">
              <img src="/shortly/icon-twitter.svg" alt="" className="ficon" />
            </a>
            <a href="#">
              <img src="/shortly/icon-pinterest.svg" alt="" className="ficon" />
            </a>
            <a href="#">
              <img src="/shortly/icon-instagram.svg" alt="" className="ficon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Shortly;
