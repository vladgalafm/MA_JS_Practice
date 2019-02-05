;(function() {
  var newId = generateUniqueId();

  function generateUniqueId() {
    var userNumber = 0;
    return function() {
      return ++userNumber + '';
    };
  }

  function User(name, id) {
    this.id = id;
    this.name = name;
  }

  User.prototype.logOut = function() {
    editNewsButton.classList.remove('js-display-none');
    deleteNewsButton.classList.remove('js-display-none');
    formsField.classList.remove('js-display-none');
    usersCabinet.classList.add('js-display-none');
    currentLoggedUser = Object.create(null);
    localStorage.clear();
  };
  User.prototype.watchNews = function() {
    alert('Watching news');
  };
  User.prototype.changeUserData = function() {
    alert('Changing your name/password');
  };

  function Visitor(name, id) {
    this.role = 'visitor';
    User.apply(this, arguments);
  }

  function Admin(name, id) {
    this.role = 'admin';
    User.apply(this, arguments);
  }

  Admin.prototype = Object.create(User.prototype);
  Visitor.prototype = Object.create(User.prototype);

  Admin.prototype.editNews = function() {
    alert('Start editing news');
  };
  Admin.prototype.deleteNews = function() {
    alert('Start deleting news');
  };

  // ..................................

  var usersList = [
    {
      id: newId(),
      name: 'Paul',
      role: 'admin',
      password: '1qQ',
    },
    {
      id: newId(),
      name: 'Bill',
      role: 'admin',
      password: '2wW',
    },
    {
      id: newId(),
      name: 'Kate',
      role: 'visitor',
      password: '3eE',
    },
  ];

  var currentLoggedUser = Object.create(null);

  // ..................................

  var formsCollection = document.querySelectorAll('.js-form-validation'),
      formsField = document.querySelector('.js-forms-field'),
      usersCabinet = document.querySelector('.js-users-cabinet'),
      usersAvatar = usersCabinet.querySelector('.js-avatar'),
      usersRole = usersCabinet.querySelector('.js-role'),
      usersName = usersCabinet.querySelector('.js-username'),
      editNewsButton = usersCabinet.querySelector('[data-action="edit-news"]'),
      deleteNewsButton = usersCabinet.querySelector('[data-action="delete-news"]'),
      actionButtonsList = usersCabinet.querySelectorAll('.users-bar__button');

  formsCollection.forEach(function(form) {

    form.addEventListener('formIsValid', function() {
      if (form.dataset.role === 'login') {
        searchForUser(form);
      } else if (form.dataset.role === 'signup') {
        var newUser = signUp(form);
        logIn(newUser);
      }
    });

  });

  actionButtonsList.forEach(function(button) {

    button.addEventListener('click', function() {
      if (button.dataset.action === 'logout') {
        currentLoggedUser.logOut();
      } else if (button.dataset.action === 'watch-news') {
        currentLoggedUser.watchNews();
      } else if (button.dataset.action === 'edit-profile') {
        currentLoggedUser.changeUserData();
      } else if (button.dataset.action === 'edit-news') {
        currentLoggedUser.editNews();
      } else if (button.dataset.action === 'delete-news') {
        currentLoggedUser.deleteNews();
      }
    });

  });

  document.addEventListener('DOMContentLoaded', function() {
    loadPageForLoggedUser();
  });

  function searchForUser(form) {
    for (var i = 0; i < usersList.length; i++) {
      if (usersList[i].name === form.querySelector('[data-name="login-user"]').value && usersList[i].password === form.querySelector('[data-name="login-password"]').value) {
        logIn(usersList[i]);
        return;
      }
    }
    alert('LogIn error: wrong name or password');
  }

  function logIn(user) {
    usersName.innerHTML = user.name;
    if (user.role === 'admin') {
      currentLoggedUser = new Admin(user.name, user.id);
      console.log(currentLoggedUser);
      usersAvatar.classList.remove('users-bar__avatar--visitor');
      usersAvatar.classList.add('users-bar__avatar--admin');
      usersRole.innerHTML = 'Admin';
    } else {
      currentLoggedUser = new Visitor(user.name, user.id);
      console.log(currentLoggedUser);
      usersAvatar.classList.remove('users-bar__avatar--admin');
      usersAvatar.classList.add('users-bar__avatar--visitor');
      usersRole.innerHTML = 'Visitor';
      editNewsButton.classList.add('js-display-none');
      deleteNewsButton.classList.add('js-display-none');
    }
    formsField.classList.add('js-display-none');
    usersCabinet.classList.remove('js-display-none');

    localStorage.setItem('currentUser', JSON.stringify(currentLoggedUser));
  }

  function signUp(form) {
    var newUser = {
      id: newId(),
      name: form.querySelector('[data-name="signup-user"]').value,
      password: form.querySelector('[data-name="signup-password"]').value,
    };
    if (form.querySelector('[data-name="admin"]').checked) {
      newUser.role = 'admin';
    } else {
      newUser.role = 'visitor';
    }
    usersList.push(newUser);
    return newUser;
  }

  function loadPageForLoggedUser() {
    var loggedUser = localStorage.getItem('currentUser');
    if (loggedUser) {
      logIn(JSON.parse(loggedUser));
    }
  }
}());