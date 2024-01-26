const colorClasses = {
  amber: "bg-amber-200 text-amber-900",
  sky: "bg-sky-200 text-sky-900",
  blueviolet: "bg-blueviolet-200 text-blueviolet-900",
  lake: "bg-lake-200 text-lake-900",
};

const sizeClasses = {
  sm: "text-[0.625rem] lg:text-xs",
  base: "text-xs md:text-sm",
};

function Tag({ children, color, size = "base" }) {
  return (
    <span
      className={`me-2 rounded-full border border-stone-300 px-2.5 py-0.5 font-medium 
        ${colorClasses[color]} ${sizeClasses[size]}`}
    >
      {children}
    </span>
  );
}

export default Tag;
