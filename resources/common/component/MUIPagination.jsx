import { Pagination, Stack } from '@mui/material'
import React from 'react'

export default function MUIPagination({ data, setCurrentPage, currentPage }) {
  return (
    data && data.total > data.per_page ? <Stack alignItems="end" spacing={2} mt={3}>
      <Pagination
        showFirstButton
        showLastButton
        count={data.last_page}
        page={currentPage}
        onChange={(e, value) => setCurrentPage(value)} />
      <p>Affichage de la {data.from} à la {data.to} entrées sur {data.total}</p>
    </Stack> : <></>
  );
}
