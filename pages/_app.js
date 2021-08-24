import "tailwindcss/tailwind.css";
import { MoralisProvider } from "react-moralis";
import CustomToast from "../components/notification/customToast";

function MyApp({ Component, pageProps }) {
  const appId = process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID;
  const serverUrl = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;

  const contextClass = {
    success: "bg-blue-600",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <CustomToast />
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
