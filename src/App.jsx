import { Header } from './components/Header.jsx';
import { NavigationBar } from './components/NavigationBar.jsx';
import { IntroSection } from './components/IntroSection.jsx';
import { FutureEventsSection } from './components/FutureEventsSection.jsx';
import { GallerySection } from './components/GallerySection.jsx';

function App() {
  return (
    <>
      <Header />
      <NavigationBar />
      <IntroSection />
      <h1>Nasledujúca akcia </h1>
      <FutureEventsSection />
      <h1>Galéria</h1>
      <GallerySection />
    </>
  );
}

export default App;
