import logo from '../../../public/logo.png'
import video from '../../videos/main-bg.mp4'

function Main() {
  return (
    <div className='w-full'>
      <video autoPlay loop muted playsInline className='w-full object-cover h-[588px] mx-0 z-[-1] absolute' src={video}></video>
      <div className="w-full h-[588px] flex items-center z-10 justify-center b">
        <div id='home' className="site-container px-7">
          <div className="uppercase flex items-center gap-3 mt-8">
            <img className="w-28 h-28" src={logo} alt="It Center Logo" />
            <div className="flex flex-col justify-center gap-[6px]">
              <h1 className='text-4xl a font-extrabold text-white'>it center</h1>
              <span className="text-2xl a font-bold text-white">oltiariq</span>
            </div>
          </div>
          <button className='btn btn-primary mt-16'>Kursga Yozilish</button>
        </div>
      </div>
    </div>
  )
}

export default Main