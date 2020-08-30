import styled, { css } from "styled-components";
import Avatar from "@material-ui/core/Avatar";

const profilePicSize = "50vmin";

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

const Page = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 10px;
  overflow: auto;
`;

const ProfileAvatar = styled(Avatar)`
  && {
    height: ${profilePicSize};
    width: ${profilePicSize};
  }
`;

const LinkNoColor = styled.a`
  color: unset;
  font-style: normal;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TooltipText = styled.span`
  font-size: 15px;
`;

const InstagramFeed = styled.div`
  width: 80vw;
  height: 80vh;
  overflow: auto;
  margin-top: 10px;
`;

const InstagramHandle = styled.span`
  font-size: 18px;
  display: block;
`;

export {
  Centered,
  Page,
  ProfileAvatar,
  LinkNoColor,
  TooltipText,
  InstagramFeed,
  InstagramHandle,
};
