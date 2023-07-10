import pin from '../../../../assets/icons/—Pngtree—red pin_5008511.webp'

export const Roles = () => {
    return (
        <article className='w-full border-2 border-red-400 rounded  my-3 p-2 bg-amber-100 relative  flex flex-col items-start'>
            <img src={pin} alt='red pin' className='absolute w-14 h-14 top-0 left-0 ' />

            <h2 className='font-bold text-lg text-red-600'>فكرة الدرس</h2>
            <p >اقارن بين عددين حتى 9</p>
            <h2 className='font-bold text-lg text-red-600'>المفردات</h2>
            <p>اقارن بين عددين حتى 9</p>
            <p>{">  اكبر من"}</p>
            <p>{"<  اصغر من"}</p>
            <p>{"=  يساوي"}</p>
        </article>
    )
}
