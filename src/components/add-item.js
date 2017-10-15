import React, {Component} from 'react';

import ItemService from './item-service';

import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

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

    var data = {
      app_name: 'postmate',
      description: 'pizza',
      pickup_name: 'robert',
      restaurant_name: 'beach pizza'
    };

    //this.addItemService.sendData(this.state.value);
    this.addItemService.sendOrder(data);
  }

  render()
  {
    return (
      <Container fluid={true}>
      <Row>
        <Col md="6" md-offset="4">
          
   

        <form onSubmit={this.handleSubmit}>
          <label>
            Add Item:
            <input type="text" className="form-control" onChange={this.handleChange}/>
          </label><br/>
            <input type="submit" value="submit" className="btn btn-primary"/>
        </form>

    </Col>
    </Row>

      </Container>
    );
  }
}

export default AddItem;
