src

// Gráfico de Barras - refere-se a quantidade de zonas no shopping
    //Sugestão de Kpi's = Zona mais lotada, Zona mais Vazia, Média de Pessoas e Total de Pessoas.


    const labels = [
        'Alpha',
        'Beta',
        'Delta',
        'Epilson',
        'Sigma',
        'Omega',
        'Teta',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Pessoas X Zona',
            data: [5372, 1441, 2007, 959, 3765, 2221, 365],
            backgroundColor: '#1a3950',
            borderColor: '#000000',

        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Pessoas por Zona do Shopping'
                }
            }
        }
    };



    // Gráfico de Pizza - refere-se a ocupação total do shopping
    //Sugestão de Kpi's = Porcentagem de Ocupação de Pessoas,Porcentagem Ocupação Livre de Pessoas e Total de Pessoas.


    const labels2 = [
        'Livre',
        'Ocupado',
    ];

    const data2 = {
        labels: labels2,
        datasets: [{
            label: 'Ocupação Atual do Shopping',
            data: [6.452, 9.678],
            backgroundColor: [
                'green',
                'red'
            ],
            borderColor: '#000',

        }]
    };

    const config2 = {
        type: 'pie',
        data: data2,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Ocupação Atual do Shopping'
                }
            }
        },
    };
    // Gráfico de Linhas - refere- se ao movimento de pessoas por hora do dia
    //Sugestão de Kpi's = Horário de Pico,Horário mais vazio, Média de Pessoas e Total de Pessoas.

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    const myChart2 = new Chart(
        document.getElementById('myChart2'),
        config2
    );