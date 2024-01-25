function Avatar({ img_url, alt_name, size = "base" }) {
  const sizeProperties = {
    small: "h-16 w-16 border-2",
    base: "h-32 w-32 md:h-48 md:w-48 border-4",
  };

  return (
    <div>
      <img
        className={`block text-center rounded-full border-peach-200 ${sizeProperties[size]}`}
        src={img_url}
        alt={alt_name}
      />
    </div>
  );
}

export default Avatar;
