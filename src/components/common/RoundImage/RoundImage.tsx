import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RoundImageContainer = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

const Image = styled.img<{ offset?: string }>`
  width: auto;
  height: 100%;
  display: inline;
  margin: 0 auto;
  ${(props) => props.offset && `margin-left: ${props.offset}`};
`;

const RoundImage = (props: {
  src: string;
  alt: string;
  offset?: string;
  size: string;
}) => {
  const { src, alt, offset, size } = props;
  return (
    <RoundImageContainer size={size}>
      <Image src={src} alt={alt} offset={offset} />
    </RoundImageContainer>
  );
};

RoundImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  offset: PropTypes.string,
  size: PropTypes.string.isRequired,
};

export default RoundImage;
