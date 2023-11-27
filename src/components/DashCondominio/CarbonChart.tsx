import Chart from 'react-apexcharts';

const CarbonChart = () => {
    const data = {
        series: [
            {
                name: 'Redução de Carbono (%)',
                data: [30, 23, 39, 45, 32, 26],
            },
        ],
        options: {
            chart: {
                type: 'line',
                height: 350,
            },
            title: {
                text: 'Redução de Carbono por Consumo',
                align: 'center',
                style: {
                    fontSize: '24px',
                    fontFamily: 'RobotoCondensed, sans-serif',
                    fontWeight: 400,
                },
            },
            subtitle: {
                text: 'Quanto maior, melhor',
                align: 'center',
                style: {
                    color: '#4CAF50',
                }
            },
            xaxis: {
                categories: ['Março/2023', 'Abril/2023', 'Maio/2023', 'Junho/2023', 'Julho/2023', 'Agosto/2023'],
            },
            yaxis: {
                title: {
                    text: 'Redução de Carbono (%)',
                },
            },
        },
    };

    return (
        <div>
            <Chart
                options={data.options}
                series={data.series}
                type="line"
                height={540}
                width={1000}
            />
        </div>
    );
};

export default CarbonChart;