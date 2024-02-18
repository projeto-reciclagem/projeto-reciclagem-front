import { useState } from 'react'
import { Link } from 'react-router-dom'

import ecoSystemLogo from '@/assets/eco-system-logo.svg'
import { LoginForm } from '@/components/login-form'
import { RegisterForm } from '@/components/register-form'
import { Button } from '@/components/ui/button'

export function Access() {
  const [shouldShowLogin, setShouldShowLogin] = useState(true)

  function handleRegisterForm() {
    if (shouldShowLogin) {
      setShouldShowLogin(false)
      return
    }

    setShouldShowLogin(true)
  }

  return (
    <div className="flex min-h-screen">
      <div className='w-4/6 bg-[url("@/assets/img/eco.jpg")] bg-cover bg-center' />

      <div className="w-full bg-marine-900">
        <header className="flex items-center justify-between px-8 py-3">
          <Link to={'/'}>
            <img src={ecoSystemLogo} alt="" />
          </Link>

          <Button
            onClick={handleRegisterForm}
            className="bg-moss-green-400 text-marine-900 hover:bg-moss-green-600"
          >
            {shouldShowLogin ? 'Cadastrar-se' : 'Entrar'}
          </Button>
        </header>

        <div
          className={`${shouldShowLogin ? 'mt-40' : 'mt-32'} flex flex-col items-center justify-center`}
        >
          <h1 className="mb-6 text-3xl text-white">
            {shouldShowLogin ? (
              <p>Entre no EcoSystem</p>
            ) : (
              <p>Registre-se no EcoSystem</p>
            )}
          </h1>
          {shouldShowLogin ? (
            <LoginForm shouldShowLogin={setShouldShowLogin} />
          ) : (
            <RegisterForm shouldShowLogin={setShouldShowLogin} />
          )}
        </div>
      </div>
    </div>
  )
}
