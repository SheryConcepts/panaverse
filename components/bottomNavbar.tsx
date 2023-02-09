"use client";

import {
  Box,
  HStack,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import Image from "next/image";
import whatsapp from "@/public/svg/whatsapp.svg";
import discord from "@/public/svg/discord.svg";
import facebook from "@/public/svg/facebook.svg";
import twitter from "@/public/svg/twitter.svg";
import github from "@/public/svg/github.svg";
import slack from "@/public/svg/slack.svg";
import youtube from "@/public/svg/youtube.svg";

import Link from "next/link";

export default function BottomNavbar() {
  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      backgroundColor="dark.1"
      w="full"
      zIndex="2"
      py="2"
    >
      <HStack
        className="container"
        textColor="light.1"
        px="4"
        justify="space-between"
      >
        <HStack>
          <Link href="/">
            <Image src={whatsapp} alt="whatsapp logo" />
          </Link>
          <Link href="/">
            <Image src={discord} alt="discord logo" />
          </Link>
          <Link href="/">
            <Image src={facebook} alt="facebook logo" />
          </Link>
          <Link href="/">
            <Image src={twitter} alt="twitter logo" />
          </Link>
          <Link href="/">
            <Image src={slack} alt="slack logo" />
          </Link>
          <Link href="/">
            <Image src={github} alt="github logo" />
          </Link>
          <Link href="/">
            <Image src={youtube} alt="youtube logo" />
          </Link>
        </HStack>
        <InputGroup maxW="40" size="sm" display={["none", "none", "flex"]}>
          <Input
            _active={{ borderColor: "light.2" }}
            borderColor="light.3"
            pr="2"
            placeholder="search"
          />
          <InputRightElement>
            <Icon as={SearchIcon} />
          </InputRightElement>
        </InputGroup>
        {/* <Box display={["none", "flex"]}>
          <Text as="h6" fontSize="small">
            made with ❤️ by{" "}
            <Link href="http://www.github.com/SheryConcepts">
              <Text textDecorationLine="underline">Sheharyar Ahmed</Text>
            </Link>
          </Text>
        </Box> */}
      </HStack>
    </Box>
  );
}
