import React, { useRef, useState } from "react";
import myPicture from "../../img/myPicture.jpg";
import {
  Centered,
  InstagramFeed,
  InstagramHandle,
  LinkNoColor,
  Page,
  ProfileAvatarStyles,
  TooltipText,
} from "./style";
import JobTimeline from "../JobTimeline/JobTimeline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Fade, Tooltip } from "@material-ui/core";
import { useInstagramFeed } from "../hooks/useInstagramFeed";
import { Clickable } from "../JobTimeline/style";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

const ProfileAvatar = styled(Avatar)`
  ${ProfileAvatarStyles}
`;

function App() {
  useInstagramFeed();
  const instaFeedRef = useRef<HTMLDivElement>(null);
  const [isPicLoaded, setIsPicLoaded] = useState(false);
  return (
    <Page>
      <Fade in={isPicLoaded} timeout={2000}>
        <ProfileAvatar
          isLoaded={isPicLoaded}
          onLoad={() => {
            setIsPicLoaded(true);
          }}
          src={myPicture}
          alt={"me"}
        />
      </Fade>
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
        &nbsp;
        <Tooltip title={<TooltipText>Instagram</TooltipText>} placement="top">
          <Clickable
            onClick={() => {
              if (instaFeedRef?.current) {
                instaFeedRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            <InstagramIcon fontSize={"large"} />
          </Clickable>
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
      <InstagramFeed ref={instaFeedRef} id="pixlee_container"></InstagramFeed>
    </Page>
  );
}

export default App;
