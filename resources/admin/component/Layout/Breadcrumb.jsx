import { Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import Link from '@mui/material/Link';

function Breadcrumb({ pageTitle, title }) {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link  href={`/${pageTitle?.toLowerCase()}`}>{pageTitle}</Link>
            <Typography color="text.primary">{title}</Typography>
        </Breadcrumbs>
    )
}

export default Breadcrumb;