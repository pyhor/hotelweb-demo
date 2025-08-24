import BranchGallery from '../components/BranchGallery';

export default function SeoulBranch() {
  const images = [
    'seoul1.jpg',
    'seoul2.jpg', 
    'seoul3.jpg',
    'seoul4.jpg',
    'seoul5.jpg',
    'seoul6.jpg',
    'seoul7.jpg',
    'seoul8.jpg'
  ];

  return (
    <BranchGallery 
      branchName="Seoul"
      cssFile="seoul"
      images={images}
    />
  );
}