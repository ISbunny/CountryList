/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react'
import { Link } from 'react-router-dom'

import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { formatNumber } from '../utils'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 120px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    row-gap: 50px;
  }
`

const CountryLink = styled(Link)`
  border-radius: 6px;
  padding: 6px 24px;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 29%);
  white-space: nowrap;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

export default function CountryDetails({
  name,
  nativeName,
  flag,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) {
  return (
    <Container>
      <img
        css={{
          maxWidth: '100%',
        }}
        src={flag}
        alt={`Flag of ${name}`}
      ></img>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h3
          css={{
            fontSize: '24px',
            marginBottom: '35px',
          }}
        >
          {name}
        </h3>
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '75px',
            ['@media (max-width: 768px)']: {
              flexDirection: 'column',
              gap: '50px',
            },
          }}
        >
          <Column>
            <p>
              <b>Native Name: </b>
              {nativeName}
            </p>
            <p>
              <b>Population: </b>
              {formatNumber(population)}
            </p>
            <p>
              <b>Region: </b>
              {region}
            </p>
            <p>
              <b>Sub Region: </b>
              {subregion}
            </p>
            <p>
              <b>Capital: </b>
              {capital}
            </p>
          </Column>
          <Column>
            <p>
              <b>Top Level Domain: </b>
              {topLevelDomain.join(', ')}
            </p>
            <p>
              <b>Currencies: </b>
              {currencies.map(({ name }) => name).join(', ')}
            </p>
            <p>
              <b>Languages: </b>
              {languages.map(({ name }) => name).join(', ')}
            </p>
          </Column>
        </div>
        <div
          css={{
            display: 'flex',
            gap: '10px',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
            },
          }}
        >
          <b
            css={{
              whiteSpace: 'nowrap',
            }}
          >
            Border Countries:
          </b>
          <ul
            css={{
              display: 'flex',
              gap: '20px 10px',
              flexWrap: 'wrap',
            }}
          >
            {borders.map(({ name, code }) => {
              return (
                <li key={code}>
                  <CountryLink to={`/detail/${code}`}>{name}</CountryLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Container>
  )
}

CountryDetails.propTypes = {
  name: PropTypes.string.isRequired,
  nativeName: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  subregion: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  topLevelDomain: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      iso639_1: PropTypes.string.isRequired,
      iso639_2: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      nativeName: PropTypes.string.isRequired,
    }),
  ).isRequired,
  borders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    }),
  ).isRequired,
}
