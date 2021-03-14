import React from "react";
import { Link as ChakraLink, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

type ImageCardProps = {
	text: string;
	image: string;
	to: string;
};

const ImageCard = ({ text, image, to }: ImageCardProps) => {
	return (
		<Stack>
			<Link href={`${to}`} passHref>
				<ChakraLink
					p={4}
					borderRadius="6px"
					_hover={{
						backgroundColor: "gray.100",
						color: "gray.700",
					}}
				>
					<Image
						src={`https://media.graphcms.com/${image}`}
						alt="Image card"
						backgroundColor="gray.100"
						borderRadius={4}
					/>
					<Text fontSize="xl" fontWeight={700} mt={4}>
						{text}
					</Text>
				</ChakraLink>
			</Link>
		</Stack>
	);
};

export default ImageCard;
