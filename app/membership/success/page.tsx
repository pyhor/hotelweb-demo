import Link from 'next/link';

export default function MembershipSuccessPage() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-primary-50 px-4 text-center">
            <div className="max-w-md rounded-2xl bg-white p-12 shadow-xl">
                <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-DEFAULT text-white">
                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    </div>
                </div>
                <h1 className="mb-4 font-serif text-3xl font-bold text-primary-900">Welcome to the Club!</h1>
                <p className="mb-8 text-gray-600">
                    Your membership application has been received. You are now a valued member of Ojingeo Hotel. Enjoy your exclusive benefits!
                </p>
                <Link
                    href="/"
                    className="inline-block w-full rounded-lg bg-primary-900 py-3 font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
                >
                    Start Exploring
                </Link>
            </div>
        </div>
    );
}
