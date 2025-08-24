import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function FAQ() {
  useEffect(() => {
    // FAQ accordion functionality
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling as HTMLElement;
        const isOpen = answer.style.display === 'block';
        
        // Close all answers
        document.querySelectorAll('.answer').forEach(ans => {
          (ans as HTMLElement).style.display = 'none';
        });
        
        // Toggle current answer
        if (!isOpen) {
          answer.style.display = 'block';
        }
      });
    });

    return () => {
      questions.forEach(question => {
        question.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <Layout title="Ojingeo Hotel - FAQ" pageId="FAQ">
      <Head>
        <link href="/css/faq.css" rel="stylesheet" />
      </Head>

      <article>
        <div className="parttitle">
          <button className="question" title="Click to view the details">
            Is it possible to check-in earlier?
          </button>
          <div className="answer">
            <p>
              It is sometimes possible to check in early however this is subject to availability. To ensure your room is ready upon arrival, we recommend you reserve the room one night in advance.
            </p>
          </div>
          
          <button className="question" title="Click to view the details">
            Do you have an onsite laundry service?
          </button>
          <div className="answer">
            <p>
              Yes, we do. Laundry services are chargeable by the article of clothing. Simply dial 1 for more information and assistance on this matter. If you have opted to live in a suite room, we have washing and drying facilities included within the room for your convenience.
            </p>
          </div>
          
          <button className="question" title="Click to view the details">
            Is there a fitness centre?
          </button>
          <div className="answer">
            <p>
              Yes, We have a fitness centre available for all guests. You can refer to the hotel&apos;s map in Ojingeo Hotel Lobby and also ask our hotel personnel to get to the fitness centre.
            </p>
          </div>
          
          <button className="question" title="Click to view the details">
            Is it facilities free for guests?
          </button>
          <div className="answer">
            <p>
              Yes, all facilities are free for our Ojingeo Hotel&apos;s guests. Booking prices are included in all facilities fees.
            </p>
          </div>

          <button className="question" title="Click to view the details">
            What types of credit cards can I use to guarantee my booking?
          </button>
          <div className="answer">
            <p>
              Ojingeo Hotel accept cards as Master Card, Credit Card, Visa, Union Pay and others. You can find the all accept cards in section &quot;Secure Payment&quot; below.
            </p>
          </div>

          <button className="question" title="Click to view the details">
            Do you have wheelchair-accessible rooms?
          </button>
          <div className="answer">
            <p>
              Yes, we have barrier-free rooms with wheelchair access in Superior Rooms. Please{' '}
              <a href="tel:+826-969-6769" style={{color: '#A0522D'}}>contact us</a>{' '}
              directly for further details prior to booking.
            </p>
          </div>

          <button className="question" title="Click to view the details">
            What happens if a hotel does not accommodate a group?
          </button>
          <div className="answer">
            <p>
              If you book a room that cannot accommodate your group, Ojingeo Hotel may cancel your reservation or require that you book additional rooms. If you have doubts, check directly with Ojingeo Hotel for our extra–guest charges and the maximum number of people allowed in the room you&apos;ve booked.
            </p>
          </div>

          <button className="question" title="Click to view the details">
            Do I need to confirm my booking?
          </button>
          <div className="answer">
            <p>
              No, you don&apos;t. If you really have to, you can though contact us at{' '}
              <a href="mailto:info@ojingeohotel.com" style={{color: '#A0522D'}}>info@ojingeohotel.com</a>{' '}
              to confirm your reservation. You can also{' '}
              <a href="tel:+826-969-6769" style={{color: '#A0522D'}}>contact the Ojingeo Hotel</a>{' '}
              directly if you prefer.
            </p>
          </div>

          <button className="question" title="Click to view the details">
            Will the hotel hold my room if I&apos;m arriving late?
          </button>
          <div className="answer">
            <p>
              Since your reservation is guaranteed with a credit card, Ojingeo Hotel is obliged to hold your room until 7 am, the day after your planned arrival date.
            </p>
          </div>

          <button className="question" title="Click to view the details">
            How do I know my reservation is confirmed?
          </button>
          <div className="answer">
            <p>
              As soon as you have completed the booking process, you will receive the Ojingeo Hotel voucher with all your booking information.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}