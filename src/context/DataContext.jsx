import React, { createContext, useContext, useState } from 'react';

// Create the context
const DataContext = createContext();

// Custom hook to use the context
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// Data Provider component
export const DataProvider = ({ children }) => {
  // Shared data across all pages
  const [sharedData] = useState({
    user: {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      vehicle: {
        make: 'Toyota',
        model: 'Camry',
        license: 'ABC123'
      }
    },
    parkingSpots: [
      {
        id: 1,
        name: 'Downtown Parking',
        address: '123 Main St, City',
        price: 5.00,
        available: true,
        type: 'hourly',
        image: '/src/assets/home.png'
      },
      {
        id: 2,
        name: 'Mall Parking',
        address: '456 Shopping Ave, City',
        price: 3.50,
        available: true,
        type: 'hourly',
        image: '/src/assets/home.png'
      },
      {
        id: 3,
        name: 'Airport Parking',
        address: '789 Airport Rd, City',
        price: 15.00,
        available: true,
        type: 'daily',
        image: '/src/assets/home.png'
      }
    ],
    bookingDetails: {
      bookingId: null,
      selectedSpot: null,
      startTime: null,
      endTime: null,
      totalAmount: 0,
      status: 'pending'
    },
    appInfo: {
      appName: 'JustPark',
      version: '1.0.0',
      currency: 'USD',
      contactEmail: 'support@justpark.com',
      contactPhone: '+1-800-JUSTPARK'
    }
  });

  return (
    <DataContext.Provider value={{ sharedData }}>
      {children}
    </DataContext.Provider>
  );
};
