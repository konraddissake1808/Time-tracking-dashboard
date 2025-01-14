import React from 'react'
import Image, { StaticImageData } from 'next/image'
import ellipsis from '../../../../../public/images/icon-ellipsis.svg'


type ActivityProps = {
  color:string;
  imageSrc:StaticImageData;
  title: string;
  time: number;
  previousTime: number;
}


export const Activity: React.FC<ActivityProps> = ({title, color,imageSrc, time, previousTime}) => {
  return (
    <div id='activity-card' className='w-[90%] mb-6 sm:w-[320px] xl:h-full'>
      <div className='w-full h-32 relative xl:h-full'>
        <div style={{backgroundColor:color}} className='w-full h-1/2 z-0 absolute rounded-t-lg flex flex-row-reverse overflow-hidden'>
          <div className='w-16 h-16 mr-2 mt-[-8px]'>
            <Image src={imageSrc} alt=''></Image>
          </div>
        </div>
        <div id='activity-card-content' className='bg-darkBlue w-full h-3/4 z-10 absolute bottom-0 rounded-lg text-white flex justify-center items-center xl:h-4/5'>
          <div className='w-[85%] justify-between items-center'>
            <div className='flex justify-between items-center mb-1'>
              <p className='text-sm xl:text-base'>{title}</p>
              <div className='flex justify-end h-[5px]'>
                <button>
                  <Image src={ellipsis} alt=''></Image>
                </button>
              </div>
            </div>
            <div className='flex justify-between items-center xl:flex-col xl:items-start'>
              <p className='text-2xl font-light xl:text-5xl xl:mt-4 xl:mb-3'>{time}hrs</p>
              <p className='text-xs xl:text-sm text-desaturatedBlue'> Last week - {previousTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity