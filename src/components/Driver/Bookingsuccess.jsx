import React from 'react'
import { useNavigate } from 'react-router-dom';

const Bookingsuccess = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleViewBookings = () => {
    navigate('/driverpg');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg 
              className="w-10 h-10 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Your booking has been confirmed successfully.
            <br />
            <span className="text-green-600 font-semibold block mt-2">
              Thank you for trusting us!
            </span>
          </p>
        </div>

        {/* Booking Details Card */}
        <div className="bg-gray-50 rounded-xl p-4 mb-8">
          <div className="text-sm text-gray-600">
            <p className="mb-2">✓ Booking ID: #BK-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            <p className="mb-2">✓ Payment Status: Confirmed</p>
            <p>✓ Confirmation email sent</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleGoHome}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Bookingsuccess
