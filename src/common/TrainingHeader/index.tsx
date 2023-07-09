import { ReactNode } from 'react'

interface Props {
    TrainingNumber: number
    children: ReactNode
    wrap?: boolean
}
export const TrainingHeader = (props: Props) => {
    return (
        <section className='flex flex-row items-center mt-2 mb-5 flex-wrap'>
            <h2 className={`shadow-lg text-bold text-xl bg-red-400 w-10 h-10 flex justify-center items-center rounded-full ml-3 text-slate-100`}>{`${props.TrainingNumber}`}</h2>
            {props.children}
        </section>
    )
}
