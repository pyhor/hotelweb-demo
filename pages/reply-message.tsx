import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function ReplyMessage() {
  return (
    <Layout title="Ojingeo Hotel - Message Received" pageId="Message Received">
      <Head>
        <link href="/css/message.css" rel="stylesheet" />
      </Head>

      <div className="text-center p-12">
        <h1 className="text-hotel-dark text-4xl">Thank You!</h1>
        
        <div className="my-8">
          <img src="/images/reply_done.gif" alt="Message Sent" className="max-w-[200px] mx-auto" />
        </div>
        
        <h2 className="text-hotel-dark mb-5">Your message has been received!</h2>
        
        <p className="text-xl my-5 text-gray-600">
          We appreciate you taking the time to contact us. Our team will review your message and get back to you as soon as possible.
        </p>
        
        <p className="text-lg my-5 text-gray-600">
          For urgent matters, please call us directly at{' '}
          <a href="tel:+826-969-6769" className="text-hotel-dark">
            (+82)6-969-6769
          </a>
        </p>
        
        <div className="mt-10 space-x-4">
          <Link href="/" className="bg-hotel-dark text-white px-8 py-4 no-underline rounded text-lg hover:bg-opacity-80">
            Return to Home
          </Link>
          
          <Link href="/message" className="bg-gray-600 text-white px-8 py-4 no-underline rounded text-lg hover:bg-opacity-80">
            Send Another Message
          </Link>
        </div>
      </div>
    </Layout>
  );
}