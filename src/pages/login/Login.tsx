import Footer from '../../components/Footer'
import logo from '../../assets/eco-system-logo.svg'
import LastSection from '../../components/LastSection'
import Input from '../../components/Input'
import { Eye, Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Dropdown from '../../components/Dropdown'

export default function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
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

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleGoHome = () => {
    navigate('/')
  }

  const options = ['(11) 3589-4043', 'suporte@ecosystem.com']

  return (
    <>
      <LastSection>
        <section
          className={`float-left h-[100vh] w-5/12 bg-[url('@/assets/img/eco.jpg')] bg-cover bg-center transition-all duration-500`}
        ></section>
        <nav className="flex h-[15vh] justify-between bg-marine-900 px-10 py-2">
          <img
            src={logo}
            onClick={handleGoHome}
            className="w-44 cursor-pointer"
          />
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
        <section className="flex h-[85vh] w-7/12 flex-col items-center justify-center bg-marine-900 transition-all duration-300">
          <div
            className={`box relative ${
              toMove ? '-top-[100%]' : 'top-32'
            } flex h-[60vh] w-5/12 flex-col items-center justify-start gap-10 transition-all duration-500`}
          >
            <h3 className="mb-4 font-mono text-4xl text-moss-green-50">
              Log in to EcoSystem
            </h3>
            <div className="flex w-full flex-col gap-12">
              <Input label="Email" id="email" type="email">
                <Mail className="absolute right-4 top-2 h-5 w-5 text-moss-green-100" />
              </Input>
              <Input
                label="Senha"
                id="password"
                type={showPassword ? 'text' : 'password'}
              >
                <Eye
                  className="absolute right-4 top-2 h-6 w-5 cursor-pointer text-moss-green-100"
                  onClick={handleShowPassword}
                />
                <div
                  className={`absolute right-[25px] top-2 cursor-pointer ${
                    showPassword ? 'h-[25px]' : 'h-[0]'
                  } w-[2px] -rotate-[25deg] rounded-xl bg-moss-green-100 transition-all duration-150`}
                  onClick={handleShowPassword}
                ></div>
              </Input>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <button className="w-full select-none rounded-lg bg-moss-green-300 py-2 text-lg text-moss-green-900 transition-all duration-300 hover:bg-moss-green-700 hover:text-moss-green-50 hover:drop-shadow-md">
                Entrar
              </button>
              <p className="select-none text-lg text-moss-green-100">
                Não tem conta?
                <span
                  className="ml-1 cursor-pointer text-moss-green-500"
                  onClick={handleMove}
                >
                  Cadastre-se
                </span>
              </p>
            </div>
          </div>
          <div
            className={`box relative ${
              toMove ? '-top-44' : 'top-[100%]'
            } flex h-[60vh] w-7/12 flex-col items-center justify-start gap-10 transition-all duration-500`}
          >
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
            <div className="flex w-full flex-col gap-16">
              <div className="flex gap-5">
                <Input label="Nome completo" id="name-cad" type="text" />
                <Input label="CNPJ" id="cnpj-cad" type="text" />
              </div>
              <div className="flex gap-5">
                <Input label="Email" id="email-cad" type="email" />
                <Input label="Telefone" id="phone-cad" type="tel" />
              </div>
              <div className="flex gap-5">
                <Input label="Senha" id="password-cad" type="password" />
                <Input
                  label="Confirmar senha"
                  id="confirm-password-cad"
                  type="password"
                />
              </div>
              <div className="flex w-full flex-col items-center justify-center gap-2">
                <button className="w-full select-none rounded-lg bg-moss-green-300 py-2 text-lg text-moss-green-900 transition-all duration-300 hover:bg-moss-green-700 hover:text-moss-green-50 hover:drop-shadow-md">
                  Cadastrar
                </button>
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
          </div>
        </section>
      </LastSection>
      <Footer />
    </>
  )
}
