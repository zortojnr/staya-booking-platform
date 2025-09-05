import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  }

  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon - Using the luggage/travel icon from your design */}
      <div className={`${sizeClasses[size]} bg-staya-primary rounded-lg flex items-center justify-center relative overflow-hidden`}>
        {/* Luggage Icon SVG based on your logo */}
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* Luggage body */}
          <rect x="7" y="9" width="10" height="10" rx="2" ry="2" strokeWidth="1.5" fill="currentColor"/>
          {/* Handle */}
          <rect x="9.5" y="5" width="5" height="4" rx="1" ry="1" strokeWidth="1.5" fill="none"/>
          {/* Wheels */}
          <circle cx="9" cy="20.5" r="0.8" fill="currentColor"/>
          <circle cx="15" cy="20.5" r="0.8" fill="currentColor"/>
          {/* Orbital ring - inspired by your logo */}
          <ellipse cx="12" cy="14" rx="7" ry="2.5" strokeWidth="1.2" fill="none" opacity="0.8"/>
          {/* Additional orbital element */}
          <path d="M5 12 Q12 8 19 12" strokeWidth="1" fill="none" opacity="0.6"/>
        </svg>
      </div>
      
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold text-gradient`}>
          STAYA
        </span>
      )}
    </Link>
  )
}

// Alternative version using your actual logo image
export function LogoImage({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10', 
    lg: 'w-16 h-16'
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <Image
          src="/images/staya-logo.png"
          alt="Staya Bookings Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  )
}
