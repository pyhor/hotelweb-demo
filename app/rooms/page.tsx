import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Luxury Rooms & Suites | The Haneul Grand',
  description: 'Explore our range of comfortable rooms and luxury suites.',
};

export default function RoomsPage() {
  const rooms = [
    {
      id: 'mini-suite',
      name: 'Mini Suite',
      description: 'Elegant suite with separate living area, perfect for couples or business travelers.',
      price: 'From $250',
      image: '/images/minisuite1.jpg',
    },
    {
      id: 'luxury-double-suite',
      name: 'Luxury Double Suite',
      description: 'Our finest accommodation with two bedrooms and full amenities for families.',
      price: 'From $500',
      image: '/images/luxurydoublesuite1.jpg',
    },
    {
      id: 'premium-suite',
      name: 'Premium Suite',
      description: 'Luxury suite with panoramic views and exclusive services for a VIP experience.',
      price: 'From $350',
      image: '/images/premiumsuite1.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary-900 py-20 text-center text-white">
        <h1 className="mb-4 font-serif text-5xl font-bold text-gold-DEFAULT">Our Accommodations</h1>
        <p className="text-xl font-light text-primary-100">Designed for comfort, styled for luxury</p>
      </section>

      {/* Rooms Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div key={room.id} className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-primary-900">{room.name}</h3>
                  <span className="text-sm font-semibold text-gold-dark">{room.price}</span>
                </div>
                <p className="mb-6 flex-1 text-gray-600">{room.description}</p>
                <Link
                  href={`/rooms/${room.id}`}
                  className="block w-full rounded-lg border-2 border-gold-DEFAULT py-3 text-center font-medium text-gold-dark transition-colors hover:bg-gold-DEFAULT hover:text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}