import SideBarCondominio from '../../components/DashCondominio/SidebarCondominio'
import MaterialChart from '../../components/DashCondominio/MaterialChart'
import { useState } from 'react'
import { api } from '../../lib/axios'

export default function LandingPageCond() {
  const [valorTotalUltimoMes, setValorTotalUltimoMes] = useState('')

  async function getValorTotal() {
    const id = sessionStorage.getItem('id')

    await api.get(`/materiais/coletados/valor-total/mes/${id}`).then((res) => {
      setValorTotalUltimoMes(res.data)
    })
  }

  getValorTotal()

  return (
    <>
      <main className="flex h-screen gap-1 bg-marine-50 p-2">
        <SideBarCondominio />
        <div className="flex w-full flex-col items-start gap-3 self-stretch rounded-2xl bg-marine-700 p-4">
          <div className="flex items-center justify-between self-stretch">
            <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 self-stretch rounded-xl border-2 border-solid border-moss-green-300 bg-moss-green-50 p-3">
              <p className="text-xl text-marine-900">
                Valor total (Último mês)
              </p>
              <p className="text-4xl text-moss-green-500">
                R${' '}
                {valorTotalUltimoMes.length > 0 ? valorTotalUltimoMes : '0,00'}
              </p>
            </div>
            <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 self-stretch rounded-xl border-2 border-solid border-moss-green-300 bg-moss-green-50 p-3">
              <p className="text-xl text-marine-900">Coletas realizadas</p>
              <p className="text-4xl text-moss-green-500">12</p>
              <p className="text-base text-marine-900">Último mês</p>
            </div>
            <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 self-stretch rounded-xl border-2 border-solid border-moss-green-300 bg-moss-green-50 p-3">
              <p className="text-xl text-marine-900">Última coleta feita</p>
              <p className="text-4xl text-moss-green-500">7 dias atrás</p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl bg-marine-50 sm:h-full sm:w-full md:h-full md:w-full lg:h-max lg:w-full 2xl:h-full 2xl:w-full">
            <MaterialChart />
          </div>
        </div>
      </main>
    </>
  )
}

/*  */
