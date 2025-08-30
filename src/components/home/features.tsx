import { ShieldCheckIcon, ClockIcon, CreditCardIcon, PhoneIcon } from '@heroicons/react/24/outline'

export function Features() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Secure Booking',
      description: 'Your bookings are protected with bank-level security and instant confirmations.'
    },
    {
      icon: ClockIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support via WhatsApp, SMS, and phone calls.'
    },
    {
      icon: CreditCardIcon,
      title: 'Easy Payments',
      description: 'Multiple payment options including cards, bank transfers, and mobile money.'
    },
    {
      icon: PhoneIcon,
      title: 'Instant Notifications',
      description: 'Get real-time updates on your bookings via WhatsApp and SMS.'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Staya?
          </h2>
          <p className="text-xl text-gray-600">
            Experience the best booking platform designed for Taraba State
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-staya-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-staya-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}