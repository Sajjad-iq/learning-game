import { useContext, useEffect, useState } from 'react'
import { TrainingCombine } from '../../../../common/TrainingCombine'
import { TrainingHeader } from '../../../../common/TrainingHeader'
import { TrainingIcons } from '../../../../common/TrainingIcons'
import { GlobalContext } from '../../../../setup/ContextManger/GlobalContext'
import { SixCarrots, ThreeCarrots } from '../../../FirstPage/utils'
import { TrainingButton } from '../../../../common/TrainingButtons'

export const TrainingThree = () => {

    const { WinSound, LoseSound } = useContext(GlobalContext)
    const [selectedIcon, setSelectedIcon] = useState("")

    useEffect(() => {
        if (selectedIcon !== "") {
            if (selectedIcon == "=") {
                if (SixCarrots.length == ThreeCarrots.length) WinSound()
                else LoseSound()
            } else if (selectedIcon == ">") {
                if (SixCarrots.length < ThreeCarrots.length) WinSound()
                else LoseSound()
            } else if (selectedIcon == "<") {
                if (SixCarrots.length > ThreeCarrots.length) WinSound()
                else LoseSound()
            }
        }
    }, [selectedIcon])

    return (
        <section className='w-full flex flex-col border-b-2 pb-4'>
            <TrainingHeader
                TrainingNumber={3}
            >
                <p className=' break-words w-fit'>قارن بين عددين ثم ضع العلامة  </p>
                <p className=' break-words w-fit'> الصحيحة</p>
            </TrainingHeader>

            <TrainingIcons LeftHandSide={SixCarrots} RightHandSide={ThreeCarrots} />
            <TrainingCombine ShouldWrite={false} LeftHandSide={SixCarrots.length} RightHandSide={ThreeCarrots.length} >
                <p className='font-bold text-3xl'>{selectedIcon}</p>
            </TrainingCombine>
            <TrainingButton setSelectedIcon={setSelectedIcon} />
        </section>
    )
}
