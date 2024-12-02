import './App.css';
import Home from '../src/Component/Home';
import Navbar from './Component/Navbar';
import Portfolio from './Component/Portfolio';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Last from './Component/Last';
function App() {
  return (
    <>
      
      <Navbar />
      <Home />
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
      <Last/>
    </>
  );
}
export default App;
