import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Rooms() {
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
    <Layout title="OJINGEO HOTEL - Rooms" pageId="Rooms">
      <Head>
        <link href="/css/style1.css" rel="stylesheet" />
      </Head>

      <nav>
        <ul className="roomnav">
          <li><Link href="/minisuite">Mini Suite</Link></li>
          <li><Link href="/luxurydoublesuite">Luxury Double Suite</Link></li>
          <li><Link href="/premiumsuite">Premium Suite</Link></li>
        </ul>
      </nav>

      <article className="slideshow-container">
        <h1>Mini Suite</h1>
        
        <img src="/images/minisuite1.jpg" alt="minisuite1" className="w-full mySlides fade" />
        <img src="/images/minisuite2.jpg" alt="minisuite2" className="w-full mySlides fade" />
        <img src="/images/bathroom1.jpg" alt="bathroom1" className="w-full mySlides fade" />
            
        <a className="prev" onClick={() => (window as any).plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => (window as any).plusSlides(1)}>&#10095;</a>
      </article>

      <table id="roomprice">
        <tbody>
          <tr className="roompackage">
            <td>Sleeps :</td>
            <td>1 guest</td>
          </tr>
          <tr className="roompackage">
            <td>Include :</td>
            <td>Free breakfast</td>
          </tr>
          <tr className="roompackage">
            <td>Price :</td>
            <td>RM 400 per night</td>
          </tr>
          <tr className="roompackage">
            <td>Member Price :</td>
            <td>RM 360 per night [after discount 10%]</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}><Link href="/booking" id="booknowhover">book now</Link></td>
          </tr>
        </tfoot>
      </table>

      <fieldset className="room">
        <legend>Bathroom and Toiletries</legend>
        <dd className="roomdescription">
          &#128204;Bathrobes<br/>
          &#128204;Hair dryer<br/>
          &#128204;Mirror<br/>
          &#128204;Toiletries<br/>
          &#128204;Towels<br/>
        </dd>
      </fieldset>

      <fieldset className="room">
        <legend>Entertainment</legend>
        <dd className="roomdescription">
          &#128204;Free Wi-Fi in room<br/>
          &#128204;Mobile hotspot device<br/>
          &#128204;Satellite/cable channels<br/>
          &#128204;Telephone<br/>
        </dd>
      </fieldset>

      <fieldset className="room">
        <legend>Comforts</legend>
        <dd className="roomdescription">
          &#128204;Adapter<br/>
          &#128204;Air conditioning<br/>
          &#128204;Blackout curtains<br/>
          &#128204;Linens<br/>
          &#128204;Pajamas<br/>
          &#128204;Private entrance<br/>
          &#128204;Sleep comfort items<br/>
          &#128204;Slippers<br/>
          &#128204;Socket near the bed<br/>
          &#128204;Soundproofing<br/>
        </dd>
      </fieldset>

      <fieldset className="room">
        <legend>Dining, drinking, and snacking</legend>
        <dd className="roomdescription">
          &#128204;Coffee/tea maker<br/>
          &#128204;Free bottled water<br/>
          &#128204;Refrigerator<br/>
        </dd>
      </fieldset>

      <fieldset className="room">
        <legend>Services and conveniences</legend>
        <dd className="roomdescription">
          &#128204;Daily housekeeping<br/>
        </dd>
      </fieldset>

      <fieldset className="room">
        <legend>Layout and furnishings</legend>
        <dd className="roomdescription">
          &#128204;Carpeting<br/>
          &#128204;Desk<br/>
          &#128204;Trash cans<br/>
        </dd>
      </fieldset>

      <fieldset className="room">
        <legend>Clothing and laundry</legend>
        <dd className="roomdescription">
          &#128204;Closet<br/>
          &#128204;Clothes rack<br/>
        </dd>
      </fieldset>

      <fieldset className="room">
        <legend>Safety and security features</legend>
        <dd className="roomdescription">
          &#128204;Accessible by elevator<br/>
          &#128204;Fire extinguisher<br/>
          &#128204;In-room safe box<br/>
          &#128204;Safety/security feature<br/>
          &#128204;Smoke detector<br/>
        </dd>
      </fieldset>
    </Layout>
  );
}