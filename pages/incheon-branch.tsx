import BranchGallery from '../components/BranchGallery';

export default function IncheonBranch() {
  const images = [
    'incheon1.jpg',
    'incheon2.jpg', 
    'incheon3.jpg',
    'incheon4.jpg',
    'incheon5.jpg',
    'incheon6.jpg',
    'incheon7.jpg',
    'incheon8.jpg'
  ];

  return (
    <BranchGallery 
      branchName="Incheon"
      cssFile="incheon"
      images={images}
    />
  );
}