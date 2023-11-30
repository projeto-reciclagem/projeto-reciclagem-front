import Chart from 'react-apexcharts';

const ValorChart = () => {
    const data = {
        series: [
            {
                name: 'Valor Recebido (R$)',
                data: [1200, 1500, 1350, 1800, 1400, 1300],
            },
        ],
        options: {
            chart: {
                type: 'area',
                height: 350,
            },
            title: {
                text: 'Valor recebido por mês',
                align: 'center',
                style: {
                    fontSize: '24px',
                    fontFamily: 'RobotoCondensed, sans-serif',
                    fontWeight: 400
                },
            },
            subtitle: {
                text: 'Valor em reais',
                align: 'center',
                style: {
                    color: '#4CAF50',
                    fontStyle: 'italic',
                },
            },
            xaxis: {
                categories: ['Março/2023', 'Abril/2023', 'Maio/2023', 'Junho/2023', 'Julho/2023', 'Agosto/2023'],
            },
            yaxis: {
                title: {
                    text: 'Valor Recebido (R$)',
                },
            },
        },
    };

    return (
        <Chart
            options={data.options}
            series={data.series}
            type="area"
            height={650}
            width={1300}
        />
    );
};

export default ValorChart;