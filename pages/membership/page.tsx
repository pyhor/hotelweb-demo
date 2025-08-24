import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Membership() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    memberdate: '',
    firstName: '',
    lastName: '',
    gender: 'male',
    DOB: '',
    idType: 'icNo',
    idNumber: '',
    phoneNum: '',
    email: '',
    country: '',
    address: ''
  });

  useEffect(() => {
    const today = new Date();
    const dateString = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    setFormData(prev => ({ ...prev, memberdate: dateString }));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (confirm('Are you sure want to become our membership ?')) {
      router.push('/welcomemember');
    }
  };

  const handleCancel = () => {
    if (confirm('Are you sure want to cancel this membership ?')) {
      setFormData({
        memberdate: new Date().toLocaleDateString(),
        firstName: '',
        lastName: '',
        gender: 'male',
        DOB: '',
        idType: 'icNo',
        idNumber: '',
        phoneNum: '',
        email: '',
        country: '',
        address: ''
      });
    }
  };

  return (
    <Layout title="OJINGEO HOTEL - Membership" pageId="Membership">
      <Head>
        <link href="/css/style1.scss" rel="stylesheet" />
      </Head>

      <aside id="memberaside">
        <h2 className="text-hotel-gold">Membership Benefits</h2>
        <ul>
          <li className="memberdscription">&nbsp;FREE TO APPLY</li>
          <li className="memberdscription">&nbsp;FREE car park</li>
          <li className="memberdscription">&nbsp;No renew membership requirement</li>
          <li className="memberdscription">&nbsp;Get 10% discount booking any room</li>
          <li className="memberdscription">&nbsp;Get 5% discount booking any facility</li>
          <li className="memberdscription">&nbsp;Get 5% discount dining deals</li>
        </ul>
      </aside>

      <form id="membership_form" name="membership_form" onSubmit={handleSubmit}>
        <fieldset id="membership">
          <legend>Join Us Now !</legend>
          
          <div className="membership_form">
            <label htmlFor="memberdate">Date :</label>
            <input 
              type="text" 
              name="memberdate" 
              id="memberdate" 
              size={10} 
              disabled 
              value={formData.memberdate}
            />
          </div>

          <div className="membership_form">
            <label htmlFor="firstName">First Name :</label>
            <input 
              type="text" 
              name="firstName" 
              id="firstName" 
              placeholder="Enter your first name" 
              required 
              maxLength={20} 
              size={25}
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>

          <div className="membership_form">
            <label htmlFor="lastName">Last Name :</label>
            <input 
              type="text" 
              name="lastName" 
              id="lastName" 
              placeholder="Enter your last name" 
              required 
              maxLength={20} 
              size={25}
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>

          <div className="membership_form">
            <label htmlFor="gender">Gender :</label>
            <input 
              type="radio" 
              name="gender" 
              id="male" 
              value="male" 
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
            />
            <label htmlFor="male">Male</label>
            
            <input 
              type="radio" 
              name="gender" 
              id="female" 
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
            />
            <label htmlFor="female">Female</label>
          </div>

          <div className="membership_form">
            <label htmlFor="DOB">Date of Birth :</label>
            <input 
              type="date" 
              name="DOB" 
              id="DOB" 
              required
              value={formData.DOB}
              onChange={handleInputChange}
            />
          </div>

          <div className="membership_form">
            <input 
              type="radio" 
              name="idType" 
              id="icNo" 
              value="icNo"
              checked={formData.idType === 'icNo'}
              onChange={handleInputChange}
            />
            <label htmlFor="icNo">IC Number</label>

            <input 
              type="radio" 
              name="idType" 
              id="passNo" 
              value="passNo"
              checked={formData.idType === 'passNo'}
              onChange={handleInputChange}
            />
            <label htmlFor="passNo">Passport Number</label>
       
            <input 
              type="text" 
              name="idNumber" 
              id="idNumber" 
              placeholder="Enter IC No. OR Passport No." 
              size={30} 
              required
              value={formData.idNumber}
              onChange={handleInputChange}
            />
          </div>

          <div className="membership_form">
            <label htmlFor="phoneNum">Contact Number :</label>
            <input 
              type="tel" 
              name="phoneNum" 
              id="phoneNum" 
              size={15} 
              maxLength={10} 
              placeholder="(000) 000 0000" 
              pattern="^\d{10}$|^(\(\d{3}\)\s*)?\d{3}[\s-]?\d{4}$" 
              required
              value={formData.phoneNum}
              onChange={handleInputChange}
            />
          </div>

          <div className="membership_form">
            <label htmlFor="email">E-mail :</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Enter your email" 
              required 
              maxLength={30} 
              size={35}
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="membership_form">
            <label htmlFor="country">Country :</label>
            <select name="country" required value={formData.country} onChange={handleInputChange}>
              <option value="">--Please choose your country--</option>
              <option value="afghanistan">Afghanistan</option>
              <option value="albania">Albania</option>
              <option value="algeria">Algeria</option>
              <option value="malaysia">Malaysia</option>
              <option value="singapore">Singapore</option>
              <option value="southKorea">South Korea</option>
              <option value="unitedStates">United States</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          <div className="membership_form">
            <label htmlFor="address">Address :</label>
            <textarea 
              name="address" 
              id="address" 
              placeholder="Enter your home address" 
              rows={5} 
              cols={50} 
              required
              value={formData.address}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div id="membershipbuttons">
            <input type="button" value="Cancel" onClick={handleCancel} />
            <input type="submit" value="Submit" />
          </div>
        </fieldset>

        <marquee>
          <h4 id="animationtext">
            <i>
              <img src="/images/logocrop.jpeg" className="animationimg" />
              Can be applied for all branches of OJINGEO HOTEL
              <img src="/images/logocrop.jpeg" className="animationimg" />
            </i>
          </h4>
        </marquee>
      </form>
    </Layout>
  );
}