import styled from '@emotion/styled';

const Button = styled.button`
    display: block;
    height:32px;
    width: 95%;
    padding:8px 6px;
    color : white;
    border:none;
    border-radius:4px;
    cursor: pointer;
    background-color: black;
    &:hover{
        background-color: #111;
        
    }
    &:active{
        background-color: #222;

    }
`;

export default Button;