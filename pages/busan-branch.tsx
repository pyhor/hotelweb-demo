import BranchGallery from '../components/BranchGallery';

export default function BusanBranch() {
  const images = [
    'busan1.jpg',
    'busan2.jpg', 
    'busan3.jpg',
    'busan4.jpg',
    'busan5.jpg',
    'busan6.jpg',
    'busan7.jpg',
    'busan8.jpg'
  ];

  return (
    <BranchGallery 
      branchName="Busan"
      cssFile="busan"
      images={images}
    />
  );
}