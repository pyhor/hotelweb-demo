import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  pageId?: string;
}

export default function Layout({ children, title, pageId }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="keywords" content="hotel, rooms, event, Korea, Seoul, Hongdae, Busan, Gangnam, Mapo-gu, Incheon, Gwangju，travel" />
        <title>{title}</title>
        <link href="/images/ojingeohotel_logo.jpeg" rel="shortcut icon" type="image/x-icon" />
        <link href="/css/layout.css" rel="stylesheet" media="screen" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          {pageId && <h1 id="pagename" className="text-center text-3xl font-bold my-6 text-hotel-dark">{pageId}</h1>}
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}