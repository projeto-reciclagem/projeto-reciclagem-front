import { LayoutCooperativa } from '../../components/DashCooperativa/LayoutCooperativa'
import LinhaChart from '../../components/DashCooperativa/LinhaChart'

export default function CoopRelatorio() {
  return (
    <>
      <LayoutCooperativa page="Relatório" />
      <main
        className={`absolute left-[1.5%] flex h-screen w-full flex-col items-center justify-center gap-5 border-l-4 border-moss-green-500 bg-moss-green-800 transition-all duration-150`}
      >
        <section className="flex h-[80%] w-3/4 flex-col items-center justify-center rounded-3xl bg-marine-50">
          {/* Aqui vem a dash */}
          <div className=" h-5/6 w-full rounded-b-3xl bg-moss-green-50 flex items-center justify-center">
            <LinhaChart />
          </div>
        </section>
        <button className="flex h-14 w-1/6 items-center justify-center rounded-2xl bg-marine-800 text-xl text-moss-green-50 transition-all duration-300 hover:bg-marine-900">
          Baixar relatório
        </button>
      </main>
    </>
  )
}
