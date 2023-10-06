interface MVV2Props {
  titulo: string
  img: string
  texto: string
  className: string
  id: string
}

export default function MVV2({ titulo, img, texto, className, id }: MVV2Props) {
  return (
    <div className={className} id={id}>
      <div className="flex items-center">
        <img src={img} className="mr-6 w-24" />
        <h3 className="mb-4 font-mono text-9xl font-medium text-camel-900">
          {titulo}
        </h3>
      </div>
      <p
        className="mr-28 w-8/12 text-right text-3xl leading-10 tracking-wider"
        style={{ wordSpacing: '10px' }}
      >
        {texto}
      </p>
    </div>
  )
}
