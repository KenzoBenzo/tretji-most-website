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
			position="fixed"
			direction="column"
			justify="space-between"
			align="center"
			left={0}
			top={0}
			bottom={0}
			py={4}
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
				<ChakraLink href="/about-us" px={2}>
					O nas
				</ChakraLink>
				<ChakraLink href="/culture" px={2}>
					O kulturi
				</ChakraLink>
				<ChakraLink href="/calendar" px={2}>
					Koledar
				</ChakraLink>
				<ChakraLink href="/contact" px={2}>
					Kontact
				</ChakraLink>
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
