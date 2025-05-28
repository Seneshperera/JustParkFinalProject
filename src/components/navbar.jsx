import React from 'react'

const navbar = () => {
  return (
    <div className='flex w-full h-[91px] bg-white border-1 shadow-md items-center'>
        <div className='flex flex-row justify-between items-center w-full '>
            <div className='flex flex-row justify-between gap-6 pl-4 items-center'>
                <h1 className='text-3xl font-semibold font-poppins'>Just<span style={{ color: '#33A21F' }}>Park</span>.lk</h1>
                <ul className='flex justify-between gap-4'>
                  <li className='px-4 hover:text-gray-400'><a href='#'>Home</a></li>
                  <li className='px-4 hover:text-gray-400'><a href='#'>About</a></li>
                  <li className='px-4 hover:text-gray-400'><a href='#'>Service</a></li>
                </ul>
            </div>
            <div className='flex flex-row justify-between gap-6 items-center mr-6'>
                <ul className='flex justify-between gap-4'>
                  <li className='px-4 hover:text-gray-400'><a href='#'>Contact Sales</a></li>
                  <li className='px-4 hover:text-gray-400'><a href='../login.jsx'>Login</a></li>
                </ul>              
                <button className='bg-[#33A21F] hover:bg-gray-400 rounded-3xl p-3 text-white'>
                  Sign up free
                </button>


            </div>

        </div>
      
    </div>
  )
}

export default navbar
