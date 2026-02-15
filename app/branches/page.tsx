import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Our Branches | The Haneul Grand',
  description: 'Visit our luxury hotels across South Korea.',
};

export default function BranchesPage() {
  const branches = [
    { id: 'seoul', name: 'Seoul', image: '/images/seoul1.jpg' },
    { id: 'busan', name: 'Busan', image: '/images/busan1.jpg' },
    { id: 'gangnam', name: 'Gangnam', image: '/images/gangnam1.jpg' },
    { id: 'mapo-gu', name: 'Mapo-gu', image: '/images/mapogu1.jpg' },
    { id: 'incheon', name: 'Incheon', image: '/images/incheon1.jpg' },
    { id: 'gwangju', name: 'Gwangju', image: '/images/gwangju1.jpg' },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-primary-900 py-20 text-center text-white">
        <h1 className="mb-4 font-serif text-5xl font-bold text-gold-DEFAULT">Our Locations</h1>
        <p className="text-xl font-light text-primary-100">Luxury hospitality across Korea</p>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => (
            <Link key={branch.id} href={`/branches/${branch.id}`} className="group block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/10"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="font-serif text-2xl font-bold text-white">{branch.name}</h3>
                  <p className="text-gold-DEFAULT">Explore Branch &rarr;</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}