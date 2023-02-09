"use client";

import {
  HStack,
  Box,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "@/public/svg/pink-logo.svg";
import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function TopNavbar() {
  return (
    <Box
      position="sticky"
      top="0"
      zIndex={10}
      w="full"
      backgroundColor="dark.1"
      boxShadow="base"
      textColor="white"
    >
      <HStack
        maxW={["container.md", "container.md", "container.md", "container.lg"]}
        m="auto"
        py="2"
        px="2"
        justify="space-between"
      >
        <Box alignSelf="flex-start">
          <Image height="80" width="80" src={logo} alt="Panaverse Logo" />
        </Box>
        <HStack
          justify="space-evenly"
          w="sm"
          display={["none", "none", "flex"]}
        >
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
        <Button
          display={["none", "none", ""]}
          variant="outline"
          color="light.4"
        >
          Apply
        </Button>
        <Box display={["flex", "flex", "none"]} pr="2">
          <Menu>
            <MenuButton as={HamburgerIcon} />
            <MenuList background="dark.3" textColor="white" fontSize="sm">
              <MenuItem
                background="dark.3"
                borderBottom="1px"
                borderTop="1px"
                borderTopColor="light.1"
                borderBottomColor="light.1"
                p="2"
                bgColor="light.3"
              >
                Apply
              </MenuItem>
              <MenuItem
                background="dark.3"
                borderBottom="1px"
                borderTop="1px"
                borderTopColor="light.1"
                borderBottomColor="light.1"
              >
                Courses
              </MenuItem>
              <MenuItem
                background="dark.3"
                borderBottom="1px"
                borderBottomColor="light.1"
              >
                Community
              </MenuItem>
              <MenuItem
                borderBottom="1px"
                borderBottomColor="light.1"
                background="dark.3"
              >
                About
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        )
      </HStack>
    </Box>
  );
}
