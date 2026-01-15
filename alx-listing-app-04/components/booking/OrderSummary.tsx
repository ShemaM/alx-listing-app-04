import Image from 'next/image';
import CancellationPolicy from './CancellationPolicy';

type BookingDetails = {
  propertyName: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
};

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => (
  <div className="bg-white p-8 shadow-lg rounded-xl">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Order Summary</h2>
    
    <div className="flex items-center space-x-4 mb-6">
      <div className="w-32 h-32 relative">
        <Image 
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
          alt={bookingDetails.propertyName} 
          layout="fill"
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{bookingDetails.propertyName}</h3>
        <p className="text-md text-gray-500">4.76 (345 reviews)</p>
        <p className="text-md text-gray-500">{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="space-y-4 text-lg">
      <div className="flex justify-between text-gray-600">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee.toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-gray-600">
        <p>Subtotal</p>
        <p>${bookingDetails.price.toFixed(2)}</p>
      </div>
      <div className="border-t border-gray-200 my-4"></div>
      <div className="flex justify-between font-bold text-xl text-gray-800">
        <p>Grand Total</p>
        <p>${(bookingDetails.bookingFee + bookingDetails.price).toFixed(2)}</p>
      </div>
    </div>
    
    <CancellationPolicy />
  </div>
);

export default OrderSummary;