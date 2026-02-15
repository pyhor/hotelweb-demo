export const metadata = {
  title: 'Hotel Policy | The Haneul Grand',
  description: 'Terms and conditions for your stay at The Haneul Grand.',
};

export default function PolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary-900 py-20 text-center text-white">
        <h1 className="mb-4 font-serif text-5xl font-bold text-gold-DEFAULT">Hotel Policy</h1>
        <p className="text-xl font-light text-primary-100">Terms & Conditions</p>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-2xl bg-white p-8 shadow-lg md:p-12">
          <h2 className="mb-8 font-serif text-2xl font-bold text-primary-900">General Terms</h2>
          <div className="space-y-6 text-gray-700">
            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="mb-2 font-bold text-gold-dark">1. Check in</h3>
              <p>Please present your ID card, Passport or Temporary Residence Card upon Check-in. By Law visitors must present personal documents for hotel records.</p>
            </div>

            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="mb-2 font-bold text-gold-dark">2. Check out</h3>
              <p>Please vacate your room by the specified check-out time. Late check-out depends on availability and may incur charges.</p>
            </div>

            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="mb-2 font-bold text-gold-dark">3. Guest&apos;s belongings</h3>
              <p>Guests are requested to lock their rooms. Electronic safes are provided. The management is not responsible for loss or damage to belongings.</p>
            </div>

            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="mb-2 font-bold text-gold-dark">4. No smoking and no cooking</h3>
              <p>Smoking and cooking are strictly prohibited in suites. A charge of RM 500 will be imposed for violations.</p>
            </div>

            <div className="rounded-lg bg-primary-50 p-6">
              <h3 className="mb-2 font-bold text-gold-dark">5. SOP Rules</h3>
              <ul className="ml-5 list-disc space-y-2">
                <li>Guests are encouraged to wear face masks in indoor premises.</li>
                <li>Temperature screening at all entrances.</li>
                <li>Physical distancing observed at all times.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}