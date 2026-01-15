const CancellationPolicy = () => (
    <div className="mt-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Cancellation Policy</h3>
        <p className="text-gray-600">
          Free cancellation before <span className="font-semibold">Aug 23</span>. Cancel before check-in on <span className="font-semibold">Aug 24</span> for a partial refund.
        </p>
      </div>
      
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Ground Rules</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Follow the house rules
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Treat your Host’s home like your own
          </li>
        </ul>
      </div>
    </div>
  );
  
  export default CancellationPolicy;