import { useState } from "react";
import PropertyCard from "@/components/properties/PropertyCard";
import { PropertyProps } from "@/interfaces";

const mockProperties: PropertyProps[] = [
  {
    name: 'Modern Apartment in Downtown',
    address: { state: 'CA', city: 'San Francisco', country: 'USA' },
    rating: 4.5,
    category: ['Apartment', 'Modern'],
    price: 150,
    offers: { bed: '1', shower: '1', occupants: '2' },
    image: 'https://via.placeholder.com/300',
    discount: '10% off for a week stay'
  },
  {
    name: 'Cozy Cottage in the Woods',
    address: { state: 'OR', city: 'Portland', country: 'USA' },
    rating: 4.8,
    category: ['Cottage', 'Nature'],
    price: 120,
    offers: { bed: '2', shower: '1', occupants: '4' },
    image: 'https://via.placeholder.com/300',
    discount: ''
  }
];

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>(mockProperties);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.name} property={property} />
      ))}
    </div>
  );
}