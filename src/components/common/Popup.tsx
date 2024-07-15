import React, { useEffect } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  typeName?: string | undefined
}

const Popup: React.FC<PopupProps> = ({ children, onClose, isOpen, typeName }) => {
  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden");
    !isOpen && (document.body.style.overflow = "unset");
    return () => {
      document.body.style.overflow == "unset";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 shadow-md w-dvw h-dvh -translate-x-1/2 left-1/2 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <button
        onClick={onClose}
        className="absolute w-[50%] top-[20%] p-4 text-xl font-bold bg-black flex justify-between items-center"
      >
        <span className="text-white">Play {typeName}</span>
        <span className="text-gray-500 hover:text-white">&times;</span>
      </button>
      {children}
    </div>
  );
};

export default Popup;
