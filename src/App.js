import './index.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import SubthemeSection from './components/Subtheme-section'
import SpeakerSection from './components/Speaker-section'
import TopicSection from './components/Topic-section'
import Video from './components/Video'
import RegistrationForm from './components/RegistrationForm.js'
import TicketSection from './components/Ticket-section.js'
import Footer from './components/Footer'


const App = () => {
  return ( 
    <div className='wrapper'>
      <Navbar />
      <Header />
      <Video />
      <SubthemeSection />
      <SpeakerSection />
      <TopicSection />
      <TicketSection />
      <RegistrationForm />
      <Footer />
    </div>
   );
}
 
export default App;
