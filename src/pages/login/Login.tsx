import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Dropdown from '../../components/Dropdown'
import { FormLogin } from '../../components/FormLogin'
import { FormCadastro } from '../../components/FormCadastro'
import logo from '../../assets/eco-system-logo.svg'

export default function Login() {
  const [toMove, setToMove] = useState(false)
  const [condomino, setCondomino] = useState(false)
  const [cooperativa, setCooperativa] = useState(true)

  const handleCooperativa = () => {
    setCooperativa(true)
    setCondomino(false)
  }

  const handleCondomino = () => {
    setCondomino(true)
    setCooperativa(false)
  }

  const handleMove = () => {
    setToMove(!toMove)
  }

  const options = ['(11) 3589-4043', 'suporte@ecosystem.com']

  return (
    <>
      <main className="sticky top-[0vh] z-[1] w-full">
        <section
          className={`float-left h-[100vh] w-5/12 bg-[url('@/assets/img/eco.jpg')] bg-cover bg-center transition-all duration-500`}
        ></section>
        <nav className="flex h-[15vh] items-center justify-between bg-marine-900 px-10 py-2">
          <Link to={'/'}>
            <img src={logo} className="w-44 cursor-pointer" />
          </Link>
          <div className="relative flex w-2/6 items-center justify-center gap-5">
            <Dropdown
              text="Fale conosco"
              options={options}
              className="relative z-10 cursor-pointer whitespace-nowrap py-8 text-center text-lg text-moss-green-100 transition-all duration-200"
            />
            <button
              className="w-32 whitespace-nowrap rounded-md bg-moss-green-300 py-2 text-lg transition-all duration-200 hover:bg-moss-green-700 hover:text-moss-green-50 hover:drop-shadow-md"
              onClick={handleMove}
            >
              {toMove ? 'Log in' : 'Cadastre-se'}
            </button>
          </div>
        </nav>
        <div className="flex h-[85vh] w-7/12 flex-col items-center justify-center bg-marine-900 transition-all duration-300">
          {/* Login Form */}
          <div
            className={`box relative ${
              toMove ? '-top-[100%]' : 'top-44'
            } flex h-[60vh] w-5/12 flex-1 flex-col items-center justify-start gap-8 transition-all duration-500`}
          >
            <FormLogin />
            <p className="select-none text-lg text-moss-green-100">
              Não tem conta?
              <span
                onClick={handleMove}
                className="ml-1 cursor-pointer text-moss-green-500"
              >
                Cadastre-se
              </span>
            </p>
          </div>

          {/* Cadastro Form */}
          <div
            className={`box relative ${
              toMove ? '-top-44' : 'top-[100%]'
            } flex h-[60vh] w-7/12 flex-1 flex-col items-center justify-start gap-10 transition-all duration-500`}
          >
            {/* Label condominio/cooperativa */}
            <div className="select absolute -top-24 left-0 flex w-full items-center justify-center">
              <p
                className={`cursor-pointer select-none rounded-s-full text-xl transition-all duration-300 ${
                  cooperativa
                    ? 'bg-moss-green-300 px-10 py-2 text-moss-green-800'
                    : 'bg-moss-green-900 px-10 py-2 text-moss-green-600'
                }`}
                onClick={handleCooperativa}
              >
                Sou uma <b>Cooperativa</b>
              </p>
              <p
                className={`cursor-pointer select-none rounded-e-full text-xl transition-all duration-300 ${
                  condomino
                    ? 'bg-moss-green-300 px-10 py-2 text-moss-green-800'
                    : 'bg-moss-green-900 px-10 py-2 text-moss-green-600'
                }`}
                onClick={handleCondomino}
              >
                Sou um <b>Condominio</b>
              </p>
            </div>
            {/* Form cadastro */}
            <FormCadastro />
            <p className="select-none text-lg text-moss-green-100">
              Já possui conta?
              <span
                className="ml-1 cursor-pointer text-moss-green-500"
                onClick={handleMove}
              >
                Entre!
              </span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
