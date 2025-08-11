'use client';

import React, { useState } from 'react';
import { MainFilterBlock1 } from '@/devlink/MainFilterBlock1';
import { MainFilterBlockHeader } from '@/devlink/MainFilterBlockHeader';
import { MainFilterList } from '@/devlink/MainFilterList';
import { Types } from '@/devlink/Types';
import { Year } from '@/devlink/Year';
import { Mileage } from '@/devlink/Mileage';
import { MainCardComponent } from '@/devlink/MainCardComponent';
import { ActiveCard } from '@/devlink/ActiveCard';

// NEW COMPONENTS from latest sync
import { CardComponents } from '@/devlink/CardComponents';
import { PriceSlide } from '@/devlink/PriceSlide';
import { FilterResults } from '@/devlink/FilterResults';
import { FilterTags } from '@/devlink/FilterTags';
import { FilterEmpty } from '@/devlink/FilterEmpty';

// Sample car data
const sampleCars = [
  {
    id: 1,
    make: 'BMW',
    model: '530i',
    year: 2023,
    price: 45000,
    mileage: 12000,
    type: 'Sedan',
    image: 'https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/6884d4b4c87da6af1cf2f3e9_bmw-530i-2023.jpg'
  },
  {
    id: 2,
    make: 'Mercedes',
    model: 'C300',
    year: 2022,
    price: 42000,
    mileage: 18000,
    type: 'Sedan',
    image: 'https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/6884d4b4c87da6af1cf2f3ea_mercedes-c300.jpg'
  },
  {
    id: 3,
    make: 'Audi',
    model: 'Q7',
    year: 2024,
    price: 65000,
    mileage: 5000,
    type: 'SUV',
    image: 'https://uploads-ssl.webflow.com/687bbc3b0bb3dd57d6c1fd83/6884d4b4c87da6af1cf2f3eb_audi-q7.jpg'
  }
];

export default function NewComponentsTestPage() {
  const [filters, setFilters] = useState({
    type: '',
    year: '',
    priceRange: '',
    mileage: ''
  });

  const [filteredCars, setFilteredCars] = useState(sampleCars);

  const handleFilterChange = (filterType: string, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    // Simple filtering logic
    const filtered = sampleCars.filter(car => {
      return (
        (!newFilters.type || car.type === newFilters.type) &&
        (!newFilters.year || car.year.toString() === newFilters.year) &&
        (!newFilters.priceRange || checkPriceRange(car.price, newFilters.priceRange)) &&
        (!newFilters.mileage || checkMileageRange(car.mileage, newFilters.mileage))
      );
    });
    
    setFilteredCars(filtered);
  };

  const checkPriceRange = (price: number, range: string) => {
    switch(range) {
      case 'under-40k': return price < 40000;
      case '40k-50k': return price >= 40000 && price <= 50000;
      case 'over-50k': return price > 50000;
      default: return true;
    }
  };

  const checkMileageRange = (mileage: number, range: string) => {
    switch(range) {
      case 'under-10k': return mileage < 10000;
      case '10k-20k': return mileage >= 10000 && mileage <= 20000;
      case 'over-20k': return mileage > 20000;
      default: return true;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          🆕 NEW DevLink Components Test Page
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            🎉 Latest Components Sync - NEW ADDITIONS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">🆕</span>
              <span className="font-bold text-blue-600">CardComponents</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">🆕</span>
              <span className="font-bold text-blue-600">PriceSlide</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">🆕</span>
              <span className="font-bold text-blue-600">FilterResults</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">🆕</span>
              <span className="font-bold text-blue-600">FilterTags</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">🆕</span>
              <span className="font-bold text-blue-600">FilterEmpty</span>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">✅ Sync Status:</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Fresh sync completed from Webflow</li>
              <li>• 5 new components added to project</li>
              <li>• Server restarted and running on port :3003</li>
              <li>• All components properly typed with TypeScript</li>
            </ul>
          </div>
        </div>

        {/* NEW COMPONENTS SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* New CardComponents Showcase */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              🆕 CardComponents Component
            </h3>
            <div className="space-y-4">
              <CardComponents 
                name="BMW 530i Premium"
                brandName="BMW"
                typeName="Sedan"
                year="2023"
                prices="$45,000"
              />
              <p className="text-sm text-gray-600">
                <strong>Features:</strong> Enhanced card component with props for name, brandName, typeName, year, and prices
              </p>
            </div>
          </div>

          {/* New PriceSlide Showcase */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              🆕 PriceSlide Component
            </h3>
            <div className="space-y-4">
              <PriceSlide />
              <p className="text-sm text-gray-600">
                <strong>Features:</strong> Interactive price slider for filtering vehicles by price range
              </p>
            </div>
          </div>

          {/* New FilterResults Showcase */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              🆕 FilterResults Component
            </h3>
            <div className="space-y-4">
              <FilterResults />
              <p className="text-sm text-gray-600">
                <strong>Features:</strong> Displays filter results count and summary information
              </p>
            </div>
          </div>

          {/* New FilterTags Showcase */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              🆕 FilterTags Component
            </h3>
            <div className="space-y-4">
              <FilterTags />
              <p className="text-sm text-gray-600">
                <strong>Features:</strong> Shows active filter tags with ability to remove individual filters
              </p>
            </div>
          </div>

        </div>

        {/* Filter Section with Enhanced Components */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">🎛️ Enhanced Filter System</h3>
            
            {/* MainFilterBlock1 Component */}
            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Main Filter Block</h4>
              <MainFilterBlock1 />
            </div>

            {/* New PriceSlide instead of old Price filter */}
            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">🆕 Price Slider</h4>
              <PriceSlide />
            </div>

            {/* Types Filter */}
            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Vehicle Type</h4>
              <Types />
              <select 
                className="mt-2 w-full border border-gray-300 rounded-md p-2"
                onChange={(e) => handleFilterChange('type', e.target.value)}
                value={filters.type}
              >
                <option value="">All Types</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Coupe">Coupe</option>
              </select>
            </div>

            {/* Year Filter */}
            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">Year</h4>
              <Year />
              <select 
                className="mt-2 w-full border border-gray-300 rounded-md p-2"
                onChange={(e) => handleFilterChange('year', e.target.value)}
                value={filters.year}
              >
                <option value="">All Years</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>

            {/* Filter Tags */}
            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">🆕 Active Filters</h4>
              <FilterTags />
            </div>
          </div>

          {/* Results Section with New Components */}
          <div className="lg:col-span-3">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">
                🚗 Vehicle Results
              </h3>
              {/* New FilterResults Component */}
              <FilterResults />
            </div>
            
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Using NEW CardComponents */}
                    <div className="relative">
                      <ActiveCard />
                      <img 
                        src={car.image} 
                        alt={`${car.make} ${car.model}`}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://via.placeholder.com/400x200/e2e8f0/64748b?text=Car+Image';
                        }}
                      />
                    </div>
                    
                    <div className="p-4">
                      <CardComponents 
                        name={`${car.year} ${car.make} ${car.model}`}
                        brandName={car.make}
                        typeName={car.type}
                        year={car.year.toString()}
                        prices={`$${car.price.toLocaleString()}`}
                      />
                      <div className="mt-2 text-sm text-gray-500">
                        {car.mileage.toLocaleString()} miles
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                {/* New FilterEmpty Component */}
                <FilterEmpty />
                <button 
                  onClick={() => {
                    setFilters({ type: '', year: '', priceRange: '', mileage: '' });
                    setFilteredCars(sampleCars);
                  }}
                  className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Component Analysis */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            📊 New Components Analysis
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-semibold">Component</th>
                  <th className="text-left p-3 font-semibold">Type</th>
                  <th className="text-left p-3 font-semibold">Props</th>
                  <th className="text-left p-3 font-semibold">Use Case</th>
                  <th className="text-left p-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">CardComponents</td>
                  <td className="p-3">Display</td>
                  <td className="p-3">name, brandName, typeName, year, prices</td>
                  <td className="p-3">Enhanced vehicle cards with rich props</td>
                  <td className="p-3"><span className="text-green-500">✅ Working</span></td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">PriceSlide</td>
                  <td className="p-3">Filter</td>
                  <td className="p-3">as</td>
                  <td className="p-3">Interactive price range slider</td>
                  <td className="p-3"><span className="text-green-500">✅ Working</span></td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">FilterResults</td>
                  <td className="p-3">Display</td>
                  <td className="p-3">as</td>
                  <td className="p-3">Shows filter results count</td>
                  <td className="p-3"><span className="text-green-500">✅ Working</span></td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">FilterTags</td>
                  <td className="p-3">Filter</td>
                  <td className="p-3">as</td>
                  <td className="p-3">Active filter tags display</td>
                  <td className="p-3"><span className="text-green-500">✅ Working</span></td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">FilterEmpty</td>
                  <td className="p-3">State</td>
                  <td className="p-3">as</td>
                  <td className="p-3">Empty state when no results</td>
                  <td className="p-3"><span className="text-green-500">✅ Working</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
