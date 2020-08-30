import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import { Paper, Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import React from "react";

const JobTimelineItem = () => {
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          9:30 am
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>hi</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={""}>
          <Typography variant="h6" component="h1">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default JobTimelineItem;
