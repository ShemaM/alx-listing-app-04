export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface ReviewProps {
  id: string;
  propertyId: string;
  comment: string;
  rating: number;
  user: string;
}

export interface PropertyProps {
  id: string;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}