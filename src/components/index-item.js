import React, {Component} from 'react';
import axios from 'axios';
import ItemService from './item-service';
import TableRow from './table-row';


class IndexItem extends Component
{

  constructor(props)
  {
    super(props);

    this.state = {
      value: '',
      items: '',
      orders: ''
    }

    this.addItemService = new ItemService();
  }

  componentDidMount()
  {
    axios.get('http://www.localhost:4200/orders')
    .then(response=>{
      //this.setState({items: response.data});
      this.setState({orders: response.data});
      console.log(response.data[0].order);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  tabRow()
  {
    //if (this.state.items instanceof Array)
    if (this.state.orders instanceof Array)
    {
      return this.state.orders.map(function(object, i){
        return <TableRow obj={object} num={i} key={i}/>
      });
    }
  }

  render()
  {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>No.</td>
              <td>App Name</td>
              <td>Description</td>
              <td>Pick Up Name </td>
              <td>Restaurant Name </td>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default IndexItem;
