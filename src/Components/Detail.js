import React from "react";
import { useParams, Link } from "react-router-dom";
import Frame29 from "../img/Frame29.png"; // Use the correct image import

const DoctorDetailPage = ({ doctors }) => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="p-6 text-center">
        <p className="text-lg">Doctor not found!</p>
        <Link to="/" className="text-blue-500 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="relative m-20 rounded-md shadow-lg">
        {/* Background image */}
        <img
          src={Frame29}
          alt="Header Background"
          className="w-full h-48 object-cover rounded-t-md"
        />
        {/* Overlay Content */}
        <div className="p-6 flex flex-col sm:flex-row items-center sm:justify-between">
          {/* Left Section: Doctor Profile */}
          <div className="flex items-center space-x-4">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white -mt-12 shadow-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{doctor.name}</h1>
              <p className="text-green-600 font-medium text-lg">{doctor.specialization}</p>
              <p className="text-yellow-500 flex items-center space-x-1">
                <span>{doctor.rating}</span>
                <i className="fas fa-star"></i>
              </p>
            </div>
          </div>
          {/* Right Section: Doctor Profile */}
          <div className="mt-4 sm:mt-0 text-center sm:text-right">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition ease-in-out duration-200">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side Cards */}
        <div className="space-y-8">
          {/* About Me Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-600">
              {doctor.aboutMe.substring(0, 100)}...
              <Link to="#" className="text-blue-500"> Read more</Link>
            </p>
            <div className="text-gray-500 flex space-x-4 mt-4">
              <span>Languages: {doctor.languages.join(", ")}</span>
              <div className="flex space-x-3">
                <a href={doctor.socialLinks.facebook} className="text-gray-500 hover:text-blue-600">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href={doctor.socialLinks.twitter} className="text-gray-500 hover:text-blue-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={doctor.socialLinks.instagram} className="text-gray-500 hover:text-pink-500">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Specialist In Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300">
            <h2 className="text-2xl font-semibold mb-4">Specialist In</h2>
            <p className="text-gray-600">{doctor.specialization}</p>
          </div>

          {/* Concerns Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300">
            <h2 className="text-2xl font-semibold mb-4">Concerns</h2>
            <ul className="text-gray-600 list-disc pl-6">
              {doctor.concerns.map((concern, index) => (
                <li key={index}>{concern}</li>
              ))}
            </ul>
          </div>

          {/* Work Experience Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300">
            <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
            <p className="text-gray-600">{doctor.workExperience}</p>
          </div>

          {/* All Reviews Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300">
            <h2 className="text-2xl font-semibold mb-4">All Reviews</h2>
            <div className="space-y-4">
              {doctor.reviews.map((review, index) => (
                <div key={index} className="border-b pb-4">
                  <p className="text-sm text-gray-500">{review.date}</p>
                  <p className="font-semibold text-gray-800">{review.user}</p>
                  <p>{review.comment}</p>
                  <p className="text-yellow-400">Rating: {review.rating} ★</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="space-y-8">
          {/* Appointment Fee Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300">
            <h2 className="text-2xl font-semibold mb-4">Appointment Fee</h2>
            <p className="text-green-500 text-3xl font-bold">₹{doctor.fee}</p>
          </div>

          {/* Select Mode of Session Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300">
            <h2 className="text-2xl font-semibold mb-4">Select Mode of Session</h2>
            <div className="flex space-x-4 mt-2">
              <button className="bg-white text-gray-700 border-2 border-black px-6 py-3 rounded-lg hover:bg-green-100 transition ease-in-out duration-200">In-Clinic</button>
              <button className="bg-white text-green-500 border-2 border-black px-6 py-3 rounded-lg hover:bg-green-100 transition ease-in-out duration-200">Video</button>
              <button className="bg-white text-gray-700 border-2 border-black px-6 py-3 rounded-lg hover:bg-green-100 transition ease-in-out duration-200">Chat</button>
            </div>
          </div>

          {/* Morning Time Slot Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300">
            <h2 className="text-2xl font-semibold mb-4">Morning Time</h2>
            <div className="flex space-x-4 mt-2">
              <button className="bg-white text-gray-700 border-2 border-black px-6 py-3 rounded-lg hover:bg-green-100 transition ease-in-out duration-200">9 AM</button>
              <button className="bg-white text-gray-700 border-2 border-black px-6 py-3 rounded-lg hover:bg-green-100 transition ease-in-out duration-200">10 AM</button>
              <button className="bg-white text-gray-700 border-2 border-black px-6 py-3 rounded-lg hover:bg-green-100 transition ease-in-out duration-200">11 AM</button>
              <button className="bg-white text-gray-700 border-2 border-black px-6 py-3 rounded-lg hover:bg-green-100 transition ease-in-out duration-200">12 PM</button>
            </div>
          </div>

          {/* Evening Time Slot Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300">
            <h2 className="text-2xl font-semibold mb-4">Evening Time</h2>
            <div className="flex space-x-4 mt-2">
              <button className="bg-white text-gray-700 border-2 border-black px-6 py-3 rounded-lg hover:bg-green-100 transition ease-in-out duration-200">4 PM</button>
              <button className="bg-white text-gray-700 border-2 border-black px-6 py-3 rounded-lg hover:bg-green-100 transition ease-in-out duration-200">4:30 PM</button>
              <button className="bg-white text-gray-700 border-2 border-black px-6 py-3 rounded-lg hover:bg-green-100 transition ease-in-out duration-200">5 PM</button>
              <button className="bg-white text-gray-700 border-2 border-black px-6 py-3 rounded-lg hover:bg-green-100 transition ease-in-out duration-200">5:30 PM</button>
            </div>
          </div>

          {/* Book Appointment Button */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg w-full hover:bg-green-600 transition ease-in-out duration-200">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetailPage;
