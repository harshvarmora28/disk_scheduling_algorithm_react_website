import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const LineChart = ({ chartData }) => {
  return (
    
    <Line className='bg-gray-900' data={chartData} />
  )
}

export default LineChart