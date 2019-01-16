function Admin(name, password) {
  this.id = newId();
  this.name = name;
  this.password = password;
  this.role = 'admin';
}

function Visitor(name, password) {
  this.id = newId();
  this.name = name;
  this.password = password;
  this.role = 'visitor';
}

var user = {
  showNews: function() {
    console.log('Show news');
  },
  changeName: function(newName) {
    this.name = newName;
  },
  changePassword: function(newPassword) {
    this.password = newPassword;
  }
};

function generateUniqueId() {
  var userNumber = 0;
  return function() {
    return ++userNumber + '';
  };
}

var newId = generateUniqueId();

var q = new Admin('q', '123');
var w = new Visitor('w', '123');
var r = new Visitor('r', '123');
console.dir(q);
console.dir(w);
console.dir(r);