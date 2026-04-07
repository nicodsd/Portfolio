import Cards from '../components/Cards'
import { cardsPages } from '../data/cardsPages'

function Proyectos() {

    const datos = cardsPages

    return (
        <div className='lg:min pt-24 md:pt-0 pb-5 selection:bg-transparent text-mono flex flex-col md:items-start w-full lg:py-14'>
            <div id='proyectos' className='h-full md:ml-6 border-x border-t mb-12 md:mb-0 p-5 rounded-t-lg'>
                <h2 className='w-full text-2xl lg:text-4xl font-bold mb-2'>Proyectos</h2>
                <p className='text-sm md:text-base leading-5 pt-2 w-full lg:w-[50%] parrafo font-[300]'>Se usaron las principales tecnologías del desarrollo web, complementando mis conocimientos de diseño y las últimas tecnologías.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-fit justify-start md:mt-3 items-start flex-wrap lg:gap-y-1 md:gap-y-[2vw] lg:gap-x-1 gap-1'>
                <Cards datos={datos} />
            </div>
        </div>
    )
}

export default Proyectos