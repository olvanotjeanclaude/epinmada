import React from 'react'
import PageTitle from '../../component/PageTitle'
import Typography from '@mui/material/Typography'
import { Alert, AlertTitle, Box, Button, Card, CardContent, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import UploadInvoice from './UploadInvoice'
import {  grey } from '@mui/material/colors'

export default function DoPayment() {

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <PageTitle title="Payment" />

      <Grid container spacing={2}>
        <Grid item md={8}>
          <Stack spacing={2}>
            <Card>
              <CardContent>
                <Typography variant="h5" mb={1}>Information</Typography>

                <TextField
                  fullWidth
                  rows={3}
                  placeholder='Écris quelque chose...'
                  label="Note"
                  multiline
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h5" mb={1}>Options De Paiement</Typography>

                <Box display="flex" flexWrap="wrap" gap={2}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="female" control={<Radio sx={{ height: "30px" }} />} label="Orange Money" />
                      <FormControlLabel value="male" control={<Radio sx={{ height: "30px" }} />} label="Airtel Money" />
                      <FormControlLabel value="other" control={<Radio sx={{ height: "30px" }} />} label="Mvola" />
                    </RadioGroup>
                  </FormControl>

                  <Alert sx={{ flexGrow: 1 }} severity="info">
                    <AlertTitle>vous pouvez envoyer l'argent à :</AlertTitle>
                    <Stack>
                      <Typography variant="paragraph" component="p">032 00 000 00</Typography>
                      <Typography variant="paragraph" component="p">032 00 000 00</Typography>
                      <Typography variant="paragraph" component="p">032 00 000 00</Typography>
                    </Stack>
                  </Alert>
                </Box>
              </CardContent>
            </Card>

            <UploadInvoice />
          </Stack>
        </Grid>

        <Grid item md={4} sx={{ width: "100%" }}>
          <Card elevation={3} sx={{ bgcolor: grey[100] }}>
            <CardContent>
              <Stack gap={2}>
                <Typography variant='h4' color="primary">TOTAL A PAYER</Typography>
                <Typography variant='h4' fontWeight={500}>
                  100 000 Ar
                </Typography>
                <Button variant='contained'>
                  Confirmer Et Payer
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
