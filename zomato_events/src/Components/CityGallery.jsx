import React, { useState } from 'react';
import './CityGallery.css'; // Import the CSS file
import delhincr from '../images/delhincr.avif'; // Import the image
import { Link } from 'react-router-dom';
function CityGallery() {
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    { name: 'Delhi NCR', image: '../images/delhincr.avif' },
    { name: 'Bengaluru', image: '/images/bengaluru.png' },
    { name: 'Jaipur', image: '/images/jaipur.png' },
    { name: 'Goa', image: '/images/goa.png' },
    { name: 'Ludhiana', image: '/images/ludhiana.png' },
    { name: 'Kolkata', image: '/images/kolkata.png' },
    { name: 'Pune', image: '/images/pune.png' },
    { name: 'Ahmedabad', image: '/images/ahmedabad.png' },
    { name: 'Indore', image: '/images/indore.png' },
    { name: 'Mumbai', image: '/images/mumbai.png' },
    { name: 'Hyderabad', image: '/images/hyderabad.png' },
    { name: 'Chandigarh', image: '/images/chandigarh.png' },
    { name: 'Guwahati', image: '/images/guwahati.png' },
  ];

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="gallery">
      <h1 className='gtitle'>Select a city to explore</h1>
      <div className="grid">
        {cities.map((city) => (
          <div
            key={city.name}
            className="city-card"
            onClick={() => handleCityClick(city)}
          >
            <Link to="/event/1">
            <img src={delhincr} alt={city.name} />
           
            </Link>
            <p>{city.name}</p>
          </div>
        ))}
      </div>
      {selectedCity && (
        <div className="selected-city">
          <h2>{selectedCity.name}</h2>
          <img src={delhincr} alt={selectedCity.name} />
        </div>
      )}
    </div>
  );
}

export default CityGallery;
