import React from "react";
import { useQueries } from "react-query";
import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";
import { Link,useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { IoArrowBackOutline } from "react-icons/io5";
import CountryDetails from "../component/CountryDetail";
import ErrorFallback from "../component/ErrorFallback";
import { Spinner } from "../component/Spinner";
import { useCountry,countryQuery } from "../hooks/QueryHooks";

const Container = styled.div`
  font-size: 16px;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: none;
  border-radius: 6px;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 29%);
  padding: 10px 0;
  width: 136px;
  font-size: 16px;
  margin: 65px 0;
  @media (max-width: 768px) {
    margin: 50px 0;
  }
`

function Wrapper ({children}) {
    return (
        <Container>
            <StyledLink to={"/"}>
                <IoArrowBackOutline></IoArrowBackOutline>
                Back
            </StyledLink>
            <div 
                css={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
            >{children}</div>
        </Container>
    )
}

    Wrapper.propTypes = {
        children: PropTypes.element.isRequired,
    }

    export default function Detail() {
        const { id } = useParams()
        let {isSuccess, isError, isLoading, country, error} = useCountry(id)
        let borders = country?.borders || []

        const countryQueries = useQueries(borders?.map(code => countryQuery(code)))

        if(countryQueries.every(q => q.isSuccess)) {
            country = {...country,borders:countryQueries.map(c => ({
                name:c.data.name,
                code:c.data.alpha3Code,
            })),}
        }

        if(isLoading) {
            return (
                    <Wrapper>
                        <Spinner></Spinner>
                    </Wrapper>
            )
        }
        if(isError) {
            return (
                <Wrapper>
                    <ErrorFallback error = {error}></ErrorFallback>
                </Wrapper>
            )
        }
        if(isSuccess) {
            const {
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
              } = country
              return (
                  <Wrapper>
                      <ErrorBoundary FallbackComponent={ErrorFallback}>
                          <CountryDetails
                            name={name}
                            nativeName={nativeName}
                            flag={flag}
                            population={population}
                            region={region}
                            subregion={subregion}
                            capital={capital}
                            topLevelDomain={topLevelDomain}
                            currencies={currencies}
                            languages={languages}
                            borders={borders}>
                          </CountryDetails>
                      </ErrorBoundary>
                  </Wrapper>
              )
        }
    }
