import { FiArrowRight } from "react-icons/fi";

export default function CustomButton({ text, onClick, variant }) {
  const baseStyles =
    "group flex items-center gap-3 rounded-full font-medium pl-4 pr-1 py-1 transition-all duration-300 w-full sm:w-auto";

  const defaultStyles =
    "border border-gray-600 hover:bg-emerald-500 text-gray-800";

  const bestTalentStyles =
    "bg-white text-gray-900 hover:bg-emerald-500 hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${
        variant === "bestTalent" ? bestTalentStyles : defaultStyles
      }`}
    >
      {/* Button Text */}
      <span className="text-sm sm:text-base">{text}</span>

      {/* Icon Wrapper */}
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 
          ${
            variant === "bestTalent"
              ? "bg-gray-900 text-white -rotate-45 group-hover:bg-white group-hover:text-black group-hover:rotate-0"
              : "border border-gray-600 bg-gray-100 -rotate-45 group-hover:rotate-0"
          }`}
      >
        <FiArrowRight className="w-5 h-5" />
      </span>
    </button>
  );
}
