import React, { useContext } from "react";
import {
	Flex,
	Link as ChakraLink,
	Image,
	Stack,
	Box,
	Select,
} from "@chakra-ui/react";
import LocaleContext, { locales } from "../components/context/get-locale";
import Link from "next/link";

const Navigation = () => {
	const { currentLocale, updateLocale } = useContext(LocaleContext);

	const emoji = (countryCode: string) =>
		countryCode
			.toUpperCase()
			.replace(/./g, (char) =>
				String.fromCodePoint(char.charCodeAt(0) + 127397)
			);

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
						src={`https://media.graphcms.com/3LKjkQiSBWIVZMvJ31pj`}
					/>
				</a>
			</Link>
			<Stack direction="column">
				<Link href="/about-us" passHref>
					<ChakraLink px={2}>O nas</ChakraLink>
				</Link>
				<Link href="/culture" passHref>
					<ChakraLink px={2}>O kulturi</ChakraLink>
				</Link>
				<Link href="/calendar" passHref>
					<ChakraLink px={2}>Koledar</ChakraLink>
				</Link>
				<Link href="/contact" passHref>
					<ChakraLink px={2}>Kontakt</ChakraLink>
				</Link>
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
