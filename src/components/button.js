const Button = ({ children, onClick, className, variant }) => {
  return (
    <button onClick={onClick} className={`button ${className} ${variant}`}>
      {children}
    </button>
  );
};

export default Button;
