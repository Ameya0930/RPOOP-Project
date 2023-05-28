import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Searchbar from './components/searchbar';
import About from './components/About'
import Contact from './components/Contact'
function App() {
  return (
   <>
    {/* <rest/> */}
    <Navbar/>
    <Searchbar/>
    <About />
    {/* <Footer/> */}
    <Contact />

   </>
      
  
  );
}

export default App;