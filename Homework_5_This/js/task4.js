/*  Create a constructor that will describe 'City'. It should

    * have 'name', 'population', 'country' (passed as arguments to functions);
    * have methods 'getPopulation'(return population), 'getCityName' (return city name);
    * have 'addCitizen' method that increments 'population' +1
*/

console.log('Task 4');

var cityN = new City('City N', 1e6, 'Country T');

console.log('City population: ', cityN.getPopulation());
for (var i = 1; i < 2e4; i++) {
  cityN.addCitizen();
}
console.log('City population: ', cityN.getPopulation());

function City(name, population, country) {
  this.name = name;
  this.population = population;
  this.country = country;

  this.getPopulation = function() {
    return this.population;
  };

  this.getCityName = function() {
    return this.name;
  };

  this.addCitizen = function() {
    this.population++;
  };
}