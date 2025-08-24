import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Message() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length >= 30) {
      router.push('/reply-message');
    } else {
      alert('Message must be at least 30 characters long');
    }
  };

  const handleClear = () => {
    setFormData({ email: '', message: '' });
  };

  return (
    <Layout title="Ojingeo Hotel - Leave A Message" pageId="Message">
      <Head>
        <link href="/css/message.scss" rel="stylesheet" />
      </Head>

      <article>
        <div className="message">
          <form onSubmit={handleSubmit} id="messageForm" name="message">
            <h1 id="title">Leave your message below!</h1>
            
            <h3 id="box">Your Email:</h3>
            <input 
              type="email" 
              placeholder="Your Email" 
              name="email" 
              id="email" 
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            
            <h3 id="box">Your message:</h3>
            <input 
              type="text" 
              placeholder="Your Message (At least 30 characters)" 
              name="message" 
              id="msg" 
              minLength={30} 
              required
              value={formData.message}
              onChange={handleInputChange}
            />
            
            <input type="submit" id="send" value="Send" />
            <input type="button" id="clear" value="Clear" onClick={handleClear} />
            
            <p className="leading-none text-xs">Prepared By Ojingeo Hotel</p>
          </form>
        </div>
      </article>
    </Layout>
  );
}