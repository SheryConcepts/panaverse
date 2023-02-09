"use client";
import { Box, Heading } from "@chakra-ui/react";
import CourseOverview from "@/components/courseOverview";

const data = {
  wmd: {
    heading: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences",
  },
  aic: {
    heading: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
  },
  cnc: {
    heading: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes",
  },
  iot: {
    heading: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. ",
  },
  bio: {
    heading: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications",
  },
  npa: {
    heading: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git",
  },
};

export default function Page({ params }: { params: { course: string } }) {
  return (
    <Box py="4" px="4">
      {params.course === "wmd" ? (
        <CourseOverview
          heading={data.wmd.heading}
          description={data.wmd.description}
        />
      ) : params.course === "aic" ? (
        <CourseOverview
          heading={data.aic.heading}
          description={data.aic.description}
        />
      ) : params.course === "cnc" ? (
        <CourseOverview
          heading={data.cnc.heading}
          description={data.cnc.description}
        />
      ) : params.course === "iot" ? (
        <CourseOverview
          heading={data.iot.heading}
          description={data.iot.description}
        />
      ) : params.course === "bio" ? (
        <CourseOverview
          heading={data.bio.heading}
          description={data.bio.description}
        />
      ) : params.course === "npa" ? (
        <CourseOverview
          heading={data.npa.heading}
          description={data.npa.description}
        />
      ) : (
        <Heading textColor="white">Page not found</Heading>
      )}
    </Box>
  );
}
