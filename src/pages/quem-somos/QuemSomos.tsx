import Header from '../../components/Header'
import MVV from '../../components/MVV'
import Members from '../../components/Members'
import img from '@/assets/img/selva.jpg'
import { useEffect } from 'react'

import augusto from '@/assets/img/augusto.jpg'
import nilton from '@/assets/img/nilton.jpeg'
import marcus from '@/assets/img/marcus.jpg'
import vini from '@/assets/img/vini.jpg'
import iury from '@/assets/img/iury.png'
import samuca from '@/assets/img/samuca.png'
import LastSection from '../../components/LastSection'
import Footer from '../../components/Footer'

export default function QuemSomos() {
  useEffect(() => {
    document.addEventListener('scroll', rolar)
    const missao = document.getElementById('missao') as HTMLElement
    const visao = document.getElementById('visao') as HTMLElement
    const valores = document.getElementById('valores') as HTMLElement

    function rolar() {
      const atualPosicao = window.scrollY

      if (atualPosicao > 1600) {
        missao.style.left = '100px'
      } else {
        missao.style.left = '-1500px'
      }

      if (atualPosicao > 1800) {
        visao.style.left = '100px'
      } else {
        visao.style.left = '-1500px'
      }

      if (atualPosicao > 2000) {
        valores.style.left = '100px'
      } else {
        valores.style.left = '-1500px'
      }
    }
  }, [])

  return (
    <>
      <Header />
      {/* Frase inspiradora */}
      <section className="relative flex h-[90vh] w-full items-center justify-center overflow-hidden bg-white px-40 shadow-lg">
        <img src={img} className="absolute z-[0] opacity-90" />
        <div className="absolute h-[90vh] w-full bg-gradient-to-tl from-rose-50/0 to-moss-green-900/90"></div>
        <h3
          className="text-shadow-md relative -top-10 z-[1] w-full border-spacing-4 rounded-2xl p-4 pl-10 text-left font-mono text-6xl font-medium leading-snug tracking-widest text-camel-100"
          style={{
            wordSpacing: '5px',
            // animation: 'wiggle 7s infinite alternate 2s ease-in-out',
          }}
        >
          "Cada pequeno esforço conta e contribui para um planeta mais saudável
          e sustentável. Vamos juntos fazer a diferença!"
        </h3>
      </section>

      {/* Sobre nós */}
      <section className="relative -top-14 z-10 flex h-[80vh] w-full items-center justify-center gap-12 rounded-se-[60px] rounded-ss-[60px] bg-gradient-to-t from-moss-green-600 to-moss-green-300">
        <div className="img-team top-0 h-[40vh] w-2/5 rounded-xl bg-[url('../assets/img/team.png')] bg-cover bg-center shadow-2xl" />

        <div className="img-team flex h-[25vh] w-[37%] flex-col gap-6 rounded-md">
          <h2 className=" font-mono text-4xl font-bold text-moss-green-900">
            Sobre nós
          </h2>
          <div
            className="textos flex flex-col gap-6 tracking-wider"
            style={{ wordSpacing: '5px' }}
          >
            <p className="text-2xl text-moss-green-50">
              Nossa empresa é a reprodução do desejo de todos nossos integrantes
              em mudar o mundo de forma sustentável.
            </p>
            <p className="text-2xl text-moss-green-50 max-lg:text-lg">
              Com isso pensamos em uma forma de resolver as dificuldades dos
              envolvidos no processo de reciclagem, pessoas e cooperativas,
              usando a tecnologia ao nosso favor.
            </p>
          </div>
        </div>
      </section>
      {/* Nosso membros */}
      <section className="relative -top-14 flex h-[70vh] w-full flex-row-reverse items-center justify-center gap-12 bg-gradient-to-t from-moss-green-800 to-moss-green-600">
        <div className="img-team flex h-[80vh] w-2/5 flex-col items-center justify-center gap-5 overflow-hidden rounded-md bg-slate-300/0">
          <div className="flex">
            <Members
              img={augusto}
              nome="Augusto César"
              cargo="Front-end"
              texto='"Em busca de um planeta sustentável"'
            />
            <Members
              img={marcus}
              nome="Marcus Gonçalves"
              cargo="FullStack"
              texto='"Cada reciclagem faz um mundo mais verde"'
            />
            <Members
              img={vini}
              nome="Vinicius Pereira"
              cargo="Front-end"
              texto='"Reciclar: um pequeno gesto, um grande impacto"'
            />
          </div>
          <div className="flex">
            <Members
              img={nilton}
              nome="Nilton Gabriel"
              cargo="Back-end"
              texto='"Seja parte da solução, recicle conscientemente"'
            />
            <Members
              img={iury}
              nome="Iury Israel"
              cargo="Back-end / Negócio"
              texto='"Transforme o lixo em esperança, recicle!"'
            />
            <Members
              img={samuca}
              nome="Samuel Mariano"
              cargo="Back-end / DBA"
              texto='"Reciclar é a chave para um futuro sustentável"'
            />
          </div>
        </div>
        <div className="img-team flex h-[30vh] w-[33%] flex-col gap-6 rounded-md text-right">
          <h2 className=" font-mono text-4xl font-bold text-marine-900">
            Nossos membros
          </h2>
          <div
            className="textos flex flex-col gap-6 tracking-wider"
            style={{ wordSpacing: '5px' }}
          >
            <p className="text-2xl text-moss-green-50">
              Nossa equipe atualmente é formada por 6 membros, todos são
              essenciais no desenvolvimento desse projeto, trabalhando com muita
              dedicação, esforço e responsabilidade.
            </p>
            <p className="text-2xl text-moss-green-50">
              Cada um deles desempenhando um papel muito importante em nosso
              projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <LastSection>
        <section className="relative -top-14 flex h-[110vh] w-full flex-col items-center justify-center bg-moss-green-800 p-10 py-20">
          <MVV
            id="missao"
            titulo="Missão"
            texto="Facilitar uma parceria inovadora entre cooperativas de reciclagem e condomínios de apartamento para promover a reciclagem, conscientização ambiental e construir um mundo mais limpo e sustentável."
            className="relative left-[-1000px] flex h-full w-3/4 flex-col gap-4 px-8 transition-all duration-500"
          />

          <MVV
            id="visao"
            titulo="Visão"
            texto="Ser líder na transformação da percepção da reciclagem, criando uma rede local de parcerias que beneficie o meio ambiente e as comunidades, tornando a reciclagem uma parte essencial da vida cotidiana."
            className="relative left-[-1300px] flex h-full w-3/4 flex-col gap-4 px-8 transition-all duration-500"
          />

          <MVV
            id="valores"
            titulo="Valores"
            texto='Sustentabilidade, Inovação, Colaboração, Responsabilidade Social.  
                "Nosso compromisso com a sustentabilidade nos impulsiona a inovar, colaborar e assumir nossa responsabilidade social, criando um impacto positivo duradouro."'
            className="relative left-[-1500px] flex h-full w-3/4 flex-col gap-4 px-8 transition-all duration-700"
          />
        </section>
      </LastSection>
      <Footer />
    </>
  )
}
