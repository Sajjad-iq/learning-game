import { useEffect, useRef } from "react"
import { Example } from "./components/Example"
import { Roles } from "./components/Roles"
import { TrainingOne } from "./components/TrainingOne"
import { TrainingTow } from "./components/TrainingTow"
import { VisualExplanation } from "./components/VisualExplanation"

export const FirstPage = () => {

    const FocusREf = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (FocusREf.current) FocusREf.current.focus()
    }, [])

    return (
        <section data-testid="first-page" className='w-full shadow-md flex flex-col items-center p-2 bg-slate-50 md:w-11/12 lg:w-8/12 2xl:w-2/4'>
            <header className='p-3 bg-amber-300 text-center w-full rounded my-3'>
                <h1 ref={FocusREf} className="text-zinc-900 font-bold" >مقارنة الأعداد حتى 9</h1>
            </header>

            <Roles />
            <VisualExplanation />
            <h1 className='font-bold text-lg text-red-600 mt-5'>تمارين</h1>
            <TrainingOne />
            <Example />
            <TrainingTow />
        </section>
    )
}


