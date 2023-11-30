import Chart from 'react-apexcharts';

const DonutChart = () => {
  const data = {
    series: [28, 22, 32, 12, 6],
    options: {
      chart: {
        type: 'donut',
      },
      title: {
        text: '% por material',
        align: 'center',
        style: {
          fontSize: '24px',
          fontFamily: 'RobotoCondensed, sans-serif',
          fontWeight: 400,
        },
      },
      labels: ['Plástico', 'Papel', 'Alumínio', 'Cobre', 'Vidro'],
      colors: ['#FF0000', '#0000FF', '#FFFF00', '#FFA500', '#008000'],
      legend: {
        show: true,
      },
    },
  };

  return (
    <div>
      <Chart options={data.options} series={data.series} type="donut" height={450} width={900}/>
    </div>
  );
};

export default DonutChart;