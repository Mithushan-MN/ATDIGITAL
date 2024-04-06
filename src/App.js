
import './App.css';
import Header from './Components/Header/Header';
import Herobox from './Components/Hero/Hero-box';
import Hero from './Components/Hero/Hero';
import Section1 from './Components/section1/Section1';
import Section2 from './Components/section2/Section2';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/navbar/Navbar';

function App() {
  return (
    <div>
      {/* <Header/> */}
      <Navbar/>
      <Hero/>
      <Herobox/>
      <Section1/>
      <Section2/>
      <Faq/>
      <Footer/>
    </div>
    
  );
}

export default App;
