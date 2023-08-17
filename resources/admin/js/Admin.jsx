import RightContent from '../component/Layout/RightContent';
import Menu from '../component/Menu/Menu';
import { useAuthProvider } from '../Context/useAuthProvider';
import { useEffect } from 'react';

function Admin() {
  const { token } = useAuthProvider();

  useEffect(() => {
    if (token == null) window.location.href = "/sign-in";
  }, [])

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