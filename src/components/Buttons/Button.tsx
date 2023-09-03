import React, { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonTheme {
  YELLOW = "yellow",
  OUTLINE = "outline",
  DELETE = "delete",
  ICON = "icon",
  CONFIRM = "confirm",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme?: ButtonTheme;
  classname?: string;
}

type StyleTheme = "yellow" | "outline" | "delete" | "icon" | "confirm";

const style: Record<StyleTheme, string> = {
  outline: "bg-white shadow-outlineButton",
  yellow: "shadow-none bg-custom_yellow w-fit",
  confirm: "shadow-none bg-blue-600 text-white",
  delete:
    "w-max bg-gray-400 rounded-lg hover:bg-red-600 hover:text-white focus-visible:bg-red-600 focus-visible:text-white",
  icon: "w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl hover:bg-custom_yellow focus-visible:bg-custom_yellow bg-stone-200",
};

const Button = ({
  children,
  theme,
  classname = "",
  ...otherProps
}: ButtonProps) => {
  const styleTheme = theme && style[theme];
  return (
    <button
      className={`px-3 py-1 min-h-[30px] border border-[#D5D9D9] 
      text-base h-auto first-letter:uppercase rounded-lg text-black active:scale-95 hover:brightness-90 focus-visible:brightness-75 ${styleTheme} ${classname} duration-200`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
