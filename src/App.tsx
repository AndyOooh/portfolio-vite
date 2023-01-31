import About from 'sections/about/About';
import Cloud from 'sections/Cloud';
import Contact from 'sections/contact/Contact';
// import Embla from 'sections/embla/Embla';
import Landing from 'sections/landing/Landing';
import Skills from 'sections/skills/Skills';
import SlickCarousel from 'sections/daisy/DaisyCarousel';
import Work from 'sections/work/Work';
import RootLayout from './components/Layout';
import SkillsCloud from 'sections/skills/skillsCloud/SkillsCloud copy';
import SkillsCloudOld from 'sections/skills/skillsCloudOld/SkillsCloudOld';
import ReactPureCarousel from 'sections/reactPureCarousel/ReactPureCarousel';
import ChatGptSlider from 'sections/chatGptSlider/ChatGptSlider';
import ReactSlick from 'sections/reactSlick/ReactSlick';

function App() {
  return (
    <RootLayout>
      {/* <SkillsCloudOld /> */}
      <Skills />
      <ReactSlick />
      {/* <ChatGptSlider /> */}
      {/* <ReactPureCarousel /> */}
      <Landing />
      <About />
      <Work />
      {/* <SlickCarousel /> */}
      {/* <Embla /> */}
      {/* <Cloud /> */}
      {/* <SkillsCloudOld /> */}
      {/* <h1>here comes skillsclid</h1> */}
      <Contact />
    </RootLayout>
  );
}

export default App;
