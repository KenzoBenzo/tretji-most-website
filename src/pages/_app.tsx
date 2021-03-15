import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { Flex, Box } from "@chakra-ui/react";
import { LocaleProvider } from "../components/context/get-locale";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ChakraProvider resetCSS theme={theme}>
				<LocaleProvider>
					<Flex minH="75vh">
						<Navigation />
						<Box p={0} w="fill-available">
							<Component {...pageProps} />
							<Footer />
						</Box>
					</Flex>
				</LocaleProvider>
			</ChakraProvider>
		</>
	);
}

export default MyApp;
