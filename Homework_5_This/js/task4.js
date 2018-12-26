/*  Create a constructor that will describe 'City'. It should

    * have 'name', 'population', 'country' (passed as arguments to functions);
    * have methods 'getPopulation'(return population), 'getCityName' (return city name);
    * have 'addCitizen' method that increments 'population' +1
*/

var cityN = new City('CityN', 10000, 'CountryT');

console.log(cityN.getPopulation());
for (var i = 1; i < 200; i++) {
  cityN.addCitizen();
}
console.log(cityN.getPopulation());

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