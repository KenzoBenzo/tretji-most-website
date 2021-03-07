import React from "react";
import {
  Link as ChakraLink,
  // Image as ChakraImage,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

type ImageCardProps = {
  text: string;
  image: string;
  to: string;
};

const ImageCard = ({ text, image, to }: ImageCardProps) => {
  return (
    <Stack>
      <ChakraLink
        href={`${to}`}
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
          width="100%"
          height="100%"
          // backgroundColor="gray.100"
          // borderRadius={4}
        />
        <Text fontSize="xl" fontWeight={700} mt={4}>
          {text}
        </Text>
      </ChakraLink>
    </Stack>
  );
};

export default ImageCard;
