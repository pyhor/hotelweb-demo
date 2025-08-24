import BranchGallery from '../components/BranchGallery';

export default function GangnamBranch() {
  const images = [
    'gangnam1.jpg',
    'gangnam2.jpg', 
    'gangnam3.jpg',
    'gangnam4.jpg',
    'gangnam5.jpg',
    'gangnam6.jpg',
    'gangnam7.jpg',
    'gangnam8.jpg'
  ];

  return (
    <BranchGallery 
      branchName="Gangnam"
      cssFile="gangnam"
      images={images}
    />
  );
}