export function Card({ children, className }) {
    return (
      <div className={`p-4 rounded-lg shadow-lg bg-white ${className} tracking-wider`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className }) {
    return <div className={`p-2 ${className}`}>{children}</div>;
  }
  