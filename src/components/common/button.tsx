import { FC } from "react";

interface IButtonProps {
  title?: string;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void
}
export const Button: FC<IButtonProps> = ({title, leftIcon, children, className, onClick}) => {
  return (
    <div className="items-center flex ">
      <button 
        onClick={onClick}
        className={`relative flex items-center bg-yellow_rgba rounded-[5px] p-2 text-yellow text-xs font-InterSemiBold ${className}`}
      >
        {leftIcon && 
          <div className="mr-0.5">
              {leftIcon}
          </div>
        }
        {title}
        {children}
      </button>
    </div>
  
  )
}