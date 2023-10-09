import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import UserIcon from '../../components/UserIcon'
import LockIcon from '../../components/LockIcon'
import { User2Icon } from 'lucide-react'

export default function Login() {
  return (
    <main className="min-w-screen min-h-screen bg-moss-green-50">
      <Header />
      <section className="flex max-h-[1440px] min-w-full justify-center">
        <section className="min-w-[140px] min-h-[140px] flex absolute top-28 justify-center items-center rounded-full bg-marine-300 z-10">
          <section className="min-w-[130px] min-h-[130px] flex justify-center items-center rounded-full bg-white z-20">
            <section className="min-w-[93px] min-h-[93px] flex justify-center items-center rounded-full bg-moss-green-50">
              <User2Icon color="#6d9f90" size={70} className="rounded-full z-30" />
            </section>
          </section>
        </section>
        <section className="my-28 flex min-h-[563px] min-w-[676px] flex-col justify-center gap-4 rounded-xl bg-leaf-100">
          <h1 className="relative top-10 flex min-h-[37px] min-w-[383px] justify-center text-3xl text-marine-900">
            Seja bem-vindo à EcoSystem
          </h1>
          <UserIcon />
          <input
            id="ipt_login"
            type="text"
            className="relative left-1 top-2 flex min-h-[56px] min-w-[500px] self-center"
            placeholder="E-mail"
          />
          <LockIcon />
          <input
            id="ipt_senha"
            type="password"
            className="relative bottom-12 left-1 flex min-h-[56px] min-w-[500px] self-center"
            placeholder="Senha"
          />
          <span className="relative bottom-16 left-2/3 ml-4 flex text-sm">
            <a href="">Esqueceu sua senha?</a>
          </span>
          <span className="relative bottom-12 flex self-center text-base">
            Não possui cadastro?
            <a href="" className="text-camel-500">
              Clique aqui
            </a>
          </span>
          <Link to={'dashboard'}>
            <button className="relative bottom-5 left-60 ml-3 flex rounded-xl bg-moss-green-500 px-16 py-2 font-normal text-zinc-50 transition-all duration-500 ease-in-out hover:bg-moss-green-800">
              Entrar
            </button>
          </Link>
        </section>
      </section>
      <Footer />
    </main>
  )
}
