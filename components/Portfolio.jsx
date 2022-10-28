import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4 '>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image
                src='https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                alt='/'
                layout='responsive'
                width={677}
                height={451}
                />
            </div>

            <div className='w-full h-full'>
                <Image
                src='https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                objectFit='cover'
                />
            </div>

            <div className='w-full h-full'>
                <Image
                src='https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                objectFit='cover'
                />
            </div>

            <div className='w-full h-full'>
                <Image
                src='https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                objectFit='cover'
                />
            </div>

            <div className='w-full h-full'>
                <Image
                src='https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                alt='/'
                width='215'
                height='217'
                layout='responsive'
                objectFit='cover'
                />
            </div>
        </div>
    </div>
  )
}

export default Portfolio