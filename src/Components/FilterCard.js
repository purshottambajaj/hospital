import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const FilterCard = ({ doctors }) => {
  const [filters, setFilters] = useState({
    gender: '',
    specialization: '',
    location: '',
    fee: '',
    name: '', // Added 'name' filter
  });

  // Filter the doctors data based on selected filters
  const filteredDoctors = doctors.filter((doctor) => {
    return (
      (filters.gender === '' || doctor.gender === filters.gender) &&
      (filters.specialization === '' || doctor.specialization === filters.specialization) &&
      (filters.location === '' || doctor.location === filters.location) &&
      (filters.fee === '' || doctor.fee <= Number(filters.fee)) &&
      (filters.name === '' || doctor.name.toLowerCase().includes(filters.name.toLowerCase()))
    );
  });

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const locations = [...new Set(doctors.map((doctor) => doctor.location))]; // Extract unique locations
  const names = [...new Set(doctors.map((doctor) => doctor.name))]; // Extract unique doctor names

  return (
    <>
      <div
        className="h-60 flex flex-col items-center justify-center text-center bg-cover bg-center rounded-md shadow-md"
        style={{ backgroundColor: `rgba(234, 242, 234, 1)` }}
      >
        {/* Title */}
        <h3 className="text-4xl text-gray-800 mb-14">
          Find Expert Doctors For An In-clinic Session Here
        </h3>

        {/* Input Section */}
        <div className="flex space-x-4 items-center">
          {/* Name Dropdown */}
          <select
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-500"
            onChange={(e) => handleFilterChange('name', e.target.value)}
          >
            <option value="">Search by Name</option>
            {names.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          {/* Location Dropdown */}
          <select
            name="location"
            className="border px-4 py-2 rounded-md"
            onChange={(e) => handleFilterChange('location', e.target.value)}
          >
            <option value="">Select Location</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-4">
        {/* Filters Section */}
        <div className="flex flex-wrap gap-4 mb-4">
          <select
            name="gender"
            className="border px-4 py-2 rounded-md"
            onChange={(e) => handleFilterChange('gender', e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            name="specialization"
            className="border px-4 py-2 rounded-md"
            onChange={(e) => handleFilterChange('specialization', e.target.value)}
          >
            <option value="">Select Specialization</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Pediatrician">Pediatrician</option>
          </select>
          <input
            type="number"
            name="fee"
            className="border px-4 py-2 rounded-md"
            placeholder="Max Fee"
            onChange={(e) => handleFilterChange('fee', e.target.value)}
          />
        </div>
        <hr className="mb-4" />

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="p-4 rounded-md shadow-md"
              style={{ backgroundColor: '#FFF7E2' }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Doctor Image */}
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-full mb-4 shadow-sm"
                />
                {/* Doctor Details */}
                <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialization}</p>
                <p className="text-gray-500">{doctor.experience} experience</p>
                <p className="text-gray-500">
                  Languages: {doctor.languages.join(', ')}
                </p>
                <p className="text-yellow-500 font-semibold">Rating: {doctor.rating} ⭐</p>
                {/* Fee Section */}
                <div className="flex space-x-4 mt-4">
                  <button className="px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition">
                    ₹{doctor.fee} Fee
                  </button>
                  <button className="px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition">
                    ₹{doctor.chatFee} Chat Fee
                  </button>
                </div>
                {/* Action Buttons */}
                <div className="flex space-x-4 mt-4">
                  <Link to={`/doctor-profile/${doctor.id}`}>
    <button className="px-4 py-2 bg-white text-green-700 border border-green-700 rounded-md hover:bg-green-700 hover:text-white transition">
      View Profile
    </button>
  </Link>
                  <button className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredDoctors.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">
              No doctors match the selected filters.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterCard;
