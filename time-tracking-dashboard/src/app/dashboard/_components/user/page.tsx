'use client';
/* eslint-disable  @typescript-eslint/no-explicit-any */
import React from 'react'
import Image from 'next/image'
import UserImage from '../../../../../public/images/image-jeremy.png'


type userProp = {
  dailyDataForDashboard: any;
  dailyTimes: Array<Array<number>>;
  weeklyTimes: Array<Array<number>>;
  monthlyTimes: Array<Array<number>>;
  weeklyDataForDashboard: any;
  monthlyDataFromDashboard: any;
};


const User = ({dailyDataForDashboard, dailyTimes, weeklyTimes, monthlyTimes, weeklyDataForDashboard, monthlyDataFromDashboard}:userProp) => {

  function dailyTimeframe() {
    const dailyButton = document.getElementById('daily')
    dailyButton?.classList.add('active');
    const weeklyButton = document.getElementById('weekly');
    weeklyButton?.classList.remove('active');
    const monthlyButton = document.getElementById('monthly');
    monthlyButton?.classList.remove('active');
    const dailyData = dailyTimes;
    dailyDataForDashboard(dailyData);
  }
 
  function weeklyTimeframe() {
    const weeklyButton = document.getElementById('weekly');
    weeklyButton?.classList.add('active');
    const monthlyButton = document.getElementById('monthly');
    monthlyButton?.classList.remove('active');
    const dailyButton = document.getElementById('daily')
    dailyButton?.classList.remove('active');
    const weeklyData = weeklyTimes;
    weeklyDataForDashboard(weeklyData)
  }

  function monthlyTimeframe() {
    const monthlyButton = document.getElementById('monthly');
    monthlyButton?.classList.add('active');
    const dailyButton = document.getElementById('daily')
    dailyButton?.classList.remove('active');
    const weeklyButton = document.getElementById('weekly');
    weeklyButton?.classList.remove('active');
    const monthlyData = monthlyTimes;
    monthlyDataFromDashboard(monthlyData)
  }

  return (
    <div className='w-[90%] sm:w-[320px] xl:h-full'>
        <div className='h-40 bg-darkBlue rounded-b-lg mb-6 xl:h-full'>
            <div className='h-[66%] bg-blue rounded-lg flex justify-center items-center'>
              <div className='flex justify-start items-center w-[85%] xl:flex-col xl:items-start xl:ml-4 xl:justify-start xl:h-4/5'>
                <div className='border-y-2 border-x-2 border-white w-12 h-12 rounded-full xl:w-16 xl:h-16'>
                  <Image src={UserImage} alt=''></Image>
                </div>
                <div className='text-white ml-4 xl:ml-0 xl:mt-8'>
                  <div>
                    <p className='text-xs text-paleBlue xl:text-sm'>Report for</p>
                  </div>
                  <div>
                    <p className='text-lg xl:font-light xl:text-4xl'>Jeremy Robson</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-[34%] bg-darkBlue rounded-b-lg flex justify-center items-center'>
              <div className='w-[85%]'>
                <div className='flex justify-between text-desaturatedBlue text-sm xl:flex-col'>
                  <div>
                    <button id='daily' className='xl:text-base hover:text-gray-300 duration-100 xl:my-0 my-4' onClick={dailyTimeframe}>Daily</button>
                  </div>
                  <div>
                    <button id='weekly' className='active hover:text-gray-300 xl:text-base my-4 duration-100' onClick={weeklyTimeframe}>Weekly</button>
                  </div>
                  <div>
                    <button id='monthly' className='xl:text-base hover:text-gray-300 my-4 xl:my-0 duration-100' onClick={monthlyTimeframe}>Monthly</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default User