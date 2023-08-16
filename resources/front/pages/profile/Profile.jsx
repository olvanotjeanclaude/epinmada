import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import PageTitle from '../../component/PageTitle';
import TabPanel from '../../component/navigation/TabPanel';
import GeneralTab from './GeneralTab';
import ChangePasswordTab from './ChangePasswordTab';



export default function Profile() {
  const [active, setActive] = useState("basicInfo");

  const handleChange = (e, newValue) => {
    setActive(newValue);
  };

  return (
    <>
      <Box>
        <PageTitle title="Information d'utilisateur" />
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={active} onChange={handleChange} aria-label="basic tabs example">
            <Tab value="basicInfo" id='basicInfo' aria-controls='basicInfo' label="General" />
            <Tab value="changePassword" id='changePassword' aria-controls='changePassword' label="Changement de mot de passe" />
          </Tabs>
        </Box>
      </Box>

      <GeneralTab active={active} />

      <ChangePasswordTab active={active} />
    </>
  )
}
