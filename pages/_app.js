import 'tailwindcss/tailwind.css'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId=process.env.MORALIS_APP_ID serverUrl=process.env.MORALIS_SERVER_URL>
    	<Component {...pageProps} />
    </MoralisProvider>
  	) 
}

export default MyApp
