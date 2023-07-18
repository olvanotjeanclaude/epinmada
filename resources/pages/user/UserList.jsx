import React from 'react'
import PageTitle from '../../component/Layout/PageTitle';
import { Link } from 'react-router-dom';
import Users from './Users';

function UserList() {
  return (
    <>
      <PageTitle pageTitle="Utilisateurs" title="Liste d'utilisateur" />

      <div className="d-flex justify-content-end mb-2">

        <Link to='nouveau' className='btn btn-primary' variant="primary">
          Nouveau
        </Link>
      </div>

      <Users />
    </>
  )
}

export default UserList;