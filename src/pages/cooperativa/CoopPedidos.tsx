import { LayoutCooperativa } from '../../components/DashCooperativa/LayoutCooperativa'

export default function CoopPedidos() {
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
              <div className="mapa flex h-full w-[60%] bg-slate-900"></div>

              {/* Esta div (agendadas) é a que vai receber o calendario */}
              <div className="agendadas flex h-full w-[40%] bg-slate-700"></div>
            </div>
          </div>
          <div className="inferior flex h-[50vh] w-full items-center justify-center">
            {/* Aqui ficará o histórico, na div (historico) */}
            <div className="historico flex h-full w-[85%] bg-slate-300"></div>
          </div>
        </section>
      </main>
    </>
  )
}
