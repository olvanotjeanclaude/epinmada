import React from 'react'
import RightContent from '../component/Layout/RightContent';
import Menu from '../component/Menu/Menu';
function Admin() {
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