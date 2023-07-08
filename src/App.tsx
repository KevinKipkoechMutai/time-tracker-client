import { createTheme } from "@mui/material"
import { useMemo } from "react"
import { themeSettings } from "./theme"


function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className='app'>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
