import React from "react";

const PrimaryButton = ({
  text,
  className,
  onClick,
  disabled,
  value,
  type,
}: PrimaryButton) => {
  return (
    <button
      type={type}
      value={value}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
