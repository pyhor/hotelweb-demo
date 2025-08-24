import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function Booking() {
  const router = useRouter();

  const handleBookNow = () => {
    router.push('/booking-form');
  };

  return (
    <Layout title="Ojingeo Hotel - Booking" pageId="Booking">
      <Head>
        <link href="/css/booking.css" rel="stylesheet" />
      </Head>

      <br />
      <table className="w-full">
        <thead>
          <tr>
            <th className="bg-hotel-dark text-white border border-white">ROOM DETAILS</th>
            <th className="bg-hotel-dark text-white border border-white">PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="/images/minisuite1.jpg" alt="" className="w-[500px] h-[300px] float-left border border-black" />
              <p>
                <br />&#9658; 1 single bed<br />&#9658; 1 pillow and blanket<br />&#9658; 1 bathroom<br />&#9658; 1 television<br />&#9658; air-condition<br />&#9658; free wifi<br />&#9658; free parking<br />
              </p>
            </td>
            <td className="text-center">
              <p>RM 400 per night</p><br />
              <button className="bg-hotel-dark text-white px-4 py-2 rounded hover:bg-opacity-80" onClick={handleBookNow}>BOOK NOW!</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/images/luxurydoublesuite1.jpg" alt="" className="w-[500px] h-[300px] float-left border border-black" />
              <p>
                <br />&#9658; 1 double bed<br />&#9658; 2 pillow and 1 blanket<br />&#9658; 1 bathroom<br />&#9658; 1 television<br />&#9658; air-condition<br />&#9658; free wifi<br />&#9658; beautiful scenery<br />&#9658; free parking<br />
              </p>
            </td>
            <td className="text-center">
              <p>RM 800 per night</p><br />
              <button className="bg-hotel-dark text-white px-4 py-2 rounded hover:bg-opacity-80" onClick={handleBookNow}>BOOK NOW!</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/images/premiumsuite6.jpg" alt="" className="w-[500px] h-[350px] float-left border border-black mb-5" />
              <p>
                <br />&#9658; 1 double bed<br />&#9658; 1 single bed<br />&#9658; 2 pillow and 1 blanket for double bed<br />&#9658; 1 pillow and 1 blanket for single bed<br />&#9658; 1 bathroom<br />&#9658; 1 television<br />&#9658; 1 sofa<br />&#9658; air-condition<br />&#9658; free wifi<br />&#9658; beautiful scenery<br />&#9658; free parking<br />
              </p>
            </td>
            <td className="text-center">
              <p>RM 1200 per night</p><br />
              <button className="bg-hotel-dark text-white px-4 py-2 rounded hover:bg-opacity-80" onClick={handleBookNow}>BOOK NOW!</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}