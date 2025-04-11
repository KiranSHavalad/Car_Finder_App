// CarList.jsx
import React from 'react';

export default function CarList({ cars, toggleWishlist, wishlist }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {cars.length === 0 && <p className="col-span-full text-center">No cars found.</p>}
      {cars.map((car) => (
        <div key={car.id} className="border p-4 rounded shadow hover:shadow-lg transition">
          <img src={car.image} alt={car.name} className="w-full h-48 object-cover mb-2 rounded" />
          <h3 className="text-xl font-semibold mb-1">{car.name}</h3>
          <p className="text-sm">Brand: {car.brand}</p>
          <p className="text-sm">Fuel: {car.fuelType}</p>
          <p className="text-sm">Seats: {car.seats}</p>
          <p className="text-sm">Price: ₹{car.price.toLocaleString()}</p>
          <button
            onClick={() => toggleWishlist(car)}
            className={`mt-2 px-4 py-1 rounded text-white ${wishlist.find(item => item.id === car.id) ? 'bg-red-500' : 'bg-blue-500'}`}
          >
            {wishlist.find(item => item.id === car.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </button>
        </div>
      ))}
    </div>
  );
}
