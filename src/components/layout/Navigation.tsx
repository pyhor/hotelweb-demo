import Link from 'next/link';

export default function Navigation() {
  return (
    <header>
      <nav className="navlist">
        <a href="#" id="navicon">
          <img src="/images/navicon.png" alt="navicon" />
        </a>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/rooms">Rooms</Link></li>
          <li><Link href="/facilities">Facilities</Link></li>
          <li><Link href="/booking">Booking</Link></li>
          <li><Link href="/membership">Membership</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/reviews">Reviews</Link></li>
          <li className="dropdown">
            <span><Link href="/branches">Branches &#x25BC;</Link></span>
            <div className="dropdown-list">
              <Link href="/seoul-branch">Seoul 서울 &#10146;</Link>
              <Link href="/busan-branch">Busan 부산 &#10146;</Link>
              <Link href="/gangnam-branch">Gangnam 강남 &#10146;</Link>
              <Link href="/mapo-gu-branch">Mapo-gu 마포구 &#10146;</Link>
              <Link href="/incheon-branch">Incheon 인천 &#10146;</Link>
              <Link href="/gwangju-branch">Gwangju 광주 &#10146;</Link>
            </div>
          </li>
          <li><Link href="/policy">Policy</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}