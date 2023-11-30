import { useState } from 'react'
import { LayoutCooperativa } from '../../components/DashCooperativa/LayoutCooperativa'
import LineChart from '../../components/DashCooperativa/LineChart'
import DonutChart from '../../components/DashCooperativa/DonutChart';
import PrecoTable from '../../components/DashCooperativa/PrecoTable';

export default function Cooperativa() {

  const [selectedChart, setSelectedChart] = useState('reciclagem');
  const handleChartChange = (chartType: string) => {
    setSelectedChart(chartType);
  }

  return (
    <>
      <LayoutCooperativa page="Overview" />
      <main
        className={`absolute left-[1.5%] w-full h-full flex flex-col border-l-4 border-moss-green-500 bg-moss-green-800 transition-all duration-150`}
      >
        <div className="flex self-center h-[24vh] w-11/12 items-center justify-between gap-14 bg-transparent">
          <div className="flex h-[180px] w-[250px] flex-col items-center justify-center gap-5 rounded-xl bg-moss-green-50 p-4 text-center">
            <p className="text-2xl">Coletas feitas na última semana</p>
            <span className='text-2xl'>37</span>
          </div>
          <div className="flex h-[180px] w-[250px] flex-col items-center justify-center gap-5 rounded-xl bg-moss-green-50 p-4 text-center">
            <p className="text-2xl">Total reciclado na última semana</p>
            <span className='text-2xl'>100 Toneladas</span>
          </div>
          <div className="flex h-[180px] w-[250px] flex-col items-center justify-center gap-5 rounded-xl bg-moss-green-50 p-4 text-center">
            <p className="text-2xl">Material mais reciclado na última semana</p>
            <span className='text-2xl'>PET - 26ton</span>
          </div>
          <div className="flex h-[180px] w-[250px] flex-col items-center justify-center gap-5 rounded-xl bg-moss-green-50 p-4 text-center">
            <p className="text-2xl">Condomínios atendidos na última semana</p>
            <span className='text-2xl'>28</span>
          </div>
        </div>
        <div className='flex flex-col self-center items-center mt-1 gap-1 h-24 w-11/12'>
          <p className="text-marine-50 text-xl font-normal">Relatórios disponíveis:</p>
          <div className="flex items-center h-14">
            <div className="flex items-center gap-5 h-full w-full">
              <button className={`p-1 justify-center items-center rounded-lg border-solid border-2 border-moss-green-500 
                                ${selectedChart === 'reciclagem' ? 'select' : 'unselect'}`} onClick={() => handleChartChange('reciclagem')}>Reciclagem semanal</button>
              <button className={`p-1 justify-center items-center rounded-lg border-solid border-2 border-moss-green-500 
                                ${selectedChart === 'material' ? 'select' : 'unselect'}`} onClick={() => handleChartChange('material')}>% por material</button>
              <button className={`p-1 justify-center items-center rounded-lg border-solid border-2 border-moss-green-500 
                                ${selectedChart === 'preco' ? 'select' : 'unselect'}`} onClick={() => handleChartChange('preco')}>Preço/Material</button>
            </div>
          </div>
        </div>
        <div className='flex items-center mt-1 self-center justify-center sm:w-full sm:h-full md:w-11/12 md:h-4/12 lg:w-7/12 lg:h-1/12 2xl:w-8/12 2xl:h-3/5 bg-marine-50 rounded-lg'>
          {selectedChart === 'reciclagem' && <LineChart />}
          {selectedChart === 'material' && <DonutChart />}
          {selectedChart === 'preco' && <PrecoTable />}
        </div>
      </main>
    </>
  )
}
