import { useContext, useEffect, useState } from 'react'
import { TrainingButton } from '../../../../common/TrainingButtons'
import { TrainingCombine } from '../../../../common/TrainingCombine'
import { TrainingIcons } from '../../../../common/TrainingIcons'
import { GlobalContext } from '../../../../setup/ContextManger/GlobalContext'
import { TrainingHeader } from '../../../../common/TrainingHeader'
import { FourTrees, TowTrees } from '../../utils'

export const TrainingFive = () => {
    const [selectedIcon, setSelectedIcon] = useState("")
    const [LeftHandInputValue, setLeftHandInputValue] = useState("")
    const [RightHandInputValue, setRightHandInputValue] = useState("")
    const { WinSound, LoseSound } = useContext(GlobalContext)
    const [IsRightAnswer, setIsRightAnswer] = useState(true)

    useEffect(() => {
        if (LeftHandInputValue !== "" && RightHandInputValue !== "" && selectedIcon !== "") {
            if (selectedIcon == "=") {
                if (LeftHandInputValue == RightHandInputValue) {
                    WinSound()
                    setIsRightAnswer(true)
                }
                else {
                    LoseSound()
                    setIsRightAnswer(false)
                }
            } else if (selectedIcon == ">") {
                if (LeftHandInputValue < RightHandInputValue) {
                    WinSound()
                    setIsRightAnswer(true)
                }
                else {
                    LoseSound()
                    setIsRightAnswer(false)
                }
            } else if (selectedIcon == "<") {
                if (LeftHandInputValue > RightHandInputValue) {
                    WinSound()
                    setIsRightAnswer(true)
                }
                else {
                    LoseSound()
                    setIsRightAnswer(false)
                }
            }
        }
    }, [LeftHandInputValue, RightHandInputValue, selectedIcon])


    return (
        <section className='flex flex-col w-full justify-center py-6  border-b-2'>
            <TrainingHeader
                TrainingNumber={5}
            >
                <p className='w-fit'>أكتب العدد في</p>
                <span className="border-2 border-sky-400 w-7 h-7 mx-2"></span>
                <p className='w-fit'>وأضع الرمز المناسب </p>
                <p className='w-fit font-bold text-lg'>{"< , > , ="}</p>
            </TrainingHeader>

            <TrainingIcons LeftHandSide={FourTrees} RightHandSide={TowTrees} />
            <TrainingCombine ShouldWrite={true} LeftHandSideChange={setLeftHandInputValue} RightHandSideChange={setRightHandInputValue}>
                <p style={{ color: IsRightAnswer ? "green" : "red" }} className='font-bold text-3xl'>{selectedIcon}</p>
            </TrainingCombine>

            <TrainingButton setSelectedIcon={setSelectedIcon} />
        </section>
    )
}
