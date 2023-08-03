// customTheme.js

import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    components: {
        MuiTextField: {
            defaultProps: {
                autoComplete: 'off',
                style:{
                    background:"#fff"
                }
            },
        },
    },
});

export default customTheme;
