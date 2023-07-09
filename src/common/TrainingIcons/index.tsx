
interface Props {
    LeftHandSide: Array<string>
    RightHandSide: Array<string>
}
export const TrainingIcons = (props: Props) => {
    return (
        <section className='flex flex-row justify-between items-center w-full p-1 my-2'>
            <section className='flex flex-row border-2 border-x-orange-300 p-1' >
                {props.RightHandSide.map((e: string, i) => {
                    return <img src={e} key={i} alt='icon' className='w-6 h-6 m-sm' />
                })}
            </section>

            <section className='flex flex-row border-2 border-x-orange-300 p-1 ' >
                {props.LeftHandSide.map((e: string, i) => {
                    return <img src={e} key={i} alt='icon' className='w-6 h-6 m-sm' />
                })}
            </section>
        </section>
    )
}
