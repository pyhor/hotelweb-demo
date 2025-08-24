import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

interface RoomDetailProps {
  roomName: string;
  images: string[];
  sleeps: string;
  includes: string;
  price: string;
  memberPrice: string;
  amenities: {
    [category: string]: string[];
  };
}

export default function RoomDetail({ roomName, images, sleeps, includes, price, memberPrice, amenities }: RoomDetailProps) {
  useEffect(() => {
    // Slideshow functionality
    let slideIndex = 1;
    
    const showSlides = (n: number) => {
      const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      
      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
      }
    };

    (window as any).plusSlides = (n: number) => {
      showSlides(slideIndex += n);
    };

    (window as any).currentSlide = (n: number) => {
      showSlides(slideIndex = n);
    };

    showSlides(slideIndex);
  }, []);

  return (
    <Layout title={`OJINGEO HOTEL - ${roomName}`} pageId="Rooms">
      <Head>
        <link href="/css/style1.css" rel="stylesheet" />
      </Head>

      <nav>
        <ul className="roomnav">
          <li><Link href="/rooms/mini-suite">Mini Suite</Link></li>
          <li><Link href="/rooms/luxury-double-suite">Luxury Double Suite</Link></li>
          <li><Link href="/rooms/premium-suite">Premium Suite</Link></li>
        </ul>
      </nav>

      <article className="slideshow-container">
        <h1>{roomName}</h1>
        
        {images.map((image, index) => (
          <img 
            key={index}
            src={`/images/${image}`} 
            alt={`${roomName} ${index + 1}`} 
            className="w-full mySlides fade"
          />
        ))}
            
        <a className="prev" onClick={() => (window as any).plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => (window as any).plusSlides(1)}>&#10095;</a>
      </article>

      <table id="roomprice">
        <tbody>
          <tr className="roompackage">
            <td>Sleeps :</td>
            <td>{sleeps}</td>
          </tr>
          <tr className="roompackage">
            <td>Include :</td>
            <td>{includes}</td>
          </tr>
          <tr className="roompackage">
            <td>Price :</td>
            <td>{price}</td>
          </tr>
          <tr className="roompackage">
            <td>Member Price :</td>
            <td>{memberPrice}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}><Link href="/booking" id="booknowhover">book now</Link></td>
          </tr>
        </tfoot>
      </table>

      {Object.entries(amenities).map(([category, items]) => (
        <fieldset key={category} className="room">
          <legend>{category}</legend>
          <dd className="roomdescription">
            {items.map((item, index) => (
              <span key={index}>
                &#128204;{item}<br/>
              </span>
            ))}
          </dd>
        </fieldset>
      ))}
    </Layout>
  );
}