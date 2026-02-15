import Link from 'next/link';

export const metadata = {
    title: 'Booking Confirmed | The Haneul Grand',
    description: 'Your booking has been received successfully.',
};

export default function BookingConfirmationPage() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-primary-50 px-4 text-center">
            <div className="max-w-md rounded-2xl bg-white p-12 shadow-xl">
                <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
                <h1 className="mb-4 font-serif text-3xl font-bold text-primary-900">Booking Received!</h1>
                <p className="mb-8 text-gray-600">
                    Your reservation was successful. Thank you for choosing The Haneul Grand. We look forward to welcoming you!
                </p>
                <Link
                    href="/"
                    className="inline-block w-full rounded-lg bg-gold-DEFAULT py-3 font-semibold text-white transition-all hover:bg-gold-dark hover:shadow-lg"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
