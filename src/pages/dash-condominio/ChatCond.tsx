import { Link } from "react-router-dom";
import SideBarCondominio from "../../components/DashCondominio/SidebarCondominio";
import { useState } from 'react'
import ContatoChat from "../../components/DashCooperativa/ContatoChat";

export default function ChatCond() {

    return (
        <>
            <main className="flex p-2 h-screen gap-1 bg-marine-50">
                <SideBarCondominio />
                <div className="flex flex-row items-start p-4 self-stretch w-full gap-3 bg-marine-700 rounded-2xl">
                    <div className="lista h-full w-1/4 rounded-2xl bg-moss-green-900 px-8 shadow-2xl">
                        <div className="input-group relative h-28 w-full pt-10">
                            <span className="material-symbols-outlined absolute left-2 top-[46px] text-xl">
                                search
                            </span>
                            <input
                                type="text"
                                className="w-full rounded-full bg-marine-50 p-2 pl-9 text-base text-moss-green-600 placeholder:text-moss-green-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-moss-green-500"
                                placeholder="Buscar"
                            />
                        </div>
                        {/* Lista dos condominios */}
                        <ul className="flex h-full w-full flex-col gap-7 overflow-y-auto pb-32 pr-2 text-moss-green-50">
                            <ContatoChat
                                id="1"
                                status="offline"
                                condominio="Cond. Luz do Sol"
                                mensagem="Perfeito! Vou agendar agora mesmo."
                                hora="10:30"
                                data="Hoje"
                            />
                            <ContatoChat
                                id="2"
                                status="online"
                                condominio="Resid. Arcádia"
                                mensagem="Estou com uma dúvi..."
                                hora="18:30"
                                data="Ontem"
                            />
                            <ContatoChat
                                id="3"
                                status=""
                                condominio="Cond. Ventura"
                                mensagem="Obrigado pelo contato!"
                                hora="11:45"
                                data="Otem"
                            />
                            <ContatoChat
                                id="4"
                                status="offline"
                                condominio="Flat São Paulo"
                                mensagem="Ficamos felizes com ..."
                                hora="09:15"
                                data="Terça"
                            />
                            <ContatoChat
                                id="5"
                                status="online"
                                condominio="Cond. São Lucas"
                                mensagem="Olá, não conseguiremos..."
                                hora="10:30"
                                data="Terça"
                            />
                            <ContatoChat
                                id="6"
                                status="online"
                                condominio="Cond. Edifício Mood"
                                mensagem="..."
                                hora="15:00"
                                data="Seg"
                            />
                        </ul>
                    </div>
                    {/* Chat */}
                    <div className="flex h-full w-full  items-center justify-center text-4xl text-moss-green-50">
                        Nenhuma conversa selecionada
                    </div>
                </div>
            </main>
        </>
    )

}