/*  Создать функцию createURL(templateURL, params), которая на основе шаблона и параметров формирует URL
*/

console.log('Task 3');

var templateURL = '/api/countries/{country}/regions/{region}/';
var parameters = {country: 'Ukraine', region: 'Kiev'};
var expectedURL = '/api/countries/Ukraine/regions/Kiev/';

var newUrl = createURL(templateURL, parameters);

console.log('Received template: ' + templateURL + '\nReceived parameters: ', parameters);
console.log('Expected URL: ' + expectedURL + '\nReceived URL: ' + newUrl);
console.log((newUrl === expectedURL) ? 'URL formed correctly' : 'Error: Wrong result');

function createURL(templateURL, params) {
  for (var key in params) {
    templateURL = templateURL.replace('{' + key + '}', params[key]);
  }
  return templateURL;
}