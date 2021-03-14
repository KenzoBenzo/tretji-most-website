import React from "react";
import {
	Box,
	Heading,
	Flex,
	Text,
	FormControl,
	FormLabel,
	Input,
	Button,
	Image,
	Link as ChakraLink,
	Stack,
} from "@chakra-ui/react";
import {
	LectureIcon,
	WorkshopIcon,
	EventIcon,
	EducationIcon,
} from "../theme/icons";
import { DoubleSection } from "../components/double-section";
import ImageCard from "../components/image-card";
import { SingleSection } from "../components/single-section";

function IndexPage() {
	return (
		<>
			<Flex mb={64} direction={["column", "row"]}>
				<Box w="50%" h="400px" py={32} px={40}>
					<Heading as="h1" fontSize="48px">
						Duhovna Kultura,
						<br /> Kulturna Duhovnost
					</Heading>

					<Text fontSize="md" mt={8}>
						Here is a small few sentences about TM and why you should be
						interested in joining us! Maybe a bit more also goes here.
					</Text>

					<Stack
						as="form"
						mt={16}
						direction={["column", "row"]}
						alignItems="flex-end"
					>
						<FormControl isRequired>
							<FormLabel>Ime</FormLabel>
							<Input type="name" />
						</FormControl>
						<FormControl isRequired>
							<FormLabel>E-naslov</FormLabel>
							<Input type="email" />
						</FormControl>
						<Button
							colorScheme="blue"
							fontWeight={700}
							type="submit"
							minW="fit-content"
						>
							Pridružite se nam
						</Button>
					</Stack>
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

			<SingleSection>
				<Stack
					direction={["column", "column", "row"]}
					justify="space-between"
					shouldWrapChildren={true}
					spacing={8}
				>
					<ChakraLink
						href="/how-we-work/#lectures"
						display="inline-block"
						textAlign="center"
						borderRadius="6px"
						p={8}
						w="245px"
						_hover={{
							color: "blue.700",
							backgroundColor: "blue.50",
						}}
					>
						<LectureIcon boxSize={8} mb={4} />
						<Text fontSize="xl" fontWeight={700}>
							Predavanja
						</Text>
					</ChakraLink>
					<ChakraLink
						href="/how-we-work/#workshops"
						display="inline-block"
						textAlign="center"
						borderRadius="6px"
						p={8}
						w="245px"
						_hover={{
							color: "blue.700",
							backgroundColor: "blue.50",
						}}
					>
						<WorkshopIcon boxSize={8} mb={4} />
						<Text fontSize="xl" fontWeight={700}>
							Delavnice
						</Text>
					</ChakraLink>
					<ChakraLink
						href="/how-we-work/#culturalEvents"
						display="inline-block"
						textAlign="center"
						borderRadius="6px"
						p={8}
						w="245px"
						_hover={{
							color: "blue.700",
							backgroundColor: "blue.50",
						}}
					>
						<EventIcon boxSize={8} mb={4} />
						<Text fontSize="xl" fontWeight={700}>
							Kulturne prireditve
						</Text>
					</ChakraLink>
					<ChakraLink
						href="/how-we-work/#schooling"
						display="inline-block"
						textAlign="center"
						borderRadius="6px"
						p={8}
						w="245px"
						_hover={{
							color: "blue.700",
							backgroundColor: "blue.50",
						}}
					>
						<EducationIcon boxSize={8} mb={4} />
						<Text fontSize="xl" fontWeight={700}>
							Šolanje
						</Text>
					</ChakraLink>
				</Stack>
			</SingleSection>

			<DoubleSection
				heading="Namen naše dejavnosti"
				text="O povezavi umetnosti in pedagogike, socialna vloga umetnosti, Tričlenost."
			>
				<Box w="full" h="256px" backgroundColor="gray.50" mr={16} />
			</DoubleSection>

			<DoubleSection
				reverse
				heading="Pregled — kako organiziramo projekte"
				text="Profesionalni kriteriji za projekte, ki jih izvajamo."
			>
				<Box w="full" h="256px" backgroundColor="gray.50" ml={16} />
			</DoubleSection>

			<Box maxW="1200px" mx="auto">
				<Heading as="h1">Naše delo</Heading>
				<Stack
					direction={["column", "row"]}
					mt={8}
					justifyContent="space-between"
					textAlign="center"
					spacing={8}
				>
					<ImageCard
						text="Razstave"
						image="a3Jp1BFtSi6evhrVfr4F"
						to="/culture/#art-shows"
					/>
					<ImageCard
						text="Evritmija"
						image="a3Jp1BFtSi6evhrVfr4F"
						to="/culture/#eurythmy"
					/>
					<ImageCard
						text="Pesmi"
						image="a3Jp1BFtSi6evhrVfr4F"
						to="/culture/#songs"
					/>
					<ImageCard
						text="Gledališče"
						image="a3Jp1BFtSi6evhrVfr4F"
						to="/culture/#theatre"
					/>
				</Stack>
			</Box>
		</>
	);
}

export default IndexPage;
