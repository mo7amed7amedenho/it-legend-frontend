import * as Import from "@/components/import";

const Leaderboard = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
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
            <button
              onClick={onClose}
              className="absolute cursor-pointer top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <Import.X size={24} />
            </button>
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-bold text-center mb-4">
                Start SEO as your Home
              </h1>
              <h2 className="text-xl font-bold text-center mb-4">
                Leaderboard
              </h2>
            </div>
            <div className="bg-blue-50 text-gray-800 p-4 rounded-xl flex items-center justify-center max-w-md mx-auto shadow-md">
              <p className={`text-right text-lg font-cairo`}>
                عظيم يا صديقي، أداءك في الكورس ده أفضل من{" "}
                <span className="font-bold">60%</span> من باقي الطلبة. كمّل عايز
                أشوف اسمك في الليدر بورد هنا
              </p>
              <span className="text-7xl ml-2">💪</span>
            </div>
            <div className="flex flex-col space-y-2 pt-3">
              {[1, 2, 3, 4, 5].map((rank) => (
                <div
                  key={rank}
                  className="p-3 border border-gray-300 rounded-lg flex items-center justify-between bg-gray-100"
                >
                  <span className="font-medium">User {rank}</span>
                  <Import.Trophy className="text-yellow-500" size={20} />
                </div>
              ))}
            </div>
          </Import.motion.div>
        </Import.motion.div>
      )}
    </Import.AnimatePresence>
  );
};

export default Leaderboard;
