import React, {Component} from 'react';

import {core as CoreChart} from 'zingchart-react';
import {line as LineChart } from 'zingchart-react';
import {area as AreaChart} from 'zingchart-react';
import {pie as PieChart} from 'zingchart-react';

import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import Panel from 'muicss/lib/react/panel';




class Dashboards extends Component
{
	render()
	{

	var myLineValues = [
    { text : "2013", values : [0,1,2,2,4,6,7] },
    { text : "2014", values : [18,12,7,14,1,19,4] },
    { text : "2015", values : [0,1,12,12,4,6,17] },
    { text : "2016", values : [18,22,17,4,1,9,4] },
    { text : "2017", values : [4,2,7,3,23,7,2] },
    { text : "2018", values : [10,6,8,2,6,3,9] },
];

var myAreaValues = [
  { text : "Q1", values : [0,1,2,2,4,6,7] },
  { text : "Q2", values : [18,12,7,14,1,19,4] },
  { text : "Q3", values : [0,1,12,12,4,6,17] },
  { text : "Q4", values : [18,22,17,4,1,9,4] },
];

var pieSlices = [
  { text : "Ubereats", values : [10] },
  { text : "Eat24", values : [20] },
  { text : "Grubhub", values : [30] },
  { text : "Postmates", values : [40] }
];



		return(
		<Container fluid={true}>

		<Row>
         <Panel>
        <Col md="8">
          <AreaChart id="chart2"
                    height="300"
                    width="690"
                    series={myAreaValues}
                    legend="true"
                    theme="dark"
                    title=""/>
         </Col>


         <Col md="4">
          <PieChart id="chart3"
                    height="300"
                    width="330"
                    series={pieSlices}
                    legend="true"
                    theme="dark"
                    title=""/>
         </Col>
         </Panel>
         


         </Row>
		 
		
		<Row>
		<Panel>
        <Col md="12">
          <LineChart id="chart1"
                    height="500"
                    width="1000"
                    series={myLineValues}
                    legend="true"
                    theme="dark"
                    title="Annual Report"/>
         </Col>
         </Panel>
         </Row>
		


         

         <Row>
         	 
         <PieChart 
                     height="300"
                     width="800"
                     series={myAreaValues}
                     legend="true"
                     theme="slate"
                     title="Pie Chart"/>
         </Row>

        </Container>
		);
	}
}

export default Dashboards;
