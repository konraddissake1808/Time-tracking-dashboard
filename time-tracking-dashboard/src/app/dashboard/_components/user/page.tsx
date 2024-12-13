import React from 'react'
import Image from 'next/image'
import UserImage from '../../../../../public/images/image-jeremy.png'

//add a function for each button to determine the time frame to display and export it to the activity card component using use state

function User() {
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
                    <button>Daily</button>
                  </div>
                  <div>
                    <button>Weekly</button>
                  </div>
                  <div>
                    <button>Monthly</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default User