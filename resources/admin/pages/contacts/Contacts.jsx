import PageTitle from '@/admin/component/Layout/PageTitle'
import Error from '@/admin/component/Message/Error';
import contactService from '@/admin/service/ContactService';
import { capitalizeLetter } from '@/common/helper';
import { Card, CircularProgress, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

import { useQuery } from 'react-query';
import SearchBox from './SearchBox';
import Checkbox from '@mui/material/Checkbox';
import Action from './Action';
import ShowContactModal from './ShowContactModal';

export default function Contacts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [checkBoxs, setCheckBoxs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const { data, error, isLoading, isError } = useQuery({
    queryKey: [contactService.endPoint, currentPage, query],
    queryFn: () => contactService.fetchAll(currentPage, { query }),
    keepPreviousData: true,
    onError: (error) => new Error(error.message)
  });

  if (isError) return <Error error={error} />

  useEffect(() => { setCurrentPage(prev => parseInt(prev)) }, [currentPage]);

  return (
    <>
      <PageTitle pageTitle="Contacts" title="Liste" />

      {
        isLoading ?
          <CircularProgress /> :
          <Card>
            <SearchBox query={query} setQuery={setQuery} />
            <Table striped hover responsive>
              <thead>
                <tr>
                  {/* <th>#</th> */}
                  <th>Status</th>
                  <th>Expéditeur</th>
                  <th>Email</th>
                  <th>Téléphone</th>
                  <th style={{ minHeight: "300px" }}>Objet</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  data.data.map(contact => (
                    <tr key={contact.id} onClick={() => setSelected(contact)}>
                      {/* <td className='align-middle'><Checkbox  /></td> */}
                      <td className='align-middle'>
                        {contact.status=="new" ? <span className='badge bg-success'>Nouveau</span>:<></>}
                        {contact.status=="seen"? <span className='badge bg-info'>Vu</span>:<></>}
                      </td>
                      <td className='align-middle'>{capitalizeLetter(`${contact.name} ${contact.surname}`)}</td>
                      <td className='align-middle'>{contact.email}</td>
                      <td className='align-middle'>{contact.phone}</td>
                      <td className='align-middle'>{contact.subject}</td>
                      <td className='align-middle'>{(contact.created_at)}</td>
                      <td className='align-middle'><Action contact={contact} setIsModalOpen={setIsModalOpen} /></td>
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
