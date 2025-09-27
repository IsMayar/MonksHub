export default function Card({ img, name, time, title, desc, big = false }) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden flex flex-col ${
        big ? "col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`${big ? "h-64 md:h-72 lg:h-full" : "h-48"} overflow-hidden`}
      >
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
            <span className="font-semibold text-gray-800">{name}</span>
            <span>{time}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        </div>
        {desc && (
          <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        )}
      </div>
    </div>
  );
}
