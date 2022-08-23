import styled from "styled-components";

export const SignUpStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 100vh;
`;

export const CarouselStyles = styled.div`
  background-color: rgba(var(--primary-light-rgb), 0.2);
`;

export const FormStyle = styled.div`
  padding: 10% 10%;
  background-color: white;

  h1 {
    margin-bottom: 53px;
  }

  button {
    width: 100%;
    box-shadow: 0px 4px 4px 0px #00000040;
  }

  form > * {
    margin-bottom: 32px;
  }
`;

export const InputFormStyles = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 14px;
    font-weight: 100;
  }

  input {
    border: none;
    border-bottom: 1px solid gray;
    background-color: #fafafa;
    height: 30px;
    text-indent: 10px;
  }

  input.invalid {
    border-bottom: 1px solid #fd6767;
  }

  input:focus {
    outline: none !important;
    border-bottom: 1px solid var(--primary-light);
    box-shadow: 0 0 10px var(--primary-light);
    background-color: white;
  }

  .error-message {
    color: #fd6767;
  }
`;

export const AuthNavigationStyles = styled.div`
  p {
    margin: 0;
    text-align: right;
  }

  a {
    color: var(--primary-dark);
    text-decoration: underline;
  }
`;
