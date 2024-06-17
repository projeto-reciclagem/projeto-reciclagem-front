interface MostCollectedMaterialVariantProps {
  materialAtual: string
}

export function MostCollectedMaterialVariant({
  materialAtual,
}: MostCollectedMaterialVariantProps) {
  return (
    <>
      {materialAtual === 'papel' && (
        <span className="text-2xl font-bold tracking-tight text-blue-400">
          Papel
        </span>
      )}

      {materialAtual === 'plastico' && (
        <span className="text-2xl font-bold tracking-tight text-red-400">
          Plástico
        </span>
      )}

      {materialAtual === 'metal' && (
        <span className="text-2xl font-bold tracking-tight text-yellow-400">
          Metal
        </span>
      )}

      {materialAtual === 'vidro' && (
        <span className="text-2xl font-bold tracking-tight text-green-400">
          Vidro
        </span>
      )}
    </>
  )
}
