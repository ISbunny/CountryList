import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import CountryItem from "./CountryItem";


const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 260px));
  gap: 75px;
  justify-content: center;
`

export default function CountriesList({countries}){

    return (
        <List>
            {countries.map(
                ({alpha3Code, name, flag, population, region, capital}) => (
                    <CountryItem
                    key={alpha3Code}
                    name={name}
                    code={alpha3Code}
                    flag={flag}
                    population={population}
                    region={region}
                    capital={capital}
                    ></CountryItem>
                ),
            )}
        </List>
    )

}

CountriesList.propTypes = {
    countries: PropTypes.array.isRequired,
}
