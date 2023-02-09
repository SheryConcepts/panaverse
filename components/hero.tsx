"use client";

import { Box, Text, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import hero_illus from "@/public/svg/hero_illus.svg";

export default function Page() {
  return (
    <Box pt="16" backgroundColor="dark.2" textColor="white">
      <HStack
        maxW={["container.sm", "container.md", "container.md", "container.lg"]}
        m="auto"
        p="4"
        justify={["space-around", "space-around", "space-around"]}
        flexDir={["column", "column", "row"]}
        align={["center"]}
      >
        <Box w={["64", "md", "lg"]} mt="4" px={["8", "8"]}>
          <Heading as="h1" pb="4" fontSize={["xl", "2xl", "4xl"]}>
            Learn latest Tech Skills that matter.
          </Heading>
          <Text fontWeight={"light"} fontSize={["sm", "md", "xl"]}>
            Software Development like it was always meant to be, from Low Level
            Networking to Imaginative Worlds of Metaverse.
          </Text>
        </Box>
        <Image
          width={400}
          src={hero_illus}
          alt="Illustration of Hero section"
        />
      </HStack>
    </Box>
  );
}
