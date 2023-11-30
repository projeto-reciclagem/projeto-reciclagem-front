import Chart from 'react-apexcharts';

const LinhaChart = () => {
  const data = {
    series: [
      {
        name: 'Plástico',
        data: [7, 5, 10, 8, 9, 7, 12, 8, 15],
      },
      {
        name: 'Papel',
        data: [14, 18, 13, 15, 14, 20, 12, 17, 13],
      },
      {
        name: 'Metal',
        data: [7, 8, 9, 8, 5, 8, 4, 6, 10],
      },
      {
        name: 'Vidro',
        data: [3, 4, 3, 5, 2, 3, 6, 5, 7],
      },
    ],
    options: {
      chart: {
        type: 'line',
        height: 350,
      },
      colors: ['#FF0000', '#0000FF', '#FFFF00', '#008000'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [5, 5, 5, 5],
      },
      title: {
        text: 'Reciclagem Semanal',
        align: 'center',
        margin: 20,
        offsetY: 20,
        style: {
          fontSize: '32px',
          fontFamily: 'Roboto',
          fontWeight: 600,
        },
      },
      xaxis: {
        categories: ['1-Oct', '8-Oct', '15-Oct', '22-Oct', '29-Oct', '05-Nov', '12-Nov', '19-Nov', '26-Nov'],
      },
      yaxis: {
        title: {
          text: 'Quantidade',
        },
      },
    },
  };

  return (
    <div>
      <Chart options={data.options} series={data.series} type="line" height={650} width={1150} />
    </div>
  );
};

export default LinhaChart;