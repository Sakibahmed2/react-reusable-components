import React, { ReactNode, createContext, useContext, useRef } from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";

const ModalContext = createContext<TModalContext | null>(null);

type TModalContext = {
  onClose: () => void;
};

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

type TCloseButton = {
  children?: ReactNode;
};

type THeader = TCloseButton;

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div
          ref={containerRef}
          className="bg-white w-full max-w-sm rounded-md p-4"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;

  return (
    <button onClick={onClose} className="ml-auto">
      {children ? (
        children
      ) : (
        <svg
          className="w-6 bg-red-500 rounded-md p-0.5 text-white"
          strokeWidth={3}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return (
    <div className="flex justify-between items-center w-full mb-3">
      {children}
    </div>
  );
};

Modal.CloseButton = CloseButton;
Modal.Header = Header;

export default Modal;
