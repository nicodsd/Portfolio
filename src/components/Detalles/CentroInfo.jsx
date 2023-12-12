import { useNavigate } from "react-router-dom"

function CentroInfo(props) {

    const { informacion } = props

    const navigate = useNavigate()
    const titulo = informacion?.titulo
    const descripcion = informacion?.descripcion
    const fotos = informacion?.fotos
    const color = informacion?.color

    function contactame(){
        navigate('/')
    }

    return (
        <>
            <div style={{ backgroundColor: color }} className='w-full h-[20rem] fondo-blur animate__flash animate__animated animate__infinite blur-[200px] absolute opacity-30'></div>
            <div className='w-screen bg-white md:max-w-[60vw] min-h-screen md:h-screen md:overflow-auto gap-y-16 flex flex-col pt-12 md:pt-6 md:px-5 lg:px-8 xl:px-10 px-4 pb-10 z-20 md:pb-[10vh] rounded-lg'>
                <div>
                    <h1 style={{ color: color }} className="text-[3.1rem] leading-none -tracking-[5px] md:text-[3rem] lg:text-[7vw] xl:text-[6rem] font-[400] md:font-[300] lg:font-[100] mb-2 md:mb-4">{titulo}*</h1>
                    <p className="font-[300] leading-5 text-sm text-[#3f3f3f]">{descripcion}</p>
                </div>
                <div className='flex flex-col items-start gap-y-10 md:font-[600]'>

                    {fotos?.length > 0 ? fotos?.map((eachInfo, index) => (
                        <div className="border-b border-gray pt-5 pb-10" id={eachInfo.titulo} key={index}>
                            <h2 className=""><span style={{ color: color }} className="text-xl">#</span> {eachInfo.titulo}</h2>
                            <img className='max-w-full mt-2 object-contain shadow-sm' src={eachInfo.foto} alt="" />
                        </div>
                    ))
                        :
                        null
                    }

                </div>
                <div className="flex text-[#919191] w-full justify-center md:text-sm text-xs md:pb-2 pb-10">
                    <p>¿Quieres una página como esta?...</p><p className="cursor-pointer font-semibold text-[#0600ff]" onClick={() => { contactame() }}>Hablemos!</p>
                </div>
            </div>
        </>
    )
}

export default CentroInfo