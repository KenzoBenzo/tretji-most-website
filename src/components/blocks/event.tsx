import React from "react";
import {
	Alert,
	AlertTitle,
	AlertDescription,
	Flex,
	Box,
	ButtonGroup,
	Button,
} from "@chakra-ui/react";

type EventCardProps = {
	title: string;
	date: string;
	description: string;
	eventStatus: "past" | "limited" | "open";
};

export const Event = ({
	title,
	date,
	description,
	eventStatus,
}: EventCardProps) => {
	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		hour: "numeric",
		minute: "numeric",
		day: "numeric",
		month: "short",
	});
	return (
		<>
			<Alert
				colorScheme={
					eventStatus === "past"
						? "gray"
						: eventStatus === "limited"
						? "amber"
						: eventStatus === "open"
						? "emerald"
						: "gray"
				}
				variant="left-accent"
				borderRadius="lg"
				maxW="600px"
				mb={8}
				mx="auto"
				opacity={eventStatus === "past" ? "50%" : null}
			>
				<Box>
					<Flex justify="space-between" mb={4}>
						<AlertTitle fontSize="lg">{title}</AlertTitle>
						<AlertTitle fontSize="lg">{formattedDate}</AlertTitle>
					</Flex>
					<AlertDescription>{description}</AlertDescription>
					<ButtonGroup
						spacing={8}
						colorScheme={
							eventStatus === "past"
								? "gray"
								: eventStatus === "limited"
								? "amber"
								: eventStatus === "open"
								? "emerald"
								: "gray"
						}
						isDisabled={eventStatus === "past"}
						display="block"
						w="full"
						mt={4}
					>
						<Button w="47%">I'm interested</Button>
						<Button w="47%">Attend</Button>
					</ButtonGroup>
				</Box>
			</Alert>
		</>
	);
};
