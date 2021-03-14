import React from "react";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import { DoubleSection } from "../components/double-section";

const AboutUsPage = () => {
	return (
		<>
			<Flex mb={64} direction={["column", "row"]}>
				<Box w="50%" h="400px" py={32} px={40}>
					<Heading as="h1" fontSize="48px">
						O nas
					</Heading>

					<Text fontSize="md" mt={8}>
						Tukaj si lahko preberete o nas. Tretji most smo skupaj zaceli Marko
						Prijon, Nataša Tič Ralijan in Tomaž Biffio.
					</Text>
				</Box>

				<Box
					bgGradient="linear(to-b, blue.50, blue.100, blue.200, blue.300, blue.400, blue.500,blue.600, blue.700,blue.800, blue.900)"
					w="50%"
					h="400px"
					p={32}
					zIndex={0}
					borderBottomLeftRadius="lg"
				>
					<Image
						src="https://media.graphcms.com/Az4WqNJVTyCCzeyaj5rE"
						borderRadius="lg"
						maxH="400px"
					/>
				</Box>
			</Flex>

			<DoubleSection
				heading="Marko Prijon"
				text="Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi."
			>
				<Box w="full" h="256px" backgroundColor="gray.100" mr={16} />
			</DoubleSection>

			<DoubleSection
				heading="Nataša Tič Ralijan"
				text="Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi."
			>
				<Box w="full" h="256px" backgroundColor="gray.100" mr={16} />
			</DoubleSection>

			<DoubleSection
				heading="Tomaž Biffio"
				text="Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi. Besedilo o osebi."
			>
				<Box w="full" h="256px" backgroundColor="gray.100" mr={16} />
			</DoubleSection>
		</>
	);
};

export default AboutUsPage;
