import { useLocation } from "react-router-dom";
import SideBarCondominio from "../../components/DashCondominio/SidebarCondominio";
import { useState } from "react";
import '../../styles/dash-condominio.css';
import MaterialChart from "../../components/DashCondominio/MaterialChart.jsx";
import CarbonChart from "../../components/DashCondominio/CarbonChart.js";
import ValorChart from "../../components/DashCondominio/ValorChart.js";

export default function RelatorioCond() {
    
    const [selectedChart, setSelectedChart] = useState('materiais');

    const handleChartChange = (chartType : string) => {
        setSelectedChart(chartType);
    }

    return (
        <>
            <main className="flex p-2 h-screen gap-1 bg-marine-50">
                <SideBarCondominio />
                <div className='flex flex-col p-6 self-stretch w-full gap-3 bg-marine-700 rounded-2xl'>
                    <div className="flex flex-col gap-2 h-28 w-full">
                        <p className="text-marine-50 text-base font-normal">Relatórios disponíveis:</p>
                        <div className="flex items-center justify-between py-2 px-0 w-full h-14 self-stretch">
                            <div className="flex items-center gap-5 h-max w-96">
                                <button className={`p-1 justify-center items-center rounded-lg border-solid border-2 border-moss-green-500 
                                ${selectedChart === 'materiais' ? 'select' : 'unselect'}`} onClick={() => handleChartChange('materiais')}>Materiais</button>
                                <button className={`p-1 justify-center items-center rounded-lg border-solid border-2 border-moss-green-500 
                                ${selectedChart === 'carbono' ? 'select' : 'unselect'}`} onClick={() => handleChartChange('carbono')}>Carbono</button>
                                <button className={`p-1 justify-center items-center rounded-lg border-solid border-2 border-moss-green-500 
                                ${selectedChart === 'valor' ? 'select' : 'unselect'}`} onClick={() => handleChartChange('valor')}>Valor</button>
                            </div>
                            <button className={`flex self-center p-1 gap-2 items-center rounded-lg bg-moss-green-300`}>Exportar Dados</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full 2xl:w-full 2xl:h-full bg-marine-50 rounded-xl'>
                        {selectedChart === 'materiais' && <MaterialChart />}
                        {selectedChart === 'carbono' && <CarbonChart />}
                        {selectedChart === 'valor' && <ValorChart />}
                    </div>
                </div>
            </main>
        </>
    )
}