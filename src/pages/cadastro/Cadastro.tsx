import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Cadastro() {
    return (
        <main className="min-w-screen min-h-screen bg-moss-green-50">
            <Header />
            <section className="min-w-full min-h-[840px] flex justify-center items-center m-0 p-0">
                <section className="min-w-[1140px] min-h-[638px] flex self-center items-center bg-leaf-100 m-0 p-0">
                    <section className="min-w-[340px] min-h-[638px] bg-[url('@/assets/img/image-sign-up.jpg')] bg-cover bg-no-repeat rounded-e-2xl">
                    </section>
                    <section className="min-w-[830px] min-h-[638px] flex justify-center">
                        <section id="sign-up" className="min-w-[336px] min-h-[200px] flex flex-col self-center items-start">
                            <select className="min-w-[308px] min-h-[37px] pl-2 rounded-lg mt-6" name="" id="">
                                <option value="1">Sou uma Cooperativa</option>
                                <option value="2">Sou um Condomínio</option>
                            </select>
                            <label className="pl-2 mt-3" htmlFor="">Nome completo</label>
                            <input type="text" className="min-w-[308px] min-h-[37px] pl-3 rounded-lg" placeholder="Insira seu nome" />
                            <label className="pl-2 mt-3" htmlFor="">E-mail</label>
                            <input type="email" className="min-w-[308px] min-h-[37px] pl-3 rounded-lg" placeholder="Insira seu e-mail" />
                        </section>
                        <section id="sign-up" className="min-w-[336px] min-h-[200px] flex flex-col self-center items-start">
                            <label className="pl-2" htmlFor="">CPNJ</label>
                            <input type="text" className="min-w-[308px] min-h-[37px] pl-3 rounded-lg" placeholder="Insira o CNPJ" />
                            <label className="pl-2 mt-3" htmlFor="">Senha</label>
                            <input type="password" className="min-w-[308px] min-h-[37px] pl-3 rounded-lg" placeholder="Insira sua senha" />
                            <label className="pl-2 mt-3" htmlFor="">Confirmar Senha</label>
                            <input type="password" className="min-w-[308px] min-h-[37px] pl-3 rounded-lg" placeholder="Confirme sua senha" />
                        </section>
                        <section className="min-w-[144px] min-h-[84px] flex absolute bottom-56 justify-center items-center">
                            <Link to={'login'}>
                                <button className="bg-moss-green-500 text-zinc-50 font-normal px-8 py-2 rounded-xl hover:bg-moss-green-800 transition-all duration-500 ease-in-out">
                                    Cadastrar
                                </button>
                            </Link>
                        </section>
                    </section>
                </section>
            </section>
            <Footer />
        </main>
    )
}