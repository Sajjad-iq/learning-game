import React, { useContext, useEffect, useState } from 'react'
import { TrainingCombine } from '../../../../common/TrainingCombine'
import { TrainingHeader } from '../../../../common/TrainingHeader'
import { TrainingIcons } from '../../../../common/TrainingIcons'
import { GlobalContext } from '../../../../setup/ContextManger/GlobalContext'
import { SixCarrots, ThreeCarrots } from '../../../FirstPage/utils'
import { TrainingButton } from '../../../../common/TrainingButtons'

export const TrainingFour = () => {

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
                TrainingNumber={4}
            >
                <p className=' break-words w-fit'>مع ماهر 6 أقلام ومع هند5 من لديه  </p>
                <p className=' break-words w-fit mx-1'>أقلام أكثر </p>
            </TrainingHeader>

            <section className='flex w-full justify-between px-2'>
                <p className='font-semibold text-base'>اقلام هند</p>
                <p className='font-semibold text-base'>اقلام ماهر</p>
            </section>
            <TrainingIcons LeftHandSide={SixCarrots} RightHandSide={ThreeCarrots} />
            <TrainingCombine ShouldWrite={false} LeftHandSide={SixCarrots.length} RightHandSide={ThreeCarrots.length} >
                <p className='font-bold text-3xl'>{selectedIcon}</p>
            </TrainingCombine>

            <TrainingButton setSelectedIcon={setSelectedIcon} />
        </section>
    )
}
