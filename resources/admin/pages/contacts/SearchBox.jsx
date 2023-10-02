import React from 'react';
import { Box, TextField } from '@mui/material';

function SearchBox({ query, setQuery }) {
    return (
        <Box display="flex" mt={2} justifyContent="flex-end">
            <TextField
                onChange={(e) => setQuery(e.target.value)}
                type='search'
                autoComplete='off'
                variant="outlined"
                placeholder="Rechercher..."
                size="small"
                value={query}
                sx={{ marginRight: 1 }}
            />
        </Box>
    );
}

export default SearchBox;
