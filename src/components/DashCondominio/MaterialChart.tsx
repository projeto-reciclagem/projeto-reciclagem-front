import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MaterialChart = () => {
    
    const data = {
        series: [
            {
                name: 'Plástico',
                data: [2.5, 4.7, 3.8, 6.1, 3.6, 3.3],
            },
            {
                name: 'Papel',
                data: [2, 4.8, 4, 5.3, 3.9, 3.5],
            },
            {
                name: 'Vidro',
                data: [1, 3, 2, 3.7, 2.3, 2],
            },
            {
                name: 'Metal',
                data: [1, 2.8, 2.4, 3.9, 2, 2],
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
                    fontWeight: 400,
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: ['Março/2023', 'Abril/2023', 'Maio/2023', 'Junho/2023', 'Julho/2023', 'Agosto/2023'],
            },
            yaxis: {
                title: {
                    text: 'Quantidade (kg)',
                },
            },
            colors: ['#FF5733', '#3366FF', '#66FF66', '#FFFF66'], // Cores para cada tipo de material 
        },
    };

    return (
            <ReactApexChart
                options={data.options}
                series={data.series}
                type="bar"
                height={540}
                width={1000}
                className="flex items-center justify-center sm:w-5/6 sm:h-max md:w-full md:h-max lg:w-full lg:h-max xl:w-full xl:h-max"/>
    );
};

export default MaterialChart;