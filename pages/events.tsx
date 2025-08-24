import Head from 'next/head';
import Layout from '../components/Layout';

export default function Events() {
  return (
    <Layout title="Ojingeo Hotel - Events" pageId="Events">
      <Head>
        <link href="/css/events.css" rel="stylesheet" />
      </Head>

      <article>
        <table>
          <tbody>
            <tr>
              <td>
                <img src="/images/The New Squid Game.gif" id="eventgif" alt="The New Squid Game" title="The New Squid Game" />
              </td>
              <td>
                This isn&apos;t the same Korean Squid Game you&apos;re seen with; this is a brand-new Squid Game! We warmly invite you to try out a fresh sensation and experience in our real-life New Squid Game.
              </td>
              <td>
                18 December 2021<br />~The New Squid Game~<br />10 am
              </td>
            </tr>

            <tr>
              <td>
                24 December 2021<br />~Christmas Eve Dinner~<br />7.30 pm
              </td>
              <td>
                Now let us create this very day fascinating by welcoming everyone to become a part of a unique evening by eating dinner with everyone, thus bringing your relatives and we&apos;ll celebrate this Christmas Eve from the spirit.
              </td>
              <td>
                <img src="/images/Christmas Eve Dinner.gif" id="eventgif" title="Christmas Eve Dinner" />
              </td>
            </tr>

            <tr>
              <td>
                <img src="/images/The Dream Christmas Party.gif" id="eventgif" alt="The Dream Christmas Party" title="The Dream Christmas Party" />
              </td>
              <td>
                This Christmas, let us just attempt everything different from entire past year. Come and visit us for cuisine, drink, as well as amusement. We would like to bring this Christmas the happy and satisfied ever, hence we&apos;ve just arranged the Christmas extravaganza.
              </td>
              <td>
                25 - 26 December 2021<br />~The Dream Christmas Party~<br />5 pm - 12pm
              </td>
            </tr>

            <tr>
              <td>
                31 December 2021<br />~New Year&apos;s Countdown Party~<br />8 pm
              </td>
              <td>
                There have been many peaks and valleys during the course of the year. Since you&apos;ve been the sole constant in all of them, you&apos;re the most sought-after attendee at our New Year&apos;s Eve bash. Let&apos;s all wish one other a good new year.
              </td>
              <td>
                <img src="/images/NY Countdown Party Holiday.gif" id="eventgif" alt="New Year's Countdown Party Holiday" title="New Year's Countdown Party Holiday" />
              </td>
            </tr>
          </tbody>
        </table>
        
        <p className="text-sm pl-[70px]">
          *Our events followed SOP. All events only allow for Ojingeo Hotel guests.
        </p>
      </article>
    </Layout>
  );
}