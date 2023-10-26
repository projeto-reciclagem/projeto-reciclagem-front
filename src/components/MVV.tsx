interface MVVProps {
  titulo: string
  texto: string
  className: string
  id: string
}

export default function MVV({ titulo, texto, className, id }: MVVProps) {
  return (
    <div className={className} id={id}>
      <div className="flex items-center">
        <h3 className="font-mono text-4xl font-medium text-marine-100">
          {titulo}
        </h3>
        {/* <img src={img} className="ml-6 w-24 text-camel-100" /> */}
      </div>
      <p
        className="ml-20 w-8/12 text-justify text-2xl leading-10 tracking-wider text-moss-green-200"
        style={{ wordSpacing: '5px' }}
      >
        {texto}
      </p>
    </div>
  )
}
