import React from 'react'
import User from './_components/user/page'
import Activity from './_components/activityCard/page'

function Dashboard() {
  return (
    <div className='flex justify-center pt-16 flex-col items-center'>
        <User></User>
        <Activity></Activity>
    </div>
  )
}

export default Dashboard