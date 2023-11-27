import { DayPicker } from 'react-day-picker'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { LayoutCooperativa } from '../../components/DashCooperativa/LayoutCooperativa'
import { api } from '../../lib/axios'

import 'react-day-picker/dist/style.css'

interface Condominio {
  id: number
  nome: string
}

interface Cooperativa {
  id: number
  nome: string
}

interface Schedule {
  id: number
  qtBags: number
  status: string
  datAgendamento: Date
  datRetirada?: Date
  condominio: Condominio
  cooperativa: Cooperativa
}

export default function CoopPedidos() {
  const today = new Date()
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(today)
  const [schedules, setSchedules] = useState<Schedule[]>([])

  useEffect(() => {
    const selectDayFormatted = format(selectedDay || today, 'yyyy-MM-dd')
    api
      .get('/agendamentos/buscar/data', {
        params: {
          data: selectDayFormatted,
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          res.data.map((item: Schedule) => handleSchedules(item))
        }
      })
  }, [selectedDay])

  function handleSchedules(data: any) {
    setSchedules((state) => [...state, data])
  }

  return (
    <>
      <LayoutCooperativa page="Pedidos" />
      <main
        className={`absolute left-[1.5%] h-screen w-full border-l-4 border-moss-green-500 bg-moss-green-800 transition-all duration-150`}
      >
        <section className="flex h-screen w-full flex-col justify-center gap-4 py-4">
          <div className="superior flex h-[50vh] w-full items-center justify-center">
            <div className="flex h-full w-[85%] gap-4">
              {/* Esta div (mapa) é a que vai receber o calendario */}
              <div className="flex h-full w-3/5 items-center justify-center bg-slate-900">
                <DayPicker
                  mode="single"
                  required
                  showOutsideDays
                  fixedWeeks
                  locale={ptBR}
                  selected={selectedDay}
                  onSelect={setSelectedDay}
                  modifiersStyles={{
                    selected: {
                      backgroundColor: '#518D7A',
                      color: 'black',
                    },
                  }}
                  className="h-fit rounded-md border-moss-green-200 bg-moss-green-300 p-2"
                />
              </div>

              {/* Esta div (agendadas) é a que vai receber o calendario */}
              <div className="agendadas flex h-full w-[40%] bg-slate-700"></div>
            </div>
          </div>
          <div className="inferior flex h-[50vh] w-full items-center justify-center">
            {/* Aqui ficará o histórico, na div (historico) */}
            <div className="flex h-full w-[85%] bg-marine-200 p-4">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr>
                    <th className="bg-moss-green-400 p-4 text-left text-sm first:rounded-tl-lg">
                      Nome Condominio
                    </th>
                    <th className="bg-moss-green-400 p-4 text-left text-sm">
                      Data agend.
                    </th>
                    <th className="bg-moss-green-400 p-4 text-left text-sm">
                      Responsável
                    </th>
                    <th className="bg-moss-green-400 p-4 text-left text-sm">
                      Nº Bags Pet
                    </th>
                    <th className="bg-moss-green-400 p-4 text-left text-sm">
                      Nº Bags Cobre
                    </th>
                    <th className="bg-moss-green-400 p-4 text-left text-sm">
                      Nº Bags Papelão
                    </th>
                    <th className="bg-moss-green-400 p-4 text-left text-sm last:rounded-tr-lg">
                      Nº Bags Alumínio
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedules.length > 0 ? (
                    schedules.map((schedule, index) => (
                      <tr key={schedule.id}>
                        <td
                          className={`border-t-4 border-moss-green-800 bg-moss-green-700 p-4 text-sm ${
                            index === schedules.length - 1
                              ? 'first:rounded-bl-lg'
                              : ''
                          }`}
                        >
                          {schedule.condominio.nome}
                        </td>
                        <td className="border-t-4 border-moss-green-800 bg-moss-green-700 p-4 text-sm">
                          Data
                        </td>
                        <td className="border-t-4 border-moss-green-800 bg-moss-green-700 p-4 text-sm">
                          {schedule.cooperativa.nome}
                        </td>
                        <td className="border-t-4 border-moss-green-800 bg-moss-green-700 p-4 text-sm">
                          10 Bags
                        </td>
                        <td className="border-t-4 border-moss-green-800 bg-moss-green-700 p-4 text-sm">
                          5 Bags
                        </td>
                        <td className="border-t-4 border-moss-green-800 bg-moss-green-700 p-4 text-sm">
                          2 Bags
                        </td>
                        <td
                          className={`border-t-4 border-moss-green-800 bg-moss-green-700 p-4 text-sm ${
                            index === schedules.length - 1
                              ? 'last:rounded-br-lg'
                              : ''
                          }`}
                        >
                          4 Bags
                        </td>
                      </tr>
                    ))
                  ) : (
                    <span>Teste</span>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
