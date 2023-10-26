import React, { useEffect, useState } from 'react'
import BarraLateralDet from '../../components/Detalles/BarraLateralDet'
import CentroInfo from '../../components/Detalles/CentroInfo'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../../api'

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
      <div className='min-h-screen h-fit w-full flex text-mono bg-[#E2E8EE] lg:py-[4vw] z-10'>
        <BarraLateralDet info={info} />
        <CentroInfo info={info} />
      </div>
    </>
  )
}

export default Detalles