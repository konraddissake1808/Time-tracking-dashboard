import React from 'react'
import Image from 'next/image'

interface ActivityProps{
  color:string;
}

export const Activity: React.FC<ActivityProps> = ({color}) => {
  return (
    <div className='w-[90%]'>
        <div className='w-full h-32 relative'>
            <div style={{backgroundColor:color}} className='w-full h-1/2 z-0 absolute'></div>
            <div className='bg-darkBlue w-full h-3/4 z-10 absolute bottom-0'></div>
        </div>
    </div>
  )
}

export default Activity