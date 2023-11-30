import { LayoutCooperativa } from '../../components/DashCooperativa/LayoutCooperativa'
// import PocMaps from '../../components/PocMaps'

export default function CoopConfig() {
  return (
    <>
      <LayoutCooperativa page="Configurações" />
      <main
        className={`absolute left-[1.5%] flex h-screen w-full items-center justify-center border-l-4 border-moss-green-500 bg-moss-green-800 transition-all duration-150`}
      >
        <section className="w-4/5 rounded-xl flex flex-col bg-marine-50 py-14">
          <div className="title flex h-1/6 w-[46rem] self-center justify-center border-b border-moss-green-900">
            <h3 className="text-4xl font-sans">Editar Perfil</h3>
          </div>
          <form
            action=""
            className="mx-auto flex w-3/4 flex-col items-center justify-center"
          >
            <div className="input-row flex w-3/4 items-center justify-between gap-5 pb-4 pt-4">
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800 font-sans">
                  CEP
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800 font-sans">
                  Bairro
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
            </div>

            <div className="input-row flex w-3/4 items-center justify-between gap-5 py-4">
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800 font-sans">
                  Logradouro
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800 font-sans">
                  Cidade
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
            </div>

            <div className="input-row flex w-3/4 items-center justify-between gap-5 py-4">
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800 font-sans">
                  Número
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800 font-sans">
                  UF
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
            </div>

            <div className="input-row flex w-3/4 items-center justify-between gap-5 py-4">
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800 font-sans">
                  Nome usuário
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800 font-sans">
                  Senha
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
            </div>

            <div className="input-row flex w-3/4 items-center justify-between gap-5 pt-4">
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800 font-sans">
                  Email
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800 font-sans">
                  Confirmação de senha
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
            </div>

            <button className="mt-10 w-1/4 rounded-xl bg-[#299929] py-4 text-base text-moss-green-50">
              Alterar dados
            </button>
          </form>
        </section>
      </main>
    </>
  )
}
