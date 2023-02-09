import { Box, Heading, Text } from "@chakra-ui/react";

export default function CoursePage({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <Box textColor="white">
      <Heading mb="4">{heading}</Heading>
      <Text>{description}</Text>
    </Box>
  );
}
