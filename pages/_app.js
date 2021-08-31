import "tailwindcss/tailwind.css";
import { MoralisProvider } from "react-moralis";
import { ThemeProvider } from "next-themes";
import CustomToast from "../components/notification/customToast";
import "../styles/index.css";
import App from "next/app";

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

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
