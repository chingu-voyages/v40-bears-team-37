import React from "react";
import loadingImage from "images/loading.gif";
import styled from "styled-components";

const LoaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: var(--primary-dark);
`;

const Loader = () => {
  return (
    <LoaderStyles>
      <h2>Welcome to Notum</h2>
      <img src={loadingImage} alt="loading image" />
      <p>Loading...</p>
    </LoaderStyles>
  );
};

export default Loader;
