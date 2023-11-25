import { Link } from "react-router-dom";
import SideBarCondominio from "../../components/DashCondominio/SidebarCondominio";
import { useState } from "react";

export default function ConfigCond() {

    return (
        <>
            <main className="flex flex-row w-max h-max justify-center px-3 items-center bg-marine-50">
                <SideBarCondominio>

                </SideBarCondominio>
                <div className="flex flex-col items-center py-[75px] self-stretch w-[1100px] h-5/6 gap-3 bg-marine-700 rounded-2xl mt-2">
                    <div className="flex flex-col w-5/6 h-5/6 p-8 rounded-2xl gap-20 bg-moss-green-50">
                        <div className="flex flex-col justify-center mt-10 items-center gap-1">
                            <p className="text-marine-900 text-center text-3xl">Editar Perfil</p>
                            <div className="w-[600px] h-[2px] bg-gray-500"></div>
                        </div>
                        <div className="flex flex-wrap flex-row gap-8 self-center justify-center items-center content-center w-5/6">
                            <div className="w-[280px] h-[300px] flex flex-col text-marine-900">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="">CEP</label>
                                    <input className="w-[280px] bg-white rounded" id="cep-cad" type="text"/>
                                </div>
                                <div className="flex flex-col gap-1 mt-1">
                                    <label htmlFor="">Logradouro</label>
                                    <input className="w-[280px] bg-white rounded" id="logradouro-cad" type="text"/>
                                </div>
                                <div className="flex flex-col gap-1 mt-1">
                                    <label htmlFor="">Número</label>
                                    <input className="w-[280px] bg-white rounded" id="numero-cad" type="number"/>
                                </div>
                                <div className="flex flex-col gap-1 mt-1">
                                    <label htmlFor="">Nome de Usuário</label>
                                    <input className="w-[280px] bg-white rounded" id="nome-cad" type="text"/>
                                </div>
                                <div className="flex flex-col gap-1 mt-1">
                                    <label htmlFor="">E-mail</label>
                                    <input className="w-[280px] bg-white rounded" id="email-cad" type="email"/>
                                </div>
                            </div>
                            <div className="w-[280px] h-[300px] flex flex-col text-marine-900">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="">Bairro</label>
                                    <input className="w-[280px] bg-white rounded" id="bairro-cad" type="text"/>
                                </div>
                                <div className="flex flex-col gap-1 mt-1">
                                    <label htmlFor="">Cidade</label>
                                    <input className="w-[280px] bg-white rounded" id="cidade-cad" type="text"/>
                                </div>
                                <div className="flex flex-col gap-1 mt-1">
                                    <label htmlFor="">UF</label>
                                    <input className="w-[280px] bg-white rounded" id="uf-cad" type="text"/>
                                </div>
                                <div className="flex flex-col gap-1 mt-1">
                                    <label htmlFor="">Senha</label>
                                    <input className="w-[280px] bg-white rounded" id="senha-cad" type="password"/>
                                </div>
                                <div className="flex flex-col gap-1 mt-1">
                                    <label htmlFor="">Confirmar Senha</label>
                                    <input className="w-[280px] bg-white rounded" id="confirmar-senha-cad" type="password"/>
                                </div>
                            </div>
                            <div className="w-[88px] h-[40px] self-center">
                                <button className="bg-moss-green-500 w-max h-max p-2 rounded-lg">Alterar Dados</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )

}