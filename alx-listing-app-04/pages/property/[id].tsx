import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import { PropertyProps } from "@/interfaces";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      const propertyId = typeof id === "string" ? id : id[0];
      try {
        const response = await axios.get<PropertyProps>(`/api/properties/${propertyId}`);
        setProperty(response.data);
      } catch (err) {
        console.error("Error fetching property details:", err);
        setError("Failed to load property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p role="status" aria-live="polite">Loading...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  if (!property) {
    return <p role="alert">Property not found</p>;
  }

  return <PropertyDetail property={property} />;
}
