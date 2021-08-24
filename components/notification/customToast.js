import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function CustomToast() {
  const contextClass = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <ToastContainer
      position="bottom-right"
      toastClassName={({ type }) =>
        contextClass[type || "default"] +
        " relative flex p-1 m-2 min-h-20 rounded-md justify-between overflow-hidden cursor-pointer"
      }
      bodyClassName={() => "text-sm font-white font-med block p-3"}
      autoClose={5000}
    />
  );
}

export default CustomToast;
