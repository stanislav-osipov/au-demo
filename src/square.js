import {inject} from 'aurelia-framework';

@inject(Element)
export class SquareCustomAttribute {
  constructor(element){
    this.element = element;
    this.element.style.width = this.element.style.height = '100px';
  }

  bind() {
    this.element.style.backgroundColor = this.value;
  }
}