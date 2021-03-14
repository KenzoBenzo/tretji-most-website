import React from "react";
import { Box, Heading, Text, Flex, Image, Stack } from "@chakra-ui/react";
import Event from "../components/event";
import { SingleSection } from "../components/single-section";
// import { graphql, useStaticQuery } from "gatsby";

const CalendarPage = () => {
	// const data = useStaticQuery(
	// 	graphql`
	// 		query GET_EVENTS {
	// 			gcms {
	// 				events {
	// 					localizations(includeCurrent: true) {
	// 						locale
	// 						title
	// 						description
	// 						date
	// 						eventStatus
	// 					}
	// 				}
	// 			}
	// 		}
	// 	`
	// );

	return (
		<>
			<Flex mb={64} direction={["column", "row"]}>
				<Box w="50%" h="400px" py={32} px={40}>
					<Heading as="h1" fontSize="48px">
						Calendar of events
					</Heading>
					<Text fontSize="md" mt={8}>
						Join us at one of our future events! We get together often to
						discuss, learn and share.
					</Text>
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
						src="https://media.graphcms.com/wpuKJvGKTHSOceyE8RPy"
						borderRadius="lg"
						maxH="400px"
					/>
				</Box>
			</Flex>

			<Stack alignItems="center" w="full">
				{/* {data.gcms.events.map((event, index) => ( */}
				<Event
					title="Kiparske instalacije Orektikon - Anima Sensitiva"
					date="4.6.2020"
					description="V interpretacijskem centru botaničnega vrta sežana bo od 4. Julija do 11 Julija 2020. Odprta kiparska instalacija."
					status="past"
				/>
				<Event
					title="Kiparske instalacije Orektikon - Anima Sensitiva"
					date="4.6.2020"
					description="V interpretacijskem centru botaničnega vrta sežana bo od 4. Julija do 11 Julija 2020. Odprta kiparska instalacija."
					status="limited"
				/>
				<Event
					title="Kiparske instalacije Orektikon - Anima Sensitiva"
					date="4.6.2020"
					description="V interpretacijskem centru botaničnega vrta sežana bo od 4. Julija do 11 Julija 2020. Odprta kiparska instalacija."
					status="open"
				/>
				{/* ))} */}
			</Stack>
		</>
	);
};

export default CalendarPage;
