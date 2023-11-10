import { useEffect, useState } from 'react'
import { LayoutCooperativa } from '../../components/DashCooperativa/LayoutCooperativa'

export default function Cooperativa() {
  const [selected1, setSelected1] = useState(true)
  const [selected2, setSelected2] = useState(false)
  const [selected3, setSelected3] = useState(false)

  const toggleSelected = () => {
    setSelected1(true)
    selected2 ? setSelected2(false) : null
    selected3 ? setSelected3(false) : null
  }
  const toggleSelected2 = () => {
    setSelected2(true)
    selected1 ? setSelected1(false) : null
    selected3 ? setSelected3(false) : null
  }
  const toggleSelected3 = () => {
    setSelected3(true)
    selected1 ? setSelected1(false) : null
    selected2 ? setSelected2(false) : null
  }

  return (
    <>
      <LayoutCooperativa>
        <div className="mx-auto flex h-[30vh] w-11/12 items-center justify-between bg-transparent gap-5">
          <div className="flex h-[200px] w-[300px] flex-col items-center justify-center gap-5 rounded-xl bg-moss-green-50 p-4 text-center">
            <p className="text-lg">Coletas feitas na última semana</p>
            <span>37</span>
          </div>
          <div className="flex h-[200px] w-[300px] flex-col items-center justify-center gap-5 rounded-xl bg-moss-green-50 p-4 text-center">
            <p className="text-lg">Total reciclado na última semana</p>
            <span>100 Toneladas</span>
          </div>
          <div className="flex h-[200px] w-[300px] flex-col items-center justify-center gap-5 rounded-xl bg-moss-green-50 p-4 text-center">
            <p className="text-lg">Material mais reciclado na última semana</p>
            <span>PET - 42ton</span>
          </div>
          <div className="flex h-[200px] w-[300px] flex-col items-center justify-center gap-5 rounded-xl bg-moss-green-50 p-4 text-center">
            <p className="text-lg">Condomínios atendidos na última semana</p>
            <span>28</span>
          </div>
        </div>
        <div className="relative mx-auto flex h-[65vh] w-11/12 gap-3">


          <div
            className={`${selected1 ? `h-full w-8/12 top-0 left-0` : `h-[31.8vh] w-[32.3%] ${selected2 ? 'top-0 right-0' : 'bottom-0 right-0'}`} trnasition-all absolute cursor-pointer rounded-lg bg-rose-600 duration-200`}
            onClick={toggleSelected}>
            <h4 className="text-center">Reciclagem Semanal</h4>
          </div>


          <div
            className={`${selected2 ? 'h-full w-8/12' : 'h-[31.8vh] w-[32.3%] top-0 right-0'} trnasition-all absolute  cursor-pointer rounded-lg bg-teal-400 duration-200`}
            onClick={toggleSelected2}>
            <h4 className="text-center">Reciclagem Semanal</h4>
          </div>


          <div
            className={`${selected3 ? 'h-full w-8/12' : 'h-[31.8vh] w-[32.3%] bottom-0 right-0'} trnasition-all absolute  cursor-pointer rounded-lg bg-moss-green-50 duration-200`}
            onClick={toggleSelected3}>
            <h4 className="text-center">Reciclagem Semanal</h4>
          </div>
        </div>
      </LayoutCooperativa>
    </>
  )
}
