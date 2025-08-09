import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  // Use proper navigation
  const navigate = useNavigate();
  
  // Mock booking data (in real app, this would come from navigation state)
  const bookingData = {
    parkingTitle: 'Secure Parking Lot A',
    basePrice: 12,
    location: 'Homagama ABC',
    owner: 'Nimal Perera',
    phone: '0772357123'
  };

  // Slot configuration - 4 slots with different statuses
  const [slots, setSlots] = useState([
    { id: 1, status: 'available', selected: false },
    { id: 2, status: 'available', selected: false },
    { id: 3, status: 'booked', selected: false },
    { id: 4, status: 'available', selected: false }
  ]);

  const [bookingDetails, setBookingDetails] = useState({
    arrivingTime: 'Today at 8.30 AM',
    leavingTime: 'Today at 10.30 AM',
    date: '2025 / 07 / 25',
    selectedSlots: [],
    totalPrice: 0
  });

  // Calculate total price when slots change
  useEffect(() => {
    const selectedSlots = slots.filter(slot => slot.selected);
    const totalPrice = selectedSlots.length * bookingData.basePrice * 100; // Convert to LKR
    
    setBookingDetails(prev => ({
      ...prev,
      selectedSlots: selectedSlots,
      totalPrice: totalPrice
    }));
  }, [slots, bookingData.basePrice]);

  const handleSlotClick = (slotId) => {
    setSlots(prevSlots => 
      prevSlots.map(slot => {
        if (slot.id === slotId && slot.status === 'available') {
          return { ...slot, selected: !slot.selected };
        }
        return slot;
      })
    );
  };

  const handleConfirmPay = () => {
    if (bookingDetails.selectedSlots.length === 0) {
      alert('Please select at least one parking slot');
      return;
    }
    
    // Navigate to driverpg page for payment processing
    navigate('/driverpg');
  };

  const getSlotClassName = (slot) => {
    let baseClass = "w-24 h-32 rounded-2xl flex items-center justify-center font-medium text-gray-700 cursor-pointer transition-all duration-200 ";
    
    if (slot.status === 'booked') {
      return baseClass + "bg-red-300 cursor-not-allowed opacity-75";
    } else if (slot.selected) {
      return baseClass + "bg-green-400 text-white shadow-lg transform scale-105";
    } else {
      return baseClass + "bg-green-200 hover:bg-green-300 hover:shadow-md";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">
              <span className="text-gray-800">Just</span>
              <span className="text-green-600">Park.lk</span>
            </h1>
            <nav className="flex space-x-6">
              <button 
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-800 font-medium"
              >
                Home
              </button>
              <button className="text-gray-600 hover:text-gray-800 font-medium">About</button>
              <button className="text-gray-600 hover:text-gray-800 font-medium">Services</button>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm">🌐</span>
              <span className="text-sm font-medium">EN</span>
            </div>
            <button className="text-gray-600 hover:text-gray-800 font-medium">Contact Sales</button>
            <button className="text-gray-600 hover:text-gray-800 font-medium">Login</button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium">
              Sign up free
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-green-600">Booking</span> Information
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Slot Selection and Booking Details */}
          <div className="flex-1 space-y-6">
            {/* Slot Selection */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Select Parking Slots</h3>
              <div className="flex justify-center space-x-4">
                {slots.map((slot) => (
                  <div key={slot.id} className="flex flex-col items-center">
                    <div
                      className={getSlotClassName(slot)}
                      onClick={() => handleSlotClick(slot.id)}
                    >
                      <div className="text-center">
                        <div className="text-sm font-bold">
                          {slot.status === 'booked' ? 'Booked' : 
                           slot.status === 'available' ? 'Available' : 'Available'}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">Slot {slot.id}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>Green: Available • Red: Booked • Click available slots to select</p>
              </div>
            </div>

            {/* Booking Details */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Booking Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Arriving Time</span>
                  <span className="text-gray-900">{bookingDetails.arrivingTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Leaving Time</span>
                  <span className="text-gray-900">{bookingDetails.leavingTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Date</span>
                  <span className="text-gray-900">{bookingDetails.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Selected Slots</span>
                  <span className="text-gray-900">
                    {bookingDetails.selectedSlots.length > 0 
                      ? `${bookingDetails.selectedSlots.length} slot(s)` 
                      : 'None selected'}
                  </span>
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="font-bold text-gray-700">Total Price</span>
                  <span className="font-bold text-xl text-gray-900">
                    LKR {bookingDetails.totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Confirm Button */}
            <button
              onClick={handleConfirmPay}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={bookingDetails.selectedSlots.length === 0}
            >
              Confirm Pay
            </button>
          </div>

          {/* Right Side - Location Info and Map */}
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
              {/* Map placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200 opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-80 px-3 py-1 rounded-full text-sm font-medium">
                    📍 Location Map
                  </div>
                </div>
                {/* Simulated map elements */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="absolute top-8 right-6 w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="absolute bottom-6 left-8 w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-600 rounded-full border-2 border-white"></div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">{bookingData.location}</h3>
              <p className="text-gray-600 mb-4">{bookingData.owner} • {bookingData.phone}</p>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Hourly Charge</span>
                  <span className="font-bold text-lg">LKR {(bookingData.basePrice * 100).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;