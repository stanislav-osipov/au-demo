import React from 'react';
import ReactDOM from 'react-dom';
import {customElement, inject, bindable, noView} from 'aurelia-framework';

import Component from 'component.jsx!jsx';

@noView()
@inject(Element)
@bindable('data')
@customElement('react-component')
export class ComponentFromReact {
  reactComponent = {};
  
  constructor(element) {
    this.element = element;
  }

  bind() {
   this.reactComponent = ReactDOM.render(
      React.createElement(Component, {message: this.data}),
      this.element
    ); 
  }

  dataChanged() {
    this.bind();
  }   
}