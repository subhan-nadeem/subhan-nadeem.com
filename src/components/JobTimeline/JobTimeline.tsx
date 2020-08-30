import Timeline from "@material-ui/lab/Timeline";
import {
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import RoundImage from "../common/RoundImage";
import jobs from "../../data/jobs";
import Fade from "@material-ui/core/Fade";
import {
  DescriptionText,
  DurationTypography,
  StyledConnector,
  TeamText,
  TechText,
} from "./style";

const JobTimeline = () => {
  return (
    <Timeline>
      {jobs.map((job, index) => (
        <Fade in timeout={(index + 1) * 1000}>
          <TimelineItem>
            <TimelineOppositeContent>
              <b>{job.company_name}</b>
              <DurationTypography
                variant="overline"
                display="block"
                gutterBottom
              >
                {job.time}
              </DurationTypography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={job.current ? "inherit" : "primary"}>
                <a href={job.href}>
                  <RoundImage
                    src={job.image}
                    alt={job.company_name}
                    size={job.current ? "125px" : "75px"}
                  />
                </a>
              </TimelineDot>
              {index !== jobs.length - 1 && <StyledConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <b>{job.title}</b>
              {job.team && (
                <>
                  <TeamText>{job.team}</TeamText>
                </>
              )}
              <DescriptionText>{job.description}</DescriptionText>
              <TechText>{job.tech.join(" · ")}</TechText>
            </TimelineContent>
          </TimelineItem>
        </Fade>
      ))}
    </Timeline>
  );
};

export default JobTimeline;
