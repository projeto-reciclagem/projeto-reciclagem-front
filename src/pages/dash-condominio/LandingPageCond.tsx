import { Link } from "react-router-dom";
import SideBarCondominio from "../../components/DashCondominio/SidebarCondominio";
import { useState } from 'react'

export default function LandingPageCond() {

    const [selected1, setSelected1] = useState(true)
    const [selected2, setSelected2] = useState(false)
    const [selected3, setSelected3] = useState(false)

    const toggleSelected = () => {
        setSelected1(true)
        if (selected2) setSelected2(false)
        if (selected3) setSelected3(false)
    }
    const toggleSelected2 = () => {
        setSelected2(true)
        if (selected1) setSelected1(false)
        if (selected3) setSelected3(false)
    }
    const toggleSelected3 = () => {
        setSelected3(true)
        if (selected1) setSelected1(false)
        if (selected2) setSelected2(false)
    }

    return (
        <>
      <SideBarCondominio>
        <div className="mx-auto flex h-[30vh] w-11/12 items-center justify-between gap-5 bg-transparent">
          <div className="flex h-[200px] w-[300px] flex-col items-center justify-center gap-5 rounded-xl bg-moss-green-50 p-4 text-center">
            <p className="text-lg">Valor total no último mês</p>
            <span>R$ 60,00</span>
          </div>
          <div className="flex h-[200px] w-[300px] flex-col items-center justify-center gap-5 rounded-xl bg-moss-green-50 p-4 text-center">
            <p className="text-lg">Coletas solicitadas</p>
            <span>12</span>
          </div>
          <div className="flex h-[200px] w-[300px] flex-col items-center justify-center gap-5 rounded-xl bg-moss-green-50 p-4 text-center">
            <p className="text-lg">Material mais reciclado na última semana</p>
            <span>PET - 42ton</span>
          </div>
        </div>
        <div className="relative mx-auto flex h-[65vh] w-11/12 gap-3">
          <div
            className={`${
              selected1
                ? `left-0 top-0 h-full w-8/12`
                : `h-[31.8vh] w-[32.3%] ${
                    selected2 ? 'right-0 top-0' : 'bottom-0 right-0'
                  }`
            } trnasition-all absolute cursor-pointer select-none rounded-lg bg-rose-600 duration-200`}
            onClick={toggleSelected}
          >
            <h4 className="text-center">Reciclagem Semanal</h4>
          </div>

          <div
            className={`${
              selected2 ? 'h-full w-8/12' : 'right-0 top-0 h-[31.8vh] w-[32.3%]'
            } trnasition-all absolute cursor-pointer  select-none rounded-lg bg-teal-400 duration-200`}
            onClick={toggleSelected2}
          >
            <h4 className="text-center">Reciclagem Semanal</h4>
          </div>

          <div
            className={`${
              selected3
                ? 'h-full w-8/12'
                : 'bottom-0 right-0 h-[31.8vh] w-[32.3%]'
            } trnasition-all absolute cursor-pointer  select-none rounded-lg bg-moss-green-50 duration-200`}
            onClick={toggleSelected3}
          >
            <h4 className="text-center">Reciclagem Semanal</h4>
          </div>
        </div>
      </SideBarCondominio>
    </>
    )
}