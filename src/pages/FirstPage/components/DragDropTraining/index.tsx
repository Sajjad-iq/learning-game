import { useContext, useEffect, useState } from 'react'
import { TrainingCombine } from '../../../../common/TrainingCombine'
import { TrainingIcons } from '../../../../common/TrainingIcons'
import { fourSwimmingBall, fiveBaseBall } from '../../utils'
import { TrainingButton } from '../../../../common/TrainingButtons'
import { GlobalContext } from '../../../../setup/ContextManger/GlobalContext'


export const DragDropTraining = () => {
    const [selectedIcon, setSelectedIcon] = useState("")
    const [LeftHandInputValue, setLeftHandInputValue] = useState("")
    const [RightHandInputValue, setRightHandInputValue] = useState("")
    const { WinSound, LoseSound } = useContext(GlobalContext)

    useEffect(() => {
        if (LeftHandInputValue !== "" && RightHandInputValue !== "" && selectedIcon !== "") {
            if (selectedIcon == "=") {
                if (LeftHandInputValue == RightHandInputValue) WinSound()
                else LoseSound()
            } else if (selectedIcon == ">") {
                if (LeftHandInputValue < RightHandInputValue) WinSound()
                else LoseSound()
            } else if (selectedIcon == "<") {
                if (LeftHandInputValue > RightHandInputValue) WinSound()
                else LoseSound()
            }
        }
    }, [LeftHandInputValue, RightHandInputValue, selectedIcon])


    return (
        <section className='flex flex-col w-full justify-center py-3  border-b-2'>
            <h2 className=' font-semibold text-lg text-red-700'>قم بكتابة العدد الصحيح ثم اختيار العلامة المناسبة</h2>
            <TrainingIcons LeftHandSide={fourSwimmingBall} RightHandSide={fiveBaseBall} />
            <TrainingCombine ShouldWrite={true} LeftHandSideChange={setLeftHandInputValue} RightHandSideChange={setRightHandInputValue}>
                <p className='font-bold text-3xl'>{selectedIcon}</p>
            </TrainingCombine>

            <TrainingButton setSelectedIcon={setSelectedIcon} />
        </section>
    )
}
