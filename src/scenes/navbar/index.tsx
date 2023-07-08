import { useTheme } from "@mui/material"
import { useState } from "react"


const Navbar = () => {
  const { palette } = useTheme()
  const [selected, setSelected] = useState("home")

  return (
    <div>Navbar</div>
  )
}

export default Navbar