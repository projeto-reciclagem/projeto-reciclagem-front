import Chart from 'react-apexcharts';

const LineChart = () => {
    const data = {
        series: [
            {
                name: 'Quantidade total reciclada',
                data: [40, 42, 58, 49, 45, 38, 45, 48, 41],
            },
        ],
        options: {
            chart: {
                type: 'line',
                height: 350,
            },
            title: {
                text: 'Reciclagem Semanal',
                align: 'center',
                style: {
                    fontSize: '24px',
                    fontFamily: 'RobotoCondensed, sans-serif',
                    fontWeight: 400
                },
            },
            xaxis: {
                categories: [
                    '01/10',
                    '08/10',
                    '15/10',
                    '22/10',
                    '29/10',
                    '05/11',
                    '12/11',
                    '19/11',
                    '25/11',
                ],
            },
            yaxis: {
                title: {
                    text: 'Quantidade (em toneladas)',
                },
            },
        },
    };

    return (
        <Chart
            options={data.options}
            series={data.series}
            type="area"
            height={450}
            width={900}
        />
    );
};

export default LineChart;