import { ImportContactsSharp } from '@mui/icons-material'
import {  Box, Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Typography, useTheme } from '@mui/material'
import React from 'react'
import menus from '../../menus'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled';
import UserInfo from '../UserInfo'

export default function Sidebar() {
    const theme = useTheme();
    const StyledNavLink = styled(NavLink)`
   text-decoration: none;
   color: inherit;   

   &.active {
    color:${theme.palette.primary.main}
  }
   `
    const sidebarWidth = "240px";

    return (
        <Box minWidth={sidebarWidth} maxWidth={sidebarWidth}
            sx={{ display: { xs: "none", sm: "block" } }}>
            <UserInfo />

            <Divider />

            <MenuList>
                {
                    menus.map((subMenu, index) => (
                        subMenu.type == "group" ?
                            <Box key={index} mt={2}>
                                <Typography ml={2} variant="h5" color="initial">{subMenu.name}</Typography>
                                {
                                    subMenu.children.map((menu, index) => (
                                        <StyledNavLink to={menu.path} key={index}>
                                            <MenuItem>
                                                <ListItemIcon>{menu.icon}</ListItemIcon>
                                                <ListItemText

                                                >{menu.name}</ListItemText>
                                            </MenuItem>
                                        </StyledNavLink>
                                    ))
                                }
                            </Box>
                            :
                            <StyledNavLink to={subMenu.path} key={index}>
                                <MenuItem>
                                    <ListItemIcon>
                                        <ImportContactsSharp />
                                    </ListItemIcon>
                                    <ListItemText>{subMenu.name}</ListItemText>
                                </MenuItem>
                            </StyledNavLink>
                    ))
                }
            </MenuList>
        </Box>
    )
}
