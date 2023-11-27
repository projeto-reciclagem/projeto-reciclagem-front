import Chart from 'react-apexcharts';

const MaterialChart = () => {
    // Dados fictícios para o exemplo
    const data = {
        series: [
            {
                name: 'Papel',
                data: [
                    { x: '2023-11-01', y: 5 },
                    { x: '2023-11-02', y: 8 },
                ],
            },
            {
                name: 'Plástico',
                data: [
                    { x: '2023-11-01', y: 10 },
                    { x: '2023-11-02', y: 12 },
                ],
            },
            {
                name: 'Metal',
                data: [
                    { x: '2023-11-01', y: 3 },
                    { x: '2023-11-02', y: 5 },
                ],
            },
            {
                name: 'Vidro',
                data: [
                    { x: '2023-11-01', y: 2 },
                    { x: '2023-11-02', y: 4 },
                ],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            title: {
                text: 'Kg por coleta',
                align: 'center',
                style: {
                    fontSize: '24px',
                    fontFamily: 'RobotoCondensed, sans-serif',
                    fontWeight: 400
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                type: 'date',  // Especifica que o eixo x contém dados de data e hora
                categories: [
                    '2023-11-01',
                    '2023-11-02',
                ],
            },
            yaxis: {
                title: {
                    text: 'Quantidade (kg)',
                },
            },
            fill: {
                opacity: 1,
            },
        },
    };

    return (
        <div className='flex self-center items-center justify-center'>
            <Chart
                options={data.options}
                series={data.series}
                type="bar"
                height={540}
                width={1000}
            />
        </div>
    );
};

export default MaterialChart;