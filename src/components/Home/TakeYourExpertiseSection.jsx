import {
  TakeYourExpertiseLeft1,
  TakeYourExpertiseLeft2,
  ExpertiseExploreCourses,
  ExpertiseLearning,
  ExpertiseLeftEnd,
  ExpertiseRightEnd,
  ExpertiseSignUp,
  mentor1,
  mentor2,
  mentor3,
  mentor4,
} from "../../assets/images";
export default function TakeYourExpertiseSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between py-10 gap-8 md:gap-0  mx-auto">
          {/* Left Div - Stacked Images */}
          <div className="w-full md:w-1/2 relative p-4  min-h-[900px] md:min-h-[500px] ">
            {/* Top Image */}
            <div className="relative rounded-xl md:overflow-hidden">
              <img
                src={TakeYourExpertiseLeft1}
                alt="Top"
                className="w-full md:w-[350px] h-auto rounded-xl"
              />

              {/* Overlay card */}
              <div
                className=" absolute -bottom-14 left-1/2 -translate-x-1/2 
                      md:top-4 md:right-8 md:left-auto md:translate-x-0  
                       bg-white rounded-xl text-center shadow-lg px-4 py-3"
              >
                <span className="text-xl font-semibold">100K Students</span>
                <div className="flex -space-x-2 mt-2 ">
                  <img
                    src={mentor1}
                    alt=""
                    className="w-12 h-12 object-cover rounded-full border-2 border-white"
                  />
                  <img
                    src={mentor2}
                    alt=""
                    className="w-12 h-12 object-cover rounded-full border-2 border-white"
                  />
                  <img
                    src={mentor3}
                    alt=""
                    className="w-12 h-12 object-cover rounded-full border-2 border-white"
                  />
                  <img
                    src={mentor4}
                    alt=""
                    className="w-12 h-12 object-cover rounded-full border-2 border-white"
                  />
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold border-2 border-white">
                    +
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Images */}
            <div className="absolute bottom-0 md:bottom-2 md:right-28  rounded-xl overflow-hidden shadow-lg ">
              <img
                src={TakeYourExpertiseLeft2}
                alt="Bottom"
                className="w-full md:w-[350px] h-auto rounded-xl"
              />
            </div>
            <div className="hidden absolute bottom-6 left-4 rounded-xl overflow-hidden">
              <img
                src={ExpertiseLeftEnd}
                alt="Bottom"
                className="w-32 h-32 rounded-xl"
              />
            </div>
          </div>

          {/* Right Div - Header + Text */}
          <div className="w-full md:w-1/2 p-4 min-h-[400px] md:min-h-[500px] flex flex-col justify-center">
            <h2 className="text-center md: text-left text-5xl font-bold mb-6 ">
              Take Your Expertise to the Next Level
            </h2>

            <div className="flex gap-3 p-4 items-center shadow-lg mb-8">
              <img
                src={ExpertiseSignUp}
                alt=""
                className="object-cover border bg-green-50 p-4 rounded-full "
              />
              <div className="space-y-1">
                <h1 className="text-2xl font-semibold">
                  Sign up and get started
                </h1>
                <p className="text-gray-600">
                  Create your account, and start learning instantly.
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-4 items-center shadow-lg mb-8 ">
              <img
                src={ExpertiseExploreCourses}
                alt=""
                className="object-cover border bg-red-50 p-4 rounded-full "
              />
              <div className="space-y-1">
                <h1 className="text-2xl font-semibold">
                  Explore courses tailored to you{" "}
                </h1>
                <p className="text-gray-600">
                  Browse a range of courses across various fields
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-4 items-center shadow-lg mb-8">
              <img
                src={ExpertiseLearning}
                alt=""
                className="object-cover border bg-purple-50 p-4 rounded-full "
              />
              <div className="space-y-1">
                <h1 className="text-2xl font-semibold">
                  Keep learning and growing
                </h1>
                <p className="text-gray-600">
                  Continue exploring and advancing your skills!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
