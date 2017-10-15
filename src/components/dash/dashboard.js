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
  { text : "First Series", values : [0,1,2,2,4,6,7] },
  { text : "Second Series", values : [18,12,7,14,1,19,4] },
  { text : "Third Series", values : [0,1,12,12,4,6,17] },
  { text : "Fourth Series", values : [18,22,17,4,1,9,4] },
];

var pieSlices = [
  { text : "First Slice", values : [10] },
  { text : "Second Slice", values : [20] },
  { text : "Third Slice", values : [30] },
  { text : "Fourth Slice", values : [40] }
];



		return(
		<Container fluid={true}>

		 
		
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
		

         <Col md="12">

          <AreaChart 
                     height="300"
                     width="800"
                     series={myAreaValues}
                     legend="true"
                     theme="slate"
                     title="Area Chart"/>
         </Col>        
         


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
