import styled from "styled-components";

const PageNotFoundStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  a:hover {
    text-decoration: underline;
  }
`;
const PageNotFound = () => {
  return (
    <PageNotFoundStyles>
      <h2>404 | Page not found</h2>
      <a href="/">Back to home</a>
    </PageNotFoundStyles>
  );
};

export default PageNotFound;
