import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  children: ReactNode;
}

const Modal = ({ isOpen, children }: Props) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";

  return (
    <div className={modalClasses}>
      <div className="fixed inset-0 bg-black opacity-50 "></div>
      <div
        className={`relative max-w-[600px] w-full shadow-lg z-10 transition-all duration-200 ${
          isOpen ? "ease-in" : "ease-out"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
