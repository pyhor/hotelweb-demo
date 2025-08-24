import BranchGallery from '../components/BranchGallery';

export default function MapoGuBranch() {
  const images = [
    'mapogu1.jpg',
    'mapogu2.jpg', 
    'mapogu3.jpg',
    'mapogu4.jpg',
    'mapogu5.jpg',
    'mapogu6.jpg',
    'mapogu7.jpg',
    'mapogu8.jpg'
  ];

  return (
    <BranchGallery 
      branchName="Mapo-gu"
      cssFile="mapo-gu"
      images={images}
    />
  );
}