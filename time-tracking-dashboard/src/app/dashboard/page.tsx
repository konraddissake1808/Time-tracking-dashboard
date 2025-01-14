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

type DashboardProps = {
  data: Data;
  workTitle: string;
  playTitle: string;
  exerciseTitle: string;
  selfcareTitle: string;
  socialTitle: string;
  studyTitle: string;
  workDailyCurrentTime: number;
  playDailyCurrentTime: number;
  studyDailyCurrentTime: number;
  exerciseDailyCurrentTime: number;
  socialDailyCurrentTime: number;
  selfcareDailyCurrentTime: number;
  workWeeklyCurrentTime: number;
  playWeeklyCurrentTime: number;
  studyWeeklyCurrentTime: number;
  exerciseWeeklyCurrentTime: number;
  socialWeeklyCurrentTime: number;
  selfcareWeeklyCurrentTime: number;
  workMonthlyCurrentTime: number;
  playMonthlyCurrentTime: number;
  studyMonthlyCurrentTime: number;
  exerciseMonthlyCurrentTime: number;
  socialMonthlyCurrentTime: number;
  selfcareMonthlyCurrentTime: number;
  workDailyPreviousTime: number;
  playDailyPreviousTime: number;
  studyDailyPreviousTime: number;
  exerciseDailyPreviousTime: number;
  socialDailyPreviousTime: number;
  selfcareDailyPreviousTime: number;
  workWeeklyPreviousTime: number;
  playWeeklyPreviousTime: number;
  studyWeeklyPreviousTime: number;
  exerciseWeeklyPreviousTime: number;
  socialWeeklyPreviousTime: number;
  selfcareWeeklyPreviousTime: number;
  workMonthlyPreviousTime: number;
  playMonthlyPreviousTime: number;
  studyMonthlyPreviousTime: number;
  exerciseMonthlyPreviousTime: number;
  socialMonthlyPreviousTime: number;
  selfcareMonthlyPreviousTime: number;
}

export type Data = {
  [key:number]: Data;
  title:      string;
  timeframes: Timeframes;
}

export type Timeframes = {
  daily:   Daily;
  weekly:  Daily;
  monthly: Daily;
}

export type Daily = {
  current:  number;
  previous: number;
}


function Dashboard( {
  workTitle, 
  playTitle, 
  studyTitle, 
  selfcareTitle, 
  socialTitle, 
  exerciseTitle, 
  workDailyCurrentTime,
  playDailyCurrentTime,
  studyDailyCurrentTime,
  exerciseDailyCurrentTime,
  socialDailyCurrentTime,
  selfcareDailyCurrentTime,
  workWeeklyCurrentTime,
  playWeeklyCurrentTime,
  studyWeeklyCurrentTime,
  exerciseWeeklyCurrentTime,
  socialWeeklyCurrentTime,
  selfcareWeeklyCurrentTime,
  workMonthlyCurrentTime,
  playMonthlyCurrentTime,
  studyMonthlyCurrentTime,
  exerciseMonthlyCurrentTime,
  socialMonthlyCurrentTime,
  selfcareMonthlyCurrentTime,
  workDailyPreviousTime,
  playDailyPreviousTime,
  studyDailyPreviousTime,
  exerciseDailyPreviousTime,
  socialDailyPreviousTime,
  selfcareDailyPreviousTime,
  workWeeklyPreviousTime,
  playWeeklyPreviousTime,
  studyWeeklyPreviousTime,
  exerciseWeeklyPreviousTime,
  socialWeeklyPreviousTime,
  selfcareWeeklyPreviousTime,
  workMonthlyPreviousTime,
  playMonthlyPreviousTime,
  studyMonthlyPreviousTime,
  exerciseMonthlyPreviousTime,
  socialMonthlyPreviousTime,
  selfcareMonthlyPreviousTime,

}:DashboardProps ) {
  const dailyTimes = [ [
    workDailyCurrentTime,
    playDailyCurrentTime,
    studyDailyCurrentTime,
    exerciseDailyCurrentTime,
    socialDailyCurrentTime,
    selfcareDailyCurrentTime,
  ],
  [
    workDailyPreviousTime,
    playDailyPreviousTime,
    studyDailyPreviousTime,
    exerciseDailyPreviousTime,
    socialDailyPreviousTime,
    selfcareDailyPreviousTime,
  ]

  ] 

  const weeklyTimes = [
    [
      workWeeklyCurrentTime,
      playWeeklyCurrentTime,
      studyWeeklyCurrentTime,
      exerciseWeeklyCurrentTime,
      socialWeeklyCurrentTime,
      selfcareWeeklyCurrentTime,
    ],
    [
      workWeeklyPreviousTime,
      playWeeklyPreviousTime,
      studyWeeklyPreviousTime,
      exerciseWeeklyPreviousTime,
      socialWeeklyPreviousTime,
      selfcareWeeklyPreviousTime,
    ]
  ]

  const monthlyTimes = [
    [
      workMonthlyCurrentTime,
      playMonthlyCurrentTime,
      studyMonthlyCurrentTime,
      exerciseMonthlyCurrentTime,
      socialMonthlyCurrentTime,
      selfcareMonthlyCurrentTime,
    ],
    [
      workMonthlyPreviousTime,
      playMonthlyPreviousTime,
      studyMonthlyPreviousTime,
      exerciseMonthlyPreviousTime,
      socialMonthlyPreviousTime,
      selfcareMonthlyPreviousTime,
    ]
  ]

  const [time, setTime] = useState(
    weeklyTimes[0]
  );

  const [previousTime, setPreviousTime] = useState(
    weeklyTimes[1]
  )

  const dailyTimeframe = (dailyButtonData: Array<Array<number>>) => {
    setTime(dailyButtonData[0]);
    setPreviousTime(dailyButtonData[1])
  }

  const weeklyTimeframe = (weeklyButtonData: Array<Array<number>>) => {
    setTime(weeklyButtonData[0]);
    setPreviousTime(weeklyButtonData[1])
  };

  const monthlyTimeframe = (monthlyButtonData: Array<Array<number>>) => {
    setTime(monthlyButtonData[0]);
    setPreviousTime(monthlyButtonData[1])
  };

  return (
    <div className='flex justify-center pt-16 flex-col items-center xl:pt-0 xl:grid xl:w-[960px] xl:h-[430px] xl:grid-cols-4 xl:grid-rows-2 xl:gap-5'>
      <div className='w-full flex justify-center row-span-2 xl:h-full'>
        <User dailyTimes={dailyTimes} weeklyTimes={weeklyTimes} monthlyTimes={monthlyTimes} dailyDataForDashboard={dailyTimeframe} weeklyDataForDashboard={weeklyTimeframe} monthlyDataFromDashboard={monthlyTimeframe}></User>
      </div>
      <div className='w-full flex justify-center xl:h-full'>
        <Activity previousTime={previousTime[0]} time={time[0]} title={workTitle} imageSrc={briefCase} color='hsl(15, 100%, 70%)'></Activity>
      </div>
      <div className='w-full flex justify-center xl:h-full'>
        <Activity previousTime={previousTime[1]} time={time[1]} title={playTitle} imageSrc={controller} color='hsl(195, 74%, 62%)'></Activity>
      </div>
      <div className='w-full flex justify-center xl:h-full'>
        <Activity previousTime={previousTime[2]} time={time[2]} title={studyTitle} imageSrc={book} color='hsl(348, 100%, 68%)'></Activity>
      </div>
      <div className='w-full flex justify-center xl:h-full'>
        <Activity previousTime={previousTime[3]} time={time[3]} title={exerciseTitle} imageSrc={exercise} color='hsl(145, 58%, 55%)'></Activity>
      </div>
      <div className='w-full flex justify-center xl:h-full'>
        <Activity previousTime={previousTime[4]} time={time[4]} title={socialTitle} imageSrc={discussionBubble} color='hsl(264, 64%, 52%)'></Activity>
      </div>
      <div className='w-full flex justify-center xl:h-full'>
        <Activity previousTime={previousTime[5]} time={time[5]} title={selfcareTitle} imageSrc={heart} color='hsl(43, 84%, 65%)'></Activity>
      </div>
    </div>
  )
}

export default Dashboard