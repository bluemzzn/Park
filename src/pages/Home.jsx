import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <section className='mt-6 p-4 flex flex-col justify-center items-center max-w-md' >
        <h2 className='text-2xl font-medium mb-3'>Welcome to Park</h2>
        <h1 className='text-4xl font-bold mb-4'>Rent A Mate &amp; Get Extreme Activities!</h1>
        <button type="button" className='my-3 py-2 px-3 bg-[var(--color-green)]  rounded-md font-medium'>Get Started</button>  
      </section>
    </>
  )
}

export default Home
