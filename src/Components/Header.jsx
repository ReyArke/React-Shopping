import React from 'react'
import Container from './Container'

function Header() {
  return (
    <header className='px-5 py-5'>
      <Container>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-semibold'>
          Online Shop
        </h1>
        <button className='relative border border-black px-4 py-2'>
          My Cart
          <span className='absolute translate-x-1/2  -translate-y-1/2 top-0 right-0 inline-block text-xs bg-red-500 text-white  px-3 py-1'>
            1
          </span>
        </button>
      </div>
      </Container>
      
    </header>
  )
}

export default Header