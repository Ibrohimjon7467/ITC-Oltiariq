import logo from '../../../public/logo.png'
import video from '../../videos/main-bg.mp4'
import { useState } from 'react'

function Main() {

  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
  const [number, setNumber] = useState("")
  const [time, setTime] = useState("")

  const handleClick = () => {
    console.log("Name: " + name)
    console.log("Course: " + course)
    console.log("Number: " + number)
    console.log("Time: " + time)
  }

  // if(name.length === 0) {
  //   alert("Ismingizni kiritmadingiz!")
  // } else if (course.length === 0) {
  //   alert("Kursni tanlamadingiz!")
  // } else if (number.length === 0) {
  //   alert("Telefon raqamingizni kiritmadingiz!")
  // } else if (time.length ===0) {
  //   alert("Kurs vaqtini tanlamadingiz!")
  // }

  return (
    <div className='w-full'>
      <video autoPlay loop muted playsInline className='w-full object-cover h-full mx-0 z-[-1] absolute' src={video}></video>
      <div className="w-full h-full min-h-screen flex items-center z-10 justify-center b">
        <div id='home' className="site-container px-7">
          <div className="uppercase flex flex-col md:flex-row text-center md:text-start items-center gap-3 mt-20 md:mt-8">
            <img className="w-20 h-20 md:w-28 md:h-28" src={logo} alt="It Center Logo" />
            <div className="flex flex-col justify-center gap-[6px]">
              <h1 className='text-2xl md:text-4xl a font-extrabold text-white'>it center</h1>
              <span className="text-xl md:text-2xl a font-bold text-white">oltiariq</span>
            </div>
          </div>

          {/* form */}
          <button className="custom-btn self-start mb-10 btn-8" onClick={() => document.getElementById('my_modal_2').showModal()}><span>Kursga Yozilish</span></button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center">Ma'lumotlaringizni kiriting!</h3>
              <div className="modal-action">
                <form className="flex flex-col gap-4 w-full" method="dialog">
                  <label className="input input-bordered w-full flex items-center gap-2">
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="grow bg-inherit w-full" placeholder="Ism familyangizni kiriting"  required/>
                  </label>
                  <select value={course} onChange={(e) => setCourse(e.target.value)} className="select select-bordered w-full">
                    <option disabled selected>Kursni tanlang!</option>
                    <option>Kompyuter Savodxonligi</option>
                    <option>Frontend Web Dasturlash</option>
                    <option>Web Backend Dasturlash</option>
                    <option>Backend Dasturlash</option>
                    <option>Robototexnika</option>
                    <option>3D Grafik Dizayn</option>
                    <option>Ingliz Tili</option>
                    <option>Individual Kurs</option>
                  </select>
                  <label className="input input-bordered w-full flex items-center gap-2">
                    <input type="number" onChange={(e) => setNumber(e.target.value)} value={number} className="grow bg-inherit w-full" placeholder="Telefon raqamingizni kiriting..." required />
                  </label>
                  <select value={time} onChange={(e) => setTime(e.target.value)} className="select select-bordered w-full">
                    <option disabled selected>Siz uchun kurs qaysi vaqtda bo'lishini hohlaysiz?</option>
                    <option>Kunduzgi</option>
                    <option>Kechki</option>
                    <option>Farqi yo'q</option>
                  </select>
                  <button onClick={handleClick} className="btn mt-4">Ro'yxatdan o'tish</button>
                </form>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  )
}

export default Main