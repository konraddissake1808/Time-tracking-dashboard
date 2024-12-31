'use client';
import React from 'react'
import Image from 'next/image'
import UserImage from '../../../../../public/images/image-jeremy.png'

//add a function for each button to determine the time frame to display and export it to the activity card component using use state
type userProp = {
  workDailyData: number;
  dailyDataForDashboard: any;
  weeklyDataForDashboard: any;
  monthlyDataFromDashboard: any;
};


const User: React.FC<userProp> = ({data, dailyDataForDashboard, weeklyDataForDashboard, monthlyDataFromDashboard}) => {

  function dailyTimeframe() {
    const dailyButton = document.getElementById('daily')
    dailyButton?.classList.add('active');
    const weeklyButton = document.getElementById('weekly');
    weeklyButton?.classList.remove('active');
    const monthlyButton = document.getElementById('monthly');
    monthlyButton?.classList.remove('active');
    const dailyData = [
      data[0].timeframes.daily.current,
      data[1].timeframes.daily.current,
      data[2].timeframes.daily.current,
      data[3].timeframes.daily.current,
      data[4].timeframes.daily.current,
      data[5].timeframes.daily.current,
    ];
    dailyDataForDashboard(dailyData);
  }
 

  function weeklyTimeframe() {
    const weeklyButton = document.getElementById('weekly');
    weeklyButton?.classList.add('active');
    const monthlyButton = document.getElementById('monthly');
    monthlyButton?.classList.remove('active');
    const dailyButton = document.getElementById('daily')
    dailyButton?.classList.remove('active');
    const weeklyData = [
      data[0].timeframes.weekly.current,
      data[1].timeframes.weekly.current,
      data[2].timeframes.weekly.current,
      data[3].timeframes.weekly.current,
      data[4].timeframes.weekly.current,
      data[5].timeframes.weekly.current,
    ];
    weeklyDataForDashboard(weeklyData)
  }

  function monthlyTimeframe() {
    const monthlyButton = document.getElementById('monthly');
    monthlyButton?.classList.add('active');
    const dailyButton = document.getElementById('daily')
    dailyButton?.classList.remove('active');
    const weeklyButton = document.getElementById('weekly');
    weeklyButton?.classList.remove('active');
    const monthlyData = [
      data[0].timeframes.monthly.current,
      data[1].timeframes.monthly.current,
      data[2].timeframes.monthly.current,
      data[3].timeframes.monthly.current,
      data[4].timeframes.monthly.current,
      data[5].timeframes.monthly.current,
    ];
    monthlyDataFromDashboard(monthlyData)
  }


   // const [active,setActive] = useState(dailyTimeframe)

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