import Timeline from "@material-ui/lab/Timeline";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import { Typography } from "@material-ui/core";
import React from "react";
import RoundImage from "../common/RoundImage";
import styled from "styled-components";
import jobs from "../../data/jobs";
import Fade from "@material-ui/core/Fade";

const StyledConnector = styled(TimelineConnector)`
  min-height: 50px;
`;

const DurationTypography = styled(Typography)`
  font-size: 15px !important;
`;

const TeamText = styled.div`
  font-size: 20px;
`;

const DescriptionText = styled.div`
  font-size: 15px;
`;

const JobTimeline = () => {
  return (
    <Timeline>
      {jobs.map((job, index) => (
        <Fade in timeout={(index + 1) * 1000}>
          <TimelineItem>
            <TimelineOppositeContent>
              <DurationTypography
                variant="overline"
                display="block"
                gutterBottom
              >
                {job.time}
              </DurationTypography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <RoundImage
                  src={job.image}
                  alt={job.company_name}
                  size={job.current ? "125px" : "75px"}
                />
              </TimelineDot>
              {index !== jobs.length - 1 && <StyledConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <b>{job.title}</b>
              <br />
              {job.team && (
                <>
                  <TeamText>{job.team}</TeamText>
                </>
              )}
              <br />
              <DescriptionText>{job.description}</DescriptionText>
            </TimelineContent>
          </TimelineItem>
        </Fade>
      ))}
    </Timeline>
  );
};

export default JobTimeline;
