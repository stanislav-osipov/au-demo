import React from 'react';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {        
    return (
      <h1>
        {this.props.message}
      </h1>
    );
  }
}