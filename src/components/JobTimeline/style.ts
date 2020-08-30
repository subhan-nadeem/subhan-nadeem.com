import styled from "styled-components";
import { TimelineConnector } from "@material-ui/lab";
import { Typography } from "@material-ui/core";

const StyledConnector = styled(TimelineConnector)`
  min-height: 50px;
`;

const DurationTypography = styled(Typography)`
  font-size: 15px !important;
`;

const TeamText = styled.div`
  font-size: 20px;
`;

const DescriptionText = styled.p`
  color: lightgrey;
  font-size: 15px;
  font-family: "Muli", sans-serif;
  margin-bottom: 15px;
`;

const TechText = styled.p`
  text-align: center;
  font-family: "Consolas";
  font-size: 14px;
`;
export {
  StyledConnector,
  DurationTypography,
  TeamText,
  DescriptionText,
  TechText,
};
