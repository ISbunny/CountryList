import React,{ useState } from "react"
import Filter from "../component/Filter"
import CountriesList from "../component/CountryList";
import styled from "@emotion/styled"
import Search from "../component/search"
import { Spinner } from "../component/Spinner";
import ErrorFallback from "../component/ErrorFallback";
import { useCountries } from "../hooks/QueryHooks";



const SearchBar = styled.div`
display: flex;
justify-content: space-between;
margin: 45px 0;
gap: 10%;
@media (max-width: 768px) {
  flex-direction: column;
  gap: 30px;
}
`
const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
export default function Homepage() {
  const { isLoading, isError, error, countries } = useCountries()

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("")

  function filterByRegion() {
    if (filter === '' || filter === 'all') {
      return countries
    }
    console.log(filter)
    return countries?.filter(({ region }) => region === filter)
  }
  const filteredCountries = filterByRegion()
  const filteredBySearch =
    filteredCountries?.filter(({ name }) =>
      name.toLowerCase().includes(search),
    ) || []

  
   
    return(
        <>
        <SearchBar>
            <Search onSearchChange = {setSearch}></Search>
            <Filter
            defaultValue={'Filter by Region'}
            onFilterChange={setFilter}
            options={REGIONS}
            ></Filter>
        </SearchBar>
        {isLoading && (
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Spinner></Spinner>
        </div>
      )}
      {isError ? (
        <ErrorFallback error={error}></ErrorFallback>
      ) : (
        <CountriesList countries={filteredBySearch} />
      )}

        </>
    )
}