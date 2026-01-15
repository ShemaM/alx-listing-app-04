import type { NextApiRequest, NextApiResponse } from 'next';
import { mockReviews } from '../../../../constants/mockData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const propertyReviews = mockReviews.filter(review => review.propertyId === id);
    if (propertyReviews.length > 0) {
      res.status(200).json(propertyReviews);
    } else {
      res.status(404).json({ message: `Reviews for property with ID ${id} not found.` });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
