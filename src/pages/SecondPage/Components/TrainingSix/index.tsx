import { useContext, useEffect, useState } from 'react'
import { TrainingButton } from '../../../../common/TrainingButtons'
import { TrainingCombine } from '../../../../common/TrainingCombine'
import { TrainingHeader } from '../../../../common/TrainingHeader'
import { TrainingIcons } from '../../../../common/TrainingIcons'
import { GlobalContext } from '../../../../setup/ContextManger/GlobalContext'
import { FiveDish, SixGirls } from '../../utils'

export const TrainingSix = () => {
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
        <section className='flex flex-col w-full justify-center py-3 '>
            <TrainingHeader
                TrainingNumber={6}
            >
                <p className=' break-words w-fit'>عدد الصحون على المائدة 5 وعدد </p>
                <p className=' break-words w-fit mx-1'>الجالسين 6 أي العددين أصغر؟</p>
            </TrainingHeader>

            <TrainingIcons LeftHandSide={FiveDish} RightHandSide={SixGirls} />
            <TrainingCombine ShouldWrite={true} LeftHandSideChange={setLeftHandInputValue} RightHandSideChange={setRightHandInputValue}>
                <p className='font-bold text-3xl'>{selectedIcon}</p>
            </TrainingCombine>

            <TrainingButton setSelectedIcon={setSelectedIcon} />
        </section>
    )
}
