import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import ToggleTheme from "./ToggleTheme"


const Container = styled.div`
    box-shadow: rgba(0,0,0,0.06) 0px 0.2rem 0.4rem 0px;
    background: ${({theme}) => theme.elementBackground};
`; 

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
  @media (max-width: 768px) {
    padding: 0 30px;
  }
`

const HeaderText = styled.span`
  font-size: 20px;
  font-weight: 800;
`

export default function Header ({mode, onThemeChange}) {
    return (
        <Container>
            <Content>
                <HeaderText>Where in the world</HeaderText>
                <ToggleTheme mode = {mode} onModeChange = {onThemeChange}></ToggleTheme>
            </Content>
        </Container>
    );
}

Header.propTypes = {
    mode:PropTypes.string.isRequired,
    onThemeChange:PropTypes.func.isRequired,
}