import React from "react";
import { Link as ChakraLink, Box, Text, Flex, Image } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box backgroundColor="gray.100">
			<Flex
				mt="128px"
				p={12}
				justify="space-between"
				textAlign="center"
				maxW="1200px"
				mx="auto"
				direction={["column", "column", "row"]}
			>
				<Box>
					<ChakraLink href="/about-us/">
						<Text>O nas</Text>
					</ChakraLink>
					<ChakraLink href="/culture/">
						<Text>O kulturi</Text>
					</ChakraLink>
					<ChakraLink href="/calendar/">
						<Text>Koledar</Text>
					</ChakraLink>
					<ChakraLink href="/partners/">
						<Text>Partnerji</Text>
					</ChakraLink>
				</Box>
				<Box>
					<Text>Kontakt:</Text>
					<ChakraLink href="mailto:marko.prijon@gmail.com">
						marko.prijon@gmail.com
					</ChakraLink>
				</Box>

				<Text>
					Naslov:
					<br /> nova ulica 25 <br /> 1000 Ljubljana
				</Text>

				<Image h={32} src={`https://media.graphcms.com/3LKjkQiSBWIVZMvJ31pj`} />
			</Flex>
		</Box>
	);
};

export default Footer;
