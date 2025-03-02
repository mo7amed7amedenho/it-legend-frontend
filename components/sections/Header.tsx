import { useTheme } from "@/app/context/ThemeContext";
import * as Import from "@/components/import";
export default function Header() {
  const {isChecked, setIsChecked} = useTheme();
  const [isModalOpen, setIsModalOpen] = Import.React.useState(false);
  const [isPdfOpen, setIsPdfOpen] = Import.React.useState(false);
  const [isAsk, setisAsk] = Import.React.useState(false);
  const [isLeader, setisLeader] = Import.React.useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);

    if (checked) {
      console.log("السويتش مفتوح ✅");
      // ضع هنا الكود الذي تريده عند تفعيل السويتش
    } else {
      console.log("السويتش مغلق ❌");
      // ضع هنا الكود الذي تريده عند إغلاق السويتش
    }
  };

  return (
    <div className="absolute flex items-center justify-center w-full top-0  left-0 capitalize bg-emerald-600">
      <div className="flex gap-2 text-center items-center justify-center p-2">
        <p className="text-sm text-white text-center">Pop-Up:</p>
        <p
          className="text-sm text-white text-center underline cursor-pointer hover:text-gray-200 duration-200"
          onClick={() => setIsModalOpen(true)}
        >
          Exam
        </p>
        <p
          className="text-sm text-white text-center underline cursor-pointer hover:text-gray-200 duration-200"
          onClick={() => setIsPdfOpen(true)}
        >
          PDF
        </p>
        <div className="flex items-center space-x-2">
          <Import.Switch
            checked={isChecked}
            onCheckedChange={handleSwitchChange}
            className="bg-gray-50 text-emerald-600"
          />
          <span className="text-white min-w-[100px]">
            {isChecked ? "Sticky: On" : "Sticky: Off"}
          </span>
        </div>
      </div>
      <>
        {/* المودال */}
        {isModalOpen && (
          <Import.Exam
            isModalOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </>
      <>
        {/* المودال */}
        {isPdfOpen && (
          <Import.PdfModal
            isOpen={isPdfOpen}
            onClose={() => setIsPdfOpen(false)}
            pdfUrl={
              "https://archive.org/embed/Quran-Kareem-Khawagah-The-Blue-Page-Quran"
            }
          />
        )}
      </>
      <>
        {/* المودال */}
        {isAsk && (
          <Import.AskQuestion isOpen={isAsk} onClose={() => setisAsk(false)} />
        )}
      </>
      <>
        {/* المودال */}
        {isLeader && (
          <Import.Leaderboard
            isOpen={isLeader}
            onClose={() => setisLeader(false)}
          />
        )}
      </>
    </div>
  );
}
