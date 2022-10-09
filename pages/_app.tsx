import type { AppProps } from "next/app";

import "../styles/globals.css";

import Layout from "../layout";

import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

const supportedChainIds = [5];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
