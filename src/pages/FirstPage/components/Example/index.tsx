import { TrainingCombine } from '../../../../common/TrainingCombine'
import { TrainingHeader } from '../../../../common/TrainingHeader'
import { TrainingIcons } from '../../../../common/TrainingIcons'
import { fiveBaseBall, fourSwimmingBall } from '../../utils'

export const Example = () => {

    return (
        <section className='w-full flex flex-col border-b-2 py-6 '>
            <TrainingHeader
                TrainingNumber={2}
            >
                <p className='w-fit'>أكتب العدد في</p>
                <span className="border-2 border-sky-400 w-7 h-7 mx-2"></span>
                <p className='w-fit'>وأضع الرمز المناسب </p>
                <p className='w-fit font-bold text-lg'>{"< , > , ="}</p>
            </TrainingHeader>

            <h2 className='font-bold text-red-700'>مثال :</h2>

            <TrainingIcons LeftHandSide={fourSwimmingBall} RightHandSide={fiveBaseBall} />
            <TrainingCombine ShouldWrite={false} LeftHandSide={fourSwimmingBall.length} RightHandSide={fiveBaseBall.length} >
                <p className='font-bold text-xl'>{">"}</p>
            </TrainingCombine>
        </section>
    )
}
