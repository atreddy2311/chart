import React from 'react';

import { useEffect, useState } from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';

import {
  DollarCircleOutlined,
  RedoOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  } from "@ant-design/icons";
  import { Card, Space, Statistic, Table, Typography } from "antd";
  
  
  import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// import './App.css';


  ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
  );
  
  
  function Dashboard() {
  
  return (
  <Space size={20} direction="vertical">
  
  <Space>
  <DashboardChart />
  <DashboardHistory/>
  </Space>

  <div style={{ display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    marginTop: "20px"}}>

  <DashboardReplacedParts/>

  </div>

  <div style={{  
    
    height: "350px",
    width: "575px",
    margin: "-367px 0px 0px 599px"}}>
      

      <ScatterChart/>
  {/* <PieChart/> */}

  
  </div>

  </Space>
  );

  }
  
  
  function DashboardCard({ title, value, icon }) {
  return (
  <Card>
  <Space direction="horizontal">
  {icon}
  <Statistic title={title} value={value} />
  </Space>
  </Card>
  );
  }
  
  
  
  
  function DashboardChart () {
  
  
  const [data, setData] = useState({
  
  
  labels: ['P0500', 'P0502', 'P0503', 'P0504', 'P0505', 'P0505','P0506', 'P0507', 'P0508','P050'],
  
  
  datasets: [
  
  
  {
  
  
  label: 'Most Occuring DTC',
  
  
  data: [100,90,80,70,60,50,40,30,20,10],
  
  
  backgroundColor:['rgb(0, 204, 153)','rgb(0, 102, 153)','rgb(213, 255, 128)','rgb(51, 153, 255)','rgb(41, 163, 41)','rgb(255, 102, 0)','rgb(61, 92, 92)','rgb(77, 51, 25) ']
  
  
  },
  
  
  ],
  
  
  });
  
  
  
  const handleSelectionChange = (event) => {
  
  
  const selection = event.target.value;
  
  
  
  if (selection === 'weekly') {
  
  
  setData({
  
  
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6','Week 7', 'Week 8', 'Week 9','week 10'],
  
  
  datasets: [
  
  
  {
  
  
  label: 'Weekly Data',
  
  
  data: [20, 35, 10, 45,50,80,70,40],
  
  
  backgroundColor:['rgb(0, 204, 153)','rgb(0, 102, 153)','rgb(213, 255, 128)','rgb(51, 153, 255)','rgb(41, 163, 41)','rgb(255, 102, 0)','rgb(61, 92, 92)','rgb(77, 51, 25) ']
  
  
  },
  
  
  ],
  
  
  });
  
  
  } else if (selection === 'monthly') {
  
  
  setData({
  
  
  labels: ['January', 'February', 'March', 'April','May','June','July','August','September','Octomber'],
  
  
  datasets: [
  
  
  {
  
  
  label: 'Monthly Data',
  
  
  data: [150, 100, 80, 120,30,80,60],
  
  
  backgroundColor:['rgb(0, 204, 153)','rgb(0, 102, 153)','rgb(213, 255, 128)','rgb(51, 153, 255)','rgb(41, 163, 41)','rgb(255, 102, 0)','rgb(61, 92, 92)','rgb(77, 51, 25) ']
  
  
  },
  
  
  ],
  
  
  });
  
  
  }
  
  
  };
  
  
  
  return (
  
  
  <div>
  
  
  
  
  
  <Card style={{ width: 575, height: 350 }}>
  <select onChange={handleSelectionChange}>
  
  
  <option value="weekly">
  Weekly</option>
  
  
  <option value="monthly">Monthly</option>
  
  
  </select>
  {/* <span> Count</span> */}
  
  
  {/* <h4>Count</h4> */}
  <Bar data={data} />
  
  
  </Card>
  
  </div>
  
  
  );
  
  
  };
  
  function DashboardHistory () {
  
  
  const [data, setData] = useState({
  
  
  labels: ['A', 'B', 'C', 'D', 'E', 'F','I', 'G', 'K','L'],
  
  
  datasets: [
  
  
  {
  
  
  label: ' DTC HIGH RESOLUTION TIMEs',
  
  
  data: [100,90,80,70,60,50,40,30,20,10],
  
  
  backgroundColor:['rgb(0, 204, 153)','rgb(0, 102, 153)','rgb(213, 255, 128)','rgb(51, 153, 255)','rgb(41, 163, 41)','rgb(255, 102, 0)','rgb(61, 92, 92)','rgb(77, 51, 25) ']
  
  
  },
  
  
  ],
  
  
  });
  
  
  
  const handleSelectionChange = (event) => {
  
  
  const selection = event.target.value;
  
  
  
  if (selection === 'weekly') {
  
  
  setData({
  
  
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6','Week 7', 'Week 8', 'Week 9','week 10'],
  
  
  datasets: [
  
  
  {
  
  
  label: 'Weekly Data',
  
  
  data: [20, 35, 10, 45,50,80,70,40],
  
  
  backgroundColor:['rgb(0, 204, 153)','rgb(0, 102, 153)','rgb(213, 255, 128)','rgb(51, 153, 255)','rgb(41, 163, 41)','rgb(255, 102, 0)','rgb(61, 92, 92)','rgb(77, 51, 25) ']
  
  
  },
  
  
  ],
  
  
  });
  
  
  } else if (selection === 'monthly') {
  
  
  setData({
  
  
  labels: ['January', 'February', 'March', 'April','May','June','July','August','September','Octomber'],
  
  
  datasets: [
  
  
  {
  
  
  label: 'Monthly Data',
  
  
  data: [150, 100, 80, 120,30,80,60],
  
  
  backgroundColor:['rgb(0, 204, 153)','rgb(0, 102, 153)','rgb(213, 255, 128)','rgb(51, 153, 255)','rgb(41, 163, 41)','rgb(255, 102, 0)','rgb(61, 92, 92)','rgb(77, 51, 25) ']
  
  
  },
  
  
  ],
  
  
  });
  
  
  }
  
  
  };
  
  
  
  return (
  <div style={{margin:"0 0 0 13px"}}>
  <Card style={{ width: 520, height: 350 }}>
  <select onChange={handleSelectionChange}>
  <option value="weekly">
  Monthly</option>
  
  <option value="monthly">Monthly</option>
  
  </select>
  {/* <span> Count</span> */}
  
  {/* <h4>Count</h4> */}
  <Bar data={data} />
  </Card>
  
  </div>
  
  );
  
  
  };
  
  function DashboardReplacedParts () {
  
  
  const [data, setData] = useState({
  
  
  labels: ['', 'B', 'C', 'D', 'E', 'F','I', 'G', 'K','L'],
  
  
  datasets: [
  
  
  {
  
  
  label: ' Most Replaced Parts',
  
  
  data: [100,90,80,70,60,50,40,30,20,10],
  
  
  backgroundColor:['rgb(0, 204, 153)','rgb(0, 102, 153)','rgb(213, 255, 128)','rgb(51, 153, 255)','rgb(41, 163, 41)','rgb(255, 102, 0)','rgb(61, 92, 92)','rgb(77, 51, 25) ']
  
  
  },
  
  
  ],
  
  
  });
  
  
  
  const handleSelectionChange = (event) => {
  
  
  const selection = event.target.value;
  
  
  
  if (selection === 'weekly') {
  
  
  setData({
  
  
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6','Week 7', 'Week 8', 'Week 9','week 10'],
  
  
  datasets: [
  
  
  {
  
  
  label: 'Weekly Data',
  
  
  data: [20, 35, 10, 45,50,80,70,40],
  
  
  backgroundColor:['rgb(0, 204, 153)','rgb(0, 102, 153)','rgb(213, 255, 128)','rgb(51, 153, 255)','rgb(41, 163, 41)','rgb(255, 102, 0)','rgb(61, 92, 92)','rgb(77, 51, 25) ']
  
  
  },
  
  
  ],
  
  
  });
  
  
  } else if (selection === 'monthly') {
  
  
  setData({
  
  
  labels: ['January', 'February', 'March', 'April','May','June','July','August','September','Octomber'],
  
  
  datasets: [
  
  
  {
  
  
  label: 'Monthly Data',
  
  
  data: [150, 100, 80, 120,30,80,60],
  
  
  backgroundColor:['rgb(0, 204, 153)','rgb(0, 102, 153)','rgb(213, 255, 128)','rgb(51, 153, 255)','rgb(41, 163, 41)','rgb(255, 102, 0)','rgb(61, 92, 92)','rgb(77, 51, 25) '] 
  },

  ],
 
  });

  }
   
  };
  

  return (
  <div>
  <Card style={{ width: 575, height: 350 }}>
  <select onChange={handleSelectionChange}>
  <option value="weekly">
  Monthly</option>
  
  <option value="monthly">Monthly</option>
  
  </select>
  {/* <span> Count</span> */}
  
  {/* <h4>Count</h4> */}
  <Bar data={data} />
  </Card>
  
  </div>
  );
  };
  
 
    
  function ScatterChart()  {
      const options = {
        // theme: "",
        animationEnabled: true,
        zoomEnabled: true,
        title:{
          text: "DTC involves part replacement"
        },
        axisX: {
          // title:"Temperature (in °C)",
          // suffix: "°C",
          crosshair: {
            enabled: true,
            snapToDataPoint: true
          }
        },
        axisY:{
          // title: "Sales",
          includeZero: false,
          crosshair: {
            enabled: true,
            snapToDataPoint: true
          }
        },
        data: [{
          type: "scatter",
          markerSize: 35,
          toolTipContent: "<b>Temperature: </b>{x}°C<br/><b>Sales: </b>{y}",
          dataPoints: [
            { x: 14.2, y: 215},
            { x: 12.9, y: 175},
            { x: 16.4, y: 325},
            { x: 26.9, y: 635},
            { x: 32.5, y: 464},
            { x: 22.1, y: 522},
            { x: 19.4, y: 412},
            { x: 25.1, y: 614},
            
          ]
        }]
      }
      
      return (
    
        <div className="scatter-chart">
            {/* <Card style={{ width: 575, height: 350 }}> */}

        <CanvasJSChart options = {options} 
          /* onRef={ref => this.chart = ref} */
        />
        {/* </Card> */}
        </div>
      
      
    
      );
    
  }

  const data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ], 
};
function PieChart() {
  const [data, setData] = useState({
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ], 
});
  useEffect(()=> {
    const fetchData = () =>  {
      fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        console.log("resss", res)
        const label = [];
        const data = [];
        for(var i of res) {
            label.push(i.name);
            data.push(i.id)
        }
        setData(
          {
            datasets: [{
                data:data,
                backgroundColor:[
                  'red',
                  'blue',
                  'yellow'
                ]
            },
          ],
          labels:label, 
        }
        )

      }).catch(e => {
        console.log("error", e)
      }) 
    }
  fetchData();
  }, [])
  return (
    <div className="App" style={{width:'100%', height:'100%'}}>
      <Pie data={data}/>
    </div>
  );
}

  export default Dashboard;