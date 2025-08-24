import Head from 'next/head';
import Layout from '../components/Layout';

export default function AboutUs() {
  return (
    <Layout title="Ojingeo Hotel - About Us" pageId="About Us">
      <Head>
        <link rel="stylesheet" href="/css/aboutus.scss" />
      </Head>

      <h1 id="aboutUsTag">Introduction</h1>
      <p id="aboutUsOne">
        &nbsp;Ojingeo Hotel is a 4-star hotel located in South Korea. It was established in 2 April 2016. We have our main headquarters located in Seoul and 5 other branches in Busan, Gangnam, Mapo-gu, Incheon and Gwangju. Our hotels are situated near popular tourist attractions such as Bukchon Hanok Village in Seoul, Chinatown in Incheon and Asia Culture Center in Gwangju, which allows for tourists to enjoy their overall experience in our hotels while also enjoying their trips.
      </p>
      <p id="aboutUsTwo">
        &nbsp;While being fairly new in terms of establishment date, we are extremely dedicated to preaching and practicing strong beliefs and systems to diversify our hotels, and we believe we are making the world a better place through our services, one customer at a time.
      </p>
      <br />
      
      <div id="leftSide">
        <section className="leftSide" id="history">
          <h1 id="historyTag" className="text-left">History</h1>
          <table>
            <caption className="font-bold">&#9818; History of Ojingeo Hotel &#9818;</caption>
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
            className="w-[520px] h-[300px]"
            src="https://www.youtube.com/embed/NJRxPx3q3r4" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </section>
      </div>
      
      <br />
      <section className="videos" id="videoTwo">
        <h1 id="videoFinediningTag">Fine Dining</h1>
        <iframe 
          className="w-[520px] h-[300px]"
          src="https://www.youtube.com/embed/HJl3x8Knei0" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </section>
    </Layout>
  );
}