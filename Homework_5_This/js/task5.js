/*  Вызов user.checkPassword() в коде ниже должен, при помощи ask, спрашивать пароль и вызывать loginOk/loginFail в
    зависимости от правильности ответа.

    Исправьте метод checkPassword , чтобы всё работало. Сделайте 2 способами - через замыкание (var self = this;) и
    с помощью bind.
*/

console.log('Task 5');

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result === answer) {
    ok();
  } else {
    fail();
  }
}
var user = {
  login: 'Andrew',
  password: '12345',

  loginOk: function() {
    console.log(this.login + ' - login success');
  },

  loginFail: function() {
    console.log(this.login + ' - login failed');
  },
  /*
  Variant with Bind:

  checkPassword: function() {
    ask("Your password?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  }
  */
  checkPassword: function() {
    var self = this;
    ask("Your password?", this.password,
      function() {
        self.loginOk();
      },
      function() {
        self.loginFail();
      }
    );
  }
};

user.checkPassword();

var user2 = user;
user = null;
user2.checkPassword();