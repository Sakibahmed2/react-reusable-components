import cn from "../../utils/cn";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <div
      className={cn("fixed inset-0 bg-gray-500/70 invisible z-[999]", {
        visible: isOpen,
      })}
    >
      <div className="bg-white">{children}</div>
    </div>,
    document.getElementById("portal") as Element
  );
};

export default Modal;
