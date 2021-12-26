import React from "react";
import { Box, Heading, Link, Text } from "@chakra-ui/react";

type SectionProps = {
	heading?: string;
	anchor?: string;
	body?: {
		markdown: string;
	};
	hero?: boolean;
	props?: any;
};

export const SingleSection = ({
	heading,
	anchor,
	body,
	hero,
	...props
}: SectionProps) => (
	<Box as="section" maxW="1200px" mx="auto" py={16} {...props}>
		{heading ? (
			<Heading as="h2" textStyle="h2" mb={6}>
				{anchor ? (
					<Link id={anchor} _hover={{ textDecoration: "none", cursor: "auto" }}>
						{heading}
					</Link>
				) : (
					heading
				)}
			</Heading>
		) : null}
		{body ? (
			<Text fontSize="2xl" mb={12} lineHeight="short">
				{body.markdown}
			</Text>
		) : null}
	</Box>
);
