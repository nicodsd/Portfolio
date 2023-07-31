import React from 'react'
import a1 from '../../public/Images/Primer-plano/carroussel/300ppi/desarrollo-banner.png'
import b1 from '../../public/Images/Primer-plano/carroussel/300ppi/diseño.png'
import c1 from '../../public/Images/Primer-plano/carroussel/300ppi/nico.png'
import '../App.css'

function Carrousel() {
    return (
        <>
            <div className='sector-1 relative'>
                <div className='sector-2'>
                    <img className='imge' src={a1} alt="desarrollo-web-&-apps" />
                    <img className='imge' src={b1} alt="diseño-grafico" />
                    <img className='imge' src={c1} alt="logo-nombre-nico" />
                </div>
            </div>
        </>
    )
}

export default Carrousel