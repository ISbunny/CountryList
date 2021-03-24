import './App.css'
import React from 'react'
import Header from './component/Header'
import styled from '@emotion/styled'
import {useDarkMode} from './hooks/useDarkMode'
import GlobalStyles from './styles/GlobalStyles'
import { darkTheme,lightTheme } from './styles/theme'
import { ThemeProvider } from '@emotion/react'
import Main from './component/main'
import { QueryClient,QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const Container = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  row-gap: 5px;
  height: 100%;
`

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
function App() {
  const [mode,seMode] = useDarkMode()
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    <Container>
      <Header mode={mode} onThemeChange={seMode} />
      <Main />
    </Container>
  </ThemeProvider>
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  )
}

export default App
