/*  Есть объект формы

    * Напишите вспомогательные функции, обеспечивающие проверку валидности данных (обязательное поле, минимальная и
      максимальная длина, емейл). Не используйте регулярные выражения.
    * Объедините все функции в одну функцию validation(formObject), которая принимает в себя параметром объект формы
      и возвращает true/false в зависимости от того, валидны ли введенные данные.
    * Как вариант альтернативного решения, объедините вспомогательные функции в объект validation с методами
      (*это необязательное дополнительное задание).
    * Можете менять названия функций и переменных по своему усмотрению.
*/

console.log('Task 6');

var form = {
  name: {
    value: 'Masha',
    validationRules: {
      minLength: 3,
      maxLength: 20,
      required: true,
    },
    errorMessage: '',
  },
  email: {
    value: 'email@example.com',
    validationRules: {
      email: true,
      required: true,
    },
    errorMessage: '',
  },
};

function validation(formObject) {
  var checkingYourName = checkName();
  var checkingYourMail = checkMail();

  function checkName() {
    if (formObject.name.validationRules.required && formObject.name.value.length === 0) {
      formObject.name.errorMessage = '\tЭто обязательное поле';
      return false;
    } else if (formObject.name.value.length < formObject.name.validationRules.minLength) {
      formObject.name.errorMessage = '\tСлишком короткое имя';
      return false;
    } else if (formObject.name.value.length > formObject.name.validationRules.maxLength) {
      formObject.name.errorMessage = '\tСлишком длинное имя';
      return false;
    } else {
      return true;
    }
  }

  function checkMail() {
    if (formObject.email.validationRules.required && formObject.email.value.length === 0) {
      formObject.email.errorMessage = '\tЭто обязательное поле';
      return false;
    } else if (formObject.email.validationRules.email && formObject.email.value.split('').indexOf('@') === -1) {
      formObject.email.errorMessage = '\tВведен не email';
      return false;
    } else {
      return true;
    }
  }

  if (formObject.name.errorMessage.length > 0) {
    console.log(formObject.name.errorMessage);
  }
  if (formObject.email.errorMessage.length > 0) {
    console.log(formObject.email.errorMessage);
  }

  return (checkingYourName && checkingYourMail);
}

var c1 = validation(form);
console.log('\tВалидность введенных в форму данных:', c1);