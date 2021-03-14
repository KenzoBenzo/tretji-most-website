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
	status: "past" | "limited" | "open";
};

const EventCard = ({ title, date, description, status }: EventCardProps) => {
	return (
		<>
			<Alert
				colorScheme={
					status === "past"
						? "gray"
						: status === "limited"
						? "amber"
						: status === "open"
						? "emerald"
						: "gray"
				}
				variant="left-accent"
				borderRadius="lg"
				maxW="600px"
				mb={8}
				opacity={status === "past" ? "50%" : null}
			>
				<Box>
					<Flex justify="space-between" mb={4}>
						<AlertTitle fontSize="lg">{title}</AlertTitle>
						<AlertTitle fontSize="lg">{date}</AlertTitle>
					</Flex>
					<AlertDescription>{description}</AlertDescription>
					<ButtonGroup
						spacing={8}
						colorScheme={
							status === "past"
								? "gray"
								: status === "limited"
								? "amber"
								: status === "open"
								? "emerald"
								: "gray"
						}
						isDisabled={status === "past"}
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

export default EventCard;
