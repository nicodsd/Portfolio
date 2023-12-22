import React, { useEffect, useState } from 'react'
import BarraLateralDet from '../../components/Detalles/BarraLateralDet'
import SeccionesDetalles from '../../components/Detalles/SeccionesDetalles'
import CentroInfo from '../../components/Detalles/CentroInfo'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../../api'
import ProductDetails from '../../components/skeletons/SkeletonDetallesInfo'
import SidebarDetalles from '../../components/SidebarDetalles'
import SidebarSeccionesDetalles from '../../components/SidebarSeccionesDetalles'
import sideIcon from '../../../public/Images/diseño-grafico/iconos/sidebar.svg'
import VisorDeFotos from '../../components/VisorDeFotos'

function Detalles() {

  let { pagina } = useParams()

  const [info, setInfo] = useState(null)
  const [openSide, setOpenSide] = useState(false)
  const [openSecc, setOpenSecc] = useState(false)
  const [openVisor, setOpenVisor] = useState(false)
  const [verImagen, setVerImagen] = useState(null)
  const [verColor, setColor] = useState(null)
  console.log(verColor)

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
  const openSecciones = () => {
    if (openSecc == false) {
      setOpenSecc(true)
    } else {
      setOpenSecc(false)
    }
  }
  const opnVisor = (imagen, color) => {
    if (openVisor == false) {
      setOpenVisor(true)
      setVerImagen(imagen)
      setColor(color)
      
    } else {
      setOpenVisor(false)
    }
  }

  return (
    <>
      {openSide &&
        <SidebarDetalles open={open} informacion={informacion} />
      }
      {openSecc &&
        <SidebarSeccionesDetalles openSecciones={openSecciones} informacion={informacion} />
      }
      {openVisor &&
        <VisorDeFotos opnVisor={opnVisor} imagen={verImagen} verColor={verColor} />
      }
      <img src={sideIcon} alt='sideIcon' onClick={openSecciones} className='w-7 h-7 md:w-0 bg-white p-1 rounded-full md:h-0 fixed right-1 top-18 z-30' />
      <img src={sideIcon} alt='sideIcon' onClick={open} className='w-7 h-7 md:w-0 bg-white p-1 rounded-full md:h-0 fixed rotate-180 left-1 top-18 z-30' />
      <div className='min-h-screen md:max-h-screen selection:bg-transparent min-w-screen flex text-mono bg-[#E2E8EE] relative'>
        {informacion?.fotos?.length > 0 ?
          <div className='flex md:gap-x-[4px]'>
            <BarraLateralDet informacion={informacion} />

            <CentroInfo opnVisor={opnVisor} informacion={informacion} />

            <SeccionesDetalles informacion={informacion} />
          </div>
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