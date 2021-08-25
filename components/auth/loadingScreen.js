const LoadingScreen = () => {
  return (
    <div className="z-10 flex absolute bg-gray-800 w-full h-full items-center justify-center">
      <div
        className="animate-fadeIn flex p-5 rounded-full justify-center items-center"
        style={{
          minWidth: "300px",
          minHeight: "300px",
        }}
      >
        <div
          className="bg-gray-300 p-4 w-4 h-4 m-2 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="bg-gray-400 p-4 w-4 h-4 m-2 rounded-full animate-bounce "
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="bg-gray-600 p-4 w-4 h-4 m-2 rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
