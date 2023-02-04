"use client";

import { Box, Text, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import hero_illus from "@/public/svg/hero_illus.svg";

export default function Page() {
  return (
    <Box pt="16" backgroundColor="dark.2" textColor="white">
      <HStack className="container" p="4" justify="space-between">
        <Box w="lg">
          <Heading as="h1" pb="4" fontSize="4xl">
            Learn latest Tech Skills that matter.
          </Heading>
          <Text fontWeight={"light"} fontSize="xl">
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
