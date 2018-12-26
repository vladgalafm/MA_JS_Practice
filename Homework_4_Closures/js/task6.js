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
  function sideWhiteSpacesOff(value) { // избавляемся в field_name.value от пробелов по бокам
    return value.trim();
  }

  function checkRequired(field) {
    if (field.value.length === 0) {
      field.errorMessage = 'Это обязательное поле, заполните его';
      return false;
    } else {
      return true;
    }
  }

  function checkMinLength(field) {
    if (field.value.length < field.validationRules.minLength) {
      field.errorMessage = 'Поле слишком короткое, минимальнаяя длина: ' + field.validationRules.minLength;
      return false;
    } else {
      return true;
    }
  }

  function checkMaxLength(field) {
    if (field.value.length > field.validationRules.maxLength) {
      field.errorMessage = 'Поле слишком длинное, максимальная длина: ' + field.validationRules.maxLength;
      return false;
    } else {
      return true;
    }
  }

  function checkIsEmail(field) {
    if (field.value.split('').indexOf('@') === -1) {
      field.errorMessage = 'Введен не email';
      return false;
    } else {
      return true;
    }
  }

  var checkResults = [];

  for (var key in formObject) {
    formObject[key].value = sideWhiteSpacesOff(formObject[key].value);

    if (formObject[key].validationRules.required) {
      checkResults.push(checkRequired(formObject[key]));
    }
    if (formObject[key].validationRules.minLength) {
      checkResults.push(checkMinLength(formObject[key]));
    }
    if (formObject[key].validationRules.maxLength) {
      checkResults.push(checkMaxLength(formObject[key]));
    }
    if (formObject[key].validationRules.email) {
      checkResults.push(checkIsEmail(formObject[key]));
    }
  }

  return (checkResults.indexOf(false) === -1);
}

console.log('\tПоля формы заполнены корректно?', validation(form));