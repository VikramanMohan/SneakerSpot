export function Button({ children, onClick, className }) {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg font-semibold shadow-md transition duration-300 hover:opacity-80 ${className} tracking-wider`}
      >
        {children}
      </button>
    );
  }
  