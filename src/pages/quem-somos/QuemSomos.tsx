import Header from "../../components/Header";
import MVV from "../../components/MVV";
import Members from "../../components/Members";
import missao from '@/assets/img/target.svg'
import visao from '@/assets/img/Eye.svg'
import valores from '@/assets/img/HandHeart.svg'
import img from "@/assets/img/folhas.jpg"
import MVV2 from "../../components/MVV2";
import { useEffect, useState } from "react";

import augusto from '@/assets/img/augusto.jpg'
import nilton from '@/assets/img/nilton.jpeg'
import marcus from '@/assets/img/marcus.jpg'
import vini from '@/assets/img/vini.jpg'
import iury from '@/assets/img/iury.png'
import samuca from '@/assets/img/samuca.png'

export default function QuemSomos() {
    useEffect(() => {
        document.addEventListener('scroll', rolar);
        const missao = document.getElementById('missao') as HTMLElement;
        const visao = document.getElementById('visao') as HTMLElement;
        const valores = document.getElementById('valores') as HTMLElement;

        function rolar() {  
            const atualPosicao = window.scrollY;

            if (atualPosicao > 1550) {
                missao.style.left = '0';
            } else {
                missao.style.left = '-1500px';
            }

            if (atualPosicao > 1800) {
                visao.style.right = '0';
            } else {
                visao.style.right = '-1500px';
            }

            if (atualPosicao > 2000) {
                valores.style.left = '0';
            } else {
                valores.style.left = '-1500px';
            }
        }
    }, [])

    const [hovered, setHovered] = useState(false);

    const handleMouseOver = () => {
        setHovered(true);
    }

    const handleMouseOut = () => {
        setHovered(false);
    }


    return (
        <>
            <Header />
            {/* Frase inspiradora */}
            <section className="bg-white flex items-center justify-center w-full h-[90vh] px-40 relative overflow-hidden shadow-lg">
                <img src={img} className="absolute z-[0] opacity-50" />
                <h3 className="text-6xl text-camel-800 border-spacing-4 font-medium text-center text-shadow-md tracking-widest leading-snug z-[1]"
                    style={{ wordSpacing: '5px', animation: 'wiggle 7s infinite alternate 2s ease-in-out' }}>
                    "Lembre-se, cada pequeno esforço conta e contribui para um planeta mais saudável e sustentável. Vamos juntos fazer a diferença!"
                </h3>
            </section>

            {/* Sobre nós */}
            <section className="flex justify-center items-center gap-12 w-full h-[70vh] relative">
                <div className="img-team w-2/5 h-[40vh] rounded-md bg-[url('../assets/img/team.png')] bg-cover bg-center top-0 shadow-2xl" />

                <div className="img-team w-[37%] h-[25vh] rounded-md flex flex-col gap-6">
                    <h2 className=" text-4xl text-camel-900 font-bold font-mono">Sobre nós</h2>
                    <div className="textos flex flex-col gap-6 tracking-wider" style={{ wordSpacing: '5px' }}>
                        <p className="text-xl">Nossa empresa é a reprodução do desejo de todos nossos integrantes em mudar o mundo de forma sustentável.</p>
                        <p className="text-xl">Com isso pensamos em uma forma de resolver as dificuldades dos envolvidos no processo de reciclagem, pessoas e cooperativas, usando a tecnologia ao nosso favor.</p>
                    </div>
                </div>
            </section>

            {/* Nosso membros */}
            <section className="flex flex-row-reverse justify-center items-center gap-12 w-full h-[70vh] relative">
                <div className="flex  overflow-hidden flex-col items-center justify-center img-team w-2/5 h-[40vh] rounded-md bg-slate-300/0">
                    <div
                        className="flex items-center h-full pl-60 relative left-[-500px]"
                        style={{
                            animation: 'members 20s infinite alternate ease-out',
                            animationPlayState: hovered ? 'paused' : ''
                        }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >

                        <Members img={augusto} nome="Augusto César" cargo="Front-end" texto='"Em busca de um planeta sustentável"' />
                        <Members img={nilton} nome="Nilton Gabriel" cargo="Back-end" texto='"Em busca de um planeta sustentável"' />
                        <Members img={marcus} nome="Marcus Gonçalves" cargo="FullStack" texto='"Em busca de um planeta sustentável"' />
                        <Members img={iury} nome="Iury Israel" cargo="Back-end / Negócio" texto='"Em busca de um planeta sustentável"' />
                        <Members img={samuca} nome="Samuel Mariano" cargo="Back-end / DBA" texto='"Em busca de um planeta sustentável"' />
                        <Members img={vini} nome="Vinicius Pereira" cargo="Front-end" texto='"Em busca de um planeta sustentável"' />
                    </div>
                </div>

                <div className="img-team w-[37%] h-[20vh] rounded-md flex flex-col gap-6 text-right">
                    <h2 className=" text-4xl text-camel-900 font-mono font-bold">Nossos membros</h2>
                    <div className="textos flex flex-col gap-6 tracking-wider" style={{ wordSpacing: '5px' }}>
                        <p className="text-xl">Nossa equipe atualmente é formada por 6 membros, todos são essenciais no desenvolvimento desse projeto, trabalhando com muita dedicação, esforço e responsabilidade. </p>
                        <p className="text-xl">Cada um deles desempenhando um papel muito importante em nosso projeto.</p>
                    </div>
                </div>
            </section>

            {/* Missão, Visão e Valores */}
            <section className="flex flex-col justify-center items-center w-full h-auto p-10">
                <MVV id="missao" titulo="Missão" img={missao} texto="Facilitar uma parceria inovadora entre cooperativas de reciclagem e condomínios de apartamento para promover a reciclagem, conscientização ambiental e construir um mundo mais limpo e sustentável."
                    className="flex flex-col w-full h-full gap-4 px-8 relative left-[-1000px] transition-all duration-500"
                />

                <MVV2 id="visao" titulo="Visão" img={visao} texto="Ser líder na transformação da percepção da reciclagem, criando uma rede local de parcerias que beneficie o meio ambiente e as comunidades, tornando a reciclagem uma parte essencial da vida cotidiana."
                    className="flex flex-col items-end w-full h-full gap-4 px-8 relative right-[-1500px] transition-all duration-700"
                />

                <MVV id="valores" titulo="Valores" img={valores} texto='Sustentabilidade, Inovação, Colaboração, Responsabilidade Social.  
                "Nosso compromisso com a sustentabilidade nos impulsiona a inovar, colaborar e assumir nossa responsabilidade social, criando um impacto positivo duradouro."'
                    className="flex flex-col w-full h-full gap-4 px-8 relative left-[-1000px] transition-all duration-700"
                />
            </section>
        </>
    )
}