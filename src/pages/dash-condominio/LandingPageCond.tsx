import { Link } from "react-router-dom";
import SideBarCondominio from "../../components/DashCondominio/SidebarCondominio";
import MaterialChart from "../../components/DashCondominio/MaterialChart";

export default function LandingPageCond() {

  return (
    <>
      <main className="flex p-2 h-screen gap-1 bg-marine-50">
        <SideBarCondominio />
        <div className='flex flex-col items-start p-4 self-stretch w-full gap-3 bg-marine-700 rounded-2xl'>
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
          <div className='flex items-center justify-center bg-marine-50 rounded-xl sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-max 2xl:w-full 2xl:h-full'>
            <MaterialChart />
          </div>
        </div>
      </main>
    </>
  )
}

/*  */