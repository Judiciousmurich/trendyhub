import React from 'react'
import SideNav from '../components/shared/navbars/SideNav'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex'>
      <SideNav/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout