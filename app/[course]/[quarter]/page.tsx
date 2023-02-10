"use client";

import CourseQuarter from "@/components/courseQuarter";
import { Box } from "@chakra-ui/react";
import { data } from "@/components/data";

export default function Page({
  params,
}: {
  params: { quarter: string; course: string };
}) {
  return (
    <Box py="4" px="4">
      {params.course === "wmd" && params.quarter === "q1" ? (
        <CourseQuarter
          name={data.quarter1.wmd.name}
          duration={data.quarter1.wmd.duration}
          title={data.quarter1.wmd.title}
          description={data.quarter1.wmd.description}
          outline={data.quarter1.wmd.outline}
        />
      ) : params.course === "wmd" && params.quarter === "q2" ? (
        <CourseQuarter
          name={data.quarter2.wmd.name}
          duration={data.quarter2.wmd.duration}
          title={data.quarter2.wmd.title}
          description={data.quarter2.wmd.description}
          outline={data.quarter2.wmd.outline}
        />
      ) : params.course === "wmd" && params.quarter === "q3" ? (
        <CourseQuarter
          name={data.quarter3.wmd.name}
          duration={data.quarter3.wmd.duration}
          title={data.quarter3.wmd.title}
          description={data.quarter3.wmd.description}
          outline={data.quarter3.wmd.outline}
        />
      ) : params.course === "wmd" && params.quarter === "q4" ? (
        <CourseQuarter
          name={data.quarter4.wmd.name}
          duration={data.quarter4.wmd.duration}
          title={data.quarter4.wmd.title}
          description={data.quarter4.wmd.description}
          outline={data.quarter4.wmd.outline}
        />
      ) : params.course === "wmd" && params.quarter === "q5" ? (
        <CourseQuarter
          name={data.quarter5.wmd.name}
          duration={data.quarter5.wmd.duration}
          title={data.quarter5.wmd.title}
          description={data.quarter5.wmd.description}
          outline={data.quarter5.wmd.outline}
        />
      ) : params.course === "aic" && params.quarter === "q1" ? (
        <CourseQuarter
          name={data.quarter1.aic.name}
          duration={data.quarter1.aic.duration}
          title={data.quarter1.aic.title}
          description={data.quarter1.aic.description}
          outline={data.quarter1.aic.outline}
        />
      ) : params.course === "aic" && params.quarter === "q2" ? (
        <CourseQuarter
          name={data.quarter2.aic.name}
          duration={data.quarter2.aic.duration}
          title={data.quarter2.aic.title}
          description={data.quarter2.aic.description}
          outline={data.quarter2.aic.outline}
        />
      ) : params.course === "aic" && params.quarter === "q3" ? (
        <CourseQuarter
          name={data.quarter3.aic.name}
          duration={data.quarter3.aic.duration}
          title={data.quarter3.aic.title}
          description={data.quarter3.aic.description}
          outline={data.quarter3.aic.outline}
        />
      ) : params.course === "aic" && params.quarter === "q4" ? (
        <CourseQuarter
          name={data.quarter4.aic.name}
          duration={data.quarter4.aic.duration}
          title={data.quarter4.aic.title}
          description={data.quarter4.aic.description}
          outline={data.quarter4.aic.outline}
        />
      ) : params.course === "aic" && params.quarter === "q5" ? (
        <CourseQuarter
          name={data.quarter5.aic.name}
          duration={data.quarter5.aic.duration}
          title={data.quarter5.aic.title}
          description={data.quarter5.aic.description}
          outline={data.quarter5.aic.outline}
        />
      ) : params.course === "cnc" && params.quarter === "q1" ? (
        <CourseQuarter
          name={data.quarter1.cnc.name}
          duration={data.quarter1.cnc.duration}
          title={data.quarter1.cnc.title}
          description={data.quarter1.cnc.description}
          outline={data.quarter1.cnc.outline}
        />
      ) : params.course === "cnc" && params.quarter === "q2" ? (
        <CourseQuarter
          name={data.quarter2.cnc.name}
          duration={data.quarter2.cnc.duration}
          title={data.quarter2.cnc.title}
          description={data.quarter2.cnc.description}
          outline={data.quarter2.cnc.outline}
        />
      ) : params.course === "cnc" && params.quarter === "q3" ? (
        <CourseQuarter
          name={data.quarter3.cnc.name}
          duration={data.quarter3.cnc.duration}
          title={data.quarter3.cnc.title}
          description={data.quarter3.cnc.description}
          outline={data.quarter3.cnc.outline}
        />
      ) : params.course === "cnc" && params.quarter === "q4" ? (
        <CourseQuarter
          name={data.quarter4.cnc.name}
          duration={data.quarter4.cnc.duration}
          title={data.quarter4.cnc.title}
          description={data.quarter4.cnc.description}
          outline={data.quarter4.cnc.outline}
        />
      ) : params.course === "cnc" && params.quarter === "q5" ? (
        <CourseQuarter
          name={data.quarter5.cnc.name}
          duration={data.quarter5.cnc.duration}
          title={data.quarter5.cnc.title}
          description={data.quarter5.cnc.description}
          outline={data.quarter5.cnc.outline}
        />
      ) : params.course === "iot" && params.quarter === "q1" ? (
        <CourseQuarter
          name={data.quarter1.iot.name}
          duration={data.quarter1.iot.duration}
          title={data.quarter1.iot.title}
          description={data.quarter1.iot.description}
          outline={data.quarter1.iot.outline}
        />
      ) : params.course === "iot" && params.quarter === "q2" ? (
        <CourseQuarter
          name={data.quarter2.iot.name}
          duration={data.quarter2.iot.duration}
          title={data.quarter2.iot.title}
          description={data.quarter2.iot.description}
          outline={data.quarter2.iot.outline}
        />
      ) : params.course === "iot" && params.quarter === "q3" ? (
        <CourseQuarter
          name={data.quarter3.iot.name}
          duration={data.quarter3.iot.duration}
          title={data.quarter3.iot.title}
          description={data.quarter3.iot.description}
          outline={data.quarter3.iot.outline}
        />
      ) : params.course === "iot" && params.quarter === "q4" ? (
        <CourseQuarter
          name={data.quarter4.iot.name}
          duration={data.quarter4.iot.duration}
          title={data.quarter4.iot.title}
          description={data.quarter4.iot.description}
          outline={data.quarter4.iot.outline}
        />
      ) : params.course === "iot" && params.quarter === "q5" ? (
        <CourseQuarter
          name={data.quarter5.iot.name}
          duration={data.quarter5.iot.duration}
          title={data.quarter5.iot.title}
          description={data.quarter5.iot.description}
          outline={data.quarter5.iot.outline}
        />
      ) : params.course === "bio" && params.quarter === "q1" ? (
        <CourseQuarter
          name={data.quarter1.bio.name}
          duration={data.quarter1.bio.duration}
          title={data.quarter1.bio.title}
          description={data.quarter1.bio.description}
          outline={data.quarter1.bio.outline}
        />
      ) : params.course === "bio" && params.quarter === "q2" ? (
        <CourseQuarter
          name={data.quarter2.bio.name}
          duration={data.quarter2.bio.duration}
          title={data.quarter2.bio.title}
          description={data.quarter2.bio.description}
          outline={data.quarter2.bio.outline}
        />
      ) : params.course === "bio" && params.quarter === "q3" ? (
        <CourseQuarter
          name={data.quarter3.bio.name}
          duration={data.quarter3.bio.duration}
          title={data.quarter3.bio.title}
          description={data.quarter3.bio.description}
          outline={data.quarter3.bio.outline}
        />
      ) : params.course === "bio" && params.quarter === "q4" ? (
        <CourseQuarter
          name={data.quarter4.bio.name}
          duration={data.quarter4.bio.duration}
          title={data.quarter4.bio.title}
          description={data.quarter4.bio.description}
          outline={data.quarter4.bio.outline}
        />
      ) : params.course === "bio" && params.quarter === "q5" ? (
        <CourseQuarter
          name={data.quarter5.bio.name}
          duration={data.quarter5.bio.duration}
          title={data.quarter5.bio.title}
          description={data.quarter5.bio.description}
          outline={data.quarter5.bio.outline}
        />
      ) : params.course === "npa" && params.quarter === "q1" ? (
        <CourseQuarter
          name={data.quarter1.npa.name}
          duration={data.quarter1.npa.duration}
          title={data.quarter1.npa.title}
          description={data.quarter1.npa.description}
          outline={data.quarter1.npa.outline}
        />
      ) : params.course === "npa" && params.quarter === "q2" ? (
        <CourseQuarter
          name={data.quarter2.npa.name}
          duration={data.quarter2.npa.duration}
          title={data.quarter2.npa.title}
          description={data.quarter2.npa.description}
          outline={data.quarter2.npa.outline}
        />
      ) : params.course === "npa" && params.quarter === "q3" ? (
        <CourseQuarter
          name={data.quarter3.npa.name}
          duration={data.quarter3.npa.duration}
          title={data.quarter3.npa.title}
          description={data.quarter3.npa.description}
          outline={data.quarter3.npa.outline}
        />
      ) : params.course === "npa" && params.quarter === "q4" ? (
        <CourseQuarter
          name={data.quarter4.npa.name}
          duration={data.quarter4.npa.duration}
          title={data.quarter4.npa.title}
          description={data.quarter4.npa.description}
          outline={data.quarter4.npa.outline}
        />
      ) : params.course === "npa" && params.quarter === "q5" ? (
        <CourseQuarter
          name={data.quarter5.npa.name}
          duration={data.quarter5.npa.duration}
          title={data.quarter5.npa.title}
          description={data.quarter5.npa.description}
          outline={data.quarter5.npa.outline}
        />
      ) : (
        <p>not found</p>
      )}
    </Box>
  );
}
