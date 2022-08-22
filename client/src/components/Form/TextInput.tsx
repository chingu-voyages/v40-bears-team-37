import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import styled from "styled-components";

interface FormProps {
    inputId: string,
    label: string,
    isEditing?: boolean,
    inputValue: string,
    handleChangeEvent: (e: ChangeEvent<HTMLInputElement>, valueToChange: string) => void,
    inputType?: string,
    placeHolder?: string,
    autoCompleteType?: string
}

function TheInput ({ inputId, label, isEditing, inputValue, handleChangeEvent, inputType = 'text', placeHolder, autoCompleteType = 'off' }: FormProps) {
    const InputFormStyles = styled.div`
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 14px;
            font-family: "Raleway";
            font-weight: 100;
        }

        input {
            border: none;
            border-bottom: 1px solid gray;
            background-color: #FAFAFA;
            height: 30px;
            text-indent: 10px;
        }

        input:focus {
            outline: none !important;
            border-bottom: 1px solid var(--primary-light);
            box-shadow: 0 0 10px var(--primary-light);
            background-color: white;
        }
    `;

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        console.log(inputRef.current, inputValue)
        if (inputRef.current !== null && isEditing) {
            inputRef.current.focus();
        }
    }, []);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleChangeEvent(e, inputId);
    }

    return (
        <InputFormStyles>
            <label htmlFor={inputId}>{label}</label>
            <input id={inputId} ref={inputRef} type={inputType} value={inputValue} onChange={(e) => handleChange(e)} autoComplete={autoCompleteType}></input>
        </InputFormStyles>
    )
}

export default TheInput