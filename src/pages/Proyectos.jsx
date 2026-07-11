import Cards from '../components/Cards'
import { cardsPages } from '../data/cardsPages'

function Proyectos() {

    const datos = cardsPages

    return (
        <div className='pt-24 md:pt-0 pb-5 selection:bg-transparent text-mono flex flex-col md:items-start w-full lg:py-14'>
            <div id='proyectos' className='h-full md:ml-6 border-x border-t mb-12 md:mb-0 p-5 rounded-t-lg'>
                <h2 className='w-full text-2xl lg:text-4xl font-bold mb-2'>Proyectos</h2>
                <p className='text-sm md:text-base leading-5 pt-2 w-full lg:w-[50%] parrafo font-[300]'>Se usaron las principales tecnologías del desarrollo web, complementando mis conocimientos de diseño y las últimas tecnologías.</p>
            </div>
            <div className='w-full h-fit flex justify-center items-center'>
                <div className='w-full md:w-2/4 flex flex-col gap-y-5 md:gap-y-10'>
                    <Cards datos={datos} />
                </div>
            </div>
        </div>
    )
}

export default Proyectos