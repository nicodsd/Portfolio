import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"

function CentroInfo(props) {

    const { informacion } = props

    const navigate = useNavigate()
    const titulo = informacion?.titulo
    let descripcion = ""
    if (titulo === "QMenú") {
        descripcion = informacion?.descExtendido
    } else {
        descripcion = informacion?.descripcion
    }
    const fotos = informacion?.fotos
    const color = informacion?.color
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,   // delay entre cada elemento
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,   // más suave
            },
        },
    }

    function contactame() {
        navigate('/')
    }

    return (
        <>
            <div style={{ backgroundColor: color }} className='w-full h-[20rem] fondo-blur animate__flash animate__animated animate__infinite blur-[200px] absolute opacity-30'></div>
            <div className='w-full bg-white md:max-w-[64vw] min-h-screen md:h-screen md:overflow-auto gap-y-16 flex flex-col pt-12 md:pt-6 md:px-5 lg:px-8 xl:px-10 px-4 pb-10 z-20 md:pb-[10vh] rounded-lg'>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    <motion.h2
                        variants={itemVariants}
                        style={{ color }}
                        className="text-[3.1rem] leading-none -tracking-[4px] md:-tracking-[8px] md:text-[3rem] lg:text-[7vw] xl:text-[6rem] font-[400] md:font-[300] lg:font-[100] mb-2 md:mb-4"
                    >
                        {titulo}
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="font-[300] font-sans leading-5 text-md text-[#3f3f3f]"
                    >
                        {descripcion}
                    </motion.p>
                </motion.div>
                <div className='flex flex-col items-start gap-y-10 md:font-[600]'>

                    {informacion?.pagina === "homeessentials" ? (
                        <div className="border-b border-gray pt-5 pb-10" id="video">
                            <h2><span style={{ color: color }} className="text-xl">#</span> Demo en video</h2>
                            <video className='max-w-full mt-2 object-contain shadow-sm' src="/videos/video_home.webm" autoPlay loop muted controls playsInline />
                        </div>
                    ) : (
                        fotos?.length > 0 ? fotos?.map((eachInfo, index) => (
                            <div className="border-b border-gray pt-5 pb-10" id={eachInfo.titulo} key={index}>
                                <h2><span style={{ color: color }} className="text-xl">#</span> {eachInfo.titulo}</h2>
                                <img className='max-w-full mt-2 object-contain shadow-sm cursor-pointer' src={fotos[index].foto} alt="imagen" />
                            </div>
                        ))
                            :
                            null
                    )}

                </div>
                <div className="flex text-[#919191] w-full justify-center md:text-sm text-xs md:pb-2 pb-10">
                    <p>¿Quieres una página como esta?...</p><p className="cursor-pointer font-semibold text-[#0600ff]" onClick={() => { contactame() }}>Hablemos!</p>
                </div>
            </div>
        </>
    )
}

export default CentroInfo