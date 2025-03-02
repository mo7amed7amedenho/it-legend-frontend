import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const PdfModal = ({ isOpen, onClose, pdfUrl }: { isOpen: boolean; onClose: () => void; pdfUrl: string }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-[95%] max-w-3xl h-[90vh] p-4 rounded-2xl shadow-2xl relative flex flex-col"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* زر الإغلاق */}
            <button
              onClick={onClose}
              className="absolute cursor-pointer top-4 left-4 text-gray-600 hover:text-gray-800 transition hover:scale-105"
            >
              <IoMdClose size={24} />
            </button>

            {/* عنوان */}
            <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">PDF Viewer</h2>

            {/* عرض ملف PDF */}
            <div className="flex-1">
              <iframe
                src={pdfUrl}
                className="w-full h-full rounded-lg border"
                title="PDF Viewer"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PdfModal;
