import React from "react";
import {
	Box,
	Heading,
	Link,
	Grid,
	Text,
	Code,
	Flex,
	Image,
} from "@chakra-ui/react";

type DoubleSectionProps = {
	doubleSectionImage?: {
		handle: string;
		height: number;
		width: number;
	};
	doubleSectionHeader?: string;
	anchor?: string;
	body?: {
		markdown: string;
	};
	reverseSection?: boolean;
	badge?: string;
};

export const DoubleSection = ({
	doubleSectionHeader,
	anchor,
	body,
	reverseSection,
	badge,
	doubleSectionImage,
	...props
}: DoubleSectionProps) => (
	<Box as="section" maxW="1200px" mx="auto" py={16} {...props}>
		<Grid
			templateColumns={[
				"repeat(auto-fill, 1fr)",
				"reapeat(auto-fill, 1fr)",
				"reapeat(auto-fill, 1fr)",
				"repeat(2, 1fr)",
			]}
			gap={14}
			gridAutoFlow="dense"
		>
			{reverseSection ? (
				<Flex justifyContent="center" gridColumn={["1", "1", "2"]}>
					<Image
						src={
							doubleSectionImage &&
							`https://media.graphcms.com/${doubleSectionImage.handle}`
						}
						w="full"
						h="256px"
						backgroundColor="gray.50"
						mr={16}
						borderRadius={4}
						border="none"
					/>
				</Flex>
			) : (
				<Flex justifyContent="center">
					<Image
						src={
							doubleSectionImage &&
							`https://media.graphcms.com/${doubleSectionImage.handle}`
						}
						w="full"
						h="256px"
						backgroundColor="gray.50"
						mr={16}
						borderRadius={4}
						border="none"
					/>
				</Flex>
			)}
			<Box>
				{badge ? (
					<Code
						colorScheme="cyan"
						fontSize="14px"
						fontWeight={600}
						rounded="sm"
						padding="0px 4px"
						minH="auto"
						mb={3}
					>
						{badge}
					</Code>
				) : null}
				{doubleSectionHeader ? (
					<Heading
						as="h2"
						color="gray.900"
						fontSize={["xl", "2xl", "3xl"]}
						fontWeight={900}
						mb={4}
						letterSpacing="wide"
						lineHeight="short"
					>
						{anchor ? (
							<Link
								id={anchor}
								_hover={{ textDecoration: "none", cursor: "auto" }}
							>
								{doubleSectionHeader}
							</Link>
						) : (
							doubleSectionHeader
						)}
					</Heading>
				) : null}
				{body ? (
					<Text fontSize={["lg", "xl", "2xl"]} lineHeight="short">
						{body.markdown}
					</Text>
				) : null}
			</Box>
		</Grid>
	</Box>
);
