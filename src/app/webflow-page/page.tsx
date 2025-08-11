'use client';

import React from 'react';
import { Navbar } from '@/devlink/Navbar';
import { Hero } from '@/devlink/Hero';
import { MainFilterBlock1 } from '@/devlink/MainFilterBlock1';
import { MainFilterBlockHeader } from '@/devlink/MainFilterBlockHeader';
import { MainFilterList } from '@/devlink/MainFilterList';
import { MainFilterResults } from '@/devlink/MainFilterResults';
import { MainFilterTags } from '@/devlink/MainFilterTags';
import { MainFilterEmpty } from '@/devlink/MainFilterEmpty';
import { MainCardComponent } from '@/devlink/MainCardComponent';
import { CardComponents } from '@/devlink/CardComponents';
import { ActiveCard } from '@/devlink/ActiveCard';
import { FilterResults } from '@/devlink/FilterResults';
import { FilterTags } from '@/devlink/FilterTags';
import { FilterEmpty } from '@/devlink/FilterEmpty';
import { PriceSlide } from '@/devlink/PriceSlide';
import { Types } from '@/devlink/Types';
import { Year } from '@/devlink/Year';
import { Makes } from '@/devlink/Makes';
import { Mileage } from '@/devlink/Mileage';
import { Footer2 } from '@/devlink/Footer2';

export default function WebflowPageReplication() {
  return (
    <div className="webflow-page-container">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <Hero />
      </section>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="container mx-auto px-4 py-8">
          
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🚗 Complete Webflow Page as Local Component
            </h1>
            <p className="text-lg text-gray-600">
              This page replicates your Webflow site structure using synced DevLink components
            </p>
          </div>

          {/* Filter Section */}
          <section className="filter-section mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Filter System</h2>
              
              {/* Main Filter Block */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                <div className="filter-column">
                  <h3 className="text-lg font-medium mb-4 text-gray-700">Main Filter Block</h3>
                  <MainFilterBlock1 />
                  <MainFilterBlockHeader />
                  <MainFilterList />
                </div>

                <div className="filter-column">
                  <h3 className="text-lg font-medium mb-4 text-gray-700">Filter Controls</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Vehicle Type</label>
                      <Types />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Year</label>
                      <Year />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Make</label>
                      <Makes />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Mileage</label>
                      <Mileage />
                    </div>
                  </div>
                </div>

                <div className="filter-column">
                  <h3 className="text-lg font-medium mb-4 text-gray-700">Price Filter</h3>
                  <PriceSlide />
                </div>

                <div className="filter-column">
                  <h3 className="text-lg font-medium mb-4 text-gray-700">Filter Results</h3>
                  <MainFilterResults />
                  <MainFilterTags />
                  <MainFilterEmpty />
                </div>
              </div>

              {/* New Filter Components */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gray-700">Filter Results (New)</h3>
                  <FilterResults />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gray-700">Filter Tags (New)</h3>
                  <FilterTags />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gray-700">Filter Empty (New)</h3>
                  <FilterEmpty />
                </div>
              </div>
            </div>
          </section>

          {/* Vehicle Cards Section */}
          <section className="cards-section mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Vehicle Cards</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Main Card Component */}
                <div className="card-demo">
                  <h3 className="text-lg font-medium mb-4 text-gray-700">Main Card Component</h3>
                  <MainCardComponent />
                </div>

                {/* Card Components (New) */}
                <div className="card-demo">
                  <h3 className="text-lg font-medium mb-4 text-gray-700">Card Components (New)</h3>
                  <CardComponents />
                </div>

                {/* Active Card */}
                <div className="card-demo">
                  <h3 className="text-lg font-medium mb-4 text-gray-700">Active Card</h3>
                  <ActiveCard />
                </div>
              </div>
            </div>
          </section>

          {/* Component Status Grid */}
          <section className="status-section mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Component Status Dashboard</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
                {/* Filter Components */}
                <div className="status-card bg-green-50 p-3 rounded-lg">
                  <div className="text-green-600 font-semibold">✅ MainFilterBlock1</div>
                  <div className="text-gray-600">Synced</div>
                </div>
                <div className="status-card bg-green-50 p-3 rounded-lg">
                  <div className="text-green-600 font-semibold">✅ FilterResults</div>
                  <div className="text-gray-600">New Component</div>
                </div>
                <div className="status-card bg-green-50 p-3 rounded-lg">
                  <div className="text-green-600 font-semibold">✅ FilterTags</div>
                  <div className="text-gray-600">New Component</div>
                </div>
                <div className="status-card bg-green-50 p-3 rounded-lg">
                  <div className="text-green-600 font-semibold">✅ PriceSlide</div>
                  <div className="text-gray-600">New Component</div>
                </div>
                <div className="status-card bg-green-50 p-3 rounded-lg">
                  <div className="text-green-600 font-semibold">✅ Makes</div>
                  <div className="text-gray-600">Now Available</div>
                </div>
                <div className="status-card bg-green-50 p-3 rounded-lg">
                  <div className="text-green-600 font-semibold">✅ CardComponents</div>
                  <div className="text-gray-600">New Component</div>
                </div>

                {/* Control Components */}
                <div className="status-card bg-blue-50 p-3 rounded-lg">
                  <div className="text-blue-600 font-semibold">🔧 Types</div>
                  <div className="text-gray-600">Control</div>
                </div>
                <div className="status-card bg-blue-50 p-3 rounded-lg">
                  <div className="text-blue-600 font-semibold">🔧 Year</div>
                  <div className="text-gray-600">Control</div>
                </div>
                <div className="status-card bg-blue-50 p-3 rounded-lg">
                  <div className="text-blue-600 font-semibold">🔧 Mileage</div>
                  <div className="text-gray-600">Control</div>
                </div>
                <div className="status-card bg-blue-50 p-3 rounded-lg">
                  <div className="text-blue-600 font-semibold">🔧 Navbar</div>
                  <div className="text-gray-600">Navigation</div>
                </div>
                <div className="status-card bg-blue-50 p-3 rounded-lg">
                  <div className="text-blue-600 font-semibold">🔧 Hero</div>
                  <div className="text-gray-600">Hero Section</div>
                </div>
                <div className="status-card bg-blue-50 p-3 rounded-lg">
                  <div className="text-blue-600 font-semibold">🔧 Footer2</div>
                  <div className="text-gray-600">Footer</div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Information */}
          <section className="tech-info mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">🛠️ Technical Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-700">🔄 Latest Sync Results</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• ✅ DevLink sync completed successfully</li>
                    <li>• ✅ 160+ components synced from Webflow</li>
                    <li>• ✅ TypeScript definitions generated</li>
                    <li>• ✅ CSS modules preserved</li>
                    <li>• ✅ Server running on localhost:3002</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-700">🆕 New Components Detected</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 🆕 <code>CardComponents</code> - Enhanced card system</li>
                    <li>• 🆕 <code>FilterResults</code> - Filter result display</li>
                    <li>• 🆕 <code>FilterTags</code> - Active filter tags</li>
                    <li>• 🆕 <code>FilterEmpty</code> - Empty state handler</li>
                    <li>• 🆕 <code>PriceSlide</code> - Price range slider</li>
                    <li>• 🆕 <code>Makes</code> - Vehicle make selector</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <h3 className="text-lg font-medium mb-3 text-gray-700">📱 Access Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Local Development:</strong><br/>
                    <a href="http://localhost:3002" className="text-blue-600 hover:underline">
                      http://localhost:3002
                    </a>
                  </div>
                  <div>
                    <strong>Filter Test Page:</strong><br/>
                    <a href="http://localhost:3002/filter-test" className="text-blue-600 hover:underline">
                      /filter-test
                    </a>
                  </div>
                  <div>
                    <strong>This Page:</strong><br/>
                    <a href="http://localhost:3002/webflow-page" className="text-blue-600 hover:underline">
                      /webflow-page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer2 />
    </div>
  );
}
