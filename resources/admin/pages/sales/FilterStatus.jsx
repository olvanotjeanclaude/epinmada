import useFetchConstants from '@/admin/Hooks/useFetchConstants';
import { capitalizeLetter } from '@/common/helper';
import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react'

export default function FilterStatus({ checkboxs, setCheckboxs }) {
    const { saleTypes } = useFetchConstants();

    const checkboxOnChange = (e) => {
        setCheckboxs(prev => ({
            ...prev,
            [e.target.value]: e.target.checked
        }));
    }

    return (
        saleTypes && Object.entries(saleTypes)
            .map(([key, value]) => (
                <FormControlLabel
                    sx={{ mb: 0 }}
                    control={<Checkbox />}
                    key={key}
                    name={key}
                    type="checkbox"
                    label={capitalizeLetter(value)}
                    onChange={checkboxOnChange}
                    value={key}
                />
            ))
    )
}
