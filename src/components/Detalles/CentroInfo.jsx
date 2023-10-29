

function CentroInfo(props) {

    const { info } = props

    const titulo = info?.infoPrincipal.titulo
    const descripcion = info?.infoPrincipal.descripcion
    const fotos = info?.infoSecundaria.fotos
    const color = info?.infoSecundaria.color

    return (
        <>
            <div className='relative md:w-fit min-h-screen gap-y-16 flex flex-col pl-10 z-20 md:pb-10'>
                <div>
                    <h1 style={{ color: color }} className="text-5xl font-[700] mb-12">{titulo}</h1>
                    <p className="w-[85%]">{descripcion}</p>
                </div>
                <div className='flex flex-col items-start gap-y-8 font-[600]'>

                    {fotos?.length > 0 ? fotos?.map((eachInfo, index) => (
                        <div key={index}>
                            <h2><span className="text-xl">#</span> {eachInfo.titulo}</h2>
                            <img className='max-h-[35vw] object-contain shadow-sm' src={eachInfo.foto} alt="" />
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