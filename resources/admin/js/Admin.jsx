import { useNavigate } from 'react-router-dom';
import RightContent from '../component/Layout/RightContent';
import Menu from '../component/Menu/Menu';
import { useAuthProvider } from '../Context/useAuthProvider';
import { useEffect } from 'react';

function Admin() {
  const { token } = useAuthProvider();
  const navigate = useNavigate();

  useEffect(() =>{
    if (token==null) navigate("/login");
  })

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