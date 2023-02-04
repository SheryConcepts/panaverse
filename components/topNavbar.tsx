"use client";

import { HStack, Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import logo from "@/public/svg/pink-logo.svg";
import Link from "next/link";

export default function TopNavbar() {
  return (
    <Box
      position="fixed"
      zIndex={10}
      w="full"
      backgroundColor="dark.1"
      boxShadow="base"
      textColor="white"
    >
      <HStack className="container" py="2" px="2" justify="space-between">
        <Box alignSelf="flex-start">
          <Image height="80" width="80" src={logo} alt="Panaverse Logo" />
        </Box>
        <HStack justify="space-evenly" w="sm">
          <Text borderBottom="2px" borderBottomColor="light.4">
            <Link href="/">Courses</Link>
          </Text>
          <Text borderBottom="2px" borderBottomColor="light.4">
            <Link href="/">Community</Link>
          </Text>
          <Text borderBottom="2px" borderBottomColor="light.4">
            <Link href="/">About</Link>
          </Text>
        </HStack>
        <Button variant="outline" color="light.4">
          Apply
        </Button>
      </HStack>
    </Box>
  );
}
