import { DragDropTraining } from "./components/DragDropTraining"
import { Example } from "./components/Example"
import { Roles } from "./components/Roles"
import { TrainingOne } from "./components/TrainingOne"
import { VisualExplanation } from "./components/VisualExplanation"

export const FirstPage = () => {

    return (
        <section className='w-full shadow-md flex flex-col items-center p-2 bg-slate-50 md:w-11/12 lg:w-8/12 2xl:w-2/4'>
            <header className='p-3 bg-amber-300 text-center w-full rounded'>
                <h1 className="text-zinc-900 font-bold">مقارنة الأعداد حتى 9</h1>
            </header>

            <Roles />
            <VisualExplanation />
            <h1 className='font-bold text-lg text-red-600 mt-5'>تمارين</h1>
            <TrainingOne />
            <Example />
            <DragDropTraining />
        </section>
    )
}


