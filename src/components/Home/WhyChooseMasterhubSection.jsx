import React from "react";
import {
  buildResume1,
  support,
  networking,
  WorldwideStudents,
  WhyChooseMonkshubBg,
} from "../../assets/images";
import { MotivationalVideo } from "../../assets/Videos";
export default function WhyChooseMasterhubSection() {
  return (
    <>
      <section className="bg-gray-200 py-20">
        <header className="text-center  max-w-xl mx-auto pb-10  ">
          <h1 className="text-5xl font-bold ">Why Choose Masters Hub</h1>
          <p className="text-gray-600 ">
            Masters in Hub offers expert-led courses, hands-on training, and
            industry insights to accelerate career growth rapidly.
          </p>
        </header>
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-10  p-10  "
            style={{ backgroundImage: `url(${WhyChooseMonkshubBg})` }}
          >
            <div className="relative">
              <div className="px-4 py-2 bg-white inline-flex gap-2 items-centers">
                <img src={WorldwideStudents} alt="" />
                <div>
                  <h1 className="font-bold text-2xl">100K</h1>
                  <p className="text-gray-600">Worldwide Students</p>
                </div>
              </div>

              <div className="absolute left-0 bottom-0 px-4 py-2 bg-white inline-flex gap-2 items-centers">
                <img src={support} alt="" />
                <div>
                  <h1 className="font-bold text-2xl">Support</h1>
                  <p className="text-gray-600">Lifetime Support</p>
                </div>
              </div>
            </div>

            {/* video */}
            <div>
              <video
                src={MotivationalVideo}
                controls
                className="w-full h-auto rounded-lg shadow-lg"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="relative">
              <div className="px-4 py-2 bg-white inline-flex gap-2 items-centers">
                <img src={networking} alt="" />
                <div>
                  <h1 className="font-bold text-2xl">Networking</h1>
                  <p className="text-gray-600">
                    Connection, Collaboration, and Growth
                  </p>
                </div>
              </div>

              <div className="absolute left-0 bottom-0 px-4 py-2 bg-white inline-flex gap-2 items-centers">
                <img src={buildResume1} alt="" />
                <div>
                  <h1 className="font-bold text-2xl">Build Resume</h1>
                  <p className="text-gray-600">
                    Build your success with proven expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
