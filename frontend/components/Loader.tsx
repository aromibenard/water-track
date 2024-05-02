import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <div className='grid items-center p-8 h-dvh w-screen'>
        <div className='mx-auto'>
            <h2 className='font-semibold text-2xl p-2 tracking-tight my-5'>Loading...</h2>
            <CircularProgress  className='h-[6rem] mx-10'/>
        </div>
    </div>
  )
}

export default Loader
