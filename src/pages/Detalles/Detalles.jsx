import React, { useEffect, useState } from 'react'
import BarraLateralDet from '../../components/Detalles/BarraLateralDet'
import CentroInfo from '../../components/Detalles/CentroInfo'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../../api'
import ProductDetails from '../../components/skeletons/SkeletonDetallesInfo'
import SidebarDetalles from '../../components/SidebarDetalles'
import sideIcon from '../../../public/Images/diseño-grafico/iconos/sidebar.svg'

function Detalles() {

  let { pagina } = useParams()

  const [info, setInfo] = useState(null)
  const [openSide, setOpenSide] = useState(false)

  console.log(pagina)

  let informacion = info?.data?.pages
  console.log(informacion)

  useEffect(
    () => {
      axios.get(apiUrl + `detalle?pagina=${pagina}`)
        .then(
          res => {
            if (res) {
              setInfo(res)
            }
          }
        ).catch(
          err => {
            console.log(err)
          }
        )
    }, [])

  const open = () => {
    if (openSide == false) {
      setOpenSide(true)
    } else {
      setOpenSide(false)
    }
  }

  return (
    <>
      {openSide &&
        <SidebarDetalles open={open} informacion={informacion} />
      }
      <img src={sideIcon} alt='sideIcon' onClick={open} className='w-7 h-7 md:w-0 md:h-0 absolute left-6 top-19 z-30' />
      <div className='min-h-screen selection:bg-transparent w-full flex text-mono bg-[#E2E8EE] relative'>
        {informacion?.fotos?.length > 0 ?
          <>
            <BarraLateralDet informacion={informacion} />
            <CentroInfo informacion={informacion} />
          </>
          :
          <div className='w-full flex justify-center items-center flex-col gap-10 md:flex-row flex-wrap'>
            <ProductDetails />
          </div>
        }
      </div>
    </>
  )
}

export default Detalles