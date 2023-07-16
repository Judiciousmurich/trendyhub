import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../shared/navbars/SideNav'

const AdminLayout = () => {
  return (
    <div className='flex'>
      
      <SideNav/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout