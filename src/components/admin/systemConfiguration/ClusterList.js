import React from 'react'
import Sidebar from '../../common/sidebar/Sidebar'
import AdminDisplayContainer from '../AdminDisplayContainer'

export default function ClusterList() {
  return (
    <>
      <Sidebar />
      {/* Based on what option is clicked in the sidebar, the below component should be displayed */}
      <AdminDisplayContainer selectedSideBarTab="Cluster List"/>
    </>
  )
}
