import React, { Component } from 'react';


import AddItem from './add-item';
import IndexItem from './index-item';


export default class App extends Component {
  render() {
    return (
      <div>
        React simple starter
        <AddItem/>
        <IndexItem/>
      </div>
    );
  }
}
