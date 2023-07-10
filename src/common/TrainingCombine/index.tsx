import { ReactNode, SetStateAction } from "react"

interface Props {
    children: ReactNode
    LeftHandSide?: number
    RightHandSide?: number
    ShouldWrite?: boolean
    LeftHandSideChange?: SetStateAction<any>
    RightHandSideChange?: SetStateAction<any>
    IsRightAnswer?: boolean
}

export const TrainingCombine = (props: Props) => {
    return (
        props.ShouldWrite ?
            <section className="flex justify-around items-center w-full p-1">
                <input onChange={(e) => props.RightHandSideChange(e.target.value)} className={`text-lg font-semibold border-2 ${props.IsRightAnswer ? ` border-sky-400 ` : `border-red-600`}  w-8 h-8 flex justify-center items-center`} />
                {props.children}
                <input onChange={(e) => props.LeftHandSideChange(e.target.value)} className={`text-lg font-semibold border-2  ${props.IsRightAnswer ? ` border-sky-400 ` : `border-red-600`}  w-8 h-8 flex justify-center items-center`} />
            </section>
            :
            <section className="flex justify-around items-center w-full p-1">
                <p className={`text-lg font-semibold border-2 ${props.IsRightAnswer ? ` border-sky-400 ` : `border-red-600`}   w-8 h-8 flex justify-center items-center`}>{props.RightHandSide}</p>
                {props.children}
                <p className={`text-lg font-semibold border-2 ${props.IsRightAnswer ? ` border-sky-400 ` : `border-red-600`}   w-8 h-8 flex justify-center items-center`}>{props.LeftHandSide}</p>
            </section>
    )
}
