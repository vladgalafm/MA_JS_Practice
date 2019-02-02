var newId = generateUniqueId();

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
  changeUserData: function() {
    console.log('Change your name/password');
  },
  logOut: function() {
    console.log('LogOut');
  },
};

Admin.prototype = user;
Visitor.prototype = user;

Admin.prototype.editDeleteNews = function() {
  console.log('Start editing news');
};

var vasya = new Admin('Vasya', '123');
vasya.showNews();
vasya.editDeleteNews();

function generateUniqueId() {
  var userNumber = 0;
  return function() {
    return ++userNumber + '';
  };
}