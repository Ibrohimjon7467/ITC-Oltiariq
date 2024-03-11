// images
import telegram from "../../images/telegram.svg";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";

function Contact() {
  return (
    <div id="contact" className="w-full flex flex-col md:flex-row relative h-96 sm:h-80">
      <div style={{ width: "100%", height: "100%", }}>
        <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=IT%20Center%20Oltiariq+(IT%20Center%20Oltiariq)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
      </div>

      <div className="md:absolute rounded-none md:rounded-md capitalize text-white md:text-black font-bold top-2 px-5 py-5 md:py-3 flex flex-col md:flex-col sm:flex-row justify-between gap-2 right-12 bg-[#333] md:bg-white">
        <div className="flex flex-col items-center md:items-start sm:items-start gap-2">
          <h1 className="text-xs lg:text-sm">farg'ona viloyati.</h1>
          <h1 className="text-xs lg:text-sm">oltiariq tumani.</h1>
          <h1 className="text-xs lg:text-sm">mo'ljal: <span>tuman Markazi, <br /> agrobank filliali, 2-qavat.</span></h1>
        </div>
        <div className="flex flex-col items-center md:items-start sm:items-start gap-2">
          <h1 className="text-xs lg:text-sm">murojaat uchun: <span>+998 (90) 123 45 67</span></h1>
          <div className="flex flex-col">
            <h1 className="text-xs lg:text-sm">ijtimoiy tarmoqlarimiz:</h1> <br />
            <div className="flex px-0 gap-5 md:px-5 w-full justify-between items-center">
              <a href="#">
                <img className="w-[17px] lg:w-4" src={telegram} alt="telegram logo svg" />
              </a>
              <a href="#">
                <img className="w-[17px] lg:w-4" src={instagram} alt="instagram logo svg" />
              </a>
              <a href="#">
                <img className="w-[17px] lg:w-4" src={facebook} alt="facebook logo svg" />
              </a>
              <a href="#">
                <img className="w-[17px] lg:w-4" src={twitter} alt="twitter logo svg" />
              </a>
              <a href="#">
                <img className="w-[17px] lg:w-4" src={linkedin} alt="linkedin logo svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact