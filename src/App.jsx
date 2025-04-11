// App.js
import React, { useState, useEffect } from 'react';
import CarList from './Components/CarList';
import Filters from './Components/Filters';
import Wishlist from './Components/Wishlist';
import './App.css';

export default function App() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });
  const [filters, setFilters] = useState({
    brand: '',
    fuelType: '',
    priceRange: [0, 1000000],
    seats: ''
  });

  useEffect(() => {
    fetch('/cars.json') // replace with actual mock API URL
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const result = cars.filter(car => {
      return (
        (!filters.brand || car.brand === filters.brand) &&
        (!filters.fuelType || car.fuelType === filters.fuelType) &&
        car.price >= filters.priceRange[0] &&
        car.price <= filters.priceRange[1] &&
        (!filters.seats || car.seats === parseInt(filters.seats))
      );
    });
    setFilteredCars(result);
  }, [filters, cars]);

  const toggleWishlist = (car) => {
    const exists = wishlist.find(item => item.id === car.id);
    let newWishlist;
    if (exists) {
      newWishlist = wishlist.filter(item => item.id !== car.id);
    } else {
      newWishlist = [...wishlist, car];
    }
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  return (
    <div className="app">
      <h1 className="text-center text-3xl font-bold my-4">Car Finder</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <CarList cars={filteredCars} toggleWishlist={toggleWishlist} wishlist={wishlist} />
      <Wishlist cars={wishlist} toggleWishlist={toggleWishlist} />
    </div>
  );
}
