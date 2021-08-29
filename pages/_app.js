import "tailwindcss/tailwind.css";
import { MoralisProvider } from "react-moralis";
import { ThemeProvider } from "next-themes";
import CustomToast from "../components/notification/customToast";

function MyApp({ Component, pageProps }) {
  const appId = process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID;
  const serverUrl = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;

  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <CustomToast />{" "}
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </MoralisProvider>
  );
}

export default MyApp;
