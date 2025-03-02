import * as Import from "@/components/import";

export default function CardMobile() {
  const [isOpen1, setIsOpen1] = Import.React.useState(false);
  const [isOpen2, setIsOpen2] = Import.React.useState(false);
  const [isOpen3, setIsOpen3] = Import.React.useState(false);
  return (
    <section>
      <h3 className="text-xl md:text-2xl font-semibold">
        Topics for this course
      </h3>
      <div className="lg:col-span-1 space-y-6 sm:hidden">
        <div className="pt-6">
          <Import.ProgressBar progress={63} />
        </div>

        {/* Week 1-4 */}
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
          <div
            className={`flex items-center justify-between border-gray-300`}
            onClick={() => setIsOpen1(!isOpen1)}
          >
            <h3 className="text-lg font-semibold text-gray-800">
              Course Introduction
            </h3>
            <div className="transition-transform duration-300">
              {isOpen1 ? <Import.TiMinus /> : <Import.TiPlus />}
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen1 ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <ul className="space-y-3 py-1 border-t border-gray-300">
              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">Introduction</span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Course Overview
                    </span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Course Overview
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Import.Badge className="bg-emerald-100 text-emerald-700 px-2 py-1 text-xs">
                      0 Question
                    </Import.Badge>
                    <Import.Badge className="bg-red-100 text-red-700 px-2 py-1 text-xs">
                      10 Minutes
                    </Import.Badge>
                  </div>
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Exercise Files
                    </span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">Editor Setup</span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">PHP in HTML</span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Week 5-8 */}
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
          <div
            className={`flex items-center justify-between border-gray-300`}
            onClick={() => setIsOpen2(!isOpen2)}
          >
            <h3 className="text-lg font-semibold text-gray-800">
              JavaScript Language Basics
            </h3>
            <div className="transition-transform duration-300">
              {isOpen2 ? <Import.TiMinus /> : <Import.TiPlus />}
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen2 ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <ul className="space-y-3 py-1 border-t border-gray-300">
              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">Introduction</span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Course Overview
                    </span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Course Overview
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Import.Badge className="bg-emerald-100 text-emerald-700 px-2 py-1 text-xs">
                      2 Question
                    </Import.Badge>
                    <Import.Badge className="bg-red-100 text-red-700 px-2 py-1 text-xs">
                      15 Minutes
                    </Import.Badge>
                  </div>
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Exercise Files
                    </span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">Editor Setup</span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">PHP in HTML</span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
          <div
            className={`flex items-center justify-between border-gray-300`}
            onClick={() => setIsOpen3(!isOpen3)}
          >
            <h3 className="text-lg font-semibold text-gray-800">
              Course Introduction
            </h3>
            <div className="transition-transform duration-300">
              {isOpen3 ? <Import.TiMinus /> : <Import.TiPlus />}
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen3 ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <ul className="space-y-3 py-1 border-t border-gray-300">
              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">Introduction</span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Course Overview
                    </span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Course Overview
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Import.Badge className="bg-emerald-100 text-emerald-700 px-2 py-1 text-xs">
                      0 Question
                    </Import.Badge>
                    <Import.Badge className="bg-red-100 text-red-700 px-2 py-1 text-xs">
                      10 Minutes
                    </Import.Badge>
                  </div>
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">
                      Exercise Files
                    </span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">Editor Setup</span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>

              <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Import.FaRegFileLines className="text-gray-500 text-sm" />
                    <span className="text-sm text-gray-700">PHP in HTML</span>
                  </div>
                  <Import.MdLockOutline className="text-gray-400 text-lg" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

