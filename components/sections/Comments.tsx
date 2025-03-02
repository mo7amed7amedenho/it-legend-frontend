import * as Import from "../import";
export default function Comments() {
  const Comments = [
    {
      id: 1,
      name: "Mohamed Hamed",
      src: "/3.jpg",
      date: "Oct 10, 2025",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas",
    },
    {
      id: 2,
      name: "Ali Sahien",
      src: "/1.jpg",
      date: "Oct 10, 2025",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas",
    },
    {
      id: 3,
      name: "Osama Elzero",
      src: "/2.jpg",
      date: "Oct 10, 2025",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas",
    },
  ];
  return (
    <div className="space-y-6">
      <h3 className="text-xl md:text-2xl font-semibold">Comments</h3>

      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
        <div className="flex gap-4 items-start">
          <Import.Image
            src="/3.jpg"
            alt="avatar"
            width={60}
            height={60}
            loading="lazy"
            className="rounded-full w-12 h-12 md:w-14 md:h-14"
          />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="font-medium text-gray-800">Mohamed Hamed</h4>
              <span className="text-sm text-gray-500">Oct 10, 2025</span>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            </p>
          </div>
        </div>
      </div>

      {/* Comment Form */}
      <div className="space-y-4">
        <Import.Textarea
          placeholder="Write a comment..."
          className="w-full border-gray-300 h-32 rounded-xl focus:ring-2 focus:ring-emerald-500"
        />
        <Import.Button className="bg-emerald-500 cursor-pointer hover:bg-emerald-600 text-white px-8 py-6 rounded-xl gap-2 w-full md:w-auto">
          Submit Review
          <Import.FaArrowRight className="text-sm" />
        </Import.Button>
      </div>
    </div>
  );
}
