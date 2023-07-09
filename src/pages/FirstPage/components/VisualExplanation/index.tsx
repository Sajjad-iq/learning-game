import { SixCarrots, ThreeCarrots } from "../../utils"

export const VisualExplanation = () => {
    return (
        <article className='w-full rounded my-1 p-3 flex flex-col items-center border-b-2 pb-4 '>

            <section className="flex flex-row  p-1 ">
                {SixCarrots.map((e: string, i) => {
                    return <img src={e} key={i} alt='carrot' className='w-8 m-1' />
                })}
            </section>
            <h2 className='font-bold text-lg text-red-600'>ست جزرات</h2>

            <section className="flex flex-row  p-1 m-1 ">
                {ThreeCarrots.map((e: string, i) => {
                    return <img src={e} key={i} alt='carrot' className='w-8 m-1' />
                })}
            </section>

            <h2 className='font-bold text-lg text-red-600 '>ثلاث جزرات</h2>

            <section className="w-full flex flex-col mt-5">
                <p className="text-base font-medium">ستة أكبر من ثلاثة لذالك تكتب</p>
                <p className='font-bold text-lg text-red-600 py-2'>{"6 > 3"}</p>
                <p className="text-base font-medium">لاحظ ان اتجاه المؤشر يشير للعدد الاصغر دائما</p>
            </section>
        </article>
    )
}
