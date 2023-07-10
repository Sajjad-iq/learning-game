import { useContext, useEffect, useState } from 'react'
import { TrainingCombine } from '../../../../common/TrainingCombine'
import { TrainingHeader } from '../../../../common/TrainingHeader'
import { TrainingIcons } from '../../../../common/TrainingIcons'
import { GlobalContext } from '../../../../setup/ContextManger/GlobalContext'
import { TrainingButton } from '../../../../common/TrainingButtons'
import { ThreeGhosts, FiveGhosts } from '../../utils'

export const TrainingThree = () => {

    const { WinSound, LoseSound } = useContext(GlobalContext)
    const [selectedIcon, setSelectedIcon] = useState("")
    const [IsRightAnswer, setIsRightAnswer] = useState(true)


    useEffect(() => {
        if (selectedIcon !== "") {
            if (selectedIcon == "=") {
                if (ThreeGhosts.length == FiveGhosts.length) {
                    WinSound()
                    setIsRightAnswer(true)
                }
                else {
                    LoseSound()
                    setIsRightAnswer(false)
                }
            } else if (selectedIcon == ">") {
                if (ThreeGhosts.length < FiveGhosts.length) {
                    WinSound()
                    setIsRightAnswer(true)
                }
                else {
                    LoseSound()
                    setIsRightAnswer(false)
                }
            } else if (selectedIcon == "<") {
                if (ThreeGhosts.length > FiveGhosts.length) {
                    WinSound()
                    setIsRightAnswer(true)
                }
                else {
                    LoseSound()
                    setIsRightAnswer(false)
                }
            }
        }
    }, [selectedIcon])

    return (
        <section className='w-full flex flex-col border-b-2 py-6'>
            <TrainingHeader
                TrainingNumber={3}
            >
                <p className=' break-words w-fit'>قارن بين عددين ثم ضع العلامة  </p>
                <p className=' break-words w-fit mx-1'> الصحيحة</p>
            </TrainingHeader>

            <TrainingIcons LeftHandSide={ThreeGhosts} RightHandSide={FiveGhosts} />
            <TrainingCombine ShouldWrite={false} LeftHandSide={ThreeGhosts.length} RightHandSide={FiveGhosts.length} >
                <p style={{ color: IsRightAnswer ? "green" : "red" }} className='font-bold text-3xl'>{selectedIcon}</p>
            </TrainingCombine>
            <TrainingButton setSelectedIcon={setSelectedIcon} />
        </section>
    )
}
