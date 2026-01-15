import React, { useState } from "react";
import Image from "next/image";
import { PROPERTYLISTINGSAMPLE } from "../constants";
import { PropertyProps } from "../interfaces";

const HomePage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PropertyProps[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = PROPERTYLISTINGSAMPLE.filter(
      (property) =>
        property.name.toLowerCase().includes(query.toLowerCase()) ||
        property.address.city.toLowerCase().includes(query.toLowerCase()) ||
        property.address.state.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
          layout="fill"
          objectFit="cover"
          alt="Hero background"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Discover the finest properties available for sale and rent in the world's most desirable neighborhoods.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 w-full max-w-lg">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a city, property, or region..."
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50 text-gray-800"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Search Results */}
      <main className="px-4 py-12 max-w-7xl mx-auto">
        {results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {results.map((property: PropertyProps) => (
              <div
                key={property.name}
                className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={property.image}
                  alt={property.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-bold text-xl mb-2">{property.name}</h2>
                  <p className="text-gray-600 text-sm">
                    {property.address.city}, {property.address.state}
                  </p>
                  <p className="mt-4 font-semibold text-lg text-blue-600">${property.price.toLocaleString()}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">{'★'.repeat(Math.round(property.rating))}</span>
                    <span className="text-gray-500 ml-2">({property.rating})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
         {results.length === 0 && query.length > 0 && (
          <p className="text-center text-gray-500">No properties found.</p>
        )}
      </main>
    </div>
  );
};

export default HomePage;
