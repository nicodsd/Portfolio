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

  let { id } = useParams()

  const [info, setInfo] = useState(null)
  const [openSide, setOpenSide] = useState(false)

  useEffect(
    () => {
      axios.get(apiUrl + `detalles?id=${id}`)
        .then(
          res => {
            if (res) {
              setInfo(res.data.pages)
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
        <SidebarDetalles open={open} info={info} />
      }
      <div className='min-h-screen selection:bg-transparent w-full flex text-mono bg-[#E2E8EE] relative'>
        <img src={sideIcon} alt='sideIcon' onClick={open} className='w-7 h-7 md:w-0 md:h-0 absolute left-5 top-2 z-30' />
        {info?.infoSecundaria.fotos.length > 0 ?
          <>
            <BarraLateralDet info={info} />
            <CentroInfo info={info} />
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