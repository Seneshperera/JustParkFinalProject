import React from 'react'
import Home from '../assets/home.png'

const homebody = () => {
  return (
    <div className='w-full h-auto flex flex-row'>
      <div className='flex flex-col w-1/2 mt-20'>
        <div className='max-w-[550px] mx-16'>
            <h1 className='text-5xl font-sans font-bold text-[#050038]'>Better than searching, best with <span style={{ color: '#33A21F' }}>booking</span>,park smart <span style={{ color: '#33A21F' }}>in seconds.</span></h1>
        </div>
        <div className='max-w-[500px] border flex flex-col border-[#33A21F] rounded-3xl p-6 mx-16 mt-10'>
            <form className="space-y-4">
                <input
                type="text"
                placeholder="Enter the place or postal code..."
                className="w-full p-3 border-2 rounded-full focus:outline-none"
                />

                <div>
                <label className="block text-sm mb-1">Date</label>
                <input
                    type="date"
                    className="w-2/3 p-3 border-2 rounded-full focus:outline-none"
                />
                </div>

                <div>
                <label className="block text-sm mb-1">Time</label>
                <input
                    type="time"
                    className="w-2/3 p-3 border-2 rounded-full focus:outline-none"
                />
                </div>

                <button
                type="submit"
                className="w-full bg-[#33A21F] hover:bg-gray-400 text-white p-3 rounded-full"
                >
                Search For Parking Places
                </button>
      </form>
        </div>
      </div>

        <div className='w-1/2 h-auto flex flex-col'>
          <div className='max-w-[600px]'>
            <img src={Home} alt="home" className='mt-10 object-cover' />
          </div>

            <p>Skip the hassle of finding parking! JustPark.lk lets you reserve your spot instantly—whether for daily commutes, events, or long stays. Enjoy real-time availability, secure payments, and guaranteed parking at the best locations. Book online, park stress-free!
</p>
        </div>

    </div>
  )
}

export default homebody
