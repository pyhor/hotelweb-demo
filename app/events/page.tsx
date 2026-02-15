import Image from 'next/image';

export const metadata = {
  title: 'Events & Happenings | The Haneul Grand',
  description: 'Join us for exclusive events and seasonal celebrations.',
};

export default function EventsPage() {
  const events = [
    {
      title: 'The New Squid Game',
      date: '18 December 2021',
      time: '10:00 AM',
      description: 'Experience a fresh sensation in our real-life New Squid Game event. Not the same as you have seen before!',
      image: '/images/The New Squid Game.gif',
    },
    {
      title: 'Christmas Eve Dinner',
      date: '24 December 2021',
      time: '7:30 PM',
      description: 'Celebrate Christmas Eve with a unique dining experience. Bring your relatives and enjoy the festive spirit.',
      image: '/images/Christmas Eve Dinner.gif',
    },
    {
      title: 'The Dream Christmas Party',
      date: '25 - 26 December 2021',
      time: '5:00 PM - 12:00 PM',
      description: 'A Christmas extravaganza with cuisine, drinks, and amusement. Making this Christmas the happiest ever.',
      image: '/images/The Dream Christmas Party.gif',
    },
    {
      title: 'New Year\'s Countdown Party',
      date: '31 December 2021',
      time: '8:00 PM',
      description: 'Welcome the New Year with us. You are the most sought-after attendee at our bash!',
      image: '/images/NY Countdown Party Holiday.gif',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-primary-900 py-20 text-center text-white">
        <h1 className="mb-4 font-serif text-5xl font-bold text-gold-DEFAULT">Events</h1>
        <p className="text-xl font-light text-primary-100">Make memories with our exclusive gatherings</p>
      </section>

      <section className="container mx-auto max-w-5xl px-4 py-16">
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col gap-8 overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl md:flex-row">
              <div className="relative aspect-video w-full md:w-1/3">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-2 flex flex-wrap gap-4 text-sm font-semibold text-gold-dark">
                  <span>📅 {event.date}</span>
                  <span>⏰ {event.time}</span>
                </div>
                <h3 className="mb-4 font-serif text-2xl font-bold text-primary-900">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm italic text-gray-500">* All events follow SOP. Exclusive to The Haneul Grand guests.</p>
      </section>
    </div>
  );
}