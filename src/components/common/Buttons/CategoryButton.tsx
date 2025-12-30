import React from "react";

const CategoryButton = ({
  className,
  children,
  value,
  isActive,
  onClick,
  disabled,
  type,
}: CategoryButton) => {
  return (
    <button
      className={`${className} `}
      value={value}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default CategoryButton;
