import { Link } from "react-router-dom";
import SideBarCondominio from "../../components/DashCondominio/SidebarCondominio";
import CondominioChat from "../../components/DashCondominio/CondominioContato";

export default function ChatCond() {

    return (
        <>
            <main className="flex p-2 h-screen gap-1 bg-marine-50">
                <SideBarCondominio />
                <div className="flex flex-row items-start p-4 self-stretch w-full gap-3 bg-marine-700 rounded-2xl">
                    <section className="flex h-full w-[95%] gap-5 pl-8">
                        {/* Lista de condomínios (contatos) */}
                        <div className="lista h-full w-[25rem] rounded-2xl bg-marine-900 px-8 shadow-2xl">
                            <div className="input-group h-28 w-full pt-10">
                                <span className="material-symbols-outlined absolute ml-2 top-[70px] text-xl">
                                    search
                                </span>
                                <input
                                    type="text"
                                    className="w-full rounded-full bg-marine-50 p-2 pl-9 text-base text-marine-600 placeholder:text-marine-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-marine-500"
                                    placeholder="Buscar"
                                />
                            </div>
                            {/* Lista dos condominios */}
                            <ul className="flex w-full flex-col gap-7 overflow-y-auto text-marine-50">
                                <CondominioChat
                                    id="1"
                                    status="offline"
                                    cooperativa="Sol Nascer - Cooperativ"
                                    mensagem="Perfeito! Vou agendar ago..."
                                    hora="14:37"
                                    data="Hoje"
                                />
                                <CondominioChat
                                    id="2"
                                    status="online"
                                    cooperativa="Cooperativa 5 de Julho"
                                    mensagem="Desculpe, no momento nã..."
                                    hora="17:18"
                                    data="Ontem"
                                />
                                <CondominioChat
                                    id="3"
                                    status=""
                                    cooperativa="Cooperativa Água Bran"
                                    mensagem="Obrigado pelo contato!"
                                    hora="10:45"
                                    data="Ontem"
                                />
                                <CondominioChat
                                    id="4"
                                    status="offline"
                                    cooperativa="Cooper. Caminho Certo"
                                    mensagem="Ficamos felizes em te atender!"
                                    hora="08:39"
                                    data="Terça"
                                />
                                <CondominioChat
                                    id="5"
                                    status="online"
                                    cooperativa="Cooperat. Central Tietê"
                                    mensagem="Pra quando seria a coleta?"
                                    hora="13:21"
                                    data="Terça"
                                />
                            </ul>
                        </div>
                        {/* Chat */}
                        <div className="flex h-full w-full items-center justify-center text-4xl text-marine-50">
                            Nenhuma conversa selecionada
                        </div>
                    </section>
                </div>
            </main>
        </>
    )

}