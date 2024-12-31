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
      data[0].timeframes.daily.current, 
      data[1].timeframes.daily.current, 
      data[2].timeframes.daily.current, 
      data[3].timeframes.daily.current, 
      data[4].timeframes.daily.current, 
      data[5].timeframes.daily.current
    ]
  );
  //console.log(data)
  const dailyTimeframe = (dailyButtonData: array) => {
    setTime(dailyButtonData);
    console.log(dailyButtonData);
  }

  const weeklyTimeframe = (weeklyButtonData: array) => {
    setTime(weeklyButtonData);
    console.log(weeklyButtonData);
  };

  const monthlyTimeframe = (monthlyButtonData: array) => {
    setTime(monthlyButtonData);
    console.log(monthlyButtonData);
  };


  //const work = data[0];
  

  //const currentDailytime = data[0].timeframes.daily.current;

  return (
    <div className='flex justify-center pt-16 flex-col items-center'>
      <User monthlyDataFromDashboard={monthlyTimeframe} weeklyDataForDashboard={weeklyTimeframe} dailyDataForDashboard={dailyTimeframe} data={data}></User>
      <div className='w-full flex justify-center'>
        <Activity time={time[0]} title={data[0].title} imageSrc={briefCase} color='hsl(15, 100%, 70%)'></Activity>
      </div>
      <div className='w-full flex justify-center'>
        <Activity time={time[1]} title={data[1].title} imageSrc={controller} color='hsl(195, 74%, 62%)'></Activity>
      </div>
      <div className='w-full flex justify-center'>
        <Activity time={time[2]} title={data[2].title} imageSrc={book} color='hsl(348, 100%, 68%)'></Activity>
      </div>
      <div className='w-full flex justify-center'>
        <Activity time={time[3]} title={data[3].title} imageSrc={exercise} color='hsl(145, 58%, 55%)'></Activity>
      </div>
      <div className='w-full flex justify-center'>
        <Activity time={time[4]} title={data[4].title} imageSrc={discussionBubble} color='hsl(264, 64%, 52%)'></Activity>
      </div>
      <div className='w-full flex justify-center'>
        <Activity time={time[5]} title={data[5].title} imageSrc={heart} color='hsl(43, 84%, 65%)'></Activity>
      </div>
    </div>
  )
}

export default Dashboard