import { useEffect } from "react";

function Clipboard() {
  useEffect(() => {
    document.title = "Clipboard";

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) favicon.href = "/clipboard/logo.svg";
  }, []);

  return (
    <div className="bg-[url('/clipboard/bg-header-mobile.png')] md:bg-[url('/clipboard/bg-header-desktop.png')] bg-no-repeat md:bg-contain bg-cover">
      <div>
        {/* hero section */}
        <section id="hero">
          <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
            <img
              src="/clipboard/logo.svg"
              alt="logo"
              className="mx-auto my-16"
            />
            <h3 className="mb-8 text-4xl font-bold text-[hsl(210,10%,33%)] md:text-5xl">
              A history of everything you copy
            </h3>
            <p className="max-w-3xl mx-auto mb-10 text-2xl text-[hsl(210,10%,33%)]">
              Clipboard allows you to track and organize everything you copy.
              Instantly access your clipboard on all your devices.
            </p>

            {/* button container */}
            <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
              <a
                href="#"
                className="py-4 px-8 rounded-full shadow-lg bg-[hsl(171,66%,44%)] duration-200 hover:opacity-80"
              >
                Download for iOS
              </a>
              <a
                href="#"
                className="py-4 px-8 rounded-full shadow-lg bg-[hsl(233,100%,69%)] duration-200 hover:opacity-80"
              >
                Download for Mac
              </a>
            </div>
          </div>
        </section>
        {/* snippets section */}
        <section id="snippets">
          <div className="max-w-6xl mx-auto text-center my-20 px-10">
            <h3 className="mb-8 text-4xl font-bold text-[hsl(210,10%,33%)] md:text-5xl">
              Keep track of your snippets
            </h3>
            <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-[hsl(210,10%,33%)]">
              Clipboard instantly stores any item you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and iOS apps will help you organize evrything.
            </p>
          </div>
        </section>
        {/* features section */}
        <section id="features">
          <div className="max-w-6xl mx-auto text-center my-20 px-10">
            <div className="relative flex flex-col md:flex-row md:space-x-32">
              {/* image */}
              <div className="md:w-1/2">
                <img
                  src="/clipboard/image-computer.png"
                  alt=""
                  className="md:absolute top-0 right-[50%]"
                />
              </div>
              {/* items container */}
              <div className="flex-flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 text-center md:text-left md:pl-16">
                {/* item 1 */}
                <div>
                  <h5 className="mb-2 text-2xl font-bold text-[hsl(210,10%,33%)]">
                    Quick Search
                  </h5>
                  <p className="max-w-md mx-auto text-[hsl(210,10%,33%)]">
                    Easily search your snippets by content, category, web
                    address, application, and more.
                  </p>
                </div>
                {/* item 2 */}
                <div>
                  <h5 className="mb-2 text-2xl font-bold text-[hsl(210,10%,33%)]">
                    iCloud Sync
                  </h5>
                  <p className="max-w-md mx-auto text-[hsl(210,10%,33%)]">
                    Instantly saves and syncs snippets across all yor devices.
                  </p>
                </div>
                {/* item 3 */}
                <div>
                  <h5 className="mb-2 text-2xl font-bold text-[hsl(210,10%,33%)]">
                    Complete History
                  </h5>
                  <p className="max-w-md mx-auto text-[hsl(210,10%,33%)]">
                    Retrieve any snippets from the first moment you started
                    using the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* access anywhere section */}
        <section id="access">
          <div className="max-w-6xl mx-auto text-center my-20 px-10">
            <h3 className="mb-8 text-4xl font-bold text-[hsl(210,10%,33%)] md:text-5xl">
              Access Clipboard Anywhere
            </h3>
            <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-[hsl(210,10%,33%)]">
              Whether you're on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </p>
            <img
              src="/clipboard/image-devices.png"
              alt="devices"
              className="mx-auto"
            />
          </div>
        </section>
        {/* supercharge section */}
        <section id="supercharge">
          <div className="max-w-6xl mx-auto text-center my-20 px-10">
            <h3 className="mb-8 text-4xl font-bold text-[hsl(210,10%,33%)] md:text-5xl">
              Supercharge Your Workflow
            </h3>
            <p className="max-w-3xl mx-auto mb-16 text-xl leading-9 text-center text-[hsl(210,10%,33%)]">
              We've got the tools to boost your productivity.
            </p>
            {/* Items container */}
            <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
              {/* item 1 */}
              <div className="flex flex-col items-center space-y-5">
                <img
                  src="/clipboard/icon-blacklist.svg"
                  alt="blacklist"
                  className="mb-6"
                />
                <h5 className="mb-2 text-2xl font-bold text-[hsl(210,10%,33%)]">
                  Create Blacklists
                </h5>
                <p className="max-w-md mx-auto text-[hsl(210,10%,33%)]">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              {/* item 2 */}
              <div className="flex flex-col items-center space-y-5">
                <img
                  src="/clipboard/icon-text.svg"
                  alt="blacklist"
                  className="mb-6"
                />
                <h5 className="mb-2 text-2xl font-bold text-[hsl(210,10%,33%)]">
                  Plain Text Snippets
                </h5>
                <p className="max-w-md mx-auto text-[hsl(210,10%,33%)]">
                  Remove unwanted formatting from copied text for a consistent
                  look.
                </p>
              </div>
              {/* item 3 */}
              <div className="flex flex-col items-center space-y-5">
                <img
                  src="/clipboard/icon-preview.svg"
                  alt="blacklist"
                  className="mb-6"
                />
                <h5 className="mb-2 text-2xl font-bold text-[hsl(210,10%,33%)]">
                  Sneak Preview
                </h5>
                <p className="max-w-md mx-auto text-[hsl(210,10%,33%)]">
                  Quick preview of all snippets on your Clipboard for easy
                  access.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* references section */}
        <section id="references">
          <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
            <img src="/clipboard/logo-google.png" alt="google" />
            <img src="/clipboard/logo-ibm.png" alt="ibm" />
            <img src="/clipboard/logo-microsoft.png" alt="microsoft" />
            <img src="/clipboard/logo-hp.png" alt="hp" />
            <img
              src="/clipboard/logo-vector-graphics.png"
              alt="vector-graphics"
            />
          </div>
        </section>
        {/* bottom cta section */}
        <section id="bottom">
          <div className="max-w-6xl mx-auto text-center my-20 px-10">
            <h3 className="mb-8 text-4xl font-bold text-[hsl(210,10%,33%)] md:text-5xl">
              Clipboard for iOS and MacOS
            </h3>
            <p className="max-w-3xl mx-auto mb-16 text-xl leading-9 text-center text-[hsl(210,10%,33%)]">
              Available for free on the App Store. Download for Mac or iOS, sync
              with iCloud and you're ready to start adding to your Clipboard.
            </p>
            {/* button container */}
            <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
              <a
                href="#"
                className="py-4 px-8 rounded-full shadow-lg bg-[hsl(171,66%,44%)] duration-200 hover:opacity-80"
              >
                Download for iOS
              </a>
              <a
                href="#"
                className="py-4 px-8 rounded-full shadow-lg bg-[hsl(233,100%,69%)] duration-200 hover:opacity-80"
              >
                Download for Mac
              </a>
            </div>
          </div>
        </section>
        {/* footer */}
        <footer className="bg-gray-200">
          <div className="max-w-6xl mx-auto text-center mt-20 pb-4 px-10">
            <div className="flex flex-col items-center justify-between md:flex-row">
              {/* image */}
              <img src="/clipboard/logo.svg" alt="logo" className="scale-50" />
              {/* container for menus & social */}
              <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-[hsl(210,10%,33%)]">
                <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                  {/* menu 1 */}
                  <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div>
                      <a href="#" className="hover:text-[hsl(171,66%,44%)]">
                        FAQs
                      </a>
                    </div>
                    <div>
                      <a href="#" className="hover:text-[hsl(171,66%,44%)]">
                        Contact Us
                      </a>
                    </div>
                  </div>
                  {/* menu 2 */}
                  <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div>
                      <a href="#" className="hover:text-[hsl(171,66%,44%)]">
                        Privacy Policy
                      </a>
                    </div>
                    <div>
                      <a href="#" className="hover:text-[hsl(171,66%,44%)]">
                        Press Kit
                      </a>
                    </div>
                  </div>
                  {/* menu 3 */}
                  <div className="flex flex-col space-y-4 text-center md:text-left">
                    <div>
                      <a href="#" className="hover:text-[hsl(171,66%,44%)]">
                        Install Guide
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* social */}
              <div className="flex justify-between w-32 py-1">
                <a href="#">
                  <img
                    src="/clipboard/icon-facebook.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </a>
                <a href="#">
                  <img
                    src="/clipboard/icon-twitter.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </a>
                <a href="#">
                  <img
                    src="/clipboard/icon-instagram.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Clipboard;
