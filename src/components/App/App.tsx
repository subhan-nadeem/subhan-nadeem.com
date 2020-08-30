import React, { useEffect } from "react";
import myPicture from "../../img/myPicture.jpg";
import {
  Centered,
  InstagramFeed,
  InstagramHandle,
  LinkNoColor,
  Page,
  ProfileAvatar,
  TooltipText,
} from "./style";
import JobTimeline from "../JobTimeline/JobTimeline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Tooltip } from "@material-ui/core";
import { useInstagramFeed } from "../hooks/useInstagramFeed";

function App() {
  useInstagramFeed();
  return (
    <Page>
      <ProfileAvatar src={myPicture} alt={"me"} />
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
      <LinkNoColor href="https://instagram.com/subhan.photo" target="_blank">
        <InstagramIcon /> <InstagramHandle>@subhan.photo</InstagramHandle>
      </LinkNoColor>
      <InstagramFeed id="pixlee_container"></InstagramFeed>
    </Page>
  );
}

export default App;
