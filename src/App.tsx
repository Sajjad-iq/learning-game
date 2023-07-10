import { useEffect, useRef, useState } from 'react'
import { FirstPage } from './pages/FirstPage'
import { SecondPage } from './pages/SecondPage'



function App() {

  const [PageIndex, setPageIndex] = useState(0)
  const [NavButtonsActive, setNavButtonsActive] = useState(false)
  const BottomRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!BottomRef?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNavButtonsActive(entry.isIntersecting)
        } else {
          setNavButtonsActive(false)
        }
      },
      { rootMargin: "0px" }
    );
    observer.observe(BottomRef.current);
    return () => {
      if (BottomRef?.current) observer.unobserve(BottomRef.current)
    }
  }, [BottomRef])


  return (
    <section className='w-full min-h-screen flex flex-col justify-center items-center p-3 mb-16 relative overflow-scroll'>
      {PageIndex === 0 ?
        <FirstPage />
        :
        <SecondPage />
      }
      <section style={{ display: NavButtonsActive ? "block" : "none" }} >
        <button style={{ display: PageIndex === 1 ? "none" : "block" }} onClick={() => setPageIndex(1)} className='font-bold text-3xl text-cyan-500 fixed bottom-5 right-10'>{"<"}</button>
        <button style={{ display: PageIndex === 0 ? "none" : "block" }} onClick={() => setPageIndex(0)} className='font-bold text-3xl text-cyan-500 fixed bottom-5 left-10'>{">"}</button>
      </section>
      <span className='w-full' ref={BottomRef} ></span>
    </section>
  )
}

export default App
