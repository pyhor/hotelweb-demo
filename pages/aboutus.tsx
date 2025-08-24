import Head from 'next/head';
import React from 'react';

export default function AboutUs(): React.ReactElement {
  return (
    <>
      <Head>
        <meta name="keywords" content="hotel, rooms, event, Korea, Seoul, Hongdae, Busan, Gangnam, Mapo-gu, Incheon, Gwangju，travel" />
        <title>Ojingeo Hotel - About Us</title>
        <link href="/images/layout/ojingeohotel_logo.jpeg" rel="shortcut icon" type="image/x-icon" />
        <link href="/css/layout.css" rel="stylesheet" media="screen" />
        <link rel="stylesheet" href="/css/aboutus.css" />
      </Head>

      <header>
        <nav className="navlist">
          <a href="#" id="navicon">
            <img src="/images/layout/navicon.png" alt="navicon" />
          </a>
          <ul>
            <li><a href="/pages/index.html">Home</a></li>
            <li><a href="/pages/rooms.html">Rooms</a></li>
            <li><a href="facilities.html">Facilities</a></li>
            <li><a href="booking.html">Booking</a></li>
            <li><a href="membership.html">Membership</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="reviews.html">Reviews</a></li>
            <li className="dropdown">
              <span><a href="branches.html">Branches &#x25BC;</a></span>
              <div className="dropdown-list">
                <a href="seoul-branch.html">Seoul 서울 &#10146;</a>
                <a href="busan-branch.html">Busan 부산 &#10146;</a>
                <a href="gangnam-branch.html">Gangnam 강남 &#10146;</a>
                <a href="mapo-gu-branch.html">Mapo-gu 마포구 &#10146;</a>
                <a href="incheon-branch.html">Incheon 인천 &#10146;</a>
                <a href="gwangju-branch.html">Gwangju 광주 &#10146;</a>
              </div>
            </li>
            <li><a href="policy.html">Policy</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="aboutus.html">About Us</a></li>
          </ul>
        </nav>
      </header>

      <h1 id="pagename">About Us</h1>

      <h1 id="aboutUsTag">Introduction</h1>
      <p id="aboutUsOne">
        &nbsp; Ojingeo Hotel is a 4-star hotel located in South Korea. It was established in 2 April 2016.
        We have our main headquarters located in Seoul and 5 other branches in Busan, Gangnam, Mapo-gu,
        Incheon and Gwangju. Our hotels are situated near popular tourist attractions such as Bukchon
        Hanok Village in Seoul, Chinatown in Incheon and Asia Culture Center in Gwangju, which allows
        for tourists to enjoy their overall experience in our hotels while also enjoying their trips.
      </p>
      <p id="aboutUsTwo">
        &nbsp; While being fairly new in terms of establishment date, we are extremely dedicated to
        preaching and practicing strong beliefs and systems to diversify our hotels, and we believe
        we are making the world a better place through our services, one customer at a time.
      </p>
      <br />

      <div id="leftSide">
        <section className="leftSide" id="history">
          <h1 id="historyTag" style={{ textAlign: 'left' }}>History</h1>
          <table>
            <caption style={{ fontWeight: 'bold' }}>&#9818; History of Ojingeo Hotel &#9818;</caption>
            <colgroup>
              <col className="historyDate" />
              <col className="historyMilestone" />
            </colgroup>
            <thead>
              <tr>
                <th className="historyDate" id="historyNavDate">Date</th>
                <th className="historyMilestone" id="historyNavMilestone">Milestone</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th id="historyFoot" colSpan={2}>&#9819; We Strive, You Thrive &#9819;</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td className="historyDate">2 April 2016</td>
                <td className="historyMilestone">Opened up first hotel in Seoul</td>
              </tr>
              <tr>
                <td className="historyDate">10 September 2016</td>
                <td className="historyMilestone">Received sponsorships from TARC</td>
              </tr>
              <tr>
                <td className="historyDate">22 December 2016</td>
                <td className="historyMilestone">Signed partnership deals with tvN and JTBC</td>
              </tr>
              <tr>
                <td className="historyDate">15 May 2017</td>
                <td className="historyMilestone">Branching Announcements</td>
              </tr>
              <tr>
                <td className="historyDate">11 December 2017</td>
                <td className="historyMilestone">Renovation and Reopening of first hotel in Seoul</td>
              </tr>
              <tr>
                <td className="historyDate">24 February 2018</td>
                <td className="historyMilestone">Grand Opening of Busan branch hotel</td>
              </tr>
              <tr>
                <td className="historyDate">29 October 2018</td>
                <td className="historyMilestone">Grand Opening of Gangnam branch hotel</td>
              </tr>
              <tr>
                <td className="historyDate">28 May 2019</td>
                <td className="historyMilestone">Grand Opening of Mapo-gu branch hotel</td>
              </tr>
              <tr>
                <td className="historyDate">13 November 2019</td>
                <td className="historyMilestone">Grand Opening of Incheon branch hotel</td>
              </tr>
              <tr>
                <td className="historyDate">13 April 2020</td>
                <td className="historyMilestone">Grand Opening of Gwangju branch hotel</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <div id="rightSide">
        <section className="videos" id="videoOne">
          <h1 id="videoWalkthroughTag">Walkthrough</h1>
          <iframe
            width="520"
            height="300"
            src="https://www.youtube.com/embed/NJRxPx3q3r4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </div>
      <br />

      <section className="videos" id="videoTwo">
        <h1 id="videoFinediningTag">Fine Dining</h1>
        <iframe
          width="520"
          height="300"
          src="https://www.youtube.com/embed/HJl3x8Knei0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      <footer>
        <div>
          <a href="message.html" className="gocomment">Want to leave a comment?</a>
        </div>

        <div className="footerdiv" id="callfooterdiv">
          <img src="/images/layout/phone.png" alt="Contact Us" id="callicon" title="Ojingeo Hotel information" />
          <p className="contact">Contact Us</p>
          <div id="info">
            <a href="tel:+826-969-6769" style={{ color: '#ffffff' }}>&#9742;: (+82)6-969-6769</a><br />
            <a href="mailto:info@ojingeohotel.com" style={{ color: '#ffffff' }}>&#9993;: info@ojingeohotel.com</a>
            <br />Hongdae, Seoul, Korea &#127472;&#127479;
          </div>
        </div>

        <div className="footerdiv">
          <img src="/images/layout/handshake.png" alt="Sponsorship" title="Ojingeo Hotel Sponsorship" id="sponsoredicon" />
          <p className="sponsored">Our Sponsorship</p>
          <img src="/images/layout/sponsorship.jpg" alt="Sponsored" id="sponsored" title="Ojingeo Hotel Sponsorship" />
        </div>

        <div className="footerdiv">
          <img src="/images/layout/check-mark.png" alt="Secure Payment" title="Ojingeo Hotel Secure Payment" id="secureicon" />
          <p className="payment">Secure Payment</p>
          <img src="/images/layout/payment.png" alt="Payment" id="payment" title="Ojingeo Hotel Secure Payment" />
        </div>

        <p id="copyright">Copyrights &#169; 2021. All rights reserved by Ojingeo Hotel</p>
      </footer>
    </>
  );
}