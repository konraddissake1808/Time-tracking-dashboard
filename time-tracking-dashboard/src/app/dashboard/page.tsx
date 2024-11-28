import React from 'react'
import User from './_components/user/page'
import Activity from './_components/activityCard/page'

function Dashboard() {
  return (
    <div className='flex justify-center pt-16 flex-col items-center'>
        <User></User>
        <div className='w-full flex justify-center'>
          <Activity color='hsl(15, 100%, 70%)'></Activity>
        </div>
        <div className='w-full flex justify-center'>
          <Activity color='hsl(195, 74%, 62%)'></Activity>
        </div>
        <div className='w-full flex justify-center'>
          <Activity color='hsl(348, 100%, 68%)'></Activity>
        </div>
        <div className='w-full flex justify-center'>
          <Activity color='hsl(145, 58%, 55%)'></Activity>
        </div>
        <div className='w-full flex justify-center'>
          <Activity color='hsl(264, 64%, 52%)'></Activity>
        </div>
        <div className='w-full flex justify-center'>
          <Activity color='hsl(43, 84%, 65%)'></Activity>
        </div>
    </div>
  )
}

export default Dashboard