import { Link } from "react-router-dom";
import SideBarCondominio from "../../components/DashCondominio/SidebarCondominio";


export default function PedidosCond() {

    return (

        <>
            <main className="flex p-2 h-full gap-1 bg-marine-50">
                <SideBarCondominio />
                <div className="flex flex-col rounded-2xl gap-6 h-[38.75rem] w-[70rem] justify-between items-start self-stretch py-3 px-2 bg-marine-700">
                    <div className="flex py-2 justify-between items-start self-stretch">
                        <div className="flex h-max w-auto gap-2">
                            <p className="font-sans font-medium text-2xl">Status do pedido atual:</p>
                            <p className="font-sans font-medium text-2xl text-camel-400">Em análise</p>
                        </div>
                        <div className="flex h-8 w-32 justify-center items-center rounded-lg bg-moss-green-300">
                            <button className="flex h-max w-max font-sans p-2">+ Novo Pedido</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-start py-6 px-4 bg-moss-green-300 w-max h-5/6 rounded-2xl">
                        <p className="flex font-sans text-2xl font-medium">Histórico de pedidos</p>
                        <div className="flex bg-white h-[35.75rem] w-[67rem] rounded-lg">
                            
                        </div>
                    </div>
                </div>
            </main>
        </>

    )

}