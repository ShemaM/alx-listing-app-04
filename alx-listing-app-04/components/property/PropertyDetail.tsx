import Image from "next/image";
import ReviewSection from "./ReviewSection";
import { PropertyProps } from "@/interfaces";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-gray-900">{property.name}</h1>
          <p className="text-gray-600">
            {property.address.city}, {property.address.state}, {property.address.country}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1 text-yellow-500 text-lg" aria-label={`Rated ${property.rating} out of 5`}>
            <span>⭐</span>
            <span className="text-gray-800">{property.rating}</span>
          </span>
          <span className="text-xl font-semibold text-gray-900">${property.price}/night</span>
          {property.discount && (
            <span className="text-green-600 text-sm font-medium">Discount: {property.discount}</span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {property.category.map((cat) => (
            <span
              key={cat}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 border rounded-md">
            <p className="text-sm text-gray-500">Beds</p>
            <p className="text-lg font-semibold text-gray-900">{property.offers.bed}</p>
          </div>
          <div className="p-3 border rounded-md">
            <p className="text-sm text-gray-500">Showers</p>
            <p className="text-lg font-semibold text-gray-900">{property.offers.shower}</p>
          </div>
          <div className="p-3 border rounded-md">
            <p className="text-sm text-gray-500">Occupants</p>
            <p className="text-lg font-semibold text-gray-900">{property.offers.occupants}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Reviews</h2>
        <ReviewSection propertyId={property.id} />
      </div>
    </div>
  );
};

export default PropertyDetail;
