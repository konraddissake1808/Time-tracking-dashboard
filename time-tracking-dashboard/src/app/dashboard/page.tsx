import React from 'react'
import User from './_components/user/page'
import Activity from './_components/activityCard/page'
import briefCase from './../../../public/images/icon-work.svg'
import  controller from './../../../public/images/icon-play.svg'
import book from './../../../public/images/icon-study.svg'
import exercise from './../../../public/images/icon-exercise.svg'
import discussionBubble from './../../../public/images/icon-social.svg'
import heart from './../../../public/images/icon-self-care.svg'

function Dashboard() {
  return (
    <div className='flex justify-center pt-16 flex-col items-center'>
        <User></User>
        <div className='w-full flex justify-center'>
          <Activity imageSrc={briefCase} color='hsl(15, 100%, 70%)'></Activity>
        </div>
        <div className='w-full flex justify-center'>
          <Activity imageSrc={controller} color='hsl(195, 74%, 62%)'></Activity>
        </div>
        <div className='w-full flex justify-center'>
          <Activity imageSrc={book} color='hsl(348, 100%, 68%)'></Activity>
        </div>
        <div className='w-full flex justify-center'>
          <Activity imageSrc={exercise} color='hsl(145, 58%, 55%)'></Activity>
        </div>
        <div className='w-full flex justify-center'>
          <Activity imageSrc={discussionBubble} color='hsl(264, 64%, 52%)'></Activity>
        </div>
        <div className='w-full flex justify-center'>
          <Activity imageSrc={heart} color='hsl(43, 84%, 65%)'></Activity>
        </div>
    </div>
  )
}

export default Dashboard