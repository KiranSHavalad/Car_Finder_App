import React, { useState, useEffect } from 'react';

export default function Filters({ filters, setFilters }) {
  const [tempFilters, setTempFilters] = useState(filters);
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    // You can update this list dynamically from API later
    setBrandList(["Toyota", "Honda", "Ford", "BMW", "Tesla"]);
  }, []);

  const handleSearch = () => {
    setFilters(tempFilters);
  };

  return (
    <div className="filters flex gap-2 justify-center mb-4 flex-wrap">
      {/* Brand Dropdown */}
      <select
        value={tempFilters.brand}
        onChange={e => setTempFilters({ ...tempFilters, brand: e.target.value })}
        className="border px-2 py-1 rounded"
      >
        <option value="">All Brands</option>
        {brandList.map((brand, idx) => (
          <option key={idx} value={brand}>{brand}</option>
        ))}
      </select>

      {/* Fuel Type Dropdown */}
      <select
        value={tempFilters.fuelType}
        onChange={e => setTempFilters({ ...tempFilters, fuelType: e.target.value })}
        className="border px-2 py-1 rounded"
      >
        <option value="">All Fuel Types</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
      </select>

      {/* Seats Dropdown */}
      <select
        value={tempFilters.seats}
        onChange={e => setTempFilters({ ...tempFilters, seats: e.target.value })}
        className="border px-2 py-1 rounded"
      >
        <option value="">Seats</option>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="7">7</option>
      </select>

      {/* Search Button */}
      <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
        Search
      </button>
    </div>
  );
}
