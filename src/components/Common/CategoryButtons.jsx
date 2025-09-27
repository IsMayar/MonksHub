export default function CategoryButtons({ categories = [], show = true }) {
  if (!show || categories.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className="flex items-center gap-2 hover:bg-emerald-500 border px-4 py-3 rounded-full"
        >
          <img src={cat.icon} alt={cat.label} className="w-5 h-5" />
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
