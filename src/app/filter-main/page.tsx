"use client";

import { useState } from "react";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import { Navbar } from "@/devlink/Navbar";
import { FilterFormBlock } from "@/devlink/FilterFormBlock";
import { FilterResults } from "@/devlink/FilterResults";
import { MainFilterResults } from "@/devlink/MainFilterResults";
import { MainFilterList } from "@/devlink/MainFilterList";
import { Footer2 } from "@/devlink/Footer2";
import "@/devlink/global.css";

interface FilterState {
  search: string;
  types: string[];
  makes: string[];
  year: string;
  priceMin: number;
  priceMax: number;
}

export default function FilterMainPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    types: [] as string[],
    makes: [] as string[],
    year: "",
    priceMin: 0,
    priceMax: 200000
  });

  // Mock data matching live Webflow site (exact vehicles with correct images)
  const mockCars = [
    {
      id: 1,
      name: "A6",
      make: "Audi",
      type: "Luxury",
      year: 2025,
      price: 125000,
      image: "https://cdn.prod.website-files.com/68832cb423cc770e6ca4b1c7/6891d3329dd9b35467abe8b4_A6--4047.jpg"
    },
    {
      id: 2,
      name: "718 Boxster",
      make: "Porsche",
      type: "Roadster",
      year: 2024,
      price: 125000,
      image: "https://cdn.prod.website-files.com/68832cb423cc770e6ca4b1c7/6891d470da35115879c0b36e_Porsche-718-Boxster-S-Model.jpg"
    },
    {
      id: 3,
      name: "A5",
      make: "Audi",
      type: "Luxury",
      year: 2025,
      price: 85000,
      image: "https://cdn.prod.website-files.com/68832cb423cc770e6ca4b1c7/6891d12e1d6544e0891b20af_A5-019.jpg"
    },
    {
      id: 4,
      name: "911 Carrera Cabriolet",
      make: "Porsche",
      type: "Roadster",
      year: 2024,
      price: 125000,
      image: "https://cdn.prod.website-files.com/68832cb423cc770e6ca4b1c7/6891d16d28be788a0028b236_porsch718-054.jpeg"
    },
    {
      id: 5,
      name: "C43 Sedan",
      make: "Mercedes",
      type: "Sedan",
      year: 2023,
      price: 95000,
      image: "https://cdn.prod.website-files.com/68832cb423cc770e6ca4b1c7/6891d63bfb3a962d3fcb9a7b_MERCEDES-AMG-C-43.jpg"
    },
    {
      id: 6,
      name: "C43 Sedan",
      make: "Mercedes",
      type: "Sedan",
      year: 2023,
      price: 125000,
      image: "https://cdn.prod.website-files.com/68832cb423cc770e6ca4b1c7/6891d57894960b5111fb637e_mercedes-amg-c43-sedan.jpg"
    },
    {
      id: 7,
      name: "BMW Z4 sDrive30i Roadster",
      make: "BMW",
      type: "Roadster",
      year: 2025,
      price: 805000,
      image: "https://cdn.prod.website-files.com/68832cb423cc770e6ca4b1c7/688f20c9680a7ed645e58207_P90318572_highRes__mid.jpg"
    },
    {
      id: 8,
      name: "Audi R8",
      make: "Audi", 
      type: "Sports Car",
      year: 2024,
      price: 120000,
      image: "https://cdn.prod.website-files.com/68832cb423cc770e6ca4b1c7/688f20e1c13160717160e4b2_imgi_1_audi-r8-rental-cover-mph-club.jpeg"
    },
    {
      id: 9,
      name: "BMW 3 Series Sedan",
      make: "BMW",
      type: "Sedan", 
      year: 2025,
      price: 75000,
      image: "https://cdn.prod.website-files.com/68832cb423cc770e6ca4b1c7/688f20f75f9c7087fd8b8259_new_bmw_m3_g80_4.jpg"
    },
    {
      id: 10,
      name: "Mercedes-Benz CLE Cabriolet",
      make: "Mercedes",
      type: "Convertible",
      year: 2025,
      price: 105000,
      image: "https://cdn.prod.website-files.com/68832cb423cc770e6ca4b1c7/688ea5743153c7b4c7fb9d00_n-1.jpg"
    }
  ];

  // Filter the cars based on current filters
  const filteredCars = mockCars.filter(car => {
    if (filters.search && !car.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    if (filters.types.length > 0 && !(filters.types as string[]).includes(car.type)) return false;
    if (filters.makes.length > 0 && !(filters.makes as string[]).includes(car.make)) return false;
    if (filters.year && car.year !== parseInt(filters.year)) return false;
    if (car.price < filters.priceMin || car.price > filters.priceMax) return false;
    return true;
  });

  const handleFilterChange = (filterType: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const toggleArrayFilter = (filterType: 'types' | 'makes', value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value) 
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  return (
    <DevLinkProvider>
      <div className="min-h-screen">
        {/* Navigation */}
        <Navbar />
        
        {/* Hero Section - Dealer Locator Theme with Correct Background */}
        <section style={{
          backgroundImage: 'linear-gradient(rgba(26, 26, 26, 0.7), rgba(45, 45, 45, 0.7)), url("https://cdn.prod.website-files.com/687bbc3b0bb3dd57d6c1fd83/688d891ec3a40ec8b9dd7a2b_Subscribe-p-2000.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          padding: '80px 20px',
          textAlign: 'center',
          position: 'relative',
          minHeight: '300px'
        }}>
          {/* Content Overlay */}
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            position: 'relative',
            zIndex: 10
          }}>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: 'bold', 
              marginBottom: '20px',
              lineHeight: 1.2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
            }}>
              find your local dealer
            </h1>
            <a href="#" style={{
              display: 'inline-block',
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '18px',
              marginTop: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}>
              see locations
            </a>
          </div>
        </section>

        {/* Main Content */}
        <div style={{
          display: 'flex',
          maxWidth: '1400px',
          margin: '40px auto',
          padding: '0 20px',
          gap: '40px'
        }}>
          
          {/* Left Sidebar - Filters */}
          <div style={{ width: '300px', flexShrink: 0 }}>
            {/* Search Bar */}
            <div style={{ marginBottom: '30px' }}>
              <input
                type="text"
                placeholder="Search here..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
              />
            </div>

            {/* Types Filter */}
            <div style={{ marginBottom: '30px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Types</h3>
                <button 
                  onClick={() => handleFilterChange('types', [])}
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  Clear
                </button>
              </div>
              
              {['Sedan', 'Minivan', 'Roadster', 'Luxury', 'Convertible', 'SUV Sport Utility Vehicle', 'Sports Car'].map(type => (
                <div key={type} style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '8px',
                  cursor: 'pointer'
                }} onClick={() => toggleArrayFilter('types', type)}>
                  <input
                    type="checkbox"
                    checked={filters.types.includes(type)}
                    onChange={() => {}}
                    style={{ marginRight: '8px' }}
                  />
                  <span>{type}</span>
                  <span style={{ 
                    marginLeft: 'auto',
                    color: '#666',
                    fontSize: '14px'
                  }}>
                    {mockCars.filter(car => car.type === type).length}
                  </span>
                </div>
              ))}
            </div>

            {/* Makes Filter */}
            <div style={{ marginBottom: '30px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Makes</h3>
                <button 
                  onClick={() => handleFilterChange('makes', [])}
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  Clear
                </button>
              </div>
              
              {['Audi', 'Ferrari', 'Porsche', 'BMW', 'Mercedes'].map(make => (
                <div key={make} style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '8px',
                  cursor: 'pointer'
                }} onClick={() => toggleArrayFilter('makes', make)}>
                  <input
                    type="checkbox"
                    checked={filters.makes.includes(make)}
                    onChange={() => {}}
                    style={{ marginRight: '8px' }}
                  />
                  <span>{make}</span>
                  <span style={{ 
                    marginLeft: 'auto',
                    color: '#666',
                    fontSize: '14px'
                  }}>
                    {mockCars.filter(car => car.make === make).length}
                  </span>
                </div>
              ))}
            </div>

            {/* Year Filter */}
            <div style={{ marginBottom: '30px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Year</h3>
                <button 
                  onClick={() => handleFilterChange('year', '')}
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  Clear
                </button>
              </div>
              
              <select
                value={filters.year}
                onChange={(e) => handleFilterChange('year', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
              >
                <option value="">Select a year</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>

            {/* Price Filter */}
            <div style={{ marginBottom: '30px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600' }}>Price</h3>
                <button 
                  onClick={() => {
                    handleFilterChange('priceMin', 0);
                    handleFilterChange('priceMax', 200000);
                  }}
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  Clear
                </button>
              </div>
              
              <div style={{ marginBottom: '10px' }}>
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  value={filters.priceMax}
                  onChange={(e) => handleFilterChange('priceMax', parseInt(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>${filters.priceMin.toLocaleString()}</span>
                <span>${filters.priceMax.toLocaleString()}</span>
              </div>
            </div>

            {/* Clear All Button */}
            <button
              onClick={() => setFilters({
                search: "",
                types: [] as string[],
                makes: [] as string[],
                year: "",
                priceMin: 0,
                priceMax: 200000
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
              Clear All
            </button>
          </div>

          {/* Right Content - Results */}
          <div style={{ flex: 1 }}>
            {/* Results Header - Exact Match to Live Site */}
            <div style={{
              backgroundColor: '#333',
              color: 'white',
              padding: '15px 20px',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <span style={{ fontSize: '16px' }}>
                  Results <span style={{ 
                    backgroundColor: '#666', 
                    color: 'white',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    marginLeft: '8px'
                  }}>{filteredCars.length}</span>
                </span>
                <span style={{ 
                  fontSize: '14px', 
                  marginLeft: '20px',
                  color: '#ccc'
                }}>
                  Showing items <span style={{ 
                    backgroundColor: '#666', 
                    color: 'white',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>1</span> to <span style={{ 
                    backgroundColor: '#666', 
                    color: 'white',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>{filteredCars.length}</span> of <span style={{ 
                    backgroundColor: '#666', 
                    color: 'white',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>{filteredCars.length}</span>
                </span>
              </div>
              
              <select style={{
                padding: '8px 16px',
                border: '1px solid #666',
                borderRadius: '4px',
                backgroundColor: '#444',
                color: 'white',
                cursor: 'pointer'
              }}>
                <option>Sort by</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Year: Newest</option>
                <option>Year: Oldest</option>
              </select>
            </div>

            {/* Filtering By Section - Exact Match to Live Site */}
            {(filters.types.length > 0 || filters.makes.length > 0 || filters.year || filters.search) && (
              <div style={{
                backgroundColor: '#f8f9fa',
                padding: '15px 20px',
                marginBottom: '20px',
                borderRadius: '4px'
              }}>
                <span style={{ 
                  color: '#666', 
                  fontSize: '14px',
                  marginRight: '15px'
                }}>
                  Filtering by:
                </span>
                
                <div style={{ 
                  display: 'inline-flex', 
                  flexWrap: 'wrap', 
                  gap: '8px',
                  alignItems: 'center'
                }}>
                  {filters.search && (
                    <span style={{
                      backgroundColor: '#e3f2fd',
                      color: '#1976d2',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      border: '1px solid #bbdefb',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      Search: {filters.search}
                      <button 
                        onClick={() => handleFilterChange('search', '')}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#1976d2',
                          cursor: 'pointer',
                          fontSize: '16px',
                          padding: '0',
                          marginLeft: '4px'
                        }}
                      >
                        ×
                      </button>
                    </span>
                  )}
                  
                  {filters.types.map(type => (
                    <span key={type} style={{
                      backgroundColor: '#e8f5e8',
                      color: '#2e7d32',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      border: '1px solid #c8e6c9',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      {type}
                      <button 
                        onClick={() => toggleArrayFilter('types', type)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#2e7d32',
                          cursor: 'pointer',
                          fontSize: '16px',
                          padding: '0',
                          marginLeft: '4px'
                        }}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  
                  {filters.makes.map(make => (
                    <span key={make} style={{
                      backgroundColor: '#fff3e0',
                      color: '#f57c00',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      border: '1px solid #ffcc02',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      {make}
                      <button 
                        onClick={() => toggleArrayFilter('makes', make)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#f57c00',
                          cursor: 'pointer',
                          fontSize: '16px',
                          padding: '0',
                          marginLeft: '4px'
                        }}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  
                  {filters.year && (
                    <span style={{
                      backgroundColor: '#f3e5f5',
                      color: '#7b1fa2',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      border: '1px solid #ce93d8',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      Year: {filters.year}
                      <button 
                        onClick={() => handleFilterChange('year', '')}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#7b1fa2',
                          cursor: 'pointer',
                          fontSize: '16px',
                          padding: '0',
                          marginLeft: '4px'
                        }}
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Results Grid with Vehicle Images */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '25px'
            }}>
              {filteredCars.map(car => (
                <div
                  key={car.id}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                >
                  {/* Vehicle Image */}
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <img 
                      src={car.image}
                      alt={car.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  
                  {/* Vehicle Details */}
                  <div style={{ padding: '20px' }}>
                    {/* Vehicle Name */}
                    <h3 style={{ 
                      fontSize: '20px', 
                      fontWeight: 'bold',
                      marginBottom: '15px',
                      color: '#333'
                    }}>
                      {car.name}
                    </h3>
                    
                    {/* Vehicle Info Grid */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '12px',
                      marginBottom: '20px'
                    }}>
                      {/* Make - Duplicated like live site */}
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#666', fontSize: '14px' }}>{car.make}</span>
                        <span style={{ color: '#666', fontSize: '14px' }}>{car.make}</span>
                      </div>
                      
                      {/* Type */}
                      <div style={{ gridColumn: '1 / -1' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#666', fontSize: '14px' }}>Type</span>
                          <span style={{ color: '#666', fontSize: '14px' }}>{car.type}</span>
                        </div>
                      </div>
                      
                      {/* Year */}
                      <div style={{ gridColumn: '1 / -1' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#666', fontSize: '14px' }}>Year:</span>
                          <span style={{ color: '#666', fontSize: '14px' }}>{car.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div style={{
                      fontSize: '24px',
                      fontWeight: 'bold',
                      color: '#3b82f6',
                      textAlign: 'left'
                    }}>
                      ${car.price.toLocaleString()}
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
                  No vehicles found
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
      </div>
    </DevLinkProvider>
  );
}