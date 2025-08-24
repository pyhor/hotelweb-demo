import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div>
        <Link href="/message" className="gocomment">Want to leave a comment?</Link>
      </div>
      
      <div className="footerdiv" id="callfooterdiv">
        <img src="/images/phone.png" alt="Contact Us" id="callicon" title="Ojingeo Hotel information" />
        <p className="contact">Contact Us</p>
        <div id="info">
          <a href="tel:+826-969-6769" className="text-white">&#9742;: (+82)6-969-6769</a><br />
          <a href="mailto:info@ojingeohotel.com" className="text-white">&#9993;: info@ojingeohotel.com</a>
          <br />Hongdae, Seoul, Korea &#127472;&#127479;
        </div>
      </div>
      <div className="footerdiv">
        <img src="/images/handshake.png" alt="Sponsorship" title="Ojingeo Hotel Sponsorship" id="sponsoredicon" />
        <p className="sponsored">Our Sponsorship</p>
        <img src="/images/sponsorship.jpg" alt="Sponsored" id="sponsored" title="Ojingeo Hotel Sponsorship" />
      </div>
      <div className="footerdiv">
        <img src="/images/check-mark.png" alt="Secure Payment" title="Ojingeo Hotel Secure Payment" id="secureicon" />
        <p className="payment">Secure Payment</p>
        <img src="/images/payment.png" alt="Payment" id="payment" title="Ojingeo Hotel Secure Payment" />
      </div>
      <p id="copyright">Copyrights &#169; 2021. All rights reserved by Ojingeo Hotel</p>
    </footer>
  );
}