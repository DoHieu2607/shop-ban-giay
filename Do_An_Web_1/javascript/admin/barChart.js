var myBarChart = document.getElementById("chart").getContext("2d");
var BarChart = new Chart(myBarChart, {
	type : 'bar',
	data: {
    labels: ["Lượt Views", "Lượt thích", "Doanh thu"],
    datasets: [{
		label:"Tháng 11",
        data: [1350, 1213, 3030],
		 backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
		 borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
		
    },
	{
        label:"Tháng 12",
        data: [2050, 2504, 4050],
		backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
		 borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
    }]
	},
	options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
             }
            }]
        }
    }
});
