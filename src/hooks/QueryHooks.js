import { useQuery,useQueryClient } from 'react-query'
import { getAllCountries, getCountryByCode } from '../api'

const staleTime = 60 * 5000

function useCountries() {
    const queryClient = useQueryClient()
    
    const result = useQuery('countries', getAllCountries, {
      retry: 1,
      staleTime,
      initialData: () => {
        
        return queryClient.getQueryData('countries')
      },
    })
    return {...result, countries: result.data }
    
      
}

function countryQuery(countryCode) {
  const queryClient = useQueryClient()
  return {
    queryKey: ['country', countryCode],
    queryFn: () => getCountryByCode(countryCode),
    initialData: () => {
      return queryClient
        .getQueryData('countries')
        ?.find(country => country.alpha3Code === countryCode)
    },
    staleTime,
  }
}

function useCountry(countryCode) {
  const result = useQuery(countryQuery(countryCode))

  return { ...result, country: result.data }
}

export { useCountries, useCountry, countryQuery }
