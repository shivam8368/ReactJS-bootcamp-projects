import React, {useContext} from 'react';
import ThemeContext from '../Context/ThemeContext';
import AppTheme from '../Colors';
import ThemeToggler from './ThemeToggler';


const HeroSection = () => {
     const theme = useContext(ThemeContext)[0];
     const currentTheme = AppTheme[theme];

    return(
        <div
        style = {{
            backgroundColor: `${currentTheme.backgroundColor}`,
            padding: "1rem",
            color : `${currentTheme.textColor}`,
            textAlign: "center",
            height:"700px",
            paddingTop: "200px"



        }}
        >
            <h1>This is the theme toggler</h1>
            <p>This is a nice paragraph.</p>
            <ThemeToggler style={{
                border: `${currentTheme.border}`,
                
            }}/>



        </div>

    )

}

export default HeroSection;