const Size = ({ onSelect }) => {
  const sizes = ["6", "7", "8", "9", "10"];

  return (
    <div className="p-4 bg-[#232227] rounded shadow tracking-wider">
      <h4 className="mb-2 font-semibold text-white">Select UK Size:</h4>
      <div className="flex gap-4">
        {sizes.map((size) => (
          <button
            key={size}
            className="px-3 py-1 text-white  bg-[#333235] rounded hover:bg-gradient-to-r from-[#ff626d] to-[#fcad72]"
            onClick={() => onSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Size;
