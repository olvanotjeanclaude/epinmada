import { ImportContactsSharp } from '@mui/icons-material'
import { Avatar, Box, Divider, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Typography, useTheme } from '@mui/material'
import React from 'react'
import menus from '../../menus'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled';
import { useUser } from '@/user/context/UserContextProvider'


export default function Sidebar() {
    const theme = useTheme();
    const { user } = useUser();
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
            <Box display="flex" paddingBottom={1} alignItems="center" gap={2} justifyContent="space-between">
                <Avatar
                    alt="Remy Sharp"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
                    sx={{ width: 55, height: 55 }}
                />
                <Typography variant="h5" fontWeight={500} mr={2} textAlign="right">
                    {user?.name} {user?.surname}
                </Typography>
            </Box>

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
