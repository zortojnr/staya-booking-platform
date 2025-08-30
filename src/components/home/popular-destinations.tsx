export function PopularDestinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600">
            Explore the most visited places in Taraba State
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Jalingo', 'Wukari', 'Bali', 'Gembu'].map((city) => (
            <div key={city} className="card overflow-hidden group cursor-pointer">
              <div className="h-32 bg-gradient-to-br from-staya-primary to-staya-secondary group-hover:scale-105 transition-transform duration-300"></div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{city}</h3>
                <p className="text-gray-600 text-sm">Taraba State</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}