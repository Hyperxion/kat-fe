import { Header } from './components/Header.jsx';
import { NavigationBar } from './components/NavigationBar.jsx';
import { IntroSection } from './components/IntroSection.jsx';
import { FutureEventsSection } from './components/FutureEventsSection.jsx';

function App() {
  return (
    <>
      <Header />
      <NavigationBar />
      <IntroSection />
      <FutureEventsSection />
    </>
  );
}

export default App;
