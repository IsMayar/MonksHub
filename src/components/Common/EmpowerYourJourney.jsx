import { cardsData } from "../../constants/index";
import Card from "./Card";
import CustomButton from "./CustomButton";

export default function EmpowerYourJourney() {
  return (
    <section className="container mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-end px-6 py-12 bg-white w-full">
        {/* Text */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center md:text-left max-w-3xl">
          Empower Your Journey with <br className="hidden sm:block" />
          Expert Career Insights
        </h2>

        {/* Button */}
        <CustomButton text="View All Blogs" />
      </header>

      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              img={card.img}
              name={card.name}
              time={card.time}
              title={card.title}
              desc={card.desc}
              big={card.big}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
