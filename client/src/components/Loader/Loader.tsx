import React from "react";
import loadingImage from "images/loading.gif";
import styled from "styled-components";

interface LoaderProps {
  height?: string;
}

const LoaderStyles = styled.div<LoaderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${props => props.height ? props.height : "100vh"};
  color: var(--primary-dark);
`;

const Loader = ({ height }: {height?: string}) => {
  return (
    <LoaderStyles height={height}>
      <h2>Welcome to Notum</h2>
      <img src={loadingImage} alt="loading book" />
      <p>Loading...</p>
    </LoaderStyles>
  );
};

export default Loader;
