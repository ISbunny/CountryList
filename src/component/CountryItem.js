import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { formatNumber } from "../utils";


const styledLi = styled.li`
    background : ${({theme}) => theme.elementBackground};
    border-radius: 6px;
    overflow: hidden; 
`
const StyledLink = styled(Link)`
  display: grid;
  grid-template-rows: 160px auto;
  cursor: pointer;
  transition: opacity 400ms ease;
  &:hover {
    opacity: 0.8;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const ItemData = styled.div`
  width: 100%;
  padding: 25px;
`
const Header = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`

const Text = styled.p`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`

export default function CountryItem({
    name,
    code,
    population,
    region,
    capital,
    flag,
}) {
    const path = `detail/${code}`

    return (
        <styledLi>
            <StyledLink to ={path}>
                <Image src={flag} loading="lazy" alt={`flag of ${name}`}></Image>
                <ItemData>
                    <Header>{name}</Header>
                    <Text>
                        <b>Population:</b> {formatNumber(population)}
                    </Text>
                    <Text>
                        <b>Region:</b> {region}
                    </Text>
                    <Text>
                        <b>Capital:</b> {capital}
                    </Text>
                </ItemData>
            </StyledLink>
          </styledLi>
        )
}

CountryItem.propTypes = {
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    population:PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    flag:PropTypes.string.isRequired,
}
