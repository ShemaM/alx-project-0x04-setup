import { ButtonProps } from '../../interface';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  type = 'button'
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        variant === 'primary' 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;