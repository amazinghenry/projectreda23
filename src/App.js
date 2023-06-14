import './index.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import SubthemeSection from './components/Subtheme-section'
import SpeakerSection from './components/Speaker-section'
import TopicSection from './components/Topic-section'
import Video from './components/Video'


const App = () => {
  return ( 
    <div>
      <Navbar />
      <Header />
      <Video />
      <SubthemeSection />
      <SpeakerSection />
      <TopicSection />
    </div>
   );
}
 
export default App;
