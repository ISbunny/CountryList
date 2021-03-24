const apiURL = 'https://restcountries.eu/rest/v2'

async function client(endpoint) {
  return window.fetch(`${apiURL}/${endpoint}`).then(async response => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

async function getAllCountries() {
  return client('all')
}

async function getCountryByCode(code) {
  return client(`alpha/${code}`)
}

export { getAllCountries, getCountryByCode }
