import { CircularProgress } from '@mui/material';
import useAuth from '../../common/hook/useAuth';
import RightContent from '../component/Layout/RightContent';
import Menu from '../component/Menu/Menu';

function Admin() {
  const {  userError } = useAuth();

  if (userError) window.location.href = "/sign-in";

  return (
    <div className="App">
      <div id="layout-wrapper">
        <Menu />

        <RightContent />
      </div>
    </div>
  )
}

export default Admin;