import { TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

const MUTextField = ({ label, name,type, defaultValue, control, ...props }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => {
                return <TextField
                    {...field}
                    {...props}
                    label={label}
                    type={type}
                    // defaultValue={defaultValue}
                    error={Boolean(fieldState?.invalid)}
                    helperText={fieldState?.error?.message}
                />
            }}
        />
    )
}

export default MUTextField;