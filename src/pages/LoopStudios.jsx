import { useEffect } from "react";

function LoopStudios() {
  // hamburger menu

  function openMenu() {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    btn.classList.toggle("open");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  }

  useEffect(() => {
    document.title = "Loop Studios";
    openMenu();

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) favicon.href = "/loopStudios/favicon-32x32.png";
  }, []);
  return (
    <div>
      {/* hero section */}
      <section
        id="hero"
        className="bg-[url('/loopStudios/mobile/image-hero.jpg')] md:bg-[url('/loopStudios/desktop/image-hero.jpg')] bg-no-repeat bg-center md:bg-cover md:bg-top "
      >
        <div className="container max-w-6xl mx-auto px-6 py-12 ">
          {/* menu/logo container */}
          <nav className="flex items-center justify-between font-bold text-white">
            {/* logo */}
            <img src="/loopStudios/logo.svg" alt="logo" className="" />
            {/* menu */}
            <div className="hidden h-10 font-alata md:flex md:space-x-8">
              <div className="group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Carrers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
            {/* hamburger button */}
            <div className="md:hidden">
              <button
                id="menu-btn"
                className="z-40 block hamburger md:hidden focus:outline-none"
                onClick={openMenu}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </nav>
          {/* mobile menu */}
          <div
            id="menu"
            className="absolute top-0 bottom-0 left-0 hidden flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
          >
            <a href="#" className="hover:text-pink-500">
              About
            </a>
            <a href="#" className="hover:text-pink-500">
              Carrers
            </a>
            <a href="#" className="hover:text-pink-500">
              Events
            </a>
            <a href="#" className="hover:text-pink-500">
              Products
            </a>
            <a href="#" className="hover:text-pink-500">
              Support
            </a>
          </div>

          {/* text box */}
          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>
      {/* feature section */}
      <section id="feature">
        {/* feature container */}
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          {/* image */}
          <img src="/loopStudios/desktop/image-interactive.jpg" alt="" />
          {/* text container */}
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 mx-auto font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The leader in interactive VR
            </h2>
            <p className="max-w-md mx-auto text-center md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
      {/* creations section */}
      <section id="creations">
        {/* creations container */}
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          {/* creations header */}
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>
            <button className="hidden px-10 mx-2 my-0 font-bold tracking-[0.3em] uppercase border-2 border-black font-alata hover:bg-black hover:text-white md:block">
              See All
            </button>
          </div>
          {/* items container 1 */}
          <div className="flex flex-col justify-between gap-0 w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
            {/* item 1 */}
            <div className="group relative overflow-hidden md:w-1/4">
              {/* desktop */}
              <img
                src="/loopStudios/desktop/image-deep-earth.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile */}
              <img
                src="/loopStudios/mobile/image-deep-earth.jpg"
                alt=""
                className="md:hidden w-full duration-200  group-hover:scale-110"
              />
              {/* item gradient */}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              {/* item text */}
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Deep Earth
              </h5>
            </div>
            {/* item 2 */}
            <div className="group relative overflow-hidden md:w-1/4">
              {/* desktop */}
              <img
                src="/loopStudios/desktop/image-night-arcade.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile */}
              <img
                src="/loopStudios/mobile/image-night-arcade.jpg"
                alt=""
                className="md:hidden w-full duration-200  group-hover:scale-110"
              />
              {/* item gradient */}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              {/* item text */}
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Night Arcade
              </h5>
            </div>
            {/* item 3 */}
            <div className="group relative overflow-hidden md:w-1/4">
              {/* desktop */}
              <img
                src="/loopStudios/desktop/image-soccer-team.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile */}
              <img
                src="/loopStudios/mobile/image-soccer-team.jpg"
                alt=""
                className="md:hidden w-full duration-200  group-hover:scale-110"
              />
              {/* item gradient */}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              {/* item text */}
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Soccer Team VR
              </h5>
            </div>
            {/* item 4 */}
            <div className="group relative overflow-hidden md:w-1/4">
              {/* desktop */}
              <img
                src="/loopStudios/desktop/image-grid.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile */}
              <img
                src="/loopStudios/mobile/image-grid.jpg"
                alt=""
                className="md:hidden w-full duration-200  group-hover:scale-110"
              />
              {/* item gradient */}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              {/* item text */}
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                The Grid
              </h5>
            </div>
          </div>
          {/* items container 2 */}
          <div className="flex flex-col justify-between gap-0 w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8 mt-6">
            {/* item 1 */}
            <div className="group relative overflow-hidden md:w-1/4">
              {/* desktop */}
              <img
                src="/loopStudios/desktop/image-from-above.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile */}
              <img
                src="/loopStudios/mobile/image-from-above.jpg"
                alt=""
                className="md:hidden w-full duration-200  group-hover:scale-110"
              />
              {/* item gradient */}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              {/* item text */}
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                From Up Above VR
              </h5>
            </div>
            {/* item 2 */}
            <div className="group relative overflow-hidden md:w-1/4">
              {/* desktop */}
              <img
                src="/loopStudios/desktop/image-pocket-borealis.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile */}
              <img
                src="/loopStudios/mobile/image-pocket-borealis.jpg"
                alt=""
                className="md:hidden w-full duration-200  group-hover:scale-110"
              />
              {/* item gradient */}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              {/* item text */}
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Pocket Borealis
              </h5>
            </div>
            {/* item 3 */}
            <div className="group relative overflow-hidden md:w-1/4">
              {/* desktop */}
              <img
                src="/loopStudios/desktop/image-curiosity.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile */}
              <img
                src="/loopStudios/mobile/image-curiosity.jpg"
                alt=""
                className="md:hidden w-full duration-200  group-hover:scale-110"
              />
              {/* item gradient */}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              {/* item text */}
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                The Curiosity
              </h5>
            </div>
            {/* item 4 */}
            <div className="group relative overflow-hidden md:w-1/4">
              {/* desktop */}
              <img
                src="/loopStudios/desktop/image-fisheye.jpg"
                alt=""
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile */}
              <img
                src="/loopStudios/mobile/image-fisheye.jpg"
                alt=""
                className="md:hidden w-full duration-200  group-hover:scale-110"
              />
              {/* item gradient */}
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
              {/* item text */}
              <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
                Make It Fisheye
              </h5>
            </div>
          </div>
          {/* bottom button container */}
          <div className="flex justify-center mt-10 md:hidden">
            <button className="w-full px-10 py-2 mx-2 my-0 font-bold tracking-[0.3em] uppercase border-2 border-black font-alata hover:bg-black hover:text-white md:hidden">
              See All
            </button>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="bg-black">
        {/* container */}
        <div className="container max-w-6xl py-10 mx-auto">
          {/* footer flex container */}
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
            {/* menu & logo container */}
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              <div className="h-8">
                {/* logo */}
                <img
                  src="/loopStudios/logo.svg"
                  alt="logo"
                  className="w-44 md:ml-3"
                />
              </div>
              {/* menu container */}
              <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                {/* imte 1 */}
                <div className="h-10 group">
                  <a href="#">About</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* imte 2 */}
                <div className="h-10 group">
                  <a href="#">Carrers</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* imte 3 */}
                <div className="h-10 group">
                  <a href="#">Events</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* imte 4 */}
                <div className="h-10 group">
                  <a href="#">Products</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                {/* imte 5 */}
                <div className="h-10 group">
                  <a href="#">Support</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>
            {/* social & copywright container */}
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              {/* icon container */}
              <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                {/* icon 1 */}
                <div className="h-8 group">
                  <img
                    src="/loopStudios/icon-facebook.svg"
                    alt=""
                    className="h-6 ficon"
                  />
                </div>
                {/* icon 2 */}
                <div className="h-8 group">
                  <img
                    src="/loopStudios/icon-twitter.svg"
                    alt=""
                    className="h-6 ficon"
                  />
                </div>
                {/* icon 3 */}
                <div className="h-8 group">
                  <img
                    src="/loopStudios/icon-pinterest.svg"
                    alt=""
                    className="h-6 ficon"
                  />
                </div>
                {/* icon 4 */}
                <div className="h-8 group">
                  <img
                    src="/loopStudios/icon-instagram.svg"
                    alt=""
                    className="h-6 ficon"
                  />
                </div>
              </div>
              {/* copywright */}
              <div className="font-bold">
                &copy; 2024 Loopstudios. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LoopStudios;
