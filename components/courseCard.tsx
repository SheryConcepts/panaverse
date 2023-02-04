"use client";
import {
  Box,
  HStack,
  VStack,
  Heading,
  List,
  ListItem,
  ListIcon,
  Text,
  Button,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { v4 as randomUUID } from "uuid";

export default function CourseCard({
  banner,
  title,
  list,
}: {
  banner: string[];
  title: string;
  list: string[];
}) {
  return (
    <HStack
      margin="auto"
      maxW="container.md"
      backgroundColor="dark.4"
      px="4"
      borderBottom="4px"
      borderRight="4px"
      borderColor="light.1"
      mb="16"
    >
      <VStack
        alignSelf="stretch"
        justify="center"
        align="center"
        flexGrow="3"
        flexShrink="0"
        background="dark.1"
        p="2"
        textColor="light.1"
      >
        <Heading fontSize="5xl">{banner[0]}</Heading>
        <Heading fontSize="5xl">{banner[1]}</Heading>
        <Heading fontSize="5xl">{banner[2]}</Heading>
      </VStack>
      <VStack
        flexShrink="10"
        flexGrow="3"
        textColor="white"
        align="start"
        p={4}
      >
        <Heading fontSize="xl" fontWeight="bold">
          {title}
        </Heading>

        <List spacing="1" fontSize="sm">
          {list.map((i) => (
            <Item key={randomUUID()} body={i} />
          ))}
        </List>
      </VStack>
      <VStack
        flexGrow="1"
        flexShrink="1"
        alignSelf="stretch"
        background="dark.1"
        textColor="light.3"
        fontSize="sm"
      >
        <VStack alignSelf="stretch" flexGrow="1" justify="center" p="2">
          <Button variant="outline" size="xs" py="4" w="full">
            Learn More
          </Button>
        </VStack>
        <VStack alignSelf="stretch" flexGrow="1" justify="center" p="2">
          <Button variant="outline" size="xs" py="4" w="full">
            Apply
          </Button>
        </VStack>
      </VStack>
    </HStack>
  );
}

function Item({ body }: { body: string }) {
  return (
    <ListItem>
      <ListIcon as={ChevronRightIcon} color="light.1" />
      {body}
    </ListItem>
  );
}
