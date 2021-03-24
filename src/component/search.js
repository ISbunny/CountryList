import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { IoSearchOutline} from "react-icons/io5";
import { useTheme } from "@emotion/react";

const InputContainer = styled.div`
background: ${({ theme }) => theme.elementBackground};
border-radius: 6px;
position: relative;
width: 100%;
@media (min-width: 769px) {
  max-width: 480px;
}

`;

const Icon = styled.div`
display: flex;
position: absolute;
top: 50%;
left: 30px;
transform: translateY(-50%);
`;

const Input = styled.input`
background: inherit;
border-radius: 6px;
color: inherit;
padding: 20px 10px 20px 75px;
border: none;
width: 100%;
`;

export default function Seacrh({onSearchChange}) {
    const theme = useTheme()

    return (
        <InputContainer>
        <Icon>
            <IoSearchOutline color = {theme.text} />
        </Icon>
        <Input onChange={event => onSearchChange(event.target.value.toLowerCase())} 
        type = "seacrh"
        placeholder = "Search for country..."
        aria-label="Search"
        ></Input>
        </InputContainer>
    )
}

Seacrh.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
}