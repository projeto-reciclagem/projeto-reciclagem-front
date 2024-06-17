interface LastMostCollectedMaterialProps {
  lastMaterial: string
}

export function LastMostCollectedMaterial({
  lastMaterial,
}: LastMostCollectedMaterialProps) {
  return (
    <>
      {lastMaterial === 'plastico' && (
        <span className="font-semibold text-red-400">Plástico</span>
      )}
      {lastMaterial === 'papel' && (
        <span className="font-semibold text-blue-400">Papel</span>
      )}
      {lastMaterial === 'metal' && (
        <span className="font-semibold text-yellow-400">Metal</span>
      )}{' '}
      {lastMaterial === 'vidro' && (
        <span className="font-semibold text-green-400">Vidro</span>
      )}{' '}
      foi o material mais coletado do mês passado
    </>
  )
}
