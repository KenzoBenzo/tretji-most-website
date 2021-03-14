import React from "react";
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { DoubleSection } from "../components/double-section";

const CulturePage = () => {
	return (
		<>
			<Flex mb={64} direction={["column", "row"]}>
				<Box w="50%" h="400px" py={32} px={40}>
					<Heading as="h1" fontSize="48px">
						O kulturi
					</Heading>

					<Text fontSize="md" mt={8}>
						Prirejamo stevilne razstave, Gledališča ter druge prireditve, s
						katerimi priblizamo cilj nase iniciative vsem, ki jih to zanima.
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
				heading="Razstave"
				anchor="art-shows"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed blandit libero volutpat."
				reverse={true}
			>
				<Box w="full" h="256px" backgroundColor="gray.100" mr={16} />
			</DoubleSection>

			<DoubleSection
				heading="Evritmija"
				anchor="eurythmy"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed blandit libero volutpat."
				reverse={true}
			>
				<Box w="full" h="256px" backgroundColor="gray.100" mr={16} />
			</DoubleSection>

			<DoubleSection
				heading="Pesmi"
				anchor="songs"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed blandit libero volutpat."
				reverse={true}
			>
				<Box w="full" h="256px" backgroundColor="gray.100" mr={16} />
			</DoubleSection>

			<DoubleSection
				heading="Gledališče"
				anchor="theatre"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna duis convallis convallis tellus. Urna molestie at elementum eu. Nunc sed blandit libero volutpat."
				reverse={true}
			>
				<Box w="full" h="256px" backgroundColor="gray.100" mr={16} />
			</DoubleSection>
		</>
	);
};

export default CulturePage;
