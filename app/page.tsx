import * as Import from "@/components/import";

export default function Home() {
  const sectionRef = Import.React.useRef<HTMLDivElement>(null);
  const [isAsk, setisAsk] = Import.React.useState(false);
  const [isLeader, setisLeader] = Import.React.useState(false);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <Import.Header />
      <Import.BreadcrumbComponent />
      <h1 className="text-2xl md:text-3xl font-bold py-2 md:py-4">
        Start SEO as your Home
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        <div className="lg:col-span-2 space-y-6">
          <Import.Player />
          <div className="flex flex-wrap gap-3 md:gap-4 py-4">
            <button className="p-3 bg-white cursor-pointer rounded-xl border border-gray-300 hover:border-emerald-500 duration-300 text-gray-600 hover:text-emerald-600 shadow-sm">
              <Import.FaBookOpen className="text-lg md:text-xl" />
            </button>
            <button
              className="p-3 bg-white cursor-pointer rounded-xl border border-gray-300 hover:border-emerald-500 duration-300 text-gray-600 hover:text-emerald-600 shadow-sm"
              onClick={scrollToSection}
            >
              <Import.FaCommentDots className="text-lg md:text-xl" />
            </button>
            <button
              className="p-3 bg-white cursor-pointer rounded-xl border border-gray-300 hover:border-emerald-500 duration-300 text-gray-600 hover:text-emerald-600 shadow-sm"
              onClick={() => setisAsk(true)}
            >
              <Import.FaQuestionCircle className="text-lg md:text-xl" />
            </button>
            <button
              onClick={() => setisLeader(true)}
              className="p-3 bg-white cursor-pointer rounded-xl border border-gray-300 hover:border-emerald-500 duration-300 text-gray-600 hover:text-emerald-600 shadow-sm"
            >
              <Import.FaTrophy className="text-lg md:text-xl" />
            </button>
            {isAsk && (
              <Import.AskQuestion
                isOpen={isAsk}
                onClose={() => setisAsk(false)}
              />
            )}
            {isLeader && (
              <Import.Leaderboard
                isOpen={isLeader}
                onClose={() => setisLeader(false)}
              />
            )}
          </div>
          <Import.CourseMaterial />
          <Import.CardMobile />
          <section ref={sectionRef}></section>
        </div>
      </div>
    </main>
  );
}
