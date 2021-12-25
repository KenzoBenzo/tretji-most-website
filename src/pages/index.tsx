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
import { CardSection, Hero } from "../components/blocks";

function IndexPage({ page }) {
	const heroSection = page?.blocks[0];
	const cardSection = page?.blocks[1];
	return (
		<>
			{/* Hero section */}
			<Hero
				header={heroSection?.header}
				subtitle={heroSection?.subtitle}
				buttonText={heroSection?.buttonText}
				hasForm={heroSection?.hasForm}
				image={heroSection?.image}
			/>

			<CardSection heading={cardSection.heading} cards={cardSection.cards} />

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
