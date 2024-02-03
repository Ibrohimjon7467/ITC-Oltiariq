// pages
import Main from './components/home/Main';
import Courses from './components/home/Courses';
import Navbar from './components/home/Navbar';
import Teachers from './components/home/Teachers';
import AboutUs from './components/home/AboutUs';
import Contact from './components/home/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Courses />
      <Teachers />
      <AboutUs />
      <Contact />
    </>
  )
}

export default App