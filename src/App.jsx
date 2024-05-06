import { Header } from './components/Header.jsx';
import { NavigationBar } from './components/NavigationBar.jsx';
import { IntroSection } from './components/IntroSection.jsx';
import { FutureEventsSection } from './components/FutureEventsSection.jsx';
import { GallerySection } from './components/GallerySection.jsx';
import { SponsorsSection } from './components/SponsorsSection.jsx';
import { useState } from 'react';

const images = ['/gallery/intro-image.png'];

for (let i = 1; i < 11; i++) {
  images.push(`/gallery/img${i}.png`);
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <>
      <Header />
      <NavigationBar />
      <IntroSection images={images}/>
      <h1>Nasledujúca akcia </h1>
      <FutureEventsSection />
      <h1>Galéria</h1>
      <GallerySection images={images} currentIndex={currentIndex}/>
      <h1>Sponzori</h1>
      <SponsorsSection />
    </>
  );
}

export default App;
