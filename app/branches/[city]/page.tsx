import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
    return [
        { city: 'seoul' },
        { city: 'busan' },
        { city: 'gangnam' },
        { city: 'mapo-gu' },
        { city: 'incheon' },
        { city: 'gwangju' },
    ];
}

export const dynamicParams = true;

export default async function BranchPage({ params }: Props) {
    const resolvedParams = await params;
    const { city } = resolvedParams;

    const cityData: Record<string, string> = {
        seoul: 'Seoul',
        busan: 'Busan',
        gangnam: 'Gangnam',
        'mapo-gu': 'Mapo-gu',
        incheon: 'Incheon',
        gwangju: 'Gwangju',
    };

    const name = cityData[city];

    if (!name) {
        notFound();
    }

    // Generate array of 8 images based on naming convention (city1.jpg to city8.jpg)
    // Handle slight naming difference for mapo-gu (mapogu1.jpg)
    const imagePrefix = city === 'mapo-gu' ? 'mapogu' : city;
    const images = Array.from({ length: 8 }, (_, i) => `/images/${imagePrefix}${i + 1}.jpg`);

    return (
        <div className="flex flex-col">
            <section className="bg-primary-900 py-16 text-center text-white">
                <h1 className="mb-2 font-serif text-4xl font-bold text-gold-DEFAULT">{name} Branch</h1>
                <Link href="/branches" className="text-sm text-primary-200 hover:text-white hover:underline">
                    &larr; Back to all branches
                </Link>
            </section>

            <section className="container mx-auto px-4 py-12">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {images.map((img, index) => (
                        <div key={index} className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl">
                            <Image
                                src={img}
                                alt={`${name} gallery ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
