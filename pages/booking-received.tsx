import Head from 'next/head';
import Layout from '../components/Layout';

const BookingReceived: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="keywords" content="hotel, rooms, event, Korea, Seoul, Hongdae, Busan, Gangnam, Mapo-gu, Incheon, Gwangju，travel" />
        <title>Ojingeo Hotel - Booking Received</title>
        <link href="/images/layout/ojingeohotel_logo.jpeg" rel="shortcut icon" type="image/x-icon" />
        <link href="/css/layout.css" rel="stylesheet" media="screen" />
        <link rel="stylesheet" href="/css/booking_success.css" />
      </Head>

      <Layout>
        <h1 id="pagename">Booking Received</h1>

        <article>
          <div className="message">
            <img src="/images/booking/bookingreceived.gif" alt="" id="bookinggif" />
            <h2 id="relay">
              Your booking was successful.
              <br />
              Thank you for choosing Ojingeo Hotel!
              <br />
              We look forward to seeing you here!
            </h2>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default BookingReceived;