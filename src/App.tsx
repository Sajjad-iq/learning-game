import { useState } from 'react'
import { FirstPage } from './pages/FirstPage'
import { SecondPage } from './pages/SecondPage'



function App() {

  const [PageIndex, setPageIndex] = useState(0)

  return (
    <section className='w-full min-h-screen flex flex-row justify-center items-center bg-slate-100 p-3 mb-16 relative overflow-scroll'>
      {PageIndex === 0 ?
        <FirstPage />
        :
        <SecondPage />
      }
      <section>
        <button style={{ display: PageIndex === 1 ? "none" : "block" }} onClick={() => setPageIndex(1)} className='font-bold text-3xl text-cyan-500 fixed bottom-5 right-10'>{"<"}</button>
        <button style={{ display: PageIndex === 0 ? "none" : "block" }} onClick={() => setPageIndex(0)} className='font-bold text-3xl text-cyan-500 fixed bottom-5 left-10'>{">"}</button>
      </section>
    </section>
  )
}

export default App
