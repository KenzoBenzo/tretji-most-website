import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
import ImageCard from "../components/image-card";
import { PAGE } from "../graphql";
import { request } from "graphql-request";
import { CardSection, DoubleSection, Hero } from "../components/blocks";

function IndexPage({ page }) {
	const heroSection = page?.blocks[0];
	const cardSection = page?.blocks[1];
	const doubleSection1 = page?.blocks[2];
	const doubleSection2 = page?.blocks[3];
	return (
		<>
			{page.blocks.map((block, index) => {
				console.log(block.__typename);
			})}

			{/* Hero section */}
			<Hero {...heroSection} />

			<CardSection {...cardSection} />

			<DoubleSection {...doubleSection1} />

			<DoubleSection {...doubleSection2} />

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
