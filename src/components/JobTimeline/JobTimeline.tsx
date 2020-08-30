import Timeline from "@material-ui/lab/Timeline";
import {
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React, { useState } from "react";
import RoundImage from "../common/RoundImage";
import jobs from "../../data/jobs";
import Fade from "@material-ui/core/Fade";
import {
  Clickable,
  DescriptionText,
  DurationTypography,
  StyledConnector,
  TeamText,
  TechText,
} from "./style";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grow } from "@material-ui/core";

const JobTimeline = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Timeline>
      {jobs.map((job, index) => (
        <Fade in timeout={(index + 1) * 1500}>
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
                    size={job.current ? "15vmin" : "10vmin"}
                  />
                </a>
              </TimelineDot>
              {index !== jobs.length - 1 && <StyledConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <b>{job.title}</b>
              </div>
              {job.team && (
                <>
                  <TeamText>{job.team}</TeamText>
                </>
              )}

              <Grow
                in={showDetails}
                mountOnEnter
                unmountOnExit
                appear
                style={{ transformOrigin: "0 0 0" }}
              >
                <div>
                  <DescriptionText>{job.description}</DescriptionText>
                  <TechText>{job.tech.join(" · ")}</TechText>
                </div>
              </Grow>
              <Clickable onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Clickable>
            </TimelineContent>
          </TimelineItem>
        </Fade>
      ))}
    </Timeline>
  );
};

export default JobTimeline;
