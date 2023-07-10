import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { FirstPage } from './pages/FirstPage'
import { LadingScreen } from './common/LoadingScreen'
const SecondPage = lazy(() => import('./pages/SecondPage'))

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

    <Suspense fallback={<LadingScreen />}>

      <section data-testid="app" className='w-screen min-h-screen flex flex-col justify-center items-center p-3 mb-2 relative overflow-scroll md:mb-5 lg:mb-8'>
        {PageIndex === 0 ?
          <FirstPage />
          :
          <SecondPage />
        }
        <section style={{ display: NavButtonsActive ? "flex" : "none" }} className={`fixed bottom-0 w-full px-10 pb-3 ${PageIndex == 0 ? ` justify-start` : `justify-end`} `}>
          <button onClick={() => setPageIndex(PageIndex === 0 ? 1 : 0)} className='font-bold text-3xl text-cyan-500 animate-bounce md:text-4xl lg:text-5xl 2xl:text-6xl'>{PageIndex == 0 ? "<" : ">"}</button>
        </section>
        <span className='w-full' ref={BottomRef} ></span>
      </section>
    </Suspense>
  )
}

export default App
