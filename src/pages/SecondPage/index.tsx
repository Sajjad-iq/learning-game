import { TrainingSix } from "./Components/TrainingSix"
import { TrainingThree } from "./Components/TrainingThree"
import { TrainingFive } from "./Components/TrainingFive"
import { TrainingFour } from "./Components/TrainingFour"
import { useRef, useEffect } from "react"


const SecondPage = () => {

    const FocusREf = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (FocusREf.current) FocusREf.current.focus()
    }, [])

    return (
        <section ref={FocusREf} className='w-full shadow-md flex flex-col items-center p-2 bg-slate-50 md:w-11/12 lg:w-8/12 2xl:w-2/4'>
            <h1 className='font-bold text-lg text-red-600 mt-5'>تمارين</h1>
            <TrainingThree />
            <TrainingFour />
            <TrainingFive />
            <TrainingSix />
        </section>
    )
}

export default SecondPage
