import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function WelcomeMember() {
  return (
    <Layout title="OJINGEO HOTEL - Welcome Member" pageId="Welcome Member">
      <Head>
        <link href="/css/style1.scss" rel="stylesheet" />
      </Head>

      <div className="text-center p-12">
        <h1 className="text-hotel-gold text-5xl">🎉 Welcome to Ojingeo Hotel! 🎉</h1>
        <h2 className="text-hotel-dark mt-8">Congratulations!</h2>
        <p className="text-xl my-5">
          You have successfully become a member of Ojingeo Hotel family.
        </p>
        <p className="text-lg my-5">
          You can now enjoy all the exclusive benefits including:
        </p>
        <ul className="text-left inline-block text-lg">
          <li>10% discount on all room bookings</li>
          <li>5% discount on facility bookings</li>
          <li>5% discount on dining deals</li>
          <li>Free parking</li>
          <li>Priority booking for events</li>
        </ul>
        
        <div className="mt-10">
          <Link href="/" className="bg-hotel-dark text-white px-8 py-4 no-underline rounded text-lg hover:bg-opacity-80">
            Return to Home
          </Link>
        </div>
        
        <div className="mt-8">
          <img src="/images/logocrop.jpeg" alt="Ojingeo Hotel Logo" className="w-25" />
        </div>
      </div>
    </Layout>
  );
}