import React from 'react'
import { Line } from 'react-chartjs-2'


const SCANChart = ({ returnFinArray3 }) => {
    var arr2 = returnFinArray3();

    return (
      <div>
        <Line
        data={{
          labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
          datasets: [
            {
            label: "Seek Time",
            data: arr2,
            backgroundColor: "rgba(40, 196, 93, 0.07)",
            borderColor: "white",
            borderWidth: 1,
            pointBorderWidth: 2.4,
            pointBackgroundColor: "tranparent",
            pointBorderColor: "#22c55e",
            fill: true,
            lineTension: 0
          }
          ]
        }}
          height={300}
          width={500}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }}
        />
      </div>
    )
}

export default SCANChart