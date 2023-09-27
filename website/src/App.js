import './App.css';
import NavBar from './components/[1] navBar/NavBar'
import Contact from './components/[3] contact/Contact'
import Services from './components/[4] services/Services'
import AboutMe from './components/[2] AboutMe/AboutMe'
import Footer from './components/[5] Footer/Footer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Contact/>
      <AboutMe/>
      {/* <Services/> */}
      <Footer/>
    </div>
  );
}

export default App;
