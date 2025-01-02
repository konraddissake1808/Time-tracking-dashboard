'use client';
import React, { useState } from 'react'
import User from './_components/user/page'
import Activity from './_components/activityCard/page'
import briefCase from './../../../public/images/icon-work.svg'
import  controller from './../../../public/images/icon-play.svg'
import book from './../../../public/images/icon-study.svg'
import exercise from './../../../public/images/icon-exercise.svg'
import discussionBubble from './../../../public/images/icon-social.svg'
import heart from './../../../public/images/icon-self-care.svg'


function Dashboard({data}) {

  const [time, setTime] = useState(
    [
      data[0].timeframes.weekly.current, 
      data[1].timeframes.weekly.current, 
      data[2].timeframes.weekly.current, 
      data[3].timeframes.weekly.current, 
      data[4].timeframes.weekly.current, 
      data[5].timeframes.weekly.current
    ]
  );

  const [previousTime, setPreviousTime] = useState(
    [
      data[0].timeframes.weekly.previous, 
      data[1].timeframes.weekly.previous, 
      data[2].timeframes.weekly.previous, 
      data[3].timeframes.weekly.previous, 
      data[4].timeframes.weekly.previous, 
      data[5].timeframes.weekly.previous
    ]
  )

  const dailyTimeframe = (dailyButtonData: array) => {
    setTime(dailyButtonData[0]);
    setPreviousTime(dailyButtonData[1])
  }

  const weeklyTimeframe = (weeklyButtonData: array) => {
    setTime(weeklyButtonData[0]);
    setPreviousTime(weeklyButtonData[1])
  };

  const monthlyTimeframe = (monthlyButtonData: array) => {
    setTime(monthlyButtonData[0]);
    setPreviousTime(monthlyButtonData[1])
  };

  return (
    <div className='flex justify-center pt-16 flex-col items-center xl:pt-0 xl:grid xl:w-[960px] xl:h-[430px] xl:grid-cols-4 xl:grid-rows-2 xl:gap-5'>
      <div className='w-full flex justify-center row-span-2 xl:h-full'>
        <User monthlyDataFromDashboard={monthlyTimeframe} weeklyDataForDashboard={weeklyTimeframe} dailyDataForDashboard={dailyTimeframe} data={data}></User>
      </div>
      <div className='w-full flex justify-center xl:h-full'>
        <Activity previousTime={previousTime[0]} time={time[0]} title={data[0].title} imageSrc={briefCase} color='hsl(15, 100%, 70%)'></Activity>
      </div>
      <div className='w-full flex justify-center xl:h-full'>
        <Activity previousTime={previousTime[1]} time={time[1]} title={data[1].title} imageSrc={controller} color='hsl(195, 74%, 62%)'></Activity>
      </div>
      <div className='w-full flex justify-center xl:h-full'>
        <Activity previousTime={previousTime[2]} time={time[2]} title={data[2].title} imageSrc={book} color='hsl(348, 100%, 68%)'></Activity>
      </div>
      <div className='w-full flex justify-center xl:h-full'>
        <Activity previousTime={previousTime[3]} time={time[3]} title={data[3].title} imageSrc={exercise} color='hsl(145, 58%, 55%)'></Activity>
      </div>
      <div className='w-full flex justify-center xl:h-full'>
        <Activity previousTime={previousTime[4]} time={time[4]} title={data[4].title} imageSrc={discussionBubble} color='hsl(264, 64%, 52%)'></Activity>
      </div>
      <div className='w-full flex justify-center xl:h-full'>
        <Activity previousTime={previousTime[5]} time={time[5]} title={data[5].title} imageSrc={heart} color='hsl(43, 84%, 65%)'></Activity>
      </div>
    </div>
  )
}

export default Dashboard