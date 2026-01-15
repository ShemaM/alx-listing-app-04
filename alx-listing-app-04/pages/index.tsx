import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/properties/PropertyCard";
import { PropertyProps } from "@/interfaces";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get<PropertyProps[]>("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError("Failed to load properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="container mx-auto px-6 py-10 space-y-6">
      <div className="text-center space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Handpicked stays
        </p>
        <h1 className="text-3xl md:text-4xl font-bold">Find your next escape</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse a curated selection of luxury apartments, villas, and cottages tailored for comfort and style.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
