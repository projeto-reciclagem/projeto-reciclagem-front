interface MVV2Props {
  titulo: string
  texto: string
  className: string
  id: string
}

export default function MVV2({ titulo, texto, className, id }: MVV2Props) {
  return (
    <div className={className} id={id}>
      <div className="flex items-center">
        <h3 className="mb-4 font-mono text-6xl font-medium text-marine-100">
          {titulo}
        </h3>
      </div>
      <p
        className="mr-28 w-8/12 text-right text-3xl leading-10 tracking-wider text-moss-green-200"
        style={{ wordSpacing: '10px' }}
      >
        {texto}
      </p>
    </div>
  )
}
