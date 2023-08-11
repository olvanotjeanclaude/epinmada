import PageTitle from '../../component/Layout/PageTitle';
import Users from './Users';

function UserList() {
  return (
    <>
      <PageTitle pageTitle="Utilisateurs" title="Liste d'utilisateur" />

      <Users />
    </>
  )
}

export default UserList;