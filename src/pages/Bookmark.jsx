import { useEffect, useState } from "react";

function Bookmark() {
  const [tab, setTab] = useState(1);

  useEffect(() => {
    document.title = "Bookmark Website";

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) favicon.href = "/bookmark/favicon-32x32.png";
  }, []);

  return (
    <div className="overflow-x-hidden bg-gray-50">
      <nav className="container relative mx-auto p-6">
        {/* flex container for nav items */}
        <div className="flex items-center justify-between space-x-20 my-6">
          {/* logo */}
          <div className="z-30">
            <img src="/bookmark/logo-bookmark.svg" alt="" id="log" />
          </div>
          {/* menu items */}
          <div className="hidden items-center space-x-10 uppercase text-[hsl(229,8%,60%)] md:flex">
            <a
              href="#features"
              className="tracking-widest hover:text-[hsl(0,94%,66%)]"
            >
              Features
            </a>
            <a
              href="#download"
              className="tracking-widest hover:text-[hsl(0,94%,66%)]"
            >
              Download
            </a>
            <a
              href="#faq"
              className="tracking-widest hover:text-[hsl(0,94%,66%)]"
            >
              FAQ
            </a>
            <a
              href=""
              className="px-8 py-2 text-white bg-[hsl(0,94%,66%)] border-2 border-[hsl(0,94%,66%)] rounded-lg shadow-md hover:text-[hsl(0,94%,66%)] hover:bg-white duration-200"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      {/* hero section */}
      <section id="hero">
        {/* container for image & content */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          {/* content */}
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
              A Simple Book Manager
            </h1>
            <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            {/* button container */}
            <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
              <a
                href="#"
                className="p-4 text-sm font-semibold text-white bg-[hsl(231,69%,60%)] rounded shadow-md border-2 border-[hsl(231,69%,60%)] md:text-base hover:bg-white hover:text-[hsl(231,69%,60%)]"
              >
                Get It On Chrome
              </a>
              <a
                href="#"
                className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
              >
                Get It On Firefox
              </a>
            </div>
          </div>
          {/* image */}
          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <div
              id="bg-hero"
              className="hidden lg:block w-[2000px] h-[300px] left-[30%] absolute  top-52 bg-[hsl(231,69%,60%)] rounded-l-full"
            ></div>
            {/* <div className="bg-hero"></div> */}
            <img
              src="/bookmark/illustration-hero.svg"
              alt=""
              className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
            />
          </div>
        </div>
      </section>

      {/* features heading */}
      <section id="features">
        <div className="container mx-auto mt-16 px-6 md:mx-0">
          <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
          <p className="max-w-md mx-auto text-center text-[hsl(229,8%,60%)] text-lg">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>
      {/* features tabs */}
      <section id="tabs">
        {/* tabs/panels container */}
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div
            id="bg-hero"
            className="hidden lg:block w-[2000px] h-[300px] right-[60%] absolute  top-60 bg-[hsl(231,69%,60%)] rounded-r-full"
          ></div>
          {/* <div className="bg-tabs"></div> */}
          {/* tabs flex continer */}
          <div
            className={
              "flex flex-col justify-center max-w-xl mx-auto mb-6 md:border-b md:space-x-10 md:flex-row"
            }
          >
            {/* tab 1 */}
            <div
              className={`flex justify-center text-center text-gray-600 border-b border-gray-600 md:border-b-0 md:w-1/3 hover:text-[hsl(0,94%,66%)] tab`}
              data-target="panel-1"
            >
              <div
                className={`py-5 ${
                  tab === 1 ? "border-b-4 border-[hsl(0,94%,66%)]" : ""
                }`}
                onClick={() => setTab(1)}
                data-target="panel-1"
              >
                Simple Bookmarking
              </div>
            </div>
            {/* tab 2 */}
            <div
              className="flex justify-center text-center text-gray-600 border-b border-gray-600 md:border-b-0 md:w-1/3 hover:text-[hsl(0,94%,66%)] tab"
              data-target="panel-2"
            >
              <div
                className={`py-5 ${
                  tab === 2 ? "border-b-4 border-[hsl(0,94%,66%)]" : ""
                }`}
                onClick={() => setTab(2)}
                data-target="panel-2"
              >
                Speedy Searching
              </div>
            </div>
            {/* tab 3 */}
            <div
              className="flex justify-center text-center text-gray-600 border-b border-gray-600 md:border-b-0 md:w-1/3 hover:text-[hsl(0,94%,66%)] tab"
              data-target="panel-3"
            >
              <div
                className={`py-5 ${
                  tab === 3 ? "border-b-4 border-[hsl(0,94%,66%)]" : ""
                }`}
                onClick={() => setTab(3)}
                data-target="panel-3"
              >
                Easy Sharing
              </div>
            </div>
          </div>
          {/* tab panels */}
          <div id="panels" className="container mx-auto">
            {/* panel 1 */}
            <div
              className={`flex flex-col py-5 md:flex-row md:space-x-7 pnale panle-1 ${
                tab !== 1 ? "hidden" : ""
              }`}
            >
              {/* panel image */}
              <div className="flex justify-center md:w-1/2">
                <img
                  src="/bookmark/illustration-features-tab-1.svg"
                  alt=""
                  className="relative z-10 object-contain"
                />
              </div>
              {/* panel content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Bookmark in on click
                </h3>
                <div>
                  <p className="max-w-md mx-auto text-lg md:mx-0 text-center text-[hsl(229,8%,60%)] md:text-left">
                    Organize your bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over how
                    you manage your favourite sites.
                  </p>
                  <div className="mt-12 text-center md:text-left">
                    <a
                      href="#"
                      className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-[hsl(231,69%,60%)] hover:bg-white hover:text-[hsl(231,69%,60%)] hover:border-[hsl(231,69%,60%)] duration-200"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* panel 2 */}
            <div
              className={`flex flex-col py-5 md:flex-row md:space-x-7 pnale panle-2 ${
                tab !== 2 ? "hidden" : ""
              }`}
            >
              {/* panel image */}
              <div className="flex justify-center md:w-1/2 object-contain">
                <img
                  src="/bookmark/illustration-features-tab-2.svg"
                  alt=""
                  className="relative z-10"
                />
              </div>
              {/* panel content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Intelligent search
                </h3>
                <div>
                  <p className="max-w-md mx-auto text-lg md:mx-0 text-center text-[hsl(229,8%,60%)] md:text-left">
                    Our powerful search feature will help you find saved sites
                    in no time at all. No need to trawl through all of your
                    bookmarks.
                  </p>
                  <div className="mt-12 text-center md:text-left">
                    <a
                      href="#"
                      className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-[hsl(231,69%,60%)] hover:bg-white hover:text-[hsl(231,69%,60%)] hover:border-[hsl(231,69%,60%)] duration-200"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* panel 3 */}
            <div
              className={`flex flex-col py-5 md:flex-row md:space-x-7 pnale panle-3 ${
                tab !== 3 ? "hidden" : ""
              }`}
            >
              {/* panel image */}
              <div className="flex justify-center md:w-1/2 object-contain">
                <img
                  src="/bookmark/illustration-features-tab-3.svg"
                  alt=""
                  className="relative z-10"
                />
              </div>
              {/* panel content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  Share your bookmarks
                </h3>
                <div>
                  <p className="max-w-md mx-auto text-lg md:mx-0 text-center text-[hsl(229,8%,60%)] md:text-left">
                    Easily share your bookmarks and collections with others.
                    Create a shareable link that you can send at the click of a
                    button.
                  </p>
                  <div className="mt-12 text-center md:text-left">
                    <a
                      href="#"
                      className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-[hsl(231,69%,60%)] hover:bg-white hover:text-[hsl(231,69%,60%)] hover:border-[hsl(231,69%,60%)] duration-200"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* download heading */}
      <section id="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Download the extension
          </h2>
          <p className="max-w-lg mx-auto text-center text-lg text-[hsl(229,8%,60%)]">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
      </section>
      {/* download boxes */}
      <section id="download-boxes" className="py-32">
        {/* boxes container */}
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          {/* box 1 */}
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            {/* img */}
            <div className="flex justify-center">
              <img src="/bookmark/logo-chrome.svg" alt="" />
            </div>
            {/* text */}
            <h5 className="pt-6 text-xl font-bold">Add to Chorme</h5>
            <p className="text-gray-400">Minimu Version 62</p>
            {/* dots */}
            <div className="bg-[url('/bookmark/bg-dots.svg')] bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="#"
                className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-[hsl(231,69%,60%)] hover:text-[hsl(231,69%,60%)] hover:bg-white border-[hsl(231,69%,60%)]"
              >
                Add & Install Extension
              </a>
            </div>
          </div>
          {/* box 2 */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg  md:mt-8">
              {/* img */}
              <div className="flex justify-center">
                <img src="/bookmark/logo-firefox.svg" alt="" />
              </div>
              {/* text */}
              <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
              <p className="text-gray-400">Minimu Version 55</p>
              {/* dots */}
              <div className="bg-[url('/bookmark/bg-dots.svg')] bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-[hsl(231,69%,60%)] hover:text-[hsl(231,69%,60%)] hover:bg-white border-[hsl(231,69%,60%)]"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          </div>
          {/* box 3 */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg  md:mt-16">
              {/* img */}
              <div className="flex justify-center">
                <img src="/bookmark/logo-opera.svg" alt="" />
              </div>
              {/* text */}
              <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
              <p className="text-gray-400">Minimu Version 46</p>
              {/* dots */}
              <div className="bg-[url('/bookmark/bg-dots.svg')] bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-[hsl(231,69%,60%)] hover:text-[hsl(231,69%,60%)] hover:bg-white border-[hsl(231,69%,60%)]"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq heading */}
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg px-6 mx-auto text-center text-lg text-[hsl(229,8%,60%)]">
            Here are some of our FAQs. If you have any other questions you'd
            like to be answered please feel free to email us.
          </p>
        </div>
      </section>
      {/* faq accordion */}
      <section id="faq-accordion">
        {/* main container */}
        <div className="container mx-auto px-6 mb-32">
          {/* accordion container */}
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            {/* tab 1 */}
            <div className="py-1 border-b outline-none group" tabindex="1">
              {/* tab flex container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* tab title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What is Bookmark?
                </div>
                {/* arrow */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  {/* <img src="/bookmark/icon-arrow.svg" alt="" className="" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>
              {/* tab inner content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justfy text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                  fugiat quasi, temporibus deleniti sapiente odio id dolorum
                  eaque doloribus consequatur eum, culpa explicabo sint cumque
                  commodi sunt. Vel, corporis. Possimus.
                </p>
              </div>
            </div>
            {/* tab 2 */}
            <div className="py-1 border-b outline-none group" tabindex="2">
              {/* tab flex container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* tab title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  How can I request a new browser?
                </div>
                {/* arrow */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  {/* <img src="/bookmark/icon-arrow.svg" alt="" className="" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>
              {/* tab inner content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justfy text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas laborum tempore qui, ipsa iusto, maiores officia
                  fugiat facilis officiis numquam consequatur illo perspiciatis
                  modi voluptatum unde adipisci odio culpa exercitationem atque
                  magni ipsum amet est repellat. Harum, sunt quasi iste animi
                  amet nesciunt ducimus non hic corrupti tempora odit?
                  Excepturi?
                </p>
              </div>
            </div>
            {/* tab 3 */}
            <div className="py-1 border-b outline-none group" tabindex="3">
              {/* tab flex container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* tab title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  Is there a mobile app?
                </div>
                {/* arrow */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  {/* <img src="/bookmark/icon-arrow.svg" alt="" className="" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>
              {/* tab inner content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justfy text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo adipisci neque, expedita praesentium pariatur
                  eligendi ex quisquam cumque quas ut numquam vero sunt et harum
                  facilis nemo quos quia animi repudiandae culpa earum suscipit
                  blanditiis vitae. Odit id vero omnis porro. Doloribus sunt
                  deleniti itaque nam perferendis eaque facere vero, quis
                  voluptas illo sint quo! Molestias, distinctio? Provident
                  recusandae numquam dignissimos culpa eveniet hic facere quos
                  quo, soluta error exercitationem. Harum sed error saepe
                  corrupti! Recusandae obcaecati voluptate, voluptates id rem
                  molestias quos quas fugit. Quas dolores natus magnam saepe
                  molestias fuga eum aperiam quod, dicta ea reiciendis, iusto
                  architecto dolore? Laborum nam doloribus libero asperiores
                  culpa aut saepe.
                </p>
              </div>
            </div>
            {/* tab 4 */}
            <div className="py-1 border-b outline-none group" tabindex="4">
              {/* tab flex container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* tab title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What about other Chromium browsers?
                </div>
                {/* arrow */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  {/* <img src="/bookmark/icon-arrow.svg" alt="" className="" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>
              {/* tab inner content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justfy text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio illo quibusdam sit sunt quasi quaerat tempora quae?
                  Sint, vel rerum. Earum maiores cupiditate nam necessitatibus
                  voluptatem eos a esse iure. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Maxime dolore hic iste! Dolorem
                  eaque nisi harum earum tempora excepturi, consequatur
                  explicabo recusandae dolorum, fugit asperiores? Aspernatur
                  quam ipsam eveniet sapiente?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* newsletter section */}
      <section id="newsletter" className="bg-[hsl(231,69%,60%)]">
        {/* main container */}
        <div className="max-w-lg mx-auto py-24">
          <p className="mb-6 text-lg tracking-widest text-center text-white uppercase">
            35,000+ Already Joined
          </p>
          <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
            Stay up-to-date with what we're doing
          </h2>
          {/* form */}
          <form
            action=""
            className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0"
          >
            {/* input & button container */}
            <div className="flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0">
              <input
                type="text"
                className="flex-1 px-6 py-3 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0 placeholder-gray-900 bg-gray-50"
                placeholder="Enter your email address"
              />
              <input
                type="submit"
                className="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer foucs:outline-none bg-[hsl(0,94%,66%)] hover:opacity-90"
                value="Contact Us"
              />
            </div>
          </form>
        </div>
      </section>
      {/* footer */}
      <footer className="py-16 bg-[hsl(229,31%,21%)]">
        {/* footer flex container */}
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
          {/* log/menu container */}
          <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-[hsl(229,8%,60%)]">
            <img
              src="/bookmark/logo-bookmark-footer.svg"
              alt=""
              className="mb-10 md:mb-0"
            />
            <a
              href="#features"
              className="uppercase hover:text-[hsl(0,94%,66%)]"
            >
              Features
            </a>
            <a
              href="#download"
              className="uppercase hover:text-[hsl(0,94%,66%)]"
            >
              Download
            </a>
            <a href="#faq" className="uppercase hover:text-[hsl(0,94%,66%)]">
              FAQ
            </a>
          </div>
          {/* social container */}
          <div className="flex space-x-10">
            <a href="#">
              <img
                src="/bookmark/icon-facebook.svg"
                alt=""
                className="h-6 ficon3"
              />
            </a>
            <a href="#">
              <img
                src="/bookmark/icon-twitter.svg"
                alt=""
                className="h-6 ficon3"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Bookmark;
