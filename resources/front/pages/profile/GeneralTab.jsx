import React from 'react'
import TabPanel from '../../component/navigation/TabPanel'
import { Box, Button, Stack, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

export default function GeneralTab({ active }) {
  return (
    <TabPanel hidden={active != "basicInfo"}>
      <Box mt={2} component="form" noValidate autoComplete="off" >
        <Stack gap={2}>
          <TextField label="Nom" required variant="outlined" />
          <TextField label="Prenom" required variant="outlined" />
          <TextField label="Email" required variant="outlined" />
          <TextField label="Téléphone" required variant="outlined" />
        </Stack>

        <Button sx={{ float: "right", mt: 2 }} variant="contained" type='submit' startIcon={<SaveIcon />}>
          Mettre A Jour
        </Button>
      </Box>
    </TabPanel>
  );
}
