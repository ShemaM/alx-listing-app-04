import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const requiredFields: (keyof typeof formData)[] = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "cardNumber",
      "expirationDate",
      "cvv",
      "billingAddress",
    ];

    const missingField = requiredFields.find((field) => !formData[field].trim());
    if (missingField) {
      const friendlyNames: Record<keyof typeof formData, string> = {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phoneNumber: "Phone Number",
        cardNumber: "Card Number",
        expirationDate: "Expiration Date",
        cvv: "CVV",
        billingAddress: "Billing Address",
        city: "City",
        state: "State / Province",
        postalCode: "ZIP / Postal Code",
        country: "Country",
      };
      setError(`${friendlyNames[missingField]} is required.`);
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/bookings", formData);
      setSuccess("Booking confirmed!");
    } catch (err) {
      const message = axios.isAxiosError(err)
        ? err.response?.data?.message || err.message
        : err instanceof Error
          ? err.message
          : "Unknown error";
      console.error("Failed to submit booking:", message, err);
      setError("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Confirm Your Booking</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Contact Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Payment Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="•••• •••• •••• ••••"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                inputMode="numeric"
                autoComplete="cc-number"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Expiration Date</label>
                <input
                  type="text"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  placeholder="MM / YY"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  autoComplete="cc-exp"
                  inputMode="numeric"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="3-4 digits"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  maxLength={4}
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Billing Address */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Billing Address</h3>
          <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-600">Street Address</label>
                <input
                  type="text"
                  name="billingAddress"
                  value={formData.billingAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-600">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600">State / Province</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-600">ZIP / Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-colors disabled:opacity-50"
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
      </form>
    </div>
  );
};
  
export default BookingForm;
