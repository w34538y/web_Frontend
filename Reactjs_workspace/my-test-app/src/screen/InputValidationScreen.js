import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 200px auto;
    width: 400px;
`;

const InputWrapper = styled.div`
    padding: 10px 0;
`;

const InputBox = styled.input`
    border: 0;
    outline: none;
    font-size: 25px;
`;

const WarnMessage = styled.div `
    margin-top: 8px;
    font-size: 12px;
    color: red;
`;



function InputValidationScreen(){
    
    const [inputvalue, setInputValue] = useState("");
    const [focus, setFocus] = useState(false);

    return (
        <Container>
            <InputWrapper>
                <InputBox 
                value={inputvalue} 
                onClick={(e) => {setInputValue(e.target.value)}}
                onFocus{()=>{

                }}
                />
            </InputWrapper>
            <WarnMessage>경고문구자리</WarnMessage>
        </Container>
    );
}

export default InputValidationScreen;