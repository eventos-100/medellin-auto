"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/devlink/Navbar";
import { Hero } from "@/devlink/Hero";
import { MainFilterBlock1 } from "@/devlink/MainFilterBlock1";
import { MainFilterList } from "@/devlink/MainFilterList";
import { MainCardComponent } from "@/devlink/MainCardComponent";
import { Footer2 } from "@/devlink/Footer2";
import { Year } from "@/devlink/Year";
import { PriceSlide } from "@/devlink/PriceSlide";
import { Mileage } from "@/devlink/Mileage";
import { CarTypes } from "@/devlink/CarTypes";
import { Makes } from "@/devlink/Makes";

// Sample car data for testing
const mockCars = [
  {
    id: 1,
    image: "https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/687e1c6874f2b939e1e6e0e3_img-audi-2.jpg",
    name: "Audi A6",
    year: 2024,
    price: 75000,
    mileage: 0,
    type: "Sedan",
    make: "Audi",
    description: "Premium luxury sedan with advanced technology"
  },
  {
    id: 2,
    image: "https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/687e1c6874f2b939e1e6e0e3_img-audi-2.jpg",
    name: "BMW X5",
    year: 2023,
    price: 85000,
    mileage: 5000,
    type: "SUV",
    make: "BMW",
    description: "Powerful SUV with exceptional performance"
  },
  {
    id: 3,
    image: "https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/687e1c6874f2b939e1e6e0e3_img-audi-2.jpg",
    name: "Mercedes C-Class",
    year: 2024,
    price: 65000,
    mileage: 0,
    type: "Sedan",
    make: "Mercedes",
    description: "Elegant design meets cutting-edge technology"
  },
  {
    id: 4,
    image: "https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/687e1c6874f2b939e1e6e0e3_img-audi-2.jpg",
    name: "Porsche 911",
    year: 2023,
    price: 120000,
    mileage: 2000,
    type: "Sports Car",
    make: "Porsche",
    description: "Iconic sports car with legendary performance"
  }
];

export default function FullSitePage() {
  const [filteredCars, setFilteredCars] = useState(mockCars);
  const [filters, setFilters] = useState({
    year: null,
    priceRange: [0, 200000],
    mileageRange: [0, 100000],
    type: null,
    make: null
  });

  useEffect(() => {
    // Apply filters
    let results = mockCars;
    
    if (filters.year) {
      results = results.filter(car => car.year === filters.year);
    }
    
    if (filters.type) {
      results = results.filter(car => car.type === filters.type);
    }
    
    if (filters.make) {
      results = results.filter(car => car.make === filters.make);
    }
    
    results = results.filter(car => 
      car.price >= filters.priceRange[0] && 
      car.price <= filters.priceRange[1]
    );
    
    results = results.filter(car => 
      car.mileage >= filters.mileageRange[0] && 
      car.mileage <= filters.mileageRange[1]
    );
    
    setFilteredCars(results);
  }, [filters]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        
        
      />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              <h2 className="text-2xl font-bold mb-4">🔍 Filters</h2>
              
              {/* Year Filter */}
              <div className="filter-section">
                <h3 className="font-semibold mb-2">Year</h3>
                <Year />
              </div>
              
              {/* Price Filter */}
              <div className="filter-section">
                <h3 className="font-semibold mb-2">Price Range</h3>
                <PriceSlide />
              </div>
              
              {/* Mileage Filter */}
              <div className="filter-section">
                <h3 className="font-semibold mb-2">Mileage</h3>
                <Mileage />
              </div>
              
              {/* Car Type Filter */}
              <div className="filter-section">
                <h3 className="font-semibold mb-2">Type</h3>
                <CarTypes />
              </div>
              
              {/* Makes Filter */}
              <div className="filter-section">
                <h3 className="font-semibold mb-2">Make</h3>
                <Makes />
              </div>
              
              {/* Clear Filters Button */}
              <button 
                onClick={() => setFilters({
                  year: null,
                  priceRange: [0, 200000],
                  mileageRange: [0, 100000],
                  type: null,
                  make: null
                })}
                className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
              >
                Clear All Filters
              </button>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">
                🚗 Available Cars ({filteredCars.length})
              </h2>
              <p className="text-gray-600">
                Showing {filteredCars.length} of {mockCars.length} vehicles
              </p>
            </div>
            
            {/* Car Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                    <p className="text-gray-600 mb-2">{car.description}</p>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Year: {car.year}</span>
                      <span className="text-sm text-gray-500">{car.mileage.toLocaleString()} miles</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">
                        ${car.price.toLocaleString()}
                      </span>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Empty State */}
            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-4">No cars found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer2 />
    </div>
  );
}
