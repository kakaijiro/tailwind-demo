import { useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

function Fylo() {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );

  function handleDarkMode() {
    setIsDarkMode((prev) => !prev);
  }

  useEffect(() => {
    document.title = "Fylo Website";

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) favicon.href = "/fylo/favicon-32x32.png";
  }, []);

  return (
    // darkMode container
    <div className={`${isDarkMode ? "dark" : ""}`}>
      {/* darkMode implement container */}
      <div className="dark:bg-[hsl(217,28%,15%)] dark:text-white font-opensans">
        {/* header */}
        <header className="container mx-auto pt-10 pb-10 px-6 text-center h-40 md:h-20">
          {/* logo */}
          <div className="bg-[url('/fylo/logo-light-mode.svg')] dark:bg-[url('/fylo/logo-dark-mode.svg')] bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"></div>

          {/* menu */}
          <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
            <a href="#features" className="hover:text-[hsl(176,68%,64%)]">
              Features
            </a>
            <a href="#testimonials" className="hover:text-[hsl(176,68%,64%)]">
              testimonials
            </a>

            {/* dark/light mode button */}
            <button
              id="theme-toggle"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2"
              onClick={handleDarkMode}
            >
              {/* Dark SVG Icon */}
              <svg
                id="theme-toggle-dark-icon"
                className={`w-5 h-5 ${isDarkMode ? "hidden" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              {/* Light SVG Icon */}
              <svg
                id="theme-toggle-light-icon"
                className={`w-5 h-5 ${isDarkMode ? "" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </header>
        {/* hero section */}
        <section
          id="hero"
          className="bg-[url('/fylo/bg-curvy-light-mode.svg')] dark:bg-[url('/fylo/bg-curvy-dark-mode.svg')] bg-no-repeat bg-contain bg-bottom"
        >
          {/* hero container */}
          <div className="container mx-auto px-6 text-center md:pt-2- pb-52">
            <img
              src="/fylo/illustration-intro.png"
              alt=""
              className="mx-auto"
            />
            <h1 className="mx-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text:text-4xl">
              All your files in one secure location, assessible anywhere.
            </h1>
            <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
              Fylo sotres all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <button className="p-3 rounded-full w-52 bg-[hsl(176,68%,64%)] hover:scale-95">
              Get Started
            </button>
          </div>
        </section>
        {/* features section */}
        <section
          id="features"
          className="pt-12 bg-gray-50 dark:bg-[hsl(218,28%,13%)]"
        >
          {/* features container */}
          <div className="container mx-auto px-6 pb-32">
            {/* 1st row */}
            <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
              {/* item 1 */}
              <div className="flex flex-col items-center space-y-2 md:w-1/2">
                <div className="flex items-center justify-center h-24 mb-6">
                  <img src="/fylo/icon-access-anywhere.svg" alt="" />
                </div>
                <h3 className="text-xl font-bold">
                  Access your file form anywhere
                </h3>
                <p className="max-w-md">
                  The ability to use a smartphone, tablet, or computer to access
                  your account means your files follow you everywhere.
                </p>
              </div>

              {/* item 2 */}
              <div className="flex flex-col items-center space-y-2 md:w-1/2">
                <div className="flex items-center justify-center h-24 mb-6">
                  <img src="/fylo/icon-security.svg" alt="" />
                </div>
                <h3 className="text-xl font-bold">Security you can trust</h3>
                <p className="max-w-md">
                  2-factor authentication and user-controlled encryption are
                  just a couple of the security features we allow to help secure
                  your files.
                </p>
              </div>
            </div>

            {/* 2nd row */}
            <div className="flex flex-col space-y-24 mt-28 text-center md:flex-row md:space-y-0">
              {/* item 3 */}
              <div className="flex flex-col items-center space-y-2 md:w-1/2">
                <div className="flex items-center justify-center h-24 mb-6">
                  <img src="/fylo/icon-collaboration.svg" alt="" />
                </div>
                <h3 className="text-xl font-bold">
                  Access your file form anywhere
                </h3>
                <p className="max-w-md">
                  The ability to use a smartphone, tablet, or computer to access
                  your account means your files follow you everywhere.
                </p>
              </div>

              {/* item 4 */}
              <div className="flex flex-col items-center space-y-2 md:w-1/2">
                <div className="flex items-center justify-center h-24 mb-6">
                  <img src="/fylo/icon-any-file.svg" alt="" />
                </div>
                <h3 className="text-xl font-bold">Security you can trust</h3>
                <p className="max-w-md">
                  2-factor authentication and user-controlled encryption are
                  just a couple of the security features we allow to help secure
                  your files.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* productive section */}
        <section
          id="productive"
          className="bg-white dark:bg-[hsl(217,28%,15%)]"
        >
          {/* productive container */}
          <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
            {/* image */}
            <div className="md:w-1/2">
              <img
                src="/fylo/illustration-stay-productive.png"
                alt=""
                className="mb-10"
              />
            </div>
            {/* content */}
            <div className="flex flex-col items-start md:w-1/2">
              <div className="flex flex-col space-y-5">
                <h4 className="max-w-md text-xl font-bold md:text-4xl">
                  Stay productive, wherever you are
                </h4>
                <p className="md:text-lg">
                  Never let location be an issue when accessing your files. Fylo
                  has you covered for all of your file storage needs.
                </p>
                <p className="md:text-lg">
                  Securely share files and folders with friends, family and
                  colleagues for live collaboration. No email attachments
                  required.
                </p>
              </div>
              {/* link */}
              <div className="block mt-4">
                <a
                  href="#"
                  className="border-b border-[hsl(176,68%,64%)] text-[hsl(176,68%,64%)]"
                >
                  See how Flyo works
                  <img
                    src="/fylo/icon-arrow.svg"
                    alt=""
                    className="inline pb-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* testimonials section */}
        <section
          id="testimonials"
          className="bg-gray-50 dark:bg-[hsl(217,28%,15%)]"
        >
          {/* testimonials container */}
          <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
            {/* boxes container */}
            <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
              {/* auotes image */}
              <img
                src="/fylo/bg-quotes.png"
                alt=""
                className="absolute left-1 -top-2 md:-top-16 md:w-20"
              />
              {/* box 1 */}
              <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-[hsl(219,30%,18%)] md:w-1/3">
                <p className="text-sm leading-5 md:text-lg">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                {/* customer info */}
                <div className="flex space-x-4">
                  <img
                    src="/fylo/profile-1.jpg"
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h5 className="text-sm font-semibold">Satish Patel</h5>
                    <p className="text-xs font-extralight">
                      Funder & CEO. Huddle
                    </p>
                  </div>
                </div>
              </div>

              {/* box 2 */}
              <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-[hsl(219,30%,18%)] md:w-1/3">
                <p className="text-sm leading-5 md:text-lg">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                {/* customer info */}
                <div className="flex space-x-4">
                  <img
                    src="/fylo/profile-2.jpg"
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h5 className="text-sm font-semibold">Bruce McKenzie</h5>
                    <p className="text-xs font-extralight">
                      Funder & CEO. SubHuddle
                    </p>
                  </div>
                </div>
              </div>

              {/* box 3 */}
              <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-[hsl(219,30%,18%)] md:w-1/3">
                <p className="text-sm leading-5 md:text-lg">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                {/* customer info */}
                <div className="flex space-x-4">
                  <img
                    src="/fylo/profile-3.jpg"
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h5 className="text-sm font-semibold">Eva Boyd</h5>
                    <p className="text-xs font-extralight">
                      Funder & ECO. QuosiHuddle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* early access section */}
        <section
          id="early-access"
          className="relative px-6 dark:bg-[hsl(216,53%,9%)] md:px-0"
        >
          <div className="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 dark:bg-[hsl(218,28%,13%)] md:px-16">
            <h5 className="text-2xl font-bold">Get early access today</h5>
            <p className="text-sm">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
            {/* input & button container */}
            <div className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6">
              <div className="w-full md:flex-1">
                <input
                  type="text"
                  className="w-full px-10 py-3 rounded-full focus:outline-none bg-white placeholder-gray-300"
                  placeholder="email@example.com"
                />
              </div>
              <button className="w-full p-3 px-6 rounded-full bg-[hsl(176,68%,64%)] md:w-56 hover:scale-95">
                Get Started For Free
              </button>
            </div>
          </div>
        </section>
        {/* footer */}
        <footer className="bg-[hsl(216,53%,9%)] text-gray-50">
          <div className="container mx-auto pt-12  px-5 pb-10">
            {/* flex container for all items */}
            <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
              {/* email & phone */}
              <div className="mt-10 space-y-6">
                <div className="flex items-center space-x-3 md:-mt-10">
                  <div className="w-6">
                    <img
                      src="/fylo/icon-phone.svg"
                      alt=""
                      className="scale-100"
                    />
                  </div>
                  <div>+813-1234-5678</div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6">
                    <img
                      src="/fylo/icon-email.svg"
                      alt=""
                      className="scale-100"
                    />
                  </div>
                  <div>info@fylo.io</div>
                </div>
              </div>
              {/* menus */}
              <div className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
                <div className="flex flex-col space-y-3">
                  <a
                    href="#"
                    className="duration-200 hover:text-[hsl(176,68%,64%)]"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="duration-200 hover:text-[hsl(176,68%,64%)]"
                  >
                    Job
                  </a>
                  <a
                    href="#"
                    className="duration-200 hover:text-[hsl(176,68%,64%)]"
                  >
                    Press
                  </a>
                  <a
                    href="#"
                    className="duration-200 hover:text-[hsl(176,68%,64%)]"
                  >
                    Blog
                  </a>
                </div>
                <div className="flex flex-col space-y-3">
                  <a
                    href="#"
                    className="duration-200 hover:text-[hsl(176,68%,64%)]"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#"
                    className="duration-200 hover:text-[hsl(176,68%,64%)]"
                  >
                    Terms
                  </a>
                  <a
                    href="#"
                    className="duration-200 hover:text-[hsl(176,68%,64%)]"
                  >
                    Privacy
                  </a>
                </div>
              </div>
              <div className="flex justify-center pb-10 space-x-3">
                <div>
                  <a href="#">
                    <img
                      src="/fylo/facebook.svg"
                      alt=""
                      className="p-2 bg-[hsl(217,28%,15%)] rounded-full ficon2"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img
                      src="/fylo/twitter.svg"
                      alt=""
                      className="p-2 bg-[hsl(217,28%,15%)] rounded-full ficon2"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img
                      src="/fylo/instagram.svg"
                      alt=""
                      className="p-2 bg-[hsl(217,28%,15%)] rounded-full ficon2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Fylo;
