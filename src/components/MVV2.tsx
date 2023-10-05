import React from "react";

interface Props {
    titulo: string,
    img: string,
    texto: string,
    className: string,
    id: string
}

const MVV2: React.FC<Props> = ({ titulo, img, texto, className, id }) => {
    return (
        <div className={className} id={id}>
            <div className="flex items-center">
                <img src={img} className="w-24 mr-6" />
                <h3 className="text-camel-900 font-medium text-9xl font-mono mb-4">{titulo}</h3>
            </div>
            <p className="text-3xl text-right leading-10 tracking-wider mr-28 w-8/12" style={{ wordSpacing: '10px' }}>{texto}</p>
        </div>
    )
}

export default MVV2;