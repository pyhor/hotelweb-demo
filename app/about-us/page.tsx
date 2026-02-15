import Image from 'next/image';

export const metadata = {
    title: 'About Us | The Haneul Grand',
    description: 'Learn about the history and mission of The Haneul Grand.',
};

export default function AboutUsPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative flex h-[50vh] w-full items-center justify-center overflow-hidden bg-primary-950">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/layout/background.png"
                        alt="The Haneul Grand Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="mb-4 animate-fade-in font-serif text-5xl font-bold md:text-6xl">
                        About <span className="text-gold-DEFAULT">Us</span>
                    </h1>
                    <p className="animate-slide-up text-lg font-light text-primary-100 md:text-xl">
                        Our journey of hospitality and excellence
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="mb-12 text-center">
                        <h2 className="mb-6 font-serif text-3xl font-bold text-primary-900 md:text-4xl">Introduction</h2>
                        <div className="mx-automb-8 h-1 w-24 bg-gold-DEFAULT"></div>
                    </div>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                        <p>
                            The Haneul Grand is a 4-star hotel located in South Korea. It was established in 2 April 2016.
                            We have our main headquarters located in Seoul and 5 other branches in Busan, Gangnam, Mapo-gu, Incheon and Gwangju.
                            Our hotels are situated near popular tourist attractions such as Bukchon Hanok Village in Seoul,
                            Chinatown in Incheon and Asia Culture Center in Gwangju, which allows for tourists to enjoy their
                            overall experience in our hotels while also enjoying their trips.
                        </p>
                        <p>
                            While being fairly new in terms of establishment date, we are extremely dedicated to preaching and
                            practicing strong beliefs and systems to diversify our hotels, and we believe we are making the
                            world a better place through our services, one customer at a time.
                        </p>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="bg-primary-50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="mb-6 font-serif text-3xl font-bold text-primary-900 md:text-4xl">Our History</h2>
                        <p className="font-serif italic text-gold-dark text-xl">We Strive, You Thrive</p>
                    </div>

                    <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-xl">
                        <table className="w-full text-left">
                            <thead className="bg-primary-900 text-white">
                                <tr>
                                    <th className="px-6 py-4 font-serif text-lg font-semibold">Date</th>
                                    <th className="px-6 py-4 font-serif text-lg font-semibold">Milestone</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-primary-100">
                                {[
                                    { date: '2 April 2016', event: 'Opened up first hotel in Seoul' },
                                    { date: '10 September 2016', event: 'Received sponsorships from TARC' },
                                    { date: '22 December 2016', event: 'Signed partnership deals with tvN and JTBC' },
                                    { date: '15 May 2017', event: 'Branching Announcements' },
                                    { date: '11 December 2017', event: 'Renovation and Reopening of first hotel in Seoul' },
                                    { date: '24 February 2018', event: 'Grand Opening of Busan branch hotel' },
                                    { date: '29 October 2018', event: 'Grand Opening of Gangnam branch hotel' },
                                    { date: '28 May 2019', event: 'Grand Opening of Mapo-gu branch hotel' },
                                    { date: '13 November 2019', event: 'Grand Opening of Incheon branch hotel' },
                                    { date: '13 April 2020', event: 'Grand Opening of Gwangju branch hotel' },
                                ].map((item, index) => (
                                    <tr key={index} className="transition-colors hover:bg-primary-50">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium text-gold-dark">{item.date}</td>
                                        <td className="px-6 py-4 text-gray-700">{item.event}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Videos Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 md:grid-cols-2">
                        {/* Walkthrough Video */}
                        <div className="space-y-4">
                            <h3 className="font-serif text-2xl font-bold text-primary-900">Walkthrough</h3>
                            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                                <iframe
                                    className="h-full w-full"
                                    src="https://www.youtube.com/embed/NJRxPx3q3r4"
                                    title="Hotel Walkthrough"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* Fine Dining Video */}
                        <div className="space-y-4">
                            <h3 className="font-serif text-2xl font-bold text-primary-900">Fine Dining</h3>
                            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                                <iframe
                                    className="h-full w-full"
                                    src="https://www.youtube.com/embed/HJl3x8Knei0"
                                    title="Fine Dining Experience"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
