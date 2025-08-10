import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Driverpg = () => {
  
  const navigate = useNavigate()
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card')
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    email: '',
    phone: '',
    billingAddress: '',
    city: '',
    postalCode: ''
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const bookingDetails = {
    location: 'Homagama ABC',
    date: '2025 / 07 / 25',
    arrivalTime: 'Today at 8.30 AM',
    leavingTime: 'Today at 10.30 AM',
    duration: '2 hours',
    hourlyCharge: 'LKR. 300.00',
    totalPrice: 'LKR. 600.00'
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const formatCardNumber = (value) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim()
  }

  const formatExpiryDate = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2')
  }

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value)
    setFormData(prev => ({ ...prev, cardNumber: formatted }))
  }

  const handleExpiryChange = (e) => {
    const formatted = formatExpiryDate(e.target.value)
    setFormData(prev => ({ ...prev, expiryDate: formatted }))
  }

  const handlePayment = async () => {
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Navigate to success page or back to search
      navigate('/bookingsuccess')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className='w-full h-auto bg-white px-6 py-4 border-b shadow-sm'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <button 
              onClick={() => navigate('/booking')}
              className='text-gray-600 hover:text-gray-800 transition-colors'
            >
              ← Back
            </button>
            <h1 className='text-2xl font-bold' style={{ color: '#33A21F' }}>
              Complete Payment
            </h1>
          </div>
          <div className='text-sm text-gray-600'>
            Secure Payment Gateway
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          
          {/* Payment Form */}
          <div className='lg:col-span-2 space-y-6'>
            
            {/* Payment Method Selection */}
            <div className='bg-white rounded-lg border-2 border-gray-200 p-6'>
              <h2 className='text-xl font-semibold mb-4' style={{ color: '#33A21F' }}>
                Select Payment Method
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
                <button
                  onClick={() => setSelectedPaymentMethod('card')}
                  className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                    selectedPaymentMethod === 'card' 
                      ? 'border-[#33A21F] bg-green-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className='text-center'>
                    <div className='text-2xl mb-2'>💳</div>
                    <div className='font-medium'>Credit/Debit Card</div>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedPaymentMethod('paypal')}
                  className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                    selectedPaymentMethod === 'paypal' 
                      ? 'border-[#33A21F] bg-green-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className='text-center'>
                    <div className='text-2xl mb-2'>🅿️</div>
                    <div className='font-medium'>PayPal</div>
                  </div>
                </button>

              </div>

              {/* Card Payment Form */}
              {selectedPaymentMethod === 'card' && (
                <div className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleCardNumberChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#33A21F]"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                    />
                  </div>

                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleExpiryChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#33A21F]"
                        placeholder="MM/YY"
                        maxLength="5"
                      />
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#33A21F]"
                        placeholder="123"
                        maxLength="4"
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="cardholderName"
                      value={formData.cardholderName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#33A21F]"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              )}

              {/* PayPal */}
              {selectedPaymentMethod === 'paypal' && (
                <div className='text-center py-8'>
                  <div className='text-4xl mb-4'>🅿️</div>
                  <p className='text-gray-600 mb-4'>You will be redirected to PayPal to complete your payment</p>
                  <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
                    <p className='text-blue-800 font-medium'>Secure PayPal Payment</p>
                    <p className='text-blue-600 text-sm'>Total: {bookingDetails.totalPrice}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className='bg-white rounded-lg border-2 border-gray-200 p-6'>
              <h2 className='text-xl font-semibold mb-4' style={{ color: '#33A21F' }}>
                Contact Information
              </h2>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#33A21F]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#33A21F]"
                    placeholder="+94 77 123 4567"
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Car Number Plate Number
                  </label>

                  <input
                   type="Varchar" 
                   name='carNumberPlate'
                    value={formData.carNumberPlate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#33A21F]"
                    placeholder="ABC 1234"
                   />
                </div>              
              </div>
            </div>

            {/* Billing Address */}
            <div className='bg-white rounded-lg border-2 border-gray-200 p-6'>
              <h2 className='text-xl font-semibold mb-4' style={{ color: '#33A21F' }}>
                Billing Address
              </h2>
              
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#33A21F]"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#33A21F]"
                      placeholder="Colombo"
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#33A21F]"
                      placeholder="00100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-lg border-2 border-gray-200 p-6 sticky top-6'>
              <h2 className='text-xl font-semibold mb-4' style={{ color: '#33A21F' }}>
                Booking Summary
              </h2>

              <div className='space-y-3 mb-6'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Location:</span>
                  <span className='font-medium'>{bookingDetails.location}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Date:</span>
                  <span className='font-medium'>{bookingDetails.date}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Arrival:</span>
                  <span className='font-medium'>{bookingDetails.arrivalTime}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Departure:</span>
                  <span className='font-medium'>{bookingDetails.leavingTime}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Duration:</span>
                  <span className='font-medium'>{bookingDetails.duration}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Hourly Rate:</span>
                  <span className='font-medium'>{bookingDetails.hourlyCharge}</span>
                </div>
              </div>

              <div className='border-t pt-4 mb-6'>
                <div className='flex justify-between text-lg font-semibold'>
                  <span>Total Amount:</span>
                  <span style={{ color: '#33A21F' }}>{bookingDetails.totalPrice}</span>
                </div>
              </div>

              <div className='space-y-3'>
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={`w-full text-white font-medium py-4 px-6 rounded-lg transition-all ${
                    isProcessing 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#33A21F] hover:opacity-90 hover:shadow-lg'
                  }`}
                >
                  {isProcessing ? (
                    <div className='flex items-center justify-center space-x-2'>
                      <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    'Pay Now'
                  )}
                </button>

                <button
                  onClick={() => navigate(-1)}
                  className='w-full border-2 border-gray-300 text-gray-700 font-medium py-4 px-6 rounded-lg hover:bg-gray-50 transition-colors'
                >
                  Cancel
                </button>
              </div>

              <div className='mt-6 text-center'>
                <div className='flex items-center justify-center space-x-2 text-sm text-gray-500'>
                  <span>🔒</span>
                  <span>Secured by SSL Encryption</span>
                </div>
                <p className='text-xs text-gray-400 mt-2'>
                  Your payment information is safe and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Driverpg