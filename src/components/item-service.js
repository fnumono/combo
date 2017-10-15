import React, {Component} from 'react';
import axios from 'axios';

class ItemService
{
  sendData(data)
  {
    axios.post('http://localhost:4200/items/add/post',{
      item: data
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error)
    });
  }

  updateData(data, id)
  {
    axios.post('http://localhost:4200/items/update',{
      item:data
    })
    .then(res=> this.setState({items: res.data}))
    .catch(err=>console.log(err))
  }

  deleteData(id)
  {
    axios.get('http://localhost:4200/items/delete')
    .then(console.log('Deleted'))
    .catch(err=>console.log(err))
  }

  sendOrder(data)
  {
    axios.post('http://localhost:4200/orders/add/post',{
      order: data
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error)
    });
  }


}

export default ItemService;
