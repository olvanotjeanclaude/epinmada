import React, { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { Paper } from '@mui/material';
import { mobileMenus } from '../../menus';
import { useNavigate } from 'react-router-dom';

export default function FixedBottomBar() {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const handleAction = (event, newValue) => {
        setValue(newValue);
        navigate(newValue.path);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: { xs: "block", sm: "none" } }} elevation={3}>
            <BottomNavigation value={value} showLabels onChange={handleAction}>
                {
                    mobileMenus.map(menu => (
                        <BottomNavigationAction value={menu} key={menu.path} label={menu.name} icon={menu.icon} />
                    ))
                }
            </BottomNavigation>
        </Paper>
    )
}
