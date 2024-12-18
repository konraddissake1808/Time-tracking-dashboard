'use client';
import React from 'react'
import Image from 'next/image'
import UserImage from '../../../../../public/images/image-jeremy.png'
import { useState } from 'react';

//add a function for each button to determine the time frame to display and export it to the activity card component using use state

const User = ({data}) => {


  console.log(data)

  function dailyTimeframe() {
    const dailyButton = document.getElementById('daily')
    dailyButton?.classList.add('active');
    const weeklyButton = document.getElementById('weekly');
    weeklyButton?.classList.remove('active');
    const monthlyButton = document.getElementById('monthly');
    monthlyButton?.classList.remove('active');
  }

  function weeklyTimeframe() {
    const weeklyButton = document.getElementById('weekly');
    weeklyButton?.classList.add('active');
    const monthlyButton = document.getElementById('monthly');
    monthlyButton?.classList.remove('active');
    const dailyButton = document.getElementById('daily')
    dailyButton?.classList.remove('active');
  }

  function monthlyTimeframe() {
    const monthlyButton = document.getElementById('monthly');
    monthlyButton?.classList.add('active');
    const dailyButton = document.getElementById('daily')
    dailyButton?.classList.remove('active');
    const weeklyButton = document.getElementById('weekly');
    weeklyButton?.classList.remove('active');
  }

    const [active,setActive] = useState(dailyTimeframe)

  return (
    <div className='w-[90%]'>
        <div className='h-40 bg-darkBlue rounded-b-lg mb-6'>
            <div className='h-[66%] bg-blue rounded-lg flex justify-center items-center'>
              <div className='flex justify-start items-center w-[85%]'>
                <div className='border-y-2 border-x-2 border-white w-12 h-12 rounded-full'>
                  <Image src={UserImage} alt=''></Image>
                </div>
                <div className='text-white ml-4'>
                  <div>
                    <p className='text-xs text-desaturatedBlue'>Report for</p>
                  </div>
                  <div>
                    <p className='text-lg'>Jeremy Robson</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-[34%] bg-darkBlue rounded-b-lg flex justify-center items-center'>
              <div className='w-[85%]'>
                <div className='flex justify-between text-desaturatedBlue text-sm'>
                  <div>
                    <button id='daily' className='active' onClick={dailyTimeframe}>Daily</button>
                  </div>
                  <div>
                    <button id='weekly' className='' onClick={weeklyTimeframe}>Weekly</button>
                  </div>
                  <div>
                    <button id='monthly' className='' onClick={monthlyTimeframe}>Monthly</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default User