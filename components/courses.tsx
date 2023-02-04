"use client";

import { Box, Heading, HStack } from "@chakra-ui/react";
import CourseCard from "./courseCard";

export default function Page() {
  const WMD = {
    list: [
      "Learn Programming from First Principles",
      "Understand to build GUIs on the web and beyond",
      "Master Blockchain and Distributed Systems",
      "Build client experiences using 3D tech",
      "Merge the decentralized worlds using WEB3",
      "Build distributed Virtual and Augmented Worlds",
    ],
    title: "Web3.0 and Metaverse Development",
    banner: ["W", "M", "D"],
  };

  const AIC = {
    list: [
      "Introduction to Artificial Intelligence",
      "Learning about machine learning techniques",
      "Excel at Deep Learning",
      "Build Intelligent Systems and APIs",
      "Learn to use Large Language Models",
      "Use AI and Deep Learning ecosystem to build products",
    ],
    title: "Artificial Intelligence and Deep Learning",
    banner: ["A", "I", "C"],
  };

  const CNC = {
    list: [
      "Master the Cloud",
      "History and possible future of large computation",
      "Learn to build applications on Cloud",
      "Navigate between different Cloud Environments",
      "Utilize computer providers like AWS",
      "Learn about Containers",
      "CDK with Kubernetes to go independent",
    ],
    title: "Cloud Native Computing",
    banner: ["C", "N", "C"],
  };

  const IOT = {
    list: [
      "Build Computing Solutions for smart devices",
      "Learn Embedded Programming",
      "Get Familiar with C and Rust ecosystems",
      "Build houses of the Future",
      "Learn about Smart Cities",
      "Get closer to hardware",
      "Voice Computing, Matter Protocols and more",
    ],
    title: "Ambient Computing and IOT",
    banner: ["I", "O", "T"],
  };

  const BIO = {
    list: [
      "Learn fundamentals of Biology",
      "Computer Programming with Python",
      "Learn about Genomics",
      "Interpret usefull information from Genomics datasets",
      "State of the art Tooling",
      "Save fellow human lives",
      "Help institutions cure diseases and make medicines",
    ],
    title: "Genomics and BioInformatics",
    banner: ["B", "I", "O"],
  };

  const NPA = {
    list: [
      "Become a Network Engineers",
      "Understand all layers of Internet",
      "Use Latest protocols and technologies of Internet",
      "Become more agile and adoptable",
      "Learn Linux, Git, Python and APIs",
      "Do automations of networks like a master",
    ],
    title: "Network Programmability and Automation",
    banner: ["N", "P", "A"],
  };

  return (
    <Box backgroundColor="dark.3" p="8">
      <HStack
        m="auto"
        fontSize="4xl"
        textColor="white"
        fontWeight="black"
        my="8"
        maxW="container.md"
        justify="center"
      >
        <Heading
          borderTop="2px"
          borderTopColor="light.2"
          borderBottom="2px"
          borderBottomColor="light.2"
        >
          Specializations
        </Heading>
      </HStack>
      <CourseCard list={WMD.list} title={WMD.title} banner={WMD.banner} />
      <CourseCard list={AIC.list} title={AIC.title} banner={AIC.banner} />
      <CourseCard list={CNC.list} title={CNC.title} banner={CNC.banner} />
      <CourseCard list={IOT.list} title={IOT.title} banner={IOT.banner} />
      <CourseCard list={BIO.list} title={BIO.title} banner={BIO.banner} />
      <CourseCard list={NPA.list} title={NPA.title} banner={NPA.banner} />
    </Box>
  );
}
