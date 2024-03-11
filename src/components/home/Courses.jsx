import html from "../../images/html-5-logo.svg"

function Courses() {
  return (
    <div id='courses' className='site-container mb-10 mt-20'>
      <h1 className='text-4xl font-extrabold mb-20 line text-[#A8A5A8]'>НАШИ КУРСЫ</h1>
      <div className="flex flex-wrap justify-between">
        <div className="mb-10">
          <div className="flex items-center gap-6">
            <div><img className="w-12" src={html} alt="html-logo" /></div>
            <div className="flex flex-col text-[#2a284f]">
              <h4 className="text-xl font-bold">Курс «Веб-программирование»</h4>
              <span className="badge badge-secondary border-none text-[#2A284F] bg-[#7DBA28] rounded-[0.2rem] p-2 text-[0.60rem] font-semibold mt-4">6 месяцев</span>
              <span>
                <p className="text-[1rem] font-bold mt-2">Необходимый уровень:</p>
                <p className="text-[1rem] font-thin">Курс для начинающих</p>
              </span>
              <div className="flex items-center text-[1rem] font-bold">
                <div className="my-3">Ближайшая группа:&nbsp;</div>
                <div>Февраль 2024г.</div>
              </div>
              <div>
                <p className="text-[1rem] font-bold">Стоимость за месяц:</p>
                <div>
                  <div className="badge badge-primary border-none text-white text-base rounded-md py-3 px-2 mt-2 font-semibold bg-[#7DBA28]">400 000 сум</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div className="flex items-center gap-5">
            <div>
              <img className="w-12" src={html} alt="html-logo" />
            </div>
            <div className="flex flex-col text-[#2a284f]">
              <h4 className="text-xl font-bold">Курс «Веб-программирование»</h4>
              <span className="badge badge-secondary border-none text-[#2A284F] bg-[#7DBA28] rounded-[0.2rem] p-2 text-[0.60rem] font-semibold mt-4">6 месяцев</span>
              <span>
                <p className="text-[1rem] font-bold mt-2">Необходимый уровень:</p>
                <p className="text-[1rem] font-thin">Курс для начинающих</p>
              </span>
              <div className="flex items-center text-[1rem] font-bold">
                <div className="my-3">Ближайшая группа:&nbsp;</div>
                <div>Февраль 2024г.</div>
              </div>
              <div>
                <p className="text-[1rem] font-bold">Стоимость за месяц:</p>
                <div>
                  <div className="badge badge-primary border-none text-white text-base rounded-md py-3 px-2 mt-2 font-semibold bg-[#7DBA28]">400 000 сум</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div className="flex items-center gap-5">
            <div>
              <img className="w-12" src={html} alt="html-logo" />
            </div>
            <div className="flex flex-col text-[#2a284f]">
              <h4 className="text-xl font-bold">Курс «Веб-программирование»</h4>
              <span className="badge badge-secondary border-none text-[#2A284F] bg-[#7DBA28] rounded-[0.2rem] p-2 text-[0.60rem] font-semibold mt-4">6 месяцев</span>
              <span>
                <p className="text-[1rem] font-bold mt-2">Необходимый уровень:</p>
                <p className="text-[1rem] font-thin">Курс для начинающих</p>
              </span>
              <div className="flex items-center text-[1rem] font-bold">
                <div className="my-3">Ближайшая группа:&nbsp;</div>
                <div>Февраль 2024г.</div>
              </div>
              <div>
                <p className="text-[1rem] font-bold">Стоимость за месяц:</p>
                <div>
                  <div className="badge badge-primary border-none text-white text-base rounded-md py-3 px-2 mt-2 font-semibold bg-[#7DBA28]">400 000 сум</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div className="flex items-center gap-5">
            <div>
              <img className="w-12" src={html} alt="html-logo" />
            </div>
            <div className="flex flex-col text-[#2a284f]">
              <h4 className="text-xl font-bold">Курс «Веб-программирование»</h4>
              <span className="badge badge-secondary border-none text-[#2A284F] bg-[#7DBA28] rounded-[0.2rem] p-2 text-[0.60rem] font-semibold mt-4">6 месяцев</span>
              <span>
                <p className="text-[1rem] font-bold mt-2">Необходимый уровень:</p>
                <p className="text-[1rem] font-thin">Курс для начинающих</p>
              </span>
              <div className="flex items-center text-[1rem] font-bold">
                <div className="my-3">Ближайшая группа:&nbsp;</div>
                <div>Февраль 2024г.</div>
              </div>
              <div>
                <p className="text-[1rem] font-bold">Стоимость за месяц:</p>
                <div>
                  <div className="badge badge-primary border-none text-white text-base rounded-md py-3 px-2 mt-2 font-semibold bg-[#7DBA28]">400 000 сум</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses