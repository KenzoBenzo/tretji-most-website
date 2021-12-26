import React from "react";
import {
	Stack,
	Link as ChakraLink,
	Text,
	Image,
	Heading,
} from "@chakra-ui/react";
import { SingleSection } from "../single-section";
import Link from "next/link";

type CardProps = {
	title: string;
	link: string;
	image?: {
		handle: string;
		height: number;
		width: number;
	};
};

const Card = ({ title, link, image }: CardProps) => {
	return (
		<Link href={link} passHref>
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
				<Image
					src={image && `https://media.graphcms.com/${image.handle}`}
					mb={4}
					mx="auto"
					borderRadius={4}
				/>
				<Text fontSize="xl" fontWeight={700}>
					{title}
				</Text>
			</ChakraLink>
		</Link>
	);
};

type CardSectionProps = {
	heading: string;
	cards: CardProps[];
};

export const CardSection = ({ heading, cards }: CardSectionProps) => {
	return (
		<SingleSection>
			{heading && (
				<Heading
					as="h2"
					color="gray.900"
					fontSize={["xl", "2xl", "3xl"]}
					fontWeight={900}
					mb={4}
					letterSpacing="wide"
					lineHeight="short"
				>
					{heading}
				</Heading>
			)}
			<Stack
				direction={["column", "column", "row"]}
				justify="space-between"
				shouldWrapChildren={true}
				spacing={8}
			>
				{cards.map((card, index) => (
					<Card key={index} {...card} />
				))}
			</Stack>
		</SingleSection>
	);
};
