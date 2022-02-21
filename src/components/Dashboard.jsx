import React from 'react'
import Header from './Header'

const Dashboard = (props) => {
  return (
    <div>
      <Header {...props} />
      <div>Dashboard</div>
    </div>
  )
}

export default Dashboard