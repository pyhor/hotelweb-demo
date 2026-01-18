import Image from 'next/image';

export const metadata = {
  title: 'Facilities & Amenities | Ojingeo Hotel',
  description: 'Discover our world-class facilities including fine dining, pools, and fitness centers.',
};

export default function FacilitiesPage() {
  const facilities = [
    {
      id: 'fine-dining',
      title: 'Fine Dining',
      description: 'AAALLURING is a famous fine dining franchise partnered with our hotel. We offer South Korean cuisine including vegetables, seafood, and meats, as well as a wide selection of international dishes. Our menus focus on health benefits and deliciousness.',
      image: '/images/fine_dining1.jpg',
      location: 'Level 11',
      schedule: {
        cols: ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        rows: [
          { label: 'Opening', values: ['7:30 A.M.', '7:30 A.M.', '7:30 A.M.', '7:30 A.M.', '7:30 A.M.', '6:00 A.M.', '6:00 A.M.'] },
          { label: 'Closing', values: ['9:30 P.M.', '9:30 P.M.', '9:30 P.M.', '9:30 P.M.', '9:30 P.M.', '11:00 P.M.', '11:00 P.M.'] },
        ],
        footer: 'Open during Public Holidays',
      },
    },
    {
      id: 'fitness-centre',
      title: 'Iron House Fitness Centre',
      description: 'Our fitness centre features various themes depending on the day to maximize your gym experience. Each centre measures 1500 sq ft and is equipped with a full set of equipment.',
      image: '/images/fitness_centre1.jpg',
      location: 'Level 7',
      schedule: {
        cols: ['Theme', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        rows: [
          { label: 'Theme', values: ['Iron Man', 'Cpt America', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow', 'MARVEL'] },
          { label: 'Extra Class', values: ['Cardio', 'Cardio', 'Yoga', 'Yoga', 'Calisthenics', 'Calisthenics', '-'] }
        ],
        footer: 'Operating Hours: 9:00 A.M. - 8:00 P.M.',
      },
    },
    {
      id: 'pool-area',
      title: 'Pool Area',
      description: 'Relax and socialize at our pools, divided into Adult (6ft deep) and Children (3.5ft deep) zones. Lifeguards are always on duty for your safety.',
      image: '/images/pool1.jpg',
      location: 'Level 3',
      schedule: {
        cols: ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        rows: [
          { label: 'Opening', values: ['8:00 A.M.', '8:00 A.M.', '8:00 A.M.', '8:00 A.M.', '8:00 A.M.', '10:00 A.M.', '10:00 A.M.'] },
          { label: 'Closing', values: ['8:00 P.M.', '8:00 P.M.', '8:00 P.M.', '8:00 P.M.', '8:00 P.M.', '9:00 P.M.', '9:00 P.M.'] },
        ],
        footer: 'Daily Sanitation Time: 2:00 P.M. - 3:00 P.M.',
      },
    },
    {
      id: 'mini-bar',
      title: 'Dahlia Mini Bar',
      description: 'Serving various beverages in Alcoholic and Non-Alcoholic sections. Sponsored by famous brands, we offer a 15% discount on scheduled beverages.',
      image: '/images/mini _bar1.jpg',
      location: 'Level 19',
      schedule: {
        cols: ['Brand', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        rows: [
          { label: 'Featured', values: ['Coca Cola', 'Pepsico', 'Gatorade', 'Heineken', 'GoodDay', 'Hennessy', 'Jack Daniels'] },
        ],
        footer: 'Daily Sanitation: 2:00 P.M. - 3:00 P.M.',
      },
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary-900 py-20 text-center text-white">
        <h1 className="mb-4 font-serif text-5xl font-bold text-gold-DEFAULT">Facilities & Amenities</h1>
        <p className="text-xl font-light text-primary-100">Experience world-class services at your fingertips</p>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="space-y-24">
          {facilities.map((facility, index) => (
            <div key={facility.id} className={`flex flex-col gap-12 lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className="flex-1">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-primary-900">{facility.title}</h2>
                  <p className="font-medium text-gold-dark">{facility.location}</p>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">{facility.description}</p>

                {/* Table */}
                <div className="overflow-hidden rounded-lg border border-primary-200 bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-center text-sm">
                      <thead className="bg-primary-50 text-primary-900">
                        <tr>
                          {facility.schedule.cols.map((col, idx) => (
                            <th key={idx} className="whitespace-nowrap px-4 py-3 font-semibold">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-primary-100">
                        {facility.schedule.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-primary-50/50">
                            <td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">{row.label}</td>
                            {row.values.map((val, vIdx) => (
                              <td key={vIdx} className="whitespace-nowrap px-4 py-3 text-gray-600">{val}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={8} className="bg-primary-900 px-4 py-2 text-center text-xs text-white">
                            {facility.schedule.footer}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parking Section (Separate due to different structure) */}
      <section className="bg-primary-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-primary-900">Parking Services</h2>
          <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">
            <div className="mb-8 flex flex-col gap-8 md:flex-row">
              <div className="flex-1 space-y-4">
                <p className="text-gray-700">
                  Our parking area spans 4 floors (B1-B4). Please approach the Front Desk for parking assignment upon arrival.
                  Valet parking is available on scheduled days.
                </p>
                <p className="font-bold text-primary-900">Cost: ₩36,301 per 24 hours</p>
                <p className="text-sm text-gray-500">*Free for Suite guests</p>
              </div>
              <div className="relative h-48 flex-1 overflow-hidden rounded-lg">
                <Image src="/images/parking1.jpg" alt="Parking" fill className="object-cover" />
              </div>
            </div>

            <h3 className="mb-4 font-serif text-xl font-bold text-primary-900">Valet Schedule</h3>
            <div className="overflow-x-auto rounded-lg border border-primary-200">
              <table className="w-full text-center text-sm">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-4 py-2">Mon</th>
                    <th className="px-4 py-2">Tue</th>
                    <th className="px-4 py-2">Wed</th>
                    <th className="px-4 py-2">Thu</th>
                    <th className="px-4 py-2">Fri</th>
                    <th className="px-4 py-2">Sat</th>
                    <th className="px-4 py-2">Sun</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 text-green-600 font-bold">✓</td>
                    <td className="px-4 py-2 text-gray-300">-</td>
                    <td className="px-4 py-2 text-gray-300">-</td>
                    <td className="px-4 py-2 text-gray-300">-</td>
                    <td className="px-4 py-2 text-green-600 font-bold">✓</td>
                    <td className="px-4 py-2 text-green-600 font-bold">✓</td>
                    <td className="px-4 py-2 text-green-600 font-bold">✓</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={7} className="bg-primary-900 px-4 py-2 text-center text-xs text-white">
                      Break Hours: 11:00 A.M. - 1:00 P.M.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}