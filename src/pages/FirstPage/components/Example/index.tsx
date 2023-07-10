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

            <section className="flex justify-around items-center w-full p-1">
                <p className=" text-lg font-semibold border-2 border-gray-800 bor w-8 h-8 flex justify-center items-center">{5}</p>
                <p className='font-bold text-3xl'>{">"}</p>
                <p className=" text-lg font-semibold border-2 border-gray-800 w-8 h-8 flex justify-center items-center">{4}</p>
            </section>
        </section>
    )
}
