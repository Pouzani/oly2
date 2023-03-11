import React from 'react'
import Navbar from './Navbar'

const Congratulations = () => {
  return (
    <>
      <div className='xl:flex'>
        <Navbar />
        <div className='flex flex-col justify-center items-center w-full h-screen'>
          <h1 className='text-5xl p-5'>Congratulations</h1>
          <p className='text-3xl p-5'>You completed the treasure hunt!</p>
        </div>
      </div>
    </>
  )
}

export default Congratulations