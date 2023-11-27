import { Link } from "react-router-dom";
import SideBarCondominio from "../../components/DashCondominio/SidebarCondominio";
import { useState } from 'react'
import MaterialChart from "../../components/DashCondominio/MaterialChart";

export default function LandingPageCond() {

  return (
    <>
      <main className="flex p-1 h-full gap-2 bg-marine-50">
        <SideBarCondominio />
        <div className='flex flex-col items-start p-4 self-stretch max-h-[37.5rem] w-full gap-3 bg-marine-700 rounded-2xl'>
          <div className='flex justify-between items-center self-stretch'>
            <div className='flex flex-col w-56 h-28 p-3 justify-center items-center gap-2 self-stretch rounded-xl border-2 border-solid border-moss-green-300 bg-moss-green-50'>
              <p className='text-xl text-marine-900'>Valor total (Último mês)</p>
              <p className='text-4xl text-moss-green-500'>R$ 60,00</p>
            </div>
            <div className='flex flex-col w-56 h-28 p-3 justify-center items-center gap-2 self-stretch rounded-xl border-2 border-solid border-moss-green-300 bg-moss-green-50'>
              <p className='text-xl text-marine-900'>Coletas realizadas</p>
              <p className='text-4xl text-moss-green-500'>12</p>
              <p className='text-base text-marine-900'>Último mês</p>
            </div>
            <div className='flex flex-col w-56 h-28 p-3 justify-center items-center gap-2 self-stretch rounded-xl border-2 border-solid border-moss-green-300 bg-moss-green-50'>
              <p className='text-xl text-marine-900'>Última coleta feita</p>
              <p className='text-4xl text-moss-green-500'>7 dias atrás</p>
            </div>
          </div>
          <div className='flex self-center justify-center h-[28rem] w-[68rem] bg-marine-50 rounded-xl'>
            <MaterialChart />
          </div>
        </div>
      </main>
    </>
  )
}

/*  */