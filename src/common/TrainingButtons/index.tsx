import { SetStateAction } from 'react'
import { icons } from './utils'
interface Props {
    setSelectedIcon: SetStateAction<any>
}
export const TrainingButton = (props: Props) => {
    return (
        <section className='w-full flex flex-row items-center justify-center my-3'>
            {icons.map((e: any) => {
                return <button className='font-bold text-2xl mx-3 border-2 rounded border-neutral-900 flex justify-center items-center  w-8 h-8 ' key={e} onClick={() => props.setSelectedIcon(e)}>{e}</button>
            })}
        </section>
    )
}
