import Head from 'next/head';
import Layout from '../components/Layout';

export default function Branches() {
  return (
    <Layout title="Ojingeo Hotel - Branches" pageId="Branches">
      <Head>
        <link rel="stylesheet" href="/css/branches.css" />
      </Head>

      <div>
        <h1 id="hotspot_intro">&#9758; Click on Icon to Enter Gallery</h1><br />
        <p></p>
        <img className="i" src="/images/img_hotspot.png" alt="" id="imgHotspot" useMap="#branchesMap" />

        <map name="branchesMap">
          <area shape="rect" coords="154,106,525,206" alt="Busan Gallery" href="/busan-branch" />
          <area shape="rect" coords="811,123,1206,215" alt="Gangnam Gallery" href="/gangnam-branch" />
          <area shape="rect" coords="115,454,505,546" alt="Gwangju Gallery" href="/gwangju-branch" />
          <area shape="rect" coords="813,469,1213,557" alt="Incheon Gallery" href="/incheon-branch" />
          <area shape="rect" coords="745,291,1000,387" alt="Mapo-gu Gallery" href="/mapo-gu-branch" />
          <area shape="rect" coords="379,296,607,387" alt="Seoul Gallery" href="/seoul-branch" />
        </map>
      </div>
      <br />
    </Layout>
  );
}