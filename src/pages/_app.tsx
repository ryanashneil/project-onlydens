import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const _App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default _App;
