import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { IoMoon,IoMoonOutline } from "react-icons/io5";

const Button = styled.button`
        display: flex;
        align-items:center;
        gap:10px;
        cursor:pointer;
        background:none;
        border:none;
        padding:5px;
        font-size:14px;
        font-family:inherit;
        color:inherit;
`;

const Text = styled.span`
    font-weight:600;
`;

export default function ToggleTheme({mode,onModeChange}){
    const icon = 
    mode === 'light' ? <IoMoonOutline size = "18px" /> : <IoMoon size = "18px" />

    return (
        <Button onClick = {onModeChange}>{icon}
        <Text>Dark Mode</Text>
        </Button>
    );
}

ToggleTheme.propTypes = {
    mode:PropTypes.string.isRequired,
    onModeChange:PropTypes.func.isRequired,
}