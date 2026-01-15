import React from 'react';
import Image from 'next/image';
import { PropertyProps } from '../../interfaces';

interface PropertyCardComponentProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardComponentProps> = ({ property }) => {
  return (
    <div className="border rounded-lg shadow-md bg-white overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Image src={property.image} alt={property.name} width={400} height={192} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{property.name}</h3>
        <p className="text-gray-600">{property.address.city}, {property.address.country}</p>
        <p className="text-gray-800 font-bold mt-2">${property.price}/night</p>
        <div className="flex items-center mt-2">
            <span className="text-yellow-500">⭐</span>
            <span className="ml-1 text-gray-700">{property.rating}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
            {property.category.map((cat) => (
                <span key={cat} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {cat}
                </span>
            ))}
        </div>
        {property.discount && (
            <p className="text-green-600 text-sm mt-1">Discount: {property.discount}</p>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
