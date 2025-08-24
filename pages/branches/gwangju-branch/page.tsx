import BranchGallery from '../components/BranchGallery';

export default function GwangjuBranch() {
  const images = [
    'gwangju1.jpg',
    'gwangju2.jpg', 
    'gwangju3.jpg',
    'gwangju4.jpg',
    'gwangju5.jpg',
    'gwangju6.jpg',
    'gwangju7.jpg',
    'gwangju8.jpg'
  ];

  return (
    <BranchGallery 
      branchName="Gwangju"
      cssFile="gwangju"
      images={images}
    />
  );
}