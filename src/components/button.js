import "./button.css";

const Button = ({ children, onClick, className, variant, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`button ${className} ${variant}`}
    >
      {children}
    </button>
  );
};

export default Button;
