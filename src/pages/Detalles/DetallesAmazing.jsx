import { useState } from 'react'
import BarraLateralDet from '../../components/Detalles/BarraLateralDet'
import CentroInfo from '../../components/Detalles/CentroInfo'

function Detalles() {

  return (
    <>
      <div className='min-h-screen h-fit w-full flex text-mono bg-[#E2E8EE]'>
        <BarraLateralDet />
        <CentroInfo />
      </div>
    </>
  )
}

export default Detalles