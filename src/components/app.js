import React, { Component } from 'react';


import AddItem from './add-item';
import IndexItem from './index-item';

//import BarChart from './dashboard/bar-chart';
//<AddItem/>

import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';

import Dashboards from './dash/dashboard';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Appbar from 'muicss/lib/react/appbar';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
  marginRight: 24,
};


export default class App extends Component {
  render() {

  	let s1 = {verticalAlign: 'middle'};

    return (

      
      <MuiThemeProvider>

      <div>

      <Appbar>
       <table width="100%">
         <tbody>
           <tr style={s1}>
             <td className="mui--appbar-height" >
             	<FontIcon
      				className="muidocs-icon-action-home"
      				style={iconStyles}/>
      				Food Order
             </td>
           </tr>
         </tbody>
       </table>
      </Appbar>
       
      	<Tabs defaultSelectedIndex={1} justified={true}>
        	<Tab value="pane-1" label="Report"><Dashboards/></Tab>
        	<Tab value="pane-2" label="List"><IndexItem/></Tab>
        	<Tab value="pane-3" label="Add Item"><AddItem/></Tab>

      	</Tabs>

      	</div>
     
        
      </MuiThemeProvider>
    
    );
  }
}
