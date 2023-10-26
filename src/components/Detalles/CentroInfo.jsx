

function CentroInfo(props) {

    const { info } = props

    const titulo = info?.infoPrincipal.titulo
    const descripcion = info?.infoPrincipal.descripcion
    const fotos = info?.infoSecundaria.fotos

    return (
        <>
            <div className='relative md:w-fit min-h-screen gap-y-10 flex flex-col pl-10'>
                <div>
                    <h1 className="text-4xl font-[600] mb-7">{titulo} -</h1>
                    <p className="text-sm w-[85%]">{descripcion} </p>
                </div>
                <div className='flex flex-col items-start gap-y-6'>

                    {fotos?.length > 0 ? fotos?.map((eachInfo, index) => (
                        <div key={index}>
                            <h2>{eachInfo.titulo}</h2>
                            <img className='h-[24rem] object-contain' src={eachInfo.foto} alt="" />
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