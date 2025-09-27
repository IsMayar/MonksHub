import { mentorsText, DetailedMentorsData } from "../../constants/index";
import { Link } from "react-router-dom";
import CustomButton from "../Common/CustomButton";

export default function NextGeneration() {
  return (
    <section className="py-20 bg-gray-100">
      {/* Header */}
      <header className="container mx-auto px-4 md:pb-10 text-center">
        <h1 className="text-3xl md:text-5xl max-w-3xl mx-auto font-bold mb-4">
          {mentorsText.header.title}
        </h1>
        <p className="max-w-md md:max-w-xl mx-auto text-gray-600">
          {mentorsText.header.subtitle}
        </p>
      </header>

      {/* Mentor Cards */}
      <div className="container mx-auto px-4 mb-10 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {DetailedMentorsData.map((mentor) => (
          <Link to={`/mentor/${mentor.id}`} key={mentor.id}>
            <div className="relative group">
              {/* Gradient Shadow Outside */}
              <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-gradient-to-r from-green-400 via-white to-purple-500"></div>

              {/* Actual Card */}
              <div
                className="flex flex-col items-center p-8 bg-white rounded-2xl border border-gray-200 text-center 
                transition-all duration-300 hover:border-green-500 hover:-translate-y-1"
              >
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-md object-cover transition-transform duration-500 group-hover:scale-105"
                  src={mentor.image}
                  alt={mentor.name}
                />
                <div>
                  <h5 className="mb-1 text-xl font-semibold text-gray-900">
                    {mentor.name}
                  </h5>
                  <span className="text-sm text-gray-500">
                    {mentor.position}
                  </span>
                </div>
                <div className="flex flex-nowrap gap-2 mt-4 md:mt-6 justify-center overflow-x-auto scrollbar-hide">
                  {mentor.courses.map((course, index) => (
                    <span
                      key={index}
                      className="whitespace-nowrap py-1.5 px-3 text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <CustomButton
          text="View Details"
          onClick={() => alert("View Details")}
        />
      </div>
    </section>
  );
}
