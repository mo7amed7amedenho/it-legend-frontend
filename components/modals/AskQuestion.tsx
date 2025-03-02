import * as Import from "@/components/import";

const AskQuestion = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [question, setQuestion] = Import.useState<string>("");

  Import.useEffect(() => {
    const savedQuestion = sessionStorage.getItem("userQuestion");
    if (savedQuestion) setQuestion(savedQuestion);
  }, []);

  Import.useEffect(() => {
    sessionStorage.setItem("userQuestion", question);
  }, [question]);

  return (
    <Import.AnimatePresence>
      {isOpen && (
        <Import.motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Import.motion.div
            className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-2xl relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <Import.motion.button
              onClick={onClose}
              className="absolute cursor-pointer top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <Import.X size={24} />
            </Import.motion.button>
            <h2 className="text-xl font-bold text-center mb-4">
              Ask a Question
            </h2>
            <Import.Textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="w-full p-3 border rounded-lg"
              rows={4}
            ></Import.Textarea>
            <button
              onClick={onClose}
              className="mt-4 bg-emerald-500 hover:bg-emerald-600 cursor-pointer duration-200 text-white border-emerald-500 shadow-lg px-4 py-2 rounded-lg w-full"
            >
              Submit
            </button>
          </Import.motion.div>
        </Import.motion.div>
      )}
    </Import.AnimatePresence>
  );
};

export default AskQuestion;
