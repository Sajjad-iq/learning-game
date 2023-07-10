import { useContext, useState } from 'react'
import { TrainingCombine } from '../../../../common/TrainingCombine'
import { TrainingHeader } from '../../../../common/TrainingHeader'
import { TrainingIcons } from '../../../../common/TrainingIcons'
import { SixCarrots, ThreeCarrots } from '../../utils'
import { GlobalContext } from '../../../../setup/ContextManger/GlobalContext'

export const TrainingOne = () => {

    const { WinSound, LoseSound } = useContext(GlobalContext)
    const [rightAnswer, setRightAnswer] = useState(false)
    const [wrongAnswer, setWrongAnswer] = useState(false)

    const Lose = () => {
        LoseSound()
        setWrongAnswer(true)
        setRightAnswer(false)
        window.alert("خطأ")
    }

    const Win = () => {
        WinSound()
        setRightAnswer(false)
        setRightAnswer(true)
    }

    return (
        <section className='w-full flex flex-col border-b-2 pb-4'>
            <TrainingHeader
                TrainingNumber={1}
            >
                <p className=' break-words w-fit'>قارن بين عددين واضغط على الإجابة </p>
                <p className=' break-words w-fit mx-1'> الصحيحة</p>
            </TrainingHeader>

            <TrainingIcons LeftHandSide={SixCarrots} RightHandSide={ThreeCarrots} />
            <TrainingCombine ShouldWrite={false} LeftHandSide={SixCarrots.length} RightHandSide={ThreeCarrots.length} >
                <section className='flex flex-col'>
                    <button className={`font-semibold bg-gray-300 p-2 m-1 rounded ${wrongAnswer ? ` text-red-600` : ` text-gray-900`}`} onClick={Lose} >ثلاثة أكبر من ستة؟</button>
                    <button className={`font-semibold bg-gray-300 p-2 m-1  rounded ${rightAnswer ? `text-green-600` : ` text-gray-900`}`} onClick={Win}>ثلاثة أصغر من ستة؟</button>
                </section>
            </TrainingCombine>
        </section>
    )
}
