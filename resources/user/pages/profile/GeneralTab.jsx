import React, { useEffect, useState } from 'react'
import TabPanel from '../../component/navigation/TabPanel'
import { Alert, Box, Button, CircularProgress, Snackbar, Stack, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { useMutation, useQueryClient } from 'react-query';
import http from '@/common/http';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MUTextField from '@/common/component/MUITextField';
import Error from '../error/Error';
import { HandleError } from '@/common/HandleError';
import useUser from '../../../common/hook/useUser';

export default function GeneralTab({ active }) {
  const queryClient = useQueryClient();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [severity, setSeverity] = useState("error");

  const { user, isLoading, isError, error } = useUser("user");

  const profileMutation = useMutation({
    mutationKey: ["user.updateProfile"],
    mutationFn: async data => await http.put("update-profile", data)
      .then(res => res.data)
      .catch(HandleError.catch),
  });


  const schema = object({
    name: string().required("Le nom ne peut pas être vide"),
    surname: string().required("Le prénom ne peut pas être vide"),
    email: string().email("Email invalide").required("Email ne peut pas être vide"),
    phone: string().required("Le téléphone ne peut pas être vide"),
  }).required();


  const { control, handleSubmit, setValue, formState: { isValid } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
    }
  });

  useEffect(() => {
    setValue("name", user?.name);
    setValue("surname", user?.surname);
    setValue("phone", user?.phone);
    setValue("email", user?.email);
  }, [user])

  const onSubmit = (data) => {
    profileMutation.mutate(data, {
      onSuccess: () => {
        setSeverity("success");
        setSnackbarOpen(true)
        queryClient.invalidateQueries(["user"])
      },
      onError: (error) => {
        setSeverity("error");
        setSnackbarOpen(true);
      }
    });
  }

  if (isError) return <Error error={error} />

  if (isLoading) return <CircularProgress />;

  return (
    <TabPanel hidden={active != "basicInfo"}>
      <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={() => setSnackbarOpen(false)}>
        <Alert variant='filled' onClose={() => setSnackbarOpen(false)} severity={severity} sx={{ width: '100%' }}>
          {profileMutation.data?.message || profileMutation.error}
        </Alert>
      </Snackbar>

      <Box mt={2} onSubmit={handleSubmit(onSubmit)} component="form" noValidate autoComplete="off" >
        <Stack gap={2}>
          <MUTextField label="Nom" name="name" control={control} />
          <MUTextField label="Prenom" name="surname" control={control} />
          <MUTextField type="phone" label="Téléphone" name="phone" control={control} />
          <MUTextField type="email" label="Email" name="email" control={control} />
        </Stack>

        <Button disabled={profileMutation.isLoading || !isValid}
          sx={{ float: "right", mt: 2 }} variant="contained"
          type='submit' startIcon={<SaveIcon />}>
          Mettre A Jour
        </Button>
      </Box>
    </TabPanel>
  );
}
