console.log("Entro a index.js");
//  EDONPINT: https://dev4humans.com.mx/api/Clases/ventas_libros
const tbody = document.getElementById('tbody');
axios.get('https://dev4humans.com.mx/api/Clases/ventas_peliculas')
    .then(datosApi => {
        console.log(datosApi);
        const ctx = document.getElementById('myChart');

        const labels = datosApi.data.data.labels;
        const data = datosApi.data.data.data;

        // Gráfica
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Promedio Ventas Diarias',
                    data: data,
                    borderWidth: 1,
                    borderColor: [
                        "#EDF569",
                        "#69F581",
                        "#69F5EB",
                        "#6984F5",
                        "#B469F5",
                        "#F5933D"
                    ],
                    backgroundColor: [
                        "#F5933D",
                        "#EDF569",
                        "#69F581",
                        "#69F5EB",
                        "#6984F5",
                        "#B469F5",
                        
                    ],
                }],

            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        // Datos de tabla
        tbody.innerHTML = "";
        labels.forEach((label, index) => {
            console.log(index);
            const tr = document.createElement("tr");
            
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${label}</td>
                <td>${data[index]}</td>
            `;
            tbody.appendChild(tr);
        });

        console.log("Libro", labels[0]);
        console.log("Promedio", data[0]);

        console.log("Libro", labels[1]);
        console.log("Promedio", data[1]);


    })
    .catch(error => {
        console.log("axios error", error);
    });