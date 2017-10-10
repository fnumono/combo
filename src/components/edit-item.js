import React, {Component} from 'react';
import axios from 'axios';

class EditItem extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {value: ''};

    this.addItemService = new ItemService();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount()
  {
    axios.get('http://localhost:4200/items/edit/'+this.props.match.params.id)
    .then(response=>{
      this.setState({value: response.data});
    })
    .catch(function(error){
      console.log(error);
    })
  }

  handleChange(e)
  {
    this.setState({value: e.target.value});
  }

  handleSubmit(e)
  {
    e.preventDefault();
    this.addItemService.updateData(this.state.value, this.props.mathc.params.id);

  }

  render()
  {
    return (
      <div className="container">
        <form onSubmit = {this.handleSubmit}>
          <label>
            Edit Item:
            <input type="text" className="form-control" value={this.state.value.item} onChange={this.handleChange} />
          </label>
            <input type="submit" value="update" className="btn btn-primary"/>
        </form>
      </div>
    );
  }
}

export default EditItem;
