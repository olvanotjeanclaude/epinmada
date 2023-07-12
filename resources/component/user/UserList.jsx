import React from 'react'
import PageTitle from '../Layout/PageTitle';
import Button from 'react-bootstrap/Button'
import { useQuery } from 'react-query';
import http from '../../Helper/makeRequest';
import { Row, Spinner } from 'react-bootstrap';


function UserList() {
  const { isLoading, error,  data } = useQuery('users', () =>
    http.get('/users').then(users => users)
  );
  const users = data?.data;

  if (isLoading) return <Spinner animation="border" />;

  if (error) return 'An error has occurred: ' + error.message;

  // console.log(users.data);
  // return <h2>ok</h2>
  return (
    <>
      <PageTitle pageTitle="Utilisateurs" title="Liste d'utilisateur" />

      <div className="d-flex justify-content-end mb-2">
        <Button href='/nouveau' variant="primary">
          <i className='bx bxs-user-plus'></i>
          Nouveau
        </Button>
      </div>
      <Row>
        {
          users.data?.map(user => (
            <div className="col-xl-3 col-sm-6" key={user.id}>
              <div className="card text-center">
                <div className="card-body">
                  <div className="avatar-sm mx-auto mb-4">
                    <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-16">
                      {user.name[0] ?? ''} {user.surname[1] ?? ''}
                    </span>
                  </div>
                  <h5 className="font-size-15 mb-1"><a 
                    className="text-dark">{user.full_name}</a>
                  </h5>
                  <br />
                  <p className="text-muted">{user.email}</p>
                  <p className="text-muted">{user.phone}</p>

                  <div>
                    <a  className="badge bg-primary font-size-11 m-1">
                      {user.type_text}
                    </a>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top">
                  <div className="contact-links d-flex font-size-20">
                    <div className="flex-fill">
                      <a ><i className="bx bx-message-square-dots"></i></a>
                    </div>

                    <div className="flex-fill">
                      <a >
                        <i className="bx bx-user-circle"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </Row>
    </>
  )
}

export default UserList;