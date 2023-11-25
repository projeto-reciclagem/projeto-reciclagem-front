import { LayoutCooperativa } from '../../components/DashCooperativa/LayoutCooperativa'
import PocMaps from '../../components/PocMaps'

export default function CoopCondominios() {
  return (
    <>
      <LayoutCooperativa page="Condomínios" />
      <main
        className={`absolute left-[1.5%] flex h-screen w-full items-center justify-center border-l-4 border-moss-green-500 bg-moss-green-800 transition-all duration-150`}
      >
        <section className="flex h-[80vh] w-3/4 flex-col rounded-3xl bg-moss-green-100">
          <div className="flex h-[20vh] w-full flex-col items-center justify-center">
            <h4 className="text-2xl">Mapa de Condomínios Próximos</h4>
            <div className="input relative">
              <span className="material-symbols-outlined">search</span>
              <input type="text" placeholder="Pesquisar condomínios" />
            </div>
          </div>
          <div className="h-[60vh] bg-slate-700">
            <div className="w-">
              <PocMaps />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
