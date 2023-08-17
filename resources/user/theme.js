import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const themeSettings = () => {
    const color = grey[700];
    return {
        typography: {
            fontSize: 12,
            color,
            h1: {
                fontSize: 40,
                color,
            },
            h2: {
                fontSize: 32,
                color,
            },
            h3: {
                fontSize: 24,
                color,
            },
            h4: {
                fontSize: 20,
                color,
            },
            h5: {
                fontSize: 16,
                color,
            },
            h6: {
                fontSize: 14,
                color,
            },
        },
    };
};


const theme = createTheme(
    {
        ...themeSettings()
    });

export default theme;