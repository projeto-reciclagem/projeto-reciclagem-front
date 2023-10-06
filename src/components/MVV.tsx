interface MVVProps {
  titulo: string
  img: string
  texto: string
  className: string
  id: string
}

export default function MVV({ titulo, img, texto, className, id }: MVVProps) {
  return (
    <div className={className} id={id}>
      <div className="flex items-center">
        <h3 className="mb-4 font-mono text-9xl font-medium text-camel-900">
          {titulo}
        </h3>
        <img src={img} className="ml-6 w-24" />
      </div>
      <p
        className="ml-28 w-8/12 text-3xl leading-10 tracking-wider"
        style={{ wordSpacing: '10px' }}
      >
        {texto}
      </p>
    </div>
  )
}
