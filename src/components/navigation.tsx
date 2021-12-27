import React, { useContext } from "react";
import {
	Flex,
	Link as ChakraLink,
	Image,
	Stack,
	Box,
	Select,
	Text,
	Center,
	Spinner,
} from "@chakra-ui/react";
import LocaleContext, { locales } from "../components/context/get-locale";
import Link from "next/link";
import { client } from "../components/utils/graphql-client";
import useSWR from "swr";

const Navigation = () => {
	const { currentLocale, updateLocale } = useContext(LocaleContext);

	const emoji = (countryCode: string) =>
		countryCode
			.toUpperCase()
			.replace(/./g, (char) =>
				String.fromCodePoint(char.charCodeAt(0) + 127397)
			);
	const fetcher = (query: string) => client.request(query);
	const { data, error, isValidating } = useSWR(
		`query GET_NAVIGATION {
					navigation(where: { id: "ckj67aamg6t8k0a57vsowtc0r" }) {
						logo {
							handle
						}
						navigationLinks {
							text
            	path
						}
					}
				}`,
		fetcher
	);

	if (isValidating && !data) {
		return (
			<Center h="90vh">
				<Spinner />
				<Text ml={3}>Loading</Text>
			</Center>
		);
	}

	if (error) {
		console.error(JSON.stringify(error, null, 2));
		return <Text color="red.500">Ooops!</Text>;
	}

	console.log(data);

	return (
		<Flex
			minW="fit-content"
			position="sticky"
			top={0}
			bottom={0}
			direction="column"
			justify="space-between"
			align="center"
			h="100vh"
			py={4}
			px={1}
			backgroundColor="white"
			boxShadow="0px 8px 24px 0px rgba(149,157,165,0.2)"
		>
			<Link href="/" passHref>
				<a>
					<Image
						h={48}
						src={`https://media.graphcms.com/${data.navigation.logo.handle}`}
					/>
				</a>
			</Link>
			<Stack direction="column">
				{data.navigation.navigationLinks.map((link, index) => (
					<Link href={`/${link.path}`} passHref key={index}>
						<ChakraLink px={2}>{link.text}</ChakraLink>
					</Link>
				))}
				<Box className="relative">
					<Select
						size="sm"
						value={currentLocale}
						borderRadius="md"
						onChange={({ target: { value } }) => updateLocale(value)}
					>
						{locales.map(({ label }, index) => (
							<option key={index} value={label}>
								{`${emoji(
									label === "Slovenian"
										? "SI"
										: label === "English"
										? "US"
										: null
								)} ${
									label === "Slovenian"
										? "Slo"
										: label === "English"
										? "En"
										: null
								}`}
							</option>
						))}
					</Select>
				</Box>
			</Stack>
		</Flex>
	);
};

export default Navigation;
