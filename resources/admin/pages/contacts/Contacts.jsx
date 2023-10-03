import PageTitle from '@/admin/component/Layout/PageTitle'
import Error from '@/admin/component/Message/Error';
import { capitalizeLetter } from '@/common/helper';
import { Box, Card, CircularProgress, Stack, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import SearchBox from './SearchBox';
import ShowContactModal from './ShowContactModal';
import { onDeleteData } from '@/admin/Helper/sweetAlert';
import { useContact } from './useContact';

export default function Contacts() {
  const {
    currentPage, setCurrentPage,
    query, setQuery,
    selected, setSelected,
    isModalOpen, setIsModalOpen,
    fetchContact,
    showContact,
    deleteMutation
  } = useContact();

  const { data, isError, isLoading, error } = fetchContact();

  if (isError) return <Error error={error} />

  return (
    <>
      <PageTitle pageTitle="Contacts" title="Liste" />

      {
        isLoading ?
          <CircularProgress /> :
          <Card>
            <SearchBox query={query} setQuery={setQuery} />
            <Table striped hover responsive style={{minHeight:"400px"}}>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Expéditeur</th>
                  <th>Email</th>
                  <th>Téléphone</th>
                  <th>Objet</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  data.data.length == 0 ?
                    <tr>
                      <td colSpan={7} className='text-center'>Aucun Data</td>
                    </tr> :
                    data.data.map(contact => (
                      <tr key={contact.id} onClick={() => setSelected(contact)}>
                        <td className='align-middle'>
                          {contact.status == "new" ? <span className='badge bg-success'>Nouveau</span> : <></>}
                          {contact.status == "seen" ? <span className='badge bg-info'>Vu</span> : <></>}
                        </td>
                        <td className='align-middle'>{capitalizeLetter(`${contact.name} ${contact.surname}`)}</td>
                        <td className='align-middle'>{contact.email}</td>
                        <td className='align-middle'>{contact.phone}</td>
                        <td className='align-middle'>{contact.subject}</td>
                        <td className='align-middle'>{(contact.created_at)}</td>
                        <td className='align-middle'>
                          <Box display="flex">
                            <IconButton onClick={() => showContact(contact)} size="small" aria-label='Voir'>
                              <VisibilityIcon />
                            </IconButton>

                            <IconButton onClick={() => onDeleteData({ id: contact.id }, deleteMutation)} size="small" aria-label='Delete'>
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                        </td>
                      </tr>
                    ))
                }
              </tbody>
            </Table>

            <div className="d-flex justify-content-end m-2">
              <Stack flexWrap="nowrap">
                <Pagination>
                  <Pagination.First disabled={currentPage == 1} onClick={() => setCurrentPage(1)} />
                  <Pagination.Prev disabled={!data.prev_page_url} onClick={() => setCurrentPage(currentPage - 1)} />
                  {
                    data.links
                      .filter(link => !isNaN(link.label))
                      .map(link => (<Pagination.Item
                        key={link.label}
                        onClick={() => setCurrentPage(link.label)}
                        active={link.active}>
                        {link.label}
                      </Pagination.Item>))
                  }
                  <Pagination.Next disabled={!data.next_page_url} onClick={() => setCurrentPage(currentPage + 1)} />
                  <Pagination.Last disabled={data.last_page == currentPage} onClick={() => setCurrentPage(data.last_page)} />
                </Pagination>

                <p>Affichage de la {data.from} à la {data.to} entrées sur {data.total}</p>
              </Stack>
            </div>

          </Card>
      }

      <ShowContactModal isModalOpen={isModalOpen} contact={selected} setIsModalOpen={setIsModalOpen} />
    </>
  )
}
