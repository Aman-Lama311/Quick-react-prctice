import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed w-full h-screen z-[2]'>
      <div className='flex justify-center py-20 text-xl text-zinc-600 font-semibold'>Documents</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900 text-[13vw] leading-none tracking-tighter'>
      Docs.</h1>
    </div>
      
    </>
  )
}

export default Background
