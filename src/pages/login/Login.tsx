import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UserIcon from "../../components/UserIcon";
import LockIcon from "../../components/LockIcon";
import { User2Icon } from "lucide-react";

export default function Login() {
    return (
        <main className="min-w-screen min-h-screen bg-moss-green-50">
            <Header />
            <section className="min-w-full max-h-[1440px] flex justify-center">
            <section className="min-w-[140px] min-h-[140px] flex absolute top-28 justify-center items-center rounded-full bg-marine-300 z-10">
                    <section className="min-w-[130px] min-h-[130px] flex justify-center items-center rounded-full bg-white z-20">
                        <section className="min-w-[93px] min-h-[93px] flex justify-center items-center rounded-full bg-moss-green-50">
                            <User2Icon color="#6d9f90" size={70} className="rounded-full z-30" />
                        </section>
                    </section>
                </section>
                <section className="min-h-[563px] min-w-[676px] rounded-xl my-28 flex flex-col gap-4 justify-center bg-leaf-100">
                    <h1 className="min-h-[37px] min-w-[383px] flex justify-center relative top-10 text-3xl text-marine-900">Seja bem-vindo à EcoSystem</h1>
                    <UserIcon />
                    <input id="ipt_login" type="text" className="min-h-[56px] min-w-[500px] flex self-center relative left-1 top-2" placeholder="E-mail" />
                    <LockIcon />
                    <input id="ipt_senha" type="password" className="min-h-[56px] min-w-[500px] flex self-center relative left-1 bottom-12" placeholder="Senha" />
                    <span className="text-sm flex relative left-2/3 ml-4 bottom-16"><a href="">Esqueceu sua senha?</a></span>
                    <span className="text-base flex self-center relative bottom-12">Não possui cadastro?<a href="" className="text-camel-500">Clique aqui</a></span>
                    <Link to={'dashboard'}>
                        <button className='flex relative left-60 ml-3 bottom-5 bg-moss-green-500 text-zinc-50 font-normal px-16 py-2 rounded-xl hover:bg-moss-green-800 transition-all duration-500 ease-in-out'>
                            Entrar
                        </button>
                    </Link>
                </section>
            </section>
            <Footer />
        </main>
    )
}