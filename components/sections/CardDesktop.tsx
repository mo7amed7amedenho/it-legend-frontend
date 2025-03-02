import * as Import from "../import";

export default function CardDesktop() {
  return (
    <div className="lg:col-span-1 space-y-6 max-sm:hidden">
      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Course Progress</h3>
        <Import.ProgressBar progress={63} />
      </div>

      {/* Week 1-4 */}
      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Week 1-4</h3>
          <p className="text-sm text-gray-600 mt-1">
            Advanced story telling techniques for writers: Personas, Characters
            & Plots
          </p>
        </div>

        <ul className="space-y-3">
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
                <span className="text-sm text-gray-700">Course Overview</span>
              </div>
              <Import.MdLockOutline className="text-gray-400 text-lg" />
            </div>
          </li>

          <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Import.FaRegFileLines className="text-gray-500 text-sm" />
                <span className="text-sm text-gray-700">Course Overview</span>
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
                <span className="text-sm text-gray-700">Exercise Files</span>
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

      {/* Week 5-8 */}
      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Week 5-8</h3>
          <p className="text-sm text-gray-600 mt-1">
            Advanced story telling techniques for writers: Personas, Characters
            & Plots
          </p>
        </div>

        <ul className="space-y-3">
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
                <span className="text-sm text-gray-700">Course Overview</span>
              </div>
              <Import.MdLockOutline className="text-gray-400 text-lg" />
            </div>
          </li>

          <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Import.FaRegFileLines className="text-gray-500 text-sm" />
                <span className="text-sm text-gray-700">Course Overview</span>
              </div>
              <div className="flex gap-2">
                <Import.Badge className="bg-emerald-100 text-emerald-700 px-2 py-1 text-xs">
                  2 Questions
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
                <span className="text-sm text-gray-700">Exercise Files</span>
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
      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Week 5-8</h3>
          <p className="text-sm text-gray-600 mt-1">
            Advanced story telling techniques for writers: Personas, Characters
            & Plots
          </p>
        </div>

        <ul className="space-y-3">
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
                <span className="text-sm text-gray-700">Course Overview</span>
              </div>
              <Import.MdLockOutline className="text-gray-400 text-lg" />
            </div>
          </li>

          <li className="p-3 rounded-lg hover:bg-gray-50 duration-300">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Import.FaRegFileLines className="text-gray-500 text-sm" />
                <span className="text-sm text-gray-700">Course Overview</span>
              </div>
              <div className="flex gap-2">
                <Import.Badge className="bg-emerald-100 text-emerald-700 px-2 py-1 text-xs">
                  2 Questions
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
                <span className="text-sm text-gray-700">Exercise Files</span>
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
  );
}
