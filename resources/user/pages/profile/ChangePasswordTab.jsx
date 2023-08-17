import React from 'react'
import TabPanel from '../../component/navigation/TabPanel'
import ChangePassword from './ChangePassword';

export default function ChangePasswordTab({ active }) {
  return (
    <TabPanel hidden={active != "changePassword"}>
      <ChangePassword />
    </TabPanel>
  )
}
