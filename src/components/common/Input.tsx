import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  className?: string;
  error?: string;
  isBorderRequired?: boolean;
}

const Input = ({
  onChange,
  name,
  placeholder = "",
  className = "",
  error = "",
  isBorderRequired = false,
  ...rest
}: Props) => {
  return (
    <div className="w-full relative bg-transparent">
      <input
        onChange={onChange}
        name={name}
        className={`w-full rounded-md p-2 outline-none h-10 bg-transparent ${
          error ? "border-red-500" : "border-gray-300"
        } ${className} ${isBorderRequired && "border border-solid shadow-sm "}`}
        placeholder={placeholder || "Please type here..."}
        {...rest}
      />
      {error && (
        <span className="text-red-500 text-xs absolute bottom-[-17px] left-0">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
