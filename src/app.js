import {BindingSignaler} from 'aurelia-templating-resources';
import {inject} from 'aurelia-framework';

@inject(BindingSignaler)
export class App {
  message = 'Welcome to Aurelia!';

  constructor(signaler) {
  	setInterval(() => signaler.signal('my-signal'), 2000);
  }
}
