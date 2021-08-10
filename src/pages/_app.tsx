import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import "@od/styles/main.css";

const _App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default _App;
