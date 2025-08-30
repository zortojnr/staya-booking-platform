export function FeaturedHotels() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Hotels in Taraba State
          </h2>
          <p className="text-xl text-gray-600">
            Discover our handpicked selection of premium accommodations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-staya-primary to-staya-secondary"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Premium Hotel {i}</h3>
                <p className="text-gray-600 mb-4">Jalingo, Taraba State</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-staya-primary">₦15,000</span>
                  <span className="text-gray-500">per night</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}