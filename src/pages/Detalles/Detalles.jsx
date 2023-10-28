import React, { useEffect, useState } from 'react'
import BarraLateralDet from '../../components/Detalles/BarraLateralDet'
import CentroInfo from '../../components/Detalles/CentroInfo'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../../api'
import ProductDetails from '../../components/skeletons/SkeletonDetallesInfo'

function Detalles() {

  let { id } = useParams()

  const [info, setInfo] = useState(null)

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

  return (
    <>
      <div className='min-h-screen selection:bg-transparent w-full flex text-mono bg-[#E2E8EE] lg:py-[4vw] relative '>
        {!info?.length > 0 ? (
          <>
            <BarraLateralDet info={info} />
            <CentroInfo info={info} />
          </>
        )
          :
          (
            <div className='w-full flex justify-center items-center flex-col gap-10 md:flex-row flex-wrap'>
              <ProductDetails />
            </div>
          )
        }
      </div>
    </>
  )
}

export default Detalles