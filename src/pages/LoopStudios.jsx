function LoopStudios() {
  return (
    <div className="bg-[url('/loopStudios/mobile/image-hero.jpg')] md:bg-[url('/loopStudios/desktop/image-hero.jpg')] bg-no-repeat bg-center md:bg-cover md:bg-top ">
      {/* hero section */}
      <section id="hero">
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
          </nav>
        </div>
      </section>
    </div>
  );
}

export default LoopStudios;
