import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';

export default function Home() {
    useEffect(() => {
        // Load slideshow functionality
        const script1 = document.createElement('script');
        script1.src = '/js/slideshow.js';
        script1.defer = true;
        document.body.appendChild(script1);

        // Load countdown functionality
        const script2 = document.createElement('script');
        script2.src = '/js/countdown_event.js';
        script2.defer = true;
        document.body.appendChild(script2);

        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        };
    }, []);

    return (
        <Layout title="Ojingeo Hotel - Home" pageId="Ojingeo Hotel">
            <Head>
                <link rel="stylesheet" href="/css/home.scss" />
            </Head>

            {/* Running text */}
            <div id="runningtext" className="overflow-hidden whitespace-nowrap animate-scroll">
                <p className="inline-block animate-scroll">
                    ~ 안녕하세요 WELCOME TO OJINGEO HOTEL ~
                </p>
            </div>

            {/* Article */}
            <article>
                {/* Slideshow */}
                <h2 className="parttitle">Our Gallery 갤러리 &#9899;</h2>

                <div className="slideshow-container">
                    <div className="mySlides-fade">
                        <video width="1150" height="370" id="hotelvideo" controls>
                            <source src="/images/hotel video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="mySlides-fade">
                        <div className="numbertext">1 / 6</div>
                        <div className="numbertext2">2 / 6</div>
                        <img src="/images/1-2.png" className="w-[135%]" title="Outdoor & Bedroom" />
                        <p className="text-2xl font-sans text-[#664228]">
                            Outdoor & Bedroom
                        </p>
                    </div>

                    <div className="mySlides-fade">
                        <div className="numbertext">3 / 6</div>
                        <div className="numbertext2">4 / 6</div>
                        <img src="/images/3-4.png" className="w-[135%]" />
                        <p className="text-2xl font-sans text-[#664228]">
                            Bedroom & Swimming Pool
                        </p>
                    </div>

                    <div className="mySlides-fade">
                        <div className="numbertext">5 / 6</div>
                        <div className="numbertext2">6 / 6</div>
                        <img src="/images/5-6.png" className="w-[135%]" />
                        <p className="text-2xl font-sans text-[#664228]">
                            Gym Room & Washroom
                        </p>
                    </div>

                    <a className="prev" onClick={() => (window as any).plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => (window as any).plusSlides(1)}>&#10095;</a>
                </div>

                <br />
                <div className="text-center">
                    <span className="dot" onClick={() => (window as any).currentSlide(1)}></span>
                    <span className="dot" onClick={() => (window as any).currentSlide(2)}></span>
                    <span className="dot" onClick={() => (window as any).currentSlide(3)}></span>
                    <span className="dot" onClick={() => (window as any).currentSlide(4)}></span>
                </div>

                {/* Upcoming event */}
                <hr />
                <h2 className="parttitle">Upcoming Event 예정된 이벤트 &#9899;</h2>
                <p className="details">The real-life New Squid Game is counting down!</p>
                <p id="event_countdown" title="Dec 18 2021"></p>
                <p className="special">
                    This isn&apos;t the same Korean Squid Game you&apos;re seen with; this is a brand-new Squid Game!
                    <br />We warmly invite you to try out a fresh sensation and experience in our real-life New Squid Game.
                    <br /><br />Please see our <Link href="/events" id="events">events page</Link>, if you are interested to know more about our events!
                </p>
                <img src="/images/The New Squid Game.gif" id="eventgif" />

                {/* Our branches */}
                <hr />
                <h2 className="parttitle">Our Branches 가지 &#9899;</h2>
                <Link href="/branches/seoul-branch" id="seoul">Seoul 서울 &#9733;</Link>
                <Link href="/branches/busan-branch" id="busan">Busan 부산 &#9733;</Link>
                <Link href="/branches/gangnam-branch" id="gangman">Gangnam 강남 &#9733;</Link>
                <Link href="/branches/mapo-gu-branch" id="mapogu">Mapo-gu 마포구 &#9733;</Link>
                <Link href="/branches/incheon-branch" id="incheon">Incheon 인천 &#9733;</Link>
                <Link href="/branches/gwangju-branch" id="gwangju">Gwangju 광주 &#9733;</Link>

                {/* Notice */}
                <hr />
                <h2 className="parttitle">Notice 통지&#9899;</h2>
                <p className="notice">
                    &#9658; Notice:&nbsp;Due to the Covid-19, We have updated our policy, please see the{' '}
                    <Link href="/policy" id="policy">policy page</Link> to find out the details. Thank you. &#9668;
                </p>
            </article>
        </Layout>
    );
}