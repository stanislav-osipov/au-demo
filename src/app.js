export class App {
  message = 'Welcome to Aurelia!';
}

export class SampleValueConverter {
  toView(string, params) {
    return string + ' - converted to View with parameters: ' + params;
  }
}