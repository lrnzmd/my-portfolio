import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Expiriences from './components/expiriences/Expiriences';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Nav />
        <About/>
        <Expiriences/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
