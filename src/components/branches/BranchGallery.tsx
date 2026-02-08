import Head from 'next/head';
import Layout from '../layout/Layout';

interface BranchGalleryProps {
  branchName: string;
  cssFile: string;
  images: string[];
}

export default function BranchGallery({ branchName, cssFile, images }: BranchGalleryProps) {
  return (
    <Layout title={`Ojingeo Hotel - ${branchName} Gallery`} pageId={`${branchName} Gallery`}>
      <Head>
        <link rel="stylesheet" href={`/css/${cssFile}.css`} />
      </Head>

      <div>
        <section>
          {images.slice(0, 4).map((image, index) => (
            <img 
              key={index}
              src={`/images/${image}`} 
              alt={`${branchName} ${index + 1}`} 
              className={`${branchName.toLowerCase()}_img`}
            />
          ))}
        </section>
      </div>
      <div>
        <section>
          {images.slice(4, 8).map((image, index) => (
            <img 
              key={index + 4}
              src={`/images/${image}`} 
              alt={`${branchName} ${index + 5}`} 
              className={`${branchName.toLowerCase()}_img`}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
}