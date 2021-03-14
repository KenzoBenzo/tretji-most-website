import React from "react";
import {
	Heading,
	FormLabel,
	Input,
	Textarea,
	Button,
	FormControl,
	Box,
} from "@chakra-ui/react";
import { SingleSection } from "../components/single-section";

const ContactPage = () => {
	return (
		<SingleSection>
			<Heading as="h1" textStyle="h1" textAlign="center" mb={12}>
				Stopite v stik z nami.
			</Heading>
			<Box
				as="form"
				// @ts-ignore
				action="/success/"
				maxW="750px"
				mx="auto"
				name="contact"
				data-netlify="true"
				method="post"
				data-netlify-honeypot="bot-field"
			>
				<input type="hidden" name="bot-field" />
				<input type="hidden" name="form-name" value="contact" />

				<FormControl isRequired>
					<FormLabel htmlFor="name" fontWeight={700}>
						Ime
					</FormLabel>
					<Input type="text" name="name" id="name" mb={4} />
				</FormControl>

				<FormControl isRequired w="100%">
					<FormLabel htmlFor="email" fontWeight={700}>
						Email
					</FormLabel>
					<Input type="email" name="email" id="email" mb={4} />
				</FormControl>

				<FormControl isRequired>
					<FormLabel htmlFor="message" fontWeight={700}>
						Sporočilo
					</FormLabel>
					<Textarea id="message" name="message" resize="none" mb={4} />
				</FormControl>

				<Button
					mt={4}
					type="submit"
					isFullWidth
					bgGradient="linear(to-br, blue.200, blue.300, blue.400, blue.500,blue.600, blue.700,blue.800, blue.900)"
					color="white"
					variant="solid"
					_hover={{
						bgGradient:
							"linear(to-br, blue.400, blue.500,blue.600, blue.700,blue.800, blue.900)",
					}}
					transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
					_active={{
						bgGradient: "linear(to-br, blue.700,blue.800, blue.900)",
					}}
				>
					Submit
				</Button>
			</Box>
		</SingleSection>
	);
};

export default ContactPage;
