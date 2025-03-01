import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const QuestionModal = ({
  isModalOpen,
  onClose,
}: {
  isModalOpen: boolean;
  onClose: () => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(570); // 9 دقائق و 30 ثانية

  useEffect(() => {
    if (isModalOpen && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 10;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-2xl relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* زر الإغلاق */}
            <button
              onClick={onClose}
              className="absolute top-4 hover:scale-105 cursor-pointer left-4 text-gray-600 hover:text-gray-800 transition"
            >
              <IoMdClose  size={24} />
            </button>

            {/* العداد الزمني */}
            <div className="flex justify-center mb-4">
              <div className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-full shadow-md text-lg font-semibold">
                <Clock className="mr-2" size={20} /> {formatTime(timeLeft)}
              </div>
            </div>

            {/* مؤشرات التقدم */}
            <div className="flex justify-center space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className={`w-8 h-8 flex items-center justify-center rounded-full border text-lg font-medium transition ${
                    num === 2
                      ? "bg-emerald-500 text-white shadow-lg"
                      : "border-gray-400 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>

            {/* السؤال */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              1.Which one is the Framework to make a Mobile App Native platform?
            </h2>

            {/* الخيارات */}
            {["Vue", "Kotlin", "Next", "Flutter"].map((option) => (
              <motion.label
                key={option}
                className={`block p-3 border rounded-lg mb-2 cursor-pointer transition ${
                  selectedOption === option
                    ? "bg-emerald-500 text-white border-emerald-500 shadow-lg"
                    : "bg-white text-gray-700 hover:bg-emerald-50"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <input
                  type="radio"
                  name="question"
                  value={option}
                  className="hidden"
                  onChange={() => setSelectedOption(option)}
                />
                {option}
              </motion.label>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuestionModal;
