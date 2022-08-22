import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import TextInput from '../components/Form/TextInput';

function SignUp () {
  const SignUpStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    min-height: 100vh;
  `;

  const CarouselStyles = styled.div`
    background-color: rgba(var(--primary-light-rgb), .2);
  `;

  const FormStyle = styled.div`
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

  const [userName, setUserName] = useState("");
  const [userEmailAddress, setUserEmailAddress] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [editingInput, setEditingInput] = useState("");

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>, valueToChange: string) => {
    const handleChangeMap = Object.create(null, {
      "sign-up-name": { value: setUserName },
      "sign-up-email-address": { value: setUserEmailAddress },
      "sign-up-password": { value: setuserPassword }
    });
    
    handleChangeMap[valueToChange](e.target.value);
    setEditingInput(valueToChange);
  }

  return (
    <SignUpStyles>
      <CarouselStyles>Carousel View</CarouselStyles>
      <FormStyle>
        <h1>Sing Up</h1>
        <form>
          <TextInput
            inputId="sign-up-name"
            label="User Name"
            autoCompleteType="username"
            inputValue={userName}
            isEditing={ editingInput === "sign-up-name" ? true : false}
            handleChangeEvent={handleFormChange}
          />
          <TextInput
            inputId="sign-up-email-address"
            label="Email Address"
            autoCompleteType="email"
            inputValue={userEmailAddress}
            isEditing={ editingInput === "sign-up-email-address" ? true : false}
            handleChangeEvent={handleFormChange}
          />
          <TextInput 
            inputId="sign-up-password"
            label="Password"
            autoCompleteType="off"
            inputValue={userPassword}
            isEditing={ editingInput === "sign-up-password" ? true : false}
            handleChangeEvent={handleFormChange}
          />
        </form>
        <button>Get My Notum</button>
      </FormStyle>
    </SignUpStyles>
  );
}

export default SignUp