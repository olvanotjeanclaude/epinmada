import React from 'react';
import { Box, TextField } from '@mui/material';

function SearchBox({ query, setQuery }) {
    return (
        <Box display="flex"  my={1} justifyContent="flex-end">
            <TextField
                onChange={(e) => setQuery(e.target.value)}
                type='search'
                autoComplete='off'
                variant="outlined"
                placeholder="Rechercher..."
                size="small"
                value={query}
                sx={{ marginRight: 1,backgroundColor:"#fff" }}
            />
        </Box>
    );
}

export default SearchBox;