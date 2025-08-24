import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Reviews() {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    cleanliness: 3,
    staff: 3,
    service: 3,
    facilities: 3,
    location: 3
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', formData);
    // Handle form submission here
  };

  return (
    <Layout title="OJINGEO HOTEL - Reviews" pageId="Reviews">
      <Head>
        <link href="/css/style1.css" rel="stylesheet" />
      </Head>

      <aside id="overallreview">
        <h2>
          Overall Reviews<br />
          <img src="/images/4_starnobg.png" alt="4 star" className="reviewstar" /><br />
        </h2>

        <label htmlFor="cleanliness" className="reviewmeter">Cleanliness</label>
        <meter id="cleanliness" value={4.9} min={0} max={5}></meter>&nbsp;&nbsp;&nbsp;4.9<br />

        <label htmlFor="staff" className="reviewmeter">Staff</label>
        <meter id="staff" value={4.8} min={0} max={5}></meter>&nbsp;&nbsp;&nbsp;4.8<br />

        <label htmlFor="service" className="reviewmeter">Service</label>
        <meter id="service" value={4.8} min={0} max={5}></meter>&nbsp;&nbsp;&nbsp;4.8<br />

        <label htmlFor="facilities" className="reviewmeter">Facilities</label>
        <meter id="facilities" value={4.9} min={0} max={5}></meter>&nbsp;&nbsp;&nbsp;4.9<br />

        <label htmlFor="location" className="reviewmeter">Location</label>
        <meter id="location" value={4.9} min={0} max={5}></meter>&nbsp;&nbsp;&nbsp;4.9<br />
      </aside>

      <div>
        <div className="reviews">
          <img src="/images/c1.png" alt="customer 1" className="customer" />
          <dt>Angela</dt>
          <img src="/images/5_star.jpg" alt="5 star" className="star" />
          <dd>I like Ojingeo Hotel so much ! Good service. A lot facilities. Front lobby staff were friendly too. Will come again ! 💖💖💖</dd>
        </div>
        <div className="reviews">
          <img src="/images/c2.png" alt="customer 2" className="customer" />
          <dt>Daniel</dt>
          <img src="/images/4_star.jpg" className="star" />
          <dd>The hotel is clean. Bed was comfortable. Nice hotel. Room service is good, staffs are friendly and nice. Love it !</dd>
        </div>
        <div className="reviews">
          <img src="/images/c3.png" alt="customer 3" className="customer" />
          <dt>Amanda</dt>
          <img src="/images/3_star.jpg" className="star" />
          <dd>Service quite slow ! The staff was not really friendly and look like don&apos;t want to serve me.</dd>
        </div>
        <div className="reviews">
          <img src="/images/c4.png" alt="customer 4" className="customer" />
          <dt>John</dt>
          <img src="/images/2_star.jpg" className="star" />
          <dd>The pool was not in operation during our stay.Customer service quite slow ! Slow responding from staff ! 😤</dd>
        </div>
        <div className="reviews">
          <img src="/images/c5.png" alt="customer 5" className="customer" />
          <dt>Ben</dt>
          <img src="/images/1_star.jpg" className="star" />
          <dd>This hotel not clean that I expect ! I found few hair in toilet and sink. Poor room service ! 😡</dd>
        </div>
      </div>

      <aside id="asidegivereview">
        <h2>Give Us A Review</h2><br />
        <form onSubmit={handleSubmit}>
          <div className="col-1-2">
            Name :<br />
            <input 
              type="text" 
              name="name" 
              id="namebox" 
              placeholder="Enter your name" 
              size={25} 
              required 
              value={formData.name}
              onChange={handleInputChange}
            /><br /><br />

            Comment :
            <textarea 
              name="comment" 
              id="commentbox" 
              placeholder="Enter your comment" 
              rows={5} 
              cols={50}
              value={formData.comment}
              onChange={handleInputChange}
            ></textarea><br /><br />

            <label htmlFor="cleanliness" className="givereview">Cleanliness</label><br />
            <img src="/images/5_starnobg.png" alt="Give review star" className="givereviewstar" /><br />
            <input 
              type="range" 
              id="cleanliness" 
              name="cleanliness" 
              min={1} 
              max={5} 
              value={formData.cleanliness}
              onChange={handleInputChange}
            /><br /><br />
            
            <label htmlFor="staff" className="givereview">Staff</label><br />
            <img src="/images/5_starnobg.png" alt="Give review star" className="givereviewstar" /><br />
            <input 
              type="range" 
              id="staff" 
              name="staff" 
              min={1} 
              max={5}
              value={formData.staff}
              onChange={handleInputChange}
            /><br />
          </div>
          <div className="col-1-2">
            <label htmlFor="service" className="givereview">Service</label><br />
            <img src="/images/5_starnobg.png" alt="Give review star" className="givereviewstar" /><br />
            <input 
              type="range" 
              id="service" 
              name="service" 
              min={1} 
              max={5}
              value={formData.service}
              onChange={handleInputChange}
            /><br /><br />
        
            <label htmlFor="facilities" className="givereview">Facilities</label><br />
            <img src="/images/5_starnobg.png" alt="Give review star" className="givereviewstar" /><br />
            <input 
              type="range" 
              id="facilities" 
              name="facilities" 
              min={1} 
              max={5}
              value={formData.facilities}
              onChange={handleInputChange}
            /><br /><br />
        
            <label htmlFor="location" className="givereview">Location</label><br />
            <img src="/images/5_starnobg.png" alt="Give review star" className="givereviewstar" /><br />
            <input 
              type="range" 
              id="location" 
              name="location" 
              min={1} 
              max={5}
              value={formData.location}
              onChange={handleInputChange}
            /><br />
          </div>
          <input type="submit" value="Submit" id="reviewsubmit" />
        </form>
      </aside>
    </Layout>
  );
}