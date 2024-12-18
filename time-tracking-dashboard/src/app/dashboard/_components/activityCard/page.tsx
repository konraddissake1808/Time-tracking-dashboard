import React from 'react'
import Image, { StaticImageData } from 'next/image'


interface ActivityProps{
  color:string;
  imageSrc:StaticImageData;
  title: string;
  time: number;
  previousTime: number;
}

export const Activity: React.FC<ActivityProps> = ({color,imageSrc, title, time, previousTime}) => {
  return (
    <div className='w-[90%] mb-6'>
        <div className='w-full h-32 relative'>
            <div style={{backgroundColor:color}} className='w-full h-1/2 z-0 absolute rounded-t-lg flex flex-row-reverse overflow-hidden'>
              <div className='w-16 h-16 mr-2 mt-[-8px]'>
                <Image src={imageSrc} alt=''></Image>
              </div>
            </div>
            <div className='bg-darkBlue w-full h-3/4 z-10 absolute bottom-0 rounded-lg text-white'>
              <p>{title}</p>
              <p>{time}</p>
              <p>{previousTime}</p>
            </div>
        </div>
    </div>
  )
}

export default Activity