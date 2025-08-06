import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchParking = () => {
    const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Recommended')
  
  const parkingSpaces = [
    {
      image: 'https://via.placeholder.com/80',
      title: 'Secure Parking Lot A',
      rating: 4,
      reviews: 120,
      bookings: '34 bookings',
      isVerified: true,
      isRecommended: true,
      walkingTime: '5 min',
      price: '$12',
    },
    {
      image: 'https://via.placeholder.com/80',
      title: 'Downtown Garage B',
      rating: 5,
      reviews: 98,
      bookings: '45 bookings',
      isVerified: false,
      isRecommended: false,
      walkingTime: '3 min',
      price: '$10',
    },
  ]

  const priceMarkers = [
    { id: 1, x: '40%', y: '30%', price: '$10', isHighlighted: true },
    { id: 2, x: '60%', y: '50%', price: '$12', isHighlighted: false },
  ]

  const soldOutMarkers = [
    { id: 3, x: '70%', y: '40%' },
  ]

  return (
    <>
      <div className='w-full h-auto bg-white px-6 py-4 border-b'>
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 items-start lg:items-end'>
          <div className='flex-1'>
            <label className='block text-sm font-medium text-gray-700 mb-2' style={{ color: '#33A21F' }}>Park at</label>
            <input
              type="text"
              defaultValue="Canada Water, Canada Water Station Underground Ltd, Deal Porters Way, London, UK"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none"
              style={{ borderColor: '#33A21F' }}
              placeholder="Enter location"
            />
          </div>

          <div className='min-w-[200px]'>
            <label className='block text-sm font-medium text-gray-700 mb-2' style={{ color: '#33A21F' }}>From</label>
            <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none bg-white" style={{ borderColor: '#33A21F' }}>
              <option>Today at 14:00</option>
              <option>Today at 15:00</option>
              <option>Today at 16:00</option>
              <option>Tomorrow at 14:00</option>
            </select>
          </div>

          <div className='min-w-[200px]'>
            <label className='block text-sm font-medium text-gray-700 mb-2' style={{ color: '#33A21F' }}>Until</label>
            <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none bg-white" style={{ borderColor: '#33A21F' }}>
              <option>Today at 18:00</option>
              <option>Today at 19:00</option>
              <option>Today at 20:00</option>
              <option>Tomorrow at 18:00</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className='w-full h-auto bg-white px-6 py-4 border-b'>
        <div className='max-w-7xl mx-auto flex flex-row items-center justify-between'>
          <div className='flex space-x-8'>
            <button className='pb-2 px-1 font-medium text-sm border-b-2 transition-colors' style={{ color: '#33A21F', borderColor: '#33A21F' }}>
              Recommended
            </button>
            <button className='pb-2 px-1 font-medium text-sm text-gray-500 border-b-2 border-transparent hover:text-gray-700 transition-colors'>
              Cheapest
            </button>
            <button className='pb-2 px-1 font-medium text-sm text-gray-500 border-b-2 border-transparent hover:text-gray-700 transition-colors'>
              Closest
            </button>
          </div>

          <button className='flex items-center space-x-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
            <span className='text-sm font-medium'>⚙️ Filters</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 flex flex-row'>
        {/* Parking List */}
        <div className='w-full lg:w-96 bg-gray-50 h-full overflow-y-auto'>
          <div className='p-4 space-y-4'>
            {parkingSpaces.map((space, index) => (
              <div key={index} className='w-full bg-white rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow'>
                {space.isRecommended && (
                  <div className='w-full text-white text-xs font-bold px-4 py-2 rounded-t-lg' style={{ backgroundColor: '#FF8C00' }}>
                    Recommended
                  </div>
                )}

                <div className='p-4'>
                  <div className='flex flex-row gap-4'>
                    <div className='w-20 h-16 rounded-lg overflow-hidden flex-shrink-0'>
                      <img
                        src={space.image}
                        alt="Parking space"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className='flex-1 flex flex-col'>
                      <h3 className='font-medium text-gray-900 hover:text-[#33A21F] cursor-pointer transition-colors text-base'>
                        {space.title}
                      </h3>

                      <div className='flex items-center gap-3 mt-2'>
                        <div className='flex items-center'>
                          <span className='text-yellow-400 text-sm'>{'★'.repeat(space.rating)}</span>
                          <span className='text-xs text-gray-600 ml-1'>({space.reviews})</span>
                        </div>

                        <span className='text-xs text-gray-600'>{space.bookings}</span>

                        {space.isVerified && (
                          <div className='w-4 h-4 rounded-full flex items-center justify-center' style={{ backgroundColor: '#33A21F' }}>
                            <div className='w-2 h-2 bg-white rounded-full'></div>
                          </div>
                        )}
                      </div>

                      <div className='flex items-center gap-1 mt-2 text-xs text-gray-600'>
                        <span>🚶</span>
                        <span>{space.walkingTime} to destination</span>
                      </div>
                    </div>
                  </div>

                  <button
                    className='w-full text-white font-medium py-3 px-4 rounded-lg mt-4 transition-colors hover:opacity-90'
                    style={{ backgroundColor: '#33A21F' }}
                    onClick={() => navigate('/booking')}
                  >
                    Reserve for {space.price}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map View */}
        <div className='flex-1 relative min-h-[600px]' style={{ background: 'linear-gradient(135deg, #E0F2FE 0%, #DCFCE7 100%)' }}>
          {/* Map background pattern */}
          <div className='absolute inset-0 opacity-30'>
            <div className='w-full h-full' style={{ background: 'linear-gradient(135deg, #BFDBFE 0%, #BBF7D0 50%, #BFDBFE 100%)' }}></div>
          </div>

          {/* Price markers */}
          {priceMarkers.map((marker) => (
            <div
              key={marker.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all hover:scale-110 px-3 py-2 rounded-full text-sm font-bold shadow-lg ${
                marker.isHighlighted
                  ? 'text-white'
                  : 'bg-white border-2 border-gray-800 text-gray-800'
              }`}
              style={{
                left: marker.x,
                top: marker.y,
                backgroundColor: marker.isHighlighted ? '#FF8C00' : undefined
              }}
            >
              {marker.price}
            </div>
          ))}

          {/* Sold out markers */}
          {soldOutMarkers.map((marker) => (
            <div
              key={marker.id}
              className='absolute transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg'
              style={{ left: marker.x, top: marker.y }}
            >
              SOLD OUT
            </div>
          ))}

          {/* Map controls */}
          <div className='absolute top-4 right-4 flex flex-col space-y-2'>
            <button className='bg-white shadow-lg rounded-lg p-3 hover:bg-gray-50 transition-colors'>
              <span className='text-xl font-bold'>+</span>
            </button>
            <button className='bg-white shadow-lg rounded-lg p-3 hover:bg-gray-50 transition-colors'>
              <span className='text-xl font-bold'>−</span>
            </button>
          </div>

          {/* Location indicator */}
          <div className='absolute bottom-8 right-8 bg-white rounded-full shadow-lg p-3'>
            <div className='w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center'>
              <div className='w-2 h-2 bg-white rounded-full'></div>
            </div>
          </div>

          {/* Map attribution */}
          <div className='absolute bottom-2 left-2 text-xs text-gray-500 bg-white bg-opacity-75 px-2 py-1 rounded'>
            Google
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchParking
