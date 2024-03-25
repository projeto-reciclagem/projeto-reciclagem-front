import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-black">
        Voltar para o{' '}
        <Link
          to="/"
          className="text-lg font-bold text-moss-green-600 hover:underline"
        >
          Início
        </Link>
      </p>
    </div>
  )
}
