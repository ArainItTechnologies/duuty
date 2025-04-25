const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[30vh] bg-white bg-opacity-90 z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-700 font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
