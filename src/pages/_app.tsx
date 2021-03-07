import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { Box } from "@chakra-ui/react";
import { LocaleProvider } from "../components/context/get-locale";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        <LocaleProvider>
          <Box minH="75vh">
            <Navigation />
            <Component {...pageProps} />
          </Box>

          <Footer />
        </LocaleProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
