import { useState } from "react"
import axios from "axios"

function WriteToUs() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Name: " + name)
    console.log("Email: " + email)
    console.log("Text: " + text)

    if(name.length === 0) {
      alert("Ism kiritilmadi!")
    } else if (email.length === 0) {
      alert("Email kiritilmadi!")
    } else if (text.length === 0) {
      alert("Matn yozilmadi!")
    } else {
      const url = "http://localhost/enquiry.php";

      let fData = new FormData()
      fData.append("name", name)
      fData.append("email", email)
      fData.append("text", text)

      axios.post(url, fData)
       .then(response => alert(response.data))
       .catch(error => alert(error))
    }
  }

  return (
    <div id="write-to-us" className="site-container flex flex-col py-5 mb-10">
      <h1 className='text-4xl font-extrabold mb-10 line self-start w-full text-[#A8A5A8]'>напишите нам</h1>
      <h3 className="font-bold text-lg text-center mb-5">введите свои данные!</h3>
      <form onSubmit={handleSubmit} className="flex flex-col self-center w-full sm:6/12 md:w-8/12 gap-4">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <label className="input input-bordered w-full sm:w-6/12 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="grow bg-inherit w-full" placeholder="Ismingizni kiriting..." />
            </label>
            <label className="input input-bordered w-full sm:w-6/12 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="grow bg-inherit w-full" placeholder="Emailingizni kiriting..." />
            </label>
          </div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} className="textarea textarea-bordered h-32" placeholder="Shu yerga yozing..."></textarea>
        </div>
        <button className="btn btn-info">Отправить</button>
      </form>
    </div>
  )
}

export default WriteToUs