// Wishlist.jsx
import React from 'react';

export default function Wishlist({ cars, toggleWishlist }) {
  if (cars.length === 0) return null;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.id} className="border p-4 rounded shadow">
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="text-lg font-semibold">{car.name}</h3>
            <p className="text-sm">Brand: {car.brand}</p>
            <p className="text-sm">Fuel: {car.fuelType}</p>
            <p className="text-sm">Price: ₹{car.price.toLocaleString()}</p>
            <button
              onClick={() => toggleWishlist(car)}
              className="mt-2 px-4 py-1 rounded bg-red-500 text-white"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
