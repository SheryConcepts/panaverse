import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";

export default function LeftSideBar() {
  return (
    <Box
      textColor="white"
      m="4"
      maxW={["full", "52"]}
      p="4"
      bgColor="dark.2"
      rounded="2xl"
      zIndex="10"
    >
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            Assignments
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Text fontSize="sm">not available at the moment</Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            Texts
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Text fontSize="sm">not available at the moment</Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            Videos
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Text fontSize="sm">not available at the moment</Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
