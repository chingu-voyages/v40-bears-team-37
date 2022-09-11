import styled from "styled-components";

export const SignUpStyles = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormStyle = styled.div`
  margin: 0 auto;
  padding: 4%;
  max-width: 300px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

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

export const InvalidMessageStyles = styled.div`
  padding: 10px;
  background-color: #FCEDEC;
  color: #5F2120;
}
`;
