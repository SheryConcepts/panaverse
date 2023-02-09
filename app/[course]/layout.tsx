"use client";

import { ReactNode } from "react";
import {
  HStack,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";
import CourseSideBar from "@/components/courseSideBar";

export default function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: { course: string };
}) {
  function quarterLink(q: string): string {
    if (params.course === "wmd") {
      return `/wmd/${q}`;
    } else if (params.course === "aic") {
      return `/aic/${q}`;
    } else if (params.course === "cnc") {
      return `/cnc/${q}`;
    } else if (params.course === "iot") {
      return `/iot/${q}`;
    } else if (params.course === "bio") {
      return `/bio/${q}`;
    } else if (params.course === "npa") {
      return `/npa/${q}`;
    } else {
      return "/";
    }
  }

  function overviewLink(): string {
    if (params.course === "wmd") {
      return `/wmd`;
    } else if (params.course === "aic") {
      return `/aic`;
    } else if (params.course === "cnc") {
      return `/cnc`;
    } else if (params.course === "iot") {
      return `/iot`;
    } else if (params.course === "bio") {
      return `/bio`;
    } else if (params.course === "npa") {
      return `/npa`;
    } else {
      return "/";
    }
  }

  return (
    <Box bgColor="dark.4" pb="16" minH="100vh">
      <HStack
        bgColor="dark.2"
        textColor="white"
        px="14"
        justify="space-between"
      >
        <Link href={overviewLink()}>
          <Box
            mt="1"
            px="4"
            py="2"
            borderBottom="4px"
            borderBottomColor="light.1"
          >
            Overview
          </Box>
        </Link>
        <HStack fontWeight="bold" display={["none", "flex"]} textColor="dark.1">
          <Link href={quarterLink("q1")}>
            <Box p="2" bgColor="light.4">
              Q1
            </Box>
          </Link>
          <Link href={quarterLink("q2")}>
            <Box p="2" bgColor="light.4">
              Q2
            </Box>
          </Link>
          <Link href={quarterLink("q3")}>
            <Box p="2" bgColor="light.4">
              Q3
            </Box>
          </Link>
          <Link href={quarterLink("q4")}>
            <Box p="2" bgColor="light.4">
              Q4
            </Box>
          </Link>
          <Link href={quarterLink("q5")}>
            <Box p="2" bgColor="light.4">
              Q5
            </Box>
          </Link>
        </HStack>
        <Box display={["flex", "none"]}>
          <Menu>
            <MenuButton fontSize="2xl" as={ChevronDownIcon} />
            <MenuList bgColor="dark.3">
              <MenuItem bgColor="dark.3" _hover={{ bgColor: "dark.2" }}>
                Q1
              </MenuItem>
              <MenuItem
                textAlign="center"
                bgColor="dark.3"
                _hover={{ bgColor: "dark.2" }}
              >
                Q2
              </MenuItem>
              <MenuItem bgColor="dark.3" _hover={{ bgColor: "dark.2" }}>
                Q3
              </MenuItem>
              <MenuItem bgColor="dark.3" _hover={{ bgColor: "dark.2" }}>
                Q4
              </MenuItem>
              <MenuItem bgColor="dark.3" _hover={{ bgColor: "dark.2" }}>
                Q5
              </MenuItem>
              <MenuItem bgColor="dark.3" _hover={{ bgColor: "dark.2" }}>
                Q6
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(4, 1fr)"]}
      >
        <GridItem colSpan={1}>
          <CourseSideBar />
        </GridItem>
        <GridItem pl={["4", "4", "none"]} colSpan={3}>
          {children}
        </GridItem>
      </Grid>
    </Box>
  );
}
