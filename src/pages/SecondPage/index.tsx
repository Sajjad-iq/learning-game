import { DragDropTraining } from "../FirstPage/components/DragDropTraining"
import { SecundDragDropTraining } from "../FirstPage/components/SecundDragDropTraining"
import { TrainingOne } from "../FirstPage/components/TrainingOne"

export const SecondPage = () => {

    return (
        <section className='w-full shadow-md flex flex-col items-center p-2 bg-slate-50 md:w-11/12 lg:w-8/12 2xl:w-2/4'>
            <h1 className='font-bold text-lg text-red-600 mt-5'>تمارين</h1>
            <TrainingOne />
            <DragDropTraining />
            <SecundDragDropTraining />
        </section>
    )
}
