export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real experiences from travelers across Taraba State
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-staya-primary rounded-full flex items-center justify-center text-white font-bold">
                  U{i}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Customer {i}</h4>
                  <p className="text-gray-600 text-sm">Verified Traveler</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Excellent service! Booking was seamless and the hotel was exactly as described.
                Highly recommend Staya for anyone traveling in Taraba State."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}