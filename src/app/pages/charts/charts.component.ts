import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  basicData: any;

  basicOptions: any;

  multiAxisData: any;

  chartOptions: any;

  multiAxisOptions: any;

  stackedData: any;

  stackedOptions: any;

  horizontalOptions: any;

  data: any;

  dataCombo: any;

  combochartOptions: any;

  Radardata: any;

  RadarchartOptions: any;

  PiechartOptions: any;

  Piedata: any;

  PolarchartOptions: any;

  Polardata: any;

  LineChartOptions: any;

  basicLineChartData: any;

  LineChartmultiAxisOptions: any;

  LineChartmultiAxisData: any;

  LineStylesOptions: any;

  LineStylesdata: any;

  constructor() { }

  ngOnInit() {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#FFA726',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  };

  this.multiAxisData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          label: 'Dataset 1',
          backgroundColor: [
              '#EC407A',
              '#AB47BC',
              '#42A5F5',
              '#7E57C2',
              '#66BB6A',
              '#FFCA28',
              '#26A69A'
          ],
          yAxisID: 'y',
          data: [65, 59, 80, 81, 56, 55, 10]
      }, {
          label: 'Dataset 2',
          backgroundColor: '#78909C',
          yAxisID: 'y1',
          data: [28, 48, 40, 19, 86, 27, 90]
      }]
  };

  this.multiAxisOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          },
          tooltips: {
              mode: 'index',
              intersect: true
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              type: 'linear',
              display: true,
              position: 'left',
              ticks: {
                  min: 0,
                  max: 100,
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y1: {
              type: 'linear',
              display: true,
              position: 'right',
              grid: {
                  drawOnChartArea: false,
                  color: '#ebedef'
              },
              ticks: {
                  min: 0,
                  max: 100,
                  color: '#495057'
              }
          }
      }
  };

  this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          }
      }
  };

  this.stackedData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          type: 'bar',
          label: 'Dataset 1',
          backgroundColor: '#42A5F5',
          data: [
              50,
              25,
              12,
              48,
              90,
              76,
              42
          ]
      }, {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: '#66BB6A',
          data: [
              21,
              84,
              24,
              75,
              37,
              65,
              34
          ]
      }, {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: '#FFA726',
          data: [
              41,
              52,
              24,
              74,
              23,
              21,
              32
          ]
      }]
  };

  this.stackedOptions = {
      tooltips: {
          mode: 'index',
          intersect: false
      },
      responsive: true,
      scales: {
          xAxes: [{
              stacked: true,
          }],
          yAxes: [{
              stacked: true
          }]
      }
  };



  this.data = {
    labels: ['A','B','C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }
    ]
};



this.dataCombo = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
      type: 'line',
      label: 'Dataset 1',
      borderColor: '#42A5F5',
      borderWidth: 2,
      fill: false,
      data: [
          50,
          25,
          12,
          48,
          56,
          76,
          42
      ]
  }, {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: '#66BB6A',
      data: [
          21,
          84,
          24,
          75,
          37,
          65,
          34
      ],
      borderColor: 'white',
      borderWidth: 2
  }, {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: '#FFA726',
      data: [
          41,
          52,
          24,
          74,
          23,
          21,
          32
      ]
  }]
};

this.combochartOptions =  {
  plugins: {
      legend: {
          labels: {
              color: '#495057'
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: '#495057'
          },
          grid: {
              color: '#ebedef'
          }
      },
      y: {
          ticks: {
              color: '#495057'
          },
          grid: {
              color: '#ebedef'
          }
      }
  }
};


this.Radardata = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
      {
          label: 'My First dataset',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
          label: 'My Second dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
      }
  ]
};

this.Piedata = {
  labels: ['A','B','C'],
  datasets: [
      {
          data: [250, 100, 100],
          backgroundColor: [
              "#42A5F5",
              "#66BB6A",
              "#FFA726"
          ],
          hoverBackgroundColor: [
              "#64B5F6",
              "#81C784",
              "#FFB74D"
          ]
      }
  ]
};


this.Polardata = {
  datasets: [{
      data: [
          11,
          16,
          7,
          3,
          14
      ],
      backgroundColor: [
          "#42A5F5",
          "#66BB6A",
          "#FFA726",
          "#26C6DA",
          "#7E57C2"
      ],
      label: 'My dataset'
  }],
  labels: [
      "Red",
      "Green",
      "Yellow",
      "Grey",
      "Blue"
  ]
};

this.basicLineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5',
          tension: .4
      },
      {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#FFA726',
          tension: .4
      }
  ]
};

this.LineChartmultiAxisData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
      label: 'Dataset 1',
      fill: false,
      borderColor: '#42A5F5',
      yAxisID: 'y',
      tension: .4,
      data: [65, 59, 80, 81, 56, 55, 10]
  }, {
      label: 'Dataset 2',
      fill: false,
      borderColor: '#00bb7e',
      yAxisID: 'y1',
      tension: .4,
      data: [28, 48, 40, 19, 86, 27, 90]
  }]
};

this.multiAxisOptions = {
  stacked: false,
  plugins: {
      legend: {
          labels: {
              color: '#495057'
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: '#495057'
          },
          grid: {
              color: '#ebedef'
          }
      },
      y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
              color: '#495057'
          },
          grid: {
              color: '#ebedef'
          }
      },
      y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
              color: '#495057'
          },
          grid: {
              drawOnChartArea: false,
              color: '#ebedef'
          }
      }
  }
};

this.LineStylesdata = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: .4,
          borderColor: '#42A5F5'
      },
      {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderDash: [5, 5],
          tension: .4,
          borderColor: '#66BB6A'
      },
      {
          label: 'Third Dataset',
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: '#FFA726',
          tension: .4,
          backgroundColor: 'rgba(255,167,38,0.2)'
      }
  ]
};



  }

}
