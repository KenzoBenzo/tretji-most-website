import React from "react";
import {
	Box,
	Heading,
	Text,
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
import Link from "next/link";
import { PAGE } from "../graphql";
import { request } from "graphql-request";
import { Hero } from "../components/blocks";

function IndexPage({ page }) {
	const heroPage = page?.blocks[0];
	return (
		<>
			{/* Hero section */}
			<Hero
				header={heroPage?.header}
				subtitle={heroPage?.subtitle}
				buttonText={heroPage?.buttonText}
				hasForm={heroPage?.hasForm}
				image={heroPage?.image}
			/>

			<SingleSection>
				<Stack
					direction={["column", "column", "row"]}
					justify="space-between"
					shouldWrapChildren={true}
					spacing={8}
				>
					<Link href="/how-we-work/#lectures" passHref>
						<ChakraLink
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
					</Link>
					<Link href="/how-we-work/#workshops" passHref>
						<ChakraLink
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
					</Link>
					<Link href="/how-we-work/#culturalEvents" passHref>
						<ChakraLink
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
					</Link>
					<Link href="/how-we-work/#schooling" passHref>
						<ChakraLink
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
					</Link>
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

export async function getStaticProps() {
	const { page } = await request(
		"https://api-eu-central-1.graphcms.com/v2/ckj65vblcx4gy01xp4m948jkr/master",
		PAGE,
		{
			slug: "index",
		}
	);
	return {
		props: {
			page,
		},
	};
}

export default IndexPage;
