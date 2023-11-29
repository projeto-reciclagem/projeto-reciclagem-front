import { LayoutCooperativa } from '../../components/DashCooperativa/LayoutCooperativa'
// import PocMaps from '../../components/PocMaps'

export default function CoopCondominios() {
  return (
    <>
      <LayoutCooperativa page="Condomínios" />
      <main
        className={`absolute left-[1.5%] flex h-screen w-full items-center justify-center border-l-4 border-moss-green-500 bg-moss-green-800 transition-all duration-150`}
      >
        <section className="flex h-[80vh] w-3/4 flex-col rounded-3xl bg-moss-green-100">
          <div className="flex h-[14vh] w-full flex-col items-center justify-center gap-4">
            <h4 className="text-3xl">Mapa de Condomínios Próximos</h4>
            {/* <div className="input relative w-2/4">
              <span className="material-symbols-outlined absolute left-3 top-2 text-xl">
                search
              </span>
              <input
                type="text"
                placeholder="Pesquisar condomínios"
                className="w-full rounded-2xl border-2 border-moss-green-500 bg-moss-green-100 py-2 pl-9 pr-4 text-base text-moss-green-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-moss-green-500"
              />
            </div> */}
          </div>
          <div className="flex h-[60vh] items-center justify-center rounded-lg pb-5">
            <div className="h-full w-4/5 rounded-xl border-4 border-moss-green-600 bg-moss-green-50 p-1">
              {/* <PocMaps /> */}
              {/* <iframe
                src="https://storage.googleapis.com/maps-solutions-skpjh3jary/commutes/7myn/commutes.html"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe> */}
              <iframe
                src="https://storage.googleapis.com/maps-solutions-skpjh3jary/neighborhood-discovery/fgim/neighborhood-discovery.html"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
