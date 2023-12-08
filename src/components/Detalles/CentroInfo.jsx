

function CentroInfo(props) {

    const { informacion } = props

    const titulo = informacion?.titulo
    const descripcion = informacion?.descripcion
    const fotos = informacion?.fotos
    const color = informacion?.color

    return (
        <>
            <div className='relative md:w-fit min-h-screen gap-y-16 flex flex-col pt-12 md:pt-3 md:px-5 lg:px-8 xl:px-10 p-4 z-20 md:pb-10'>
                <div>
                    <h1 style={{ color: color }} className="text-[3.1rem] leading-none md:text-[3rem] lg:text-[7vw] xl:text-[5.6rem] font-[500] md:font-[300] lg:font-[100] mb-2 md:mb-2">{titulo}*</h1>
                    <p className="font-[300] leading-5 md:font-[400] text-sm">{descripcion}</p>
                </div>
                <div className='flex flex-col items-start gap-y-10 md:gap-y-8 md:font-[600]'>

                    {fotos?.length > 0 ? fotos?.map((eachInfo, index) => (
                        <div key={index}>
                            <h2 ><span style={{ color: color }} className="text-xl">#</span> {eachInfo.titulo}</h2>
                            <img className='max-w-full  mt-2 object-contain shadow-sm' src={eachInfo.foto} alt="" />
                        </div>
                    ))
                        :
                        null
                    }

                </div>
            </div>
        </>
    )
}

export default CentroInfo