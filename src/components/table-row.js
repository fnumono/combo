import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import EditItem from './edit-item';

class TableRow extends Component
{
  render()
  {
    return(

        <tr>
          <td>
            {this.props.num}
          </td>
          <td>
            {this.props.obj.order.app_name}
          </td>
          <td>
            {this.props.obj.order.description}
          </td>
          <td>
            {this.props.obj.order.pickup_name}
          </td>
          <td>
            {this.props.obj.order.restaurant_name}
          </td>
          <td>
            <span className="glyphicon glyphicon-inbox"></span>
          </td>
          <td>
            <button className="btn btn-danger"> Delete </button>
          </td>
        </tr>

    );
  }
}

export default TableRow;
