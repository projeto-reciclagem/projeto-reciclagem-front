import React from "react";

interface Props {
    titulo: string,
    img: string,
    texto: string,
    className: string,
    id: string
}

const MVV: React.FC<Props> = ({ titulo, img, texto, className, id }) => {
    return (
        <div className={className} id={id}>
            <div className="flex items-center">
                <h3 className="text-camel-900 font-medium text-9xl font-mono mb-4">{titulo}</h3>
                <img src={img} className="w-24 ml-6" />
            </div>
            <p className="text-3xl leading-10 tracking-wider ml-28 w-8/12" style={{wordSpacing: '10px'}}>{texto}</p>
        </div>
    )
}

export default MVV;