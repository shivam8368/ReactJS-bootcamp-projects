import React, {useContext} from 'react';
import ThemeContext from "../Context/ThemeContext";


const ThemeToggler = () => {

    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return(
        <button
            style ={{
                fontSize: "20px",
                padding: "10px 20px",
                color: "#380a5f",
                cursor: "pointer"

            }}
            onClick={() => {
                setThemeMode(themeMode==="light" ? "dark": "light")

            }}

        >{themeMode==="light" ? "Toggle to dark Mode" : "Toggle to light Mode"}</button>

    )
}
export default ThemeToggler;