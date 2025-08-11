"use client";

import { useState } from "react";
// Import Webflow components
import { Navbar } from "@/devlink/Navbar";
import { Hero } from "@/devlink/Hero";
import { Year } from "@/devlink/Year";
import { PriceSlide } from "@/devlink/PriceSlide";
import { Mileage } from "@/devlink/Mileage";
import { Footer2 } from "@/devlink/Footer2";
import { MainCardComponent } from "@/devlink/MainCardComponent";

export default function FilterTestPage() {
  const [filters, setFilters] = useState({
    year: "",
    priceMin: 0,
    priceMax: 200000,
    mileageMin: 0,
    mileageMax: 100000,
    type: "",
    make: ""
  });

  // Sample car data with real Webflow images
  const mockCars = [
    {
      id: 1,
      image: "https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/687e1c6874f2b939e1e6e0e3_img-audi-2.jpg",
      name: "Audi A6",
      year: 2024,
      price: 75000,
      mileage: 0,
      type: "Sedan",
      make: "Audi"
    },
    {
      id: 2,
      image: "https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/687e1c8074f2b939e1e6e122_img-bmw.jpg",
      name: "BMW X5",
      year: 2023,
      price: 85000,
      mileage: 5000,
      type: "SUV",
      make: "BMW"
    },
    {
      id: 3,
      image: "https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/687e1c8074f2b939e1e6e185_img-bmw-2.jpg",
      name: "Mercedes C-Class",
      year: 2024,
      price: 65000,
      mileage: 0,
      type: "Sedan",
      make: "Mercedes"
    },
    {
      id: 4,
      image: "https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fdc1_img-audi.jpg",
      name: "Porsche 911",
      year: 2023,
      price: 120000,
      mileage: 2000,
      type: "Sports Car",
      make: "Porsche"
    },
    {
      id: 5,
      image: "https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/687e1c6874f2b939e1e6e0e3_img-audi-2.jpg",
      name: "Audi Q7",
      year: 2023,
      price: 95000,
      mileage: 8000,
      type: "SUV",
      make: "Audi"
    },
    {
      id: 6,
      image: "https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/687e1c8074f2b939e1e6e122_img-bmw.jpg",
      name: "BMW M3",
      year: 2024,
      price: 105000,
      mileage: 0,
      type: "Sports Car",
      make: "BMW"
    },
    {
      id: 7,
      image: "https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/687e1c8074f2b939e1e6e185_img-bmw-2.jpg",
      name: "Mercedes E-Class",
      year: 2023,
      price: 78000,
      mileage: 12000,
      type: "Sedan",
      make: "Mercedes"
    },
    {
      id: 8,
      image: "https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/687bbc3b0bb3dd57d6c1fdc1_img-audi.jpg",
      name: "Porsche Cayenne",
      year: 2024,
      price: 135000,
      mileage: 0,
      type: "SUV",
      make: "Porsche"
    }
  ];

  // Filter cars based on current filters
  const filteredCars = mockCars.filter(car => {
    if (filters.year && car.year !== parseInt(filters.year)) return false;
    if (car.price < filters.priceMin || car.price > filters.priceMax) return false;
    if (car.mileage < filters.mileageMin || car.mileage > filters.mileageMax) return false;
    if (filters.type && car.type !== filters.type) return false;
    if (filters.make && car.make !== filters.make) return false;
    return true;
  });

  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content Area */}
      <div style={{ 
        display: 'flex', 
        maxWidth: '1400px', 
        margin: '40px auto', 
        padding: '0 20px',
        gap: '40px'
      }}>
        
        {/* Left Sidebar - Filters */}
        <div style={{ 
          width: '300px',
          flexShrink: 0
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '30px' 
          }}>
            🔍 Filters
          </h2>
          
          {/* Year Filter */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>Year</h3>
            <Year />
          </div>
          
          {/* Price Filter */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>Price Range</h3>
            <PriceSlide />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <span>${filters.priceMin.toLocaleString()}</span>
              <span>${filters.priceMax.toLocaleString()}</span>
            </div>
          </div>
          
          {/* Mileage Filter */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>Mileage</h3>
            <Mileage />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <span>{filters.mileageMin.toLocaleString()} mi</span>
              <span>{filters.mileageMax.toLocaleString()} mi</span>
            </div>
          </div>
          
          {/* Type Filter - Temporary Dropdown */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>Type</h3>
            <select 
              style={{ 
                width: '100%', 
                padding: '10px', 
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
            >
              <option value="">All Types</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Sports Car">Sports Car</option>
              <option value="Convertible">Convertible</option>
            </select>
          </div>
          
          {/* Make Filter - Temporary Dropdown */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px' }}>Make</h3>
            <select 
              style={{ 
                width: '100%', 
                padding: '10px', 
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}
              value={filters.make}
              onChange={(e) => setFilters({...filters, make: e.target.value})}
            >
              <option value="">All Makes</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Porsche">Porsche</option>
              <option value="Ferrari">Ferrari</option>
            </select>
          </div>
          
          {/* Clear All Button */}
          <button 
            onClick={() => setFilters({
              year: "",
              priceMin: 0,
              priceMax: 200000,
              mileageMin: 0,
              mileageMax: 100000,
              type: "",
              make: ""
            })}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Clear All Filters
          </button>
        </div>
        
        {/* Right Content - Results */}
        <div style={{ flex: 1 }}>
          {/* Results Header */}
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>
              🚗 Available Cars ({filteredCars.length})
            </h2>
            <p style={{ color: '#666', marginTop: '5px' }}>
              Showing {filteredCars.length} of {mockCars.length} vehicles
            </p>
          </div>
          
          {/* Car Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {filteredCars.map((car) => (
              <div 
                key={car.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img 
                  src={car.image} 
                  alt={car.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '20px' }}>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold',
                    marginBottom: '10px'
                  }}>
                    {car.name}
                  </h3>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                    fontSize: '14px',
                    color: '#666'
                  }}>
                    <span>{car.year}</span>
                    <span>{car.mileage.toLocaleString()} mi</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '15px'
                  }}>
                    <span style={{ 
                      fontSize: '24px', 
                      fontWeight: 'bold',
                      color: '#3b82f6'
                    }}>
                      ${car.price.toLocaleString()}
                    </span>
                    <button style={{
                      padding: '8px 16px',
                      backgroundColor: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredCars.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#f9fafb',
              borderRadius: '12px'
            }}>
              <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>
                No cars found
              </h3>
              <p style={{ color: '#666' }}>
                Try adjusting your filters to see more results
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <Footer2 />
    </>
  );
}
