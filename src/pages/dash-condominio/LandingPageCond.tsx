import { Link } from "react-router-dom";
import SideBarCondominio from "../../components/DashCondominio/SidebarCondominio";
import { useState } from 'react'

export default function LandingPageCond() {

  return (
    <>
      <main className="flex flex-row justify-center items-center bg-marine-50">
        <SideBarCondominio>
        </SideBarCondominio>
        <div className='flex flex-col items-start p-4 self-stretch w-5/6 h-5/6 gap-3 bg-marine-700 rounded-2xl mt-2'>
          <div className='flex justify-between items-center self-stretch'>
            <div className='flex flex-col w-56 h-36 p-3 justify-center items-center gap-2 self-stretch rounded-xl border-2 border-solid border-moss-green-300 bg-moss-green-50'>
              <p className='text-xl text-marine-900'>Valor total (Último mês)</p>
              <p className='text-4xl text-moss-green-500'>R$ 60,00</p>
            </div>
            <div className='flex flex-col w-56 h-36 p-3 justify-center items-center gap-2 self-stretch rounded-xl border-2 border-solid border-moss-green-300 bg-moss-green-50'>
              <p className='text-xl text-marine-900'>Coletas realizadas</p>
              <p className='text-4xl text-moss-green-500'>12</p>
              <p className='text-base text-marine-900'>Último mês</p>
            </div>
            <div className='flex flex-col w-56 h-36 p-3 justify-center items-center gap-2 self-stretch rounded-xl border-2 border-solid border-moss-green-300 bg-moss-green-50'>
              <p className='text-xl text-marine-900'>Última coleta feita</p>
              <p className='text-4xl text-moss-green-500'>7 dias atrás</p>
            </div>
          </div>
          <div className='flex self-center justify-center w-[1080px] h-[560px] bg-marine-50 rounded-xl'>
          </div>
        </div>
      </main>
    </>
  )
}