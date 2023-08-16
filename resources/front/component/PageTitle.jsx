import React from 'react'
import Typography from '@mui/material/Typography'

export default function PageTitle({title}) {
  return (
    <Typography variant="h4" mb={1} component="h1" fontWeight="bold">{title}</Typography>
  )
}
