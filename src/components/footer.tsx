import React from "react";
import { Link as ChakraLink, Box, Text, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

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
					<Link href="/about-us/" passHref>
						<ChakraLink>
							<Text>O nas</Text>
						</ChakraLink>
					</Link>
					<Link href="/culture/" passHref>
						<ChakraLink>
							<Text>O kulturi</Text>
						</ChakraLink>
					</Link>
					<Link href="/calendar/" passHref>
						<ChakraLink>
							<Text>Koledar</Text>
						</ChakraLink>
					</Link>
					<Link href="/partners/" passHref>
						<ChakraLink>
							<Text>Partnerji</Text>
						</ChakraLink>
					</Link>
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
