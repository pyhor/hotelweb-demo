export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-primary-50">
            <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-gold-DEFAULT border-t-transparent"></div>
                <p className="font-serif text-lg text-primary-900">Loading Branch Details...</p>
            </div>
        </div>
    );
}
