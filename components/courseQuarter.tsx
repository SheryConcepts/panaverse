"use client";

import {
  Box,
  HStack,
  Text,
  Heading,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";
import Parse from "html-react-parser";

export default function CourseQuarter({
  name,
  title,
  duration,
  description,
  outline,
}: {
  name: string;
  title: string;
  duration: string;
  description: string;
  outline: { title: string; description: string }[];
}) {
  return (
    <Box textColor="white" maxW="container.lg">
      <HStack mb="2">
        <Text fontSize="small">{name}</Text>
        <HStack pl="4">
          <Icon as={RepeatClockIcon} />
          <Text fontSize="x-small">{duration}</Text>
        </HStack>
      </HStack>
      <Heading mb="4">{title}</Heading>
      <Text mb="4">{description}</Text>
      <Heading size="md" mb="4">
        Course Outline
      </Heading>
      <Accordion allowMultiple allowToggle>
        {outline.map((i) => (
          <OutlineAccordion
            key={i.title}
            title={i.title}
            description={i.description}
          />
        ))}
      </Accordion>
    </Box>
  );
}

const tempMarkdown =
  "Learn HTML by Hira Khan (Watch Recorded Videos)[https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6](https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6) Learn CSS Intro by Hira Khan (Watch Recorded Videos)[https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob](https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob)";

const tempHTML = ` 
    <p>Learn HTML by Hira Khan (Watch Recorded Videos)</p>
    <p>
      <a
        href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
        >https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6</a
      >
    </p>
    <p>Learn CSS Intro by Hira Khan (Watch Recorded Videos)</p>
    <p>
      <a
        href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
        >https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob</a
      >
    </p>
`;

function OutlineAccordion({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <AccordionItem>
      <AccordionButton fontWeight="bold">
        {title}
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <Box className="outline-item">{Parse(description)}</Box>
      </AccordionPanel>
    </AccordionItem>
  );
}
