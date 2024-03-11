// pages
import Navbar from './../components/home/Navbar';
import Main from '../components/home/Main';
import CarouselMain from '../components/home/CarouselMain';
import Courses from './../components/home/Courses';
// import Teachers from './../components/home/Teachers';
// import AboutUs from './../components/home/AboutUs';
import WriteToUs from '../components/home/WriteToUs';
import Contact from './../components/home/Contact';

function Home() {
    return (
        <>
            <Navbar />
            <Main />
            <CarouselMain />
            <Courses />
            {/* <Teachers /> */}
            {/* <AboutUs /> */}
            <WriteToUs />
            <Contact />
        </>
    )
}

export default Home