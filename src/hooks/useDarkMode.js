import { useEffect,useState } from "react";


export const useDarkMode = () => {
    const [mode,setMode] = useState(
        () =>window.localStorage.getItem('mode') || 'dark',
    )

    function toggleMode() {
        if(mode === 'light') {
            window.localStorage.setItem('mode','dark')
            setMode('dark')
        }else{
            window.localStorage.setItem('mode','light')
            setMode('light')
        }
    }

    useEffect(() => {
        const localMode = window.localStorage.getItem('mode')
        localMode && setMode(localMode)

    }, [])

    return [mode,toggleMode]
}