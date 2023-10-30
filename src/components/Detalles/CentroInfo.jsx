

function CentroInfo(props) {

    const { info } = props

    const titulo = info?.infoPrincipal.titulo
    const descripcion = info?.infoPrincipal.descripcion
    const fotos = info?.infoSecundaria.fotos
    const color = info?.infoSecundaria.color

    return (
        <>
            <div className='relative md:w-fit min-h-screen gap-y-16 flex flex-col pt-12 md:pt-10 md:pl-10 p-4 z-20 md:pb-10'>
                <div>
                    <h1 style={{ color: color }} className="text-5xl font-[800] mb-2 md:mb-10">{titulo}</h1>
                    <p>{descripcion}</p>
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