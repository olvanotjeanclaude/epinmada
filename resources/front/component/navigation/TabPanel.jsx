import React from 'react'

export default function TabPanel(props) {
    const { children, hidden, other } = props;

    return <div hidden={hidden} role="tabpanel" {...other}>
        {children}
    </div>
}
