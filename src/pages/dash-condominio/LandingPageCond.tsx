import SideBarCondominio from '../../components/DashCondominio/SidebarCondominio'
import MaterialChart from '../../components/DashCondominio/MaterialChart'
import { useState } from 'react'
import { api } from '../../lib/axios'

export default function LandingPageCond() {
  const [valorTotalUltimoMes, setValorTotalUltimoMes] = useState(0)
  const [totalColetasRealizadas, setTotalColetasRealizadas] = useState(0)
  const [ultimaColetaRealizada, setUltimaColetaRealizada] = useState(0)

  async function getValorTotal() {
    await api.get(`/materiais/coletados/valor-total/mes/21`).then((res) => {
      setValorTotalUltimoMes(res.data)
    })
  }

  async function getTotalColetasRealizadas() {
    await api
      .get('/materiais/coletados/total-coletado/semana/21')
      .then((res) => {
        setTotalColetasRealizadas(res.data)
      })
  }

  async function getUltimaColetaRealizada() {
    await api.get('/agendamentos/ultima-coleta/21').then((res) => {
      setUltimaColetaRealizada(res.data)
    })
  }

  getValorTotal()
  getTotalColetasRealizadas()
  getUltimaColetaRealizada()

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
                {valorTotalUltimoMes > 0
                  ? valorTotalUltimoMes.toFixed(2)
                  : '0,00'}
              </p>
            </div>
            <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 self-stretch rounded-xl border-2 border-solid border-moss-green-300 bg-moss-green-50 p-3">
              <p className="text-xl text-marine-900">Coletas realizadas</p>
              <p className="text-4xl text-moss-green-500">
                {totalColetasRealizadas > 0 ? totalColetasRealizadas : 0}
              </p>
              <p className="text-base text-marine-900">Último mês</p>
            </div>
            <div className="flex h-36 w-56 flex-col items-center justify-center gap-2 self-stretch rounded-xl border-2 border-solid border-moss-green-300 bg-moss-green-50 p-3">
              <p className="text-xl text-marine-900">Última coleta feita</p>
              <p className="text-4xl text-moss-green-500">
                {ultimaColetaRealizada > 0 ? ultimaColetaRealizada : 0} dias
                atrás
              </p>
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
