import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Cadastro() {
  return (
    <main className="min-w-screen min-h-screen bg-moss-green-50">
      <Header />
      <section className="m-0 flex min-h-[840px] min-w-full items-center justify-center p-0">
        <section className="m-0 flex min-h-[638px] min-w-[1140px] items-center self-center bg-leaf-100 p-0">
          <section className="min-h-[638px] min-w-[340px] rounded-e-2xl bg-[url('@/assets/img/image-sign-up.jpg')] bg-cover bg-no-repeat"></section>
          <section className="flex min-h-[638px] min-w-[830px] justify-center">
            <section
              id="sign-up"
              className="flex min-h-[200px] min-w-[336px] flex-col items-start self-center"
            >
              <select
                className="mt-6 min-h-[37px] min-w-[308px] rounded-lg pl-2"
                name=""
                id=""
              >
                <option value="1">Sou uma Cooperativa</option>
                <option value="2">Sou um Condomínio</option>
              </select>
              <label className="mt-3 pl-2" htmlFor="">
                Nome completo
              </label>
              <input
                type="text"
                className="min-h-[37px] min-w-[308px] rounded-lg pl-3"
                placeholder="Insira seu nome"
              />
              <label className="mt-3 pl-2" htmlFor="">
                E-mail
              </label>
              <input
                type="email"
                className="min-h-[37px] min-w-[308px] rounded-lg pl-3"
                placeholder="Insira seu e-mail"
              />
            </section>
            <section
              id="sign-up"
              className="flex min-h-[200px] min-w-[336px] flex-col items-start self-center"
            >
              <label className="pl-2" htmlFor="">
                CPNJ
              </label>
              <input
                type="text"
                className="min-h-[37px] min-w-[308px] rounded-lg pl-3"
                placeholder="Insira o CNPJ"
              />
              <label className="mt-3 pl-2" htmlFor="">
                Senha
              </label>
              <input
                type="password"
                className="min-h-[37px] min-w-[308px] rounded-lg pl-3"
                placeholder="Insira sua senha"
              />
              <label className="mt-3 pl-2" htmlFor="">
                Confirmar Senha
              </label>
              <input
                type="password"
                className="min-h-[37px] min-w-[308px] rounded-lg pl-3"
                placeholder="Confirme sua senha"
              />
            </section>
            <section className="absolute bottom-56 flex min-h-[84px] min-w-[144px] items-center justify-center">
              <Link to={'acesso'}>
                <button className="rounded-xl bg-moss-green-500 px-8 py-2 font-normal text-zinc-50 transition-all duration-500 ease-in-out hover:bg-moss-green-800">
                  Cadastrar
                </button>
              </Link>
            </section>
          </section>
        </section>
      </section>
      <Footer />
    </main>
  )
}
