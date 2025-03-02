import * as Import from "../import";
export default function CourseMaterial() {
  return (
    <section className="space-y-6">
      <h3 className="text-xl md:text-2xl font-semibold">Course Material</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Import.LuClock3 className="text-gray-600 text-lg" />
              <span className="text-sm text-gray-600">Duration:</span>
            </div>
            <span className="text-sm text-gray-800 font-medium">3 weeks</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Import.LuLibrary className="text-gray-600 text-lg" />
              <span className="text-sm text-gray-600">Lessons:</span>
            </div>
            <span className="text-sm text-gray-800 font-medium">8</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Import.FaUserGraduate className="text-gray-600 text-lg" />
              <span className="text-sm text-gray-600">Enrolled:</span>
            </div>
            <span className="text-sm text-gray-800 font-medium">
              65 students
            </span>
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="flex items-center gap-2">
              <Import.CiGlobe className="text-gray-600 text-xl" />
              <span className="text-sm text-gray-600">Language:</span>
            </div>
            <span className="text-sm text-gray-800 font-medium">English</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 max-sm:hidden">
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Import.LuClock3 className="text-gray-600 text-lg" />
              <span className="text-sm text-gray-600">Duration:</span>
            </div>
            <span className="text-sm text-gray-800 font-medium">3 weeks</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Import.LuLibrary className="text-gray-600 text-lg" />
              <span className="text-sm text-gray-600">Lessons:</span>
            </div>
            <span className="text-sm text-gray-800 font-medium">8</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Import.FaUserGraduate className="text-gray-600 text-lg" />
              <span className="text-sm text-gray-600">Enrolled:</span>
            </div>
            <span className="text-sm text-gray-800 font-medium">
              65 students
            </span>
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="flex items-center gap-2">
              <Import.CiGlobe className="text-gray-600 text-xl" />
              <span className="text-sm text-gray-600">Language:</span>
            </div>
            <span className="text-sm text-gray-800 font-medium">English</span>
          </div>
        </div>
      </div>
    </section>
  );
}
