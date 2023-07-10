import { useContext, useEffect, useState } from 'react'
import { TrainingCombine } from '../../../../common/TrainingCombine'
import { TrainingHeader } from '../../../../common/TrainingHeader'
import { TrainingIcons } from '../../../../common/TrainingIcons'
import { GlobalContext } from '../../../../setup/ContextManger/GlobalContext'
import { TrainingButton } from '../../../../common/TrainingButtons'
import { FivePencils, SixPencils } from '../../utils'

export const TrainingFour = () => {

    const { WinSound, LoseSound } = useContext(GlobalContext)
    const [selectedIcon, setSelectedIcon] = useState("")

    useEffect(() => {
        if (selectedIcon !== "") {
            if (selectedIcon == "=") {
                if (SixPencils.length == FivePencils.length) WinSound()
                else {
                    LoseSound()
                    window.alert("خطأ")
                }
            } else if (selectedIcon == ">") {
                if (SixPencils.length < FivePencils.length) WinSound()
                else {
                    LoseSound()
                    window.alert("خطأ")
                }
            } else if (selectedIcon == "<") {
                if (SixPencils.length > FivePencils.length) WinSound()
                else {
                    LoseSound()
                    window.alert("خطأ")
                }
            }
        }
    }, [selectedIcon])


    return (
        <section className='w-full flex flex-col border-b-2 pb-4'>
            <TrainingHeader
                TrainingNumber={4}
            >
                <p className=' break-words w-fit'>مع ماهر 6 أقلام ومع هند5 من لديه  </p>
                <p className=' break-words w-fit mx-1'>أقلام أكثر </p>
            </TrainingHeader>

            <section className='flex w-full justify-between px-2'>
                <p className='font-semibold text-base'>اقلام هند</p>
                <p className='font-semibold text-base'>اقلام ماهر</p>
            </section>
            <TrainingIcons LeftHandSide={SixPencils} RightHandSide={FivePencils} />
            <TrainingCombine ShouldWrite={false} LeftHandSide={SixPencils.length} RightHandSide={FivePencils.length} >
                <p className='font-bold text-3xl'>{selectedIcon}</p>
            </TrainingCombine>

            <TrainingButton setSelectedIcon={setSelectedIcon} />
        </section>
    )
}
