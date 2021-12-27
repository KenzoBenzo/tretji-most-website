import React from "react";
import {
	Flex,
	Box,
	Heading,
	Text,
	Stack,
	FormControl,
	FormLabel,
	Input,
	Button,
	Image,
} from "@chakra-ui/react";

type HeroProps = {
	header: string;
	subtitle: string;
	hasForm: boolean;
	buttonText?: string;
	image: {
		handle: string;
		height: number;
		width: number;
	};
};

export const Hero = ({
	header,
	subtitle,
	buttonText,
	hasForm,
	image,
}: HeroProps) => {
	return (
		<Flex mb={64} direction={["column", "row"]}>
			<Box w="50%" h="400px" py={32} px={40}>
				<Heading as="h1" fontSize="48px">
					{header}
				</Heading>

				<Text fontSize="md" mt={8}>
					{subtitle}
				</Text>

				{hasForm && (
					<Stack
						as="form"
						mt={16}
						direction={["column", "row"]}
						alignItems="flex-end"
					>
						<FormControl isRequired minW="200px">
							<FormLabel>Ime</FormLabel>
							<Input type="name" />
						</FormControl>
						<FormControl isRequired minW="200px">
							<FormLabel>E-naslov</FormLabel>
							<Input type="email" />
						</FormControl>
						<Button
							colorScheme="blue"
							fontWeight={700}
							type="submit"
							minW="fit-content"
						>
							{buttonText || "Pridružite se nam"}
						</Button>
					</Stack>
				)}
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
					src={`https://media.graphcms.com/${image.handle}`}
					borderRadius="lg"
					maxH={image.height}
				/>
			</Box>
		</Flex>
	);
};
