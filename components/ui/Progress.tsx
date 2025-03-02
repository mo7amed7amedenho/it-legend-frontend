const ProgressBar = ({ progress }: { progress: number }) => {
    return (
      <div className="w-full flex flex-col items-center">
        <div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-full px-3 py-1 text-xs font-medium shadow max-sm:hidden"
          style={{ left: `${progress}%` }}
        >
          You
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-300 rotate-45"></div>
        </div>
        <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-sm font-medium text-gray-700 mt-2 max-sm:hidden">
          {progress}% Complete
        </div>
      </div>
    );
  };
  
  export default ProgressBar;  