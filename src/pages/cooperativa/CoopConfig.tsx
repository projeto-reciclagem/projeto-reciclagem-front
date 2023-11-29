import { LayoutCooperativa } from '../../components/DashCooperativa/LayoutCooperativa'
// import PocMaps from '../../components/PocMaps'

export default function CoopConfig() {
  return (
    <>
      <LayoutCooperativa page="Configurações" />
      <main
        className={`absolute left-[1.5%] flex h-screen w-full items-center justify-center border-l-4 border-moss-green-500 bg-moss-green-800 transition-all duration-150`}
      >
        <section className="w-4/5 rounded-xl bg-marine-50 py-8">
          <div className="title flex h-1/6 w-full items-center justify-center border-b-2 border-moss-green-900">
            <h3 className="font-mono text-4xl">Editar Perfil</h3>
          </div>
          <form
            action=""
            className="mx-auto flex w-3/4 flex-col items-center justify-center"
          >
            <div className="input-row flex w-3/4 items-center justify-between gap-5 pb-8 pt-6">
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800">
                  CEP
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800">
                  Bairro
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
            </div>

            <div className="input-row flex w-3/4 items-center justify-between gap-5 py-8">
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800">
                  Logradouro
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800">
                  Cidade
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
            </div>

            <div className="input-row flex w-3/4 items-center justify-between gap-5 py-8">
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800">
                  Número
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800">
                  UF
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
            </div>

            <div className="input-row flex w-3/4 items-center justify-between gap-5 py-8">
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800">
                  Nome úsuario
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800">
                  Senha
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
            </div>

            <div className="input-row flex w-3/4 items-center justify-between gap-5 pt-8">
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800">
                  Email
                </label>
                <input
                  type="text"
                  className="rounded-lg py-2 text-base text-moss-green-700"
                />
              </div>
              <div className="input-group flex w-2/4 flex-col">
                <label htmlFor="" className="text-moss-green-800">
                  Cnfirmação de senha
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
