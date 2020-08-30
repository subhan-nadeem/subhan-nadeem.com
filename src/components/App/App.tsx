import React, { useState } from "react";
import myPicture from "../../img/myPicture.jpg";
import { Centered, Page, profilePicSize } from "./style";
import JobTimeline from "../JobTimeline/JobTimeline";
import RoundImage from "../common/RoundImage";
import GitHubIcon from "@material-ui/icons/GitHub";
import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Fade, Tooltip } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";

const LinkNoColor = styled.a`
  color: unset;
`;

const TooltipText = styled.span`
  font-size: 15px;
`;

function App() {
  return (
    <Page>
      <RoundImage
        src={myPicture}
        size={profilePicSize}
        alt={"me"}
        offset={"-24%"}
      />
      <h1>Subhan Nadeem</h1>
      <Centered>
        <Tooltip title={<TooltipText>LinkedIn</TooltipText>} placement="top">
          <LinkNoColor
            href="https://linkedin.com/in/subhan-nadeem"
            target="_blank"
          >
            <LinkedInIcon fontSize={"large"} />
          </LinkNoColor>
        </Tooltip>
        &nbsp;
        <Tooltip title={<TooltipText>GitHub</TooltipText>} placement="top">
          <LinkNoColor href="https://github.com/subhan-nadeem" target="_blank">
            <GitHubIcon fontSize={"large"} />
          </LinkNoColor>
        </Tooltip>
        {/*
        &nbsp;
        <Tooltip title={<TooltipText>Resume</TooltipText>} placement="top">
          <LinkNoColor href="/resume.pdf">
            <DescriptionIcon fontSize={"large"} />
          </LinkNoColor>
        </Tooltip>*/}
      </Centered>
      <JobTimeline />
    </Page>
  );
}

export default App;
