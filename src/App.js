
import './App.css';
import { Banner, Contact, Footer, Newsletter, Skills, Team, Testimonials } from './Sections';
import { BackToTopBtn } from './component';

function App() {
  return (
    <div className="App overflow-hidden">
      <Banner />
      <Testimonials />
      <Skills />
      <Team />
      <Newsletter />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  );
}

export default App;
