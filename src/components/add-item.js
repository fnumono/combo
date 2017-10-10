import React, {Component} from 'react';

import ItemService from './item-service';

class AddItem extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      value: ''
    };
    this.addItemService = new ItemService();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e)
  {
      this.setState({value: e.target.value});
  }

  handleSubmit(e)
  {
    e.preventDefault();
    this.addItemService.sendData(this.state.value);
  }

  render()
  {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Add Item:
            <input type="text" className="form-control" onChange={this.handleChange}/>
          </label><br/>
            <input type="submit" value="submit" className="btn btn-primary"/>
        </form>
      </div>
    );
  }
}

export default AddItem;
