import { useEffect } from "react";

function TestimonialGrid() {
  useEffect(() => {
    document.title = "Testimonial Grid";

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) favicon.href = "/testimonialGrid/favicon-32x32.png";
  }, []);

  return (
    <div className="bg-gray-200">
      {/* global container */}
      <div className="container mx-auto max-w-7xl p-2 md:p-10">
        {/* grid container */}
        <div className="grid gap-6 grid-cols-1 text-white md:grid-cols-4 md:grid-rows-2">
          {/* box 1 */}
          <div className="relative p-10 rounded-xl bg-purple-700 md:col-span-2">
            {/* quotes image */}
            <img
              src="/testimonialGrid/bg-pattern-quotation.svg"
              alt=""
              className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
            />
            {/* boxheader */}
            <div className="flex z-10 space-x-4">
              <img
                src="/testimonialGrid/image-daniel.jpg"
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Daniel Clifford</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* large text */}
            <div className="p relative z-10 mt-6 text-xl">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got evry penny's worth.
            </div>
            {/* small text */}
            <p className="mt-6 opacity-50 line-clamp-6">
              "I was an EMT for many years before I joined the bootcamp. I've
              been looking to make a transition and have heard some people who
              had an amazing experience here. I shigned up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I've successfully switched
              careers, working as a Software Engineer at a VR startup."
            </p>
          </div>

          {/* box 2 */}
          <div className="p-10 rounded-xl bg-gray-600">
            {/* boxheader */}
            <div className="flex  space-x-4">
              <img
                src="/testimonialGrid/image-jonathan.jpg"
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Jonathan Walters</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* large text */}
            <div className="p mt-6 text-xl">
              The team was very supportive and kept me motivated.
            </div>
            {/* small text */}
            <p className="mt-6 opacity-50 line-clamp-6">
              "I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I've made in myself."
            </p>
          </div>

          {/* box 3 */}
          <div className="hidden p-10 rounded-xl text-gray-900 bg-white md:block md:row-span-2">
            {/* boxheader */}
            <div className="flex  space-x-4">
              <img
                src="/testimonialGrid/image-kira.jpg"
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Kira Whittle</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* large text */}
            <div className="p mt-6 text-xl">
              Sucha a life-changing experience. Hightly recommended!
            </div>
            {/* small text */}
            <p className="mt-6 opacity-50 line-clamp-[25]">
              "Before joining the bootcamp, I've never written a line of code. I
              needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I've often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend!"
            </p>
          </div>

          {/* box 4 */}
          <div className="p-10 rounded-xl text-gray-900 bg-white">
            {/* boxheader */}
            <div className="flex  space-x-4">
              <img
                src="/testimonialGrid/image-jeanette.jpg"
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Jeanette Harmon</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* large text */}
            <div className="p mt-6 text-xl">
              An overall wonderful and rewarding experience.
            </div>
            {/* small text */}
            <p className="mt-6 opacity-50 line-clamp-6">
              "Thank you for the wonderful experience! I now have a job I really
              enjoy, and make a good living while doing something I love."
            </p>
          </div>

          {/* box 5 */}
          <div className="p-10 rounded-xl bg-gray-900 md:col-span-2">
            {/* boxheader */}
            <div className="flex  space-x-4">
              <img
                src="/testimonialGrid/image-patrick.jpg"
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Patrick Abrams</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* large text */}
            <div className="p mt-6 text-xl">
              Awsome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </div>
            {/* small text */}
            <p className="mt-6 opacity-50 line-clamp-6">
              "The staff seem genuinely concerned about my progress which I find
              really refreshing. The program gave me the confidence necessary to
              be able to go out in the world and present myself as a capable
              junior developer. The standard is above the rest. You will get the
              personal attention you need from an incredible community of smart
              and amazing people."
            </p>
          </div>

          {/* box 6 */}
          <div className=" p-10 rounded-xl text-gray-900 bg-white md:hidden">
            {/* boxheader */}
            <div className="flex  space-x-4">
              <img
                src="/testimonialGrid/image-kira.jpg"
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Kira Whittle</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* large text */}
            <div className="p mt-6 text-xl">
              Sucha a life-changing experience. Hightly recommended!
            </div>
            {/* small text */}
            <p className="mt-6 opacity-50 line-clamp-6">
              "Before joining the bootcamp, I've never written a line of code. I
              needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I've often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialGrid;
