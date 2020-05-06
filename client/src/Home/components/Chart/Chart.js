import React,{Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

const state = {
    labels: ['Banking', 'Insurance', 'Risk, Finance and Regulation'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 17],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
  }

class Chart extends Component{
    render(){
        return(
            <div>
                <Doughnut
          data={state}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            title:{
              display:true,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
            </div>
        )
    }
}

export default Chart;