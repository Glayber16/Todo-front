
import { type ModalTaskProps} from "../../types/types";




const Modal = ({ placeholder, isOpen, onClose, children }: ModalTaskProps) => {
 


 if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-lg rounded-xl bg-gray-900 text-white p-6 shadow-2xl">
        <h2 className="text-2xl font-bold mb-5">{placeholder}</h2>
        {children}
      </div>
    </div>
  );
};

export { Modal }