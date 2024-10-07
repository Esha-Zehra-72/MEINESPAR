import React, { useState } from 'react';
import BrandImagesCarousel from '../Components/BrandImagesCarousel/BrnadImagesCarousel';
import HeroSection from '../Components/HeroSection/HeroSection';
import GroupButtons from '../Components/GroupButtons/GroupButtons';
import AssessoriesCopen from '../Components/AssessoriesCopen/AssessoriesCopen';
// Import additional components for other categories here
import BabiesCopen from '../Components/BabiesCopen/BabiesCopen'; // Example component for Babies
import ElectronicsCopen from '../Components/ElectronicsCopen/ElectronicsCopen'; // Example component for Electronics
import HealthCareCopen from '../Components/HealthCareCopen/HealthCareCopen'; // Example component for Health Care
import BikeCopne from '../Components/BikeCopen/BikeCopne';
import Counter from '../Components/Counter/Counter';
import ScaleImg from '../Components/ScaleImg/ScaleImg';
import ImageAndText from '../Components/ImageAndText/ImageAndText';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleShowCategory = (category) => {
    setActiveCategory(category);
  };

  const renderCategoryComponent = () => {
    switch (activeCategory) {
      case 'accessories':
        return <AssessoriesCopen />;
      case 'babies':
        return <BabiesCopen/>;
      case 'bike':
        return <BikeCopne/>;
      case 'electronics':
        return <ElectronicsCopen />;
      case 'healthCare':
        return <HealthCareCopen />;
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: "#e8e8e8" }}>
      <BrandImagesCarousel />
      <HeroSection />
      <GroupButtons onShowCategory={handleShowCategory} activeCategory={activeCategory}/>
      {renderCategoryComponent()}
      <Counter/>
      <ScaleImg/>
      <ImageAndText/>
    </div>
  );
};

export default HomePage;
