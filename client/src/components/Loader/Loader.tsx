import React from "react";
import loadingImage from "images/loading.gif";
import styled from "styled-components";

interface LoaderStylesProps {
  height?: string;
}

const LoaderStyles = styled.div<LoaderStylesProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${props => props.height ? props.height : "100vh"};
  color: var(--primary-dark);
`;

interface LoaderProps {
  height?: string;
  displayWelcomeText?: boolean;
}


const Loader = ({ height, displayWelcomeText }: LoaderProps) => {
  return (
    <LoaderStyles height={height}>
      {displayWelcomeText ? <h2>Welcome to Notum</h2> : null}
      <img src={loadingImage} alt="loading book" />
      <p>Loading...</p>
    </LoaderStyles>
  );
};

export default Loader;
