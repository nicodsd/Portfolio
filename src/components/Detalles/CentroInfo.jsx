import img1 from '../../../public/Images/fondos-web-proy/AmazingEventsScreens/1.webp'
import img2 from '../../../public/Images/fondos-web-proy/AmazingEventsScreens/2.webp'
import img3 from '../../../public/Images/fondos-web-proy/AmazingEventsScreens/3.webp'
import img4 from '../../../public/Images/fondos-web-proy/AmazingEventsScreens/4.webp'
import img5 from '../../../public/Images/fondos-web-proy/AmazingEventsScreens/5.webp'

function CentroInfo() {

    return (
        <>
            <div className='relative md:w-fit min-h-screen gap-y-10 flex flex-col pl-10 py-10 lg:py-16'>
                <div>
                    <h1 className="text-4xl font-[600] mb-7">TITULO PROYECTO -</h1>
                    <p className="text-sm w-[85%]">Texto descriptivo dsadasd dsadsadasd dsadasd asd adsadasd sadasdasdasd dsada dasd asd asdasdasd a adsadasd sada sasd asd asd as dasdsad asd asd as as as asdasdasdas asdas asdasd asdasd asdas dasdasda sad asd asdasdas sad asdasdaskdh askhdas jdas djkash kjdahslkdh lashdlkj haskjdh klashdh asjdh aksjdhaksjhfioewfnkj nd  asdjnk kjlwqnd kjni oduasnd jnwqkd jnqw oefunf nasdkljn lkd wq das asd</p>
                </div>
                <div className='flex flex-col items-start gap-y-6'>
                    <div>
                        <h2>Home</h2>
                        <img className='h-[24rem] object-contain' src={img1} alt="" />
                    </div>
                    <div>
                        <h2>Home</h2>
                        <img className='h-[24rem] object-contain' src={img2} alt="" />
                    </div>
                    <div>
                        <h2>Home</h2>
                        <img className='h-[24rem] object-contain' src={img3} alt="" />
                    </div>
                    <div>
                        <h2>Home</h2>
                        <img className='h-[24rem] object-contain' src={img4} alt="" />
                    </div>
                    <div>
                        <h2>Home</h2>
                        <img className='h-[24rem] object-contain' src={img5} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CentroInfo