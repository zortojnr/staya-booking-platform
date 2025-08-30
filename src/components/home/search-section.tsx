export function SearchSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Stay or Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Search and book hotels, lodges, and travel tickets across Taraba State
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hotel Search */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Book Hotels</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Destination"
                  className="input-field"
                />
                <input
                  type="date"
                  placeholder="Check-in"
                  className="input-field"
                />
                <input
                  type="date"
                  placeholder="Check-out"
                  className="input-field"
                />
                <select className="input-field">
                  <option>2 Guests</option>
                  <option>1 Guest</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
              <button className="w-full btn-primary">Search Hotels</button>
            </div>

            {/* Travel Search */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Book Travel</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="From"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="To"
                  className="input-field"
                />
                <input
                  type="date"
                  placeholder="Departure Date"
                  className="input-field"
                />
                <select className="input-field">
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3 Passengers</option>
                  <option>4+ Passengers</option>
                </select>
              </div>
              <button className="w-full btn-primary">Search Trips</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}