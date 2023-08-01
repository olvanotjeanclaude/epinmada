import PageTitle from '../../component/Layout/PageTitle';
import Users from './Users';
import CreateButton from '../../component/Button/CreateButton';

function UserList() {
  return (
    <>
      <PageTitle pageTitle="Utilisateurs" title="Liste d'utilisateur" />

      <CreateButton />

      <Users />
    </>
  )
}

export default UserList;