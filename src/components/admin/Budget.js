import { Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../common/sidebar/Sidebar'

export default function Budget() {
  return (
    <>
      <Sidebar/>
      <div> http://localhost:3000/admin/Budget</div>
    </>
  )
}