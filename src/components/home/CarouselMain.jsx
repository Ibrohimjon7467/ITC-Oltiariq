// slider carousel
import Slider from "react-slick";

// images
import savodxonlik from "../../images/komp-savodxon.jpg"
import frontend from "../../images/frontend.jpg"
import webBackend from "../../images/web-backend.jpg"
import backend from "../../images/backend.jpg"
import robotics from "../../images/robotics.jpg"
import designer from "../../images/graphic-design.jpeg"
import english from "../../images/english.jpg"
import individual from "../../images/individual.png"

function CarouselMain() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={{ ...style, display: "block", background: "blue", borderRadius: "50%", display: "flex", alignItems: "center", zIndex: "30", justifyContent: "center", width: "35px", height: "35px", top: "175px", paddingTop: "3px", right: "20px", }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={{ ...style, display: "block", background: "blue", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: "30", width: "35px", height: "35px", top: "175px", left: "20px", paddingTop: "3px", }}
                onClick={onClick}
            />
        );
    }

    let settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 3.02,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.05,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }

    return (
        <div className="site-container font-extrabold mt-[-70px] text-white">
            <Slider {...settings}>
                <div className="relative">
                    <div className="absolute z-10 w-11/12 rounded-3xl h-full bg-[rgba(0,0,0,0.5)] select-none"></div>
                    <img className="w-11/12 sm:h-44 h-36 rounded-3xl object-cover" src={savodxonlik} alt="Kompyuter Savodxonlik" />
                    <h1 className="absolute z-20 font-[800] sm:top-[33%] top-[18%] left-[5%] text-[27px] pr-9 capitalize text-center">Kompyuter savodxonligi kursi</h1>
                </div>
                <div className="relative">
                    <div className="absolute z-10 w-11/12 rounded-3xl h-full bg-[rgba(0,0,0,0.5)]"></div>
                    <img className="w-11/12 sm:h-44 h-36 rounded-3xl object-cover" src={frontend} alt="Front-End Web Dasturlash" />
                    <h1 className="absolute z-20 sm:top-[33%] top-[18%] left-[3%] text-[27px] pr-7 capitalize text-center">Frontend Web dasturlash kursi</h1>
                </div>
                <div className="relative">
                    <div className="absolute z-10 w-11/12 rounded-3xl h-full bg-[rgba(0,0,0,0.5)]"></div>
                    <img className="w-11/12 sm:h-44 h-36 rounded-3xl object-cover" src={webBackend} alt="Web Backend Dasturlash" />
                    <h1 className="absolute z-20 sm:top-[33%] top-[18%] left-[3%] text-[27px] pr-8 capitalize text-center">Web Backend dasturlash kursi</h1>
                </div>
                <div className="relative">
                    <div className="absolute z-10 w-11/12 rounded-3xl h-full bg-[rgba(0,0,0,0.5)]"></div>
                    <img className="w-11/12 sm:h-44 h-36 rounded-3xl object-cover" src={backend} alt="Backend Dasturlash" />
                    <h1 className="absolute z-20 sm:top-[31%] top-[18%] left-[3%] text-[27px] pr-8 capitalize text-center">Java Backend dasturlash kursi</h1>
                </div>
                <div className="relative">
                    <div className="absolute z-10 w-11/12 rounded-3xl h-full bg-[rgba(0,0,0,0.5)]"></div>
                    <img className="w-11/12 sm:h-44 h-36 rounded-3xl object-cover" src={robotics} alt="Robototexnika" />
                    <h1 className="absolute z-20 sm:top-[39%] top-[27%] sm:left-[9%] left-[7%] text-[27px] pr-10 capitalize text-center">Robototexnika kursi</h1>
                </div>
                <div className="relative">
                    <div className="absolute z-10 w-11/12 rounded-3xl h-full bg-[rgba(0,0,0,0.5)]"></div>
                    <img className="w-11/12 sm:h-44 h-36 rounded-3xl object-cover" src={designer} alt="3D Graafik Dizayner" />
                    <h1 className="absolute z-20 sm:top-[35%] top-[18.7%] sm:left-[9%] left-[11%] text-[27px] sm:pr-14 pr-10 capitalize text-center">3D Grafik dizayn kursi</h1>
                </div>
                <div className="relative">
                    <div className="absolute z-10 w-11/12 rounded-3xl h-full bg-[rgba(0,0,0,0.5)]"></div>
                    <img className="w-11/12 sm:h-44 h-36 rounded-3xl object-cover" src={english} alt="Ingliz Tili" />
                    <h1 className="absolute z-20 sm:top-[38%] top-[25%] sm:left-[19%] left-[10%] text-[27px] pr-10 capitalize text-center">Ingliz tili kursi</h1>
                </div>
                <div className="relative">
                    <div className="absolute z-10 w-11/12 rounded-3xl h-full bg-[rgba(0,0,0,0.5)]"></div>
                    <img className="w-11/12 sm:h-44 h-36 rounded-3xl object-cover" src={individual} alt="Individual" />
                    <h1 className="absolute z-20 sm:top-[38%] top-[25%] sm:left-[19%] left-[10%] text-[27px] pr-10 capitalize text-center">Individual Kurs</h1>
                </div>
            </Slider>
        </div>
    )
}

export default CarouselMain