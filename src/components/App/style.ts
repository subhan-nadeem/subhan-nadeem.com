import styled, { css } from "styled-components";

const profilePicSize = "50vh";

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
`;

export { profilePicSize, Centered, Page };
