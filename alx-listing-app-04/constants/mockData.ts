import { PropertyProps, ReviewProps } from "@/interfaces";

export const mockProperties: PropertyProps[] = [
  {
    id: '1',
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
    id: '2',
    name: 'Cozy Cottage in the Woods',
    address: { state: 'OR', city: 'Portland', country: 'USA' },
    rating: 4.8,
    category: ['Cottage', 'Nature'],
    price: 120,
    offers: { bed: '2', shower: '1', occupants: '4' },
    image: 'https://via.placeholder.com/300',
    discount: ''
  },
  {
    id: '3',
    name: 'Luxury Villa with a Pool',
    address: { state: 'FL', city: 'Miami', country: 'USA' },
    rating: 4.9,
    category: ['Villa', 'Luxury'],
    price: 500,
    offers: { bed: '4', shower: '3', occupants: '8' },
    image: 'https://via.placeholder.com/300',
    discount: '15% off for a month stay'
  }
];

export const mockReviews: ReviewProps[] = [
  {
    id: 'r1',
    propertyId: '1',
    comment: 'Great place, very clean and modern!',
    rating: 5,
    user: 'Alice'
  },
  {
    id: 'r2',
    propertyId: '1',
    comment: 'Good location, but a bit noisy at night.',
    rating: 3,
    user: 'Bob'
  },
  {
    id: 'r3',
    propertyId: '2',
    comment: 'Absolutely loved the cottage! So peaceful.',
    rating: 5,
    user: 'Charlie'
  },
  {
    id: 'r4',
    propertyId: '2',
    comment: 'Beautiful surroundings, but the bed was a bit uncomfortable.',
    rating: 4,
    user: 'David'
  },
  {
    id: 'r5',
    propertyId: '3',
    comment: 'Amazing villa, worth every penny!',
    rating: 5,
    user: 'Eve'
  },
  {
    id: 'r6',
    propertyId: '3',
    comment: 'Fantastic pool, but the service could be better.',
    rating: 4,
    user: 'Frank'
  }
];

