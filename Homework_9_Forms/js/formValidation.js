;(function() {

  var formsCollection = document.querySelectorAll('.js-form-validation');

  formsCollection.forEach(function(form) {
    var inputsCollection = form.querySelectorAll('input, select, textarea');
    createTooltip(form, inputsCollection);

    form.setAttribute('novalidate', true);

    // customised Credit Card Number field input
    var ccNumberField = form.querySelector('[name="cc-number"]');
    if (ccNumberField) {
      ccNumberField.addEventListener('input', function() {
        var cardCode = this.value.replace(/[^\d]/g, '').substring(0, 16);
        cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
        this.value = cardCode;
      }, false);
    }

    var formDescription = Object.create(null);

    form.addEventListener('submit', function() {
      event.preventDefault();
      var isValid = formValidation(inputsCollection, formDescription);

      if (isValid) {
        var formValid = new Event('formIsValid');
        form.dispatchEvent(formValid);
      } else {
        var formInvalid = new Event('formIsInvalid');
        form.dispatchEvent(formInvalid);
        var elementFocused = false;
        inputsCollection.forEach(function(input) {
          input.classList.remove('input-container__input--correct', 'input-container__input--error');
          var inputName = input.getAttribute('name');
          var tooltip = document.body.querySelector('[data-for-input="' + input.getAttribute('name') + '"]');
          if (formDescription[inputName].errorMessage !== '') {
            if (!elementFocused) {
              input.focus();
              window.scrollTo(0, getCoordinates(input).top - 60);
            }
            elementFocused = true;
            input.classList.add('input-container__input--error');
            tooltip.classList.add('input-container__tooltip--visible');
            tooltip.innerHTML = formDescription[inputName].errorMessage;
          } else {
            input.classList.add('input-container__input--correct');
            tooltip.classList.remove('input-container__tooltip--visible');
          }
        });
      }
    });
  });

  function getCoordinates(elem) {
    var box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };

  }

  function createTooltip(form, inputsCollection) {

    inputsCollection.forEach(function(input) {
      // in case of, for example, radiobuttons, when we get several inputs with identical names, but we want to draw only one tooltip
      if (form.querySelector('[data-for-input="' + input.getAttribute('name') + '"]')) {
        return;
      }
      // input.setAttribute('data-has-tooltip', true);
      var tooltip = document.createElement('p');
      tooltip.setAttribute('data-for-input', input.getAttribute('name'));
      tooltip.classList.add('input-container__tooltip');
      // tooltip.innerHTML = 'Test tooltip 522242 44544 414354145 sgsdsgds ssaafsdg gahrs4rhhr tawat';
      input.parentNode.appendChild(tooltip);
    });
  }

  function formValidation(inputsCollection, formDescription) {

    inputsCollection.forEach(function(input) {
      var inputName = input.getAttribute('name');
      formDescription[inputName] = Object.create(null);
      formDescription[inputName].value = input.value;
      formDescription[inputName].errorMessage = '';
      formDescription[inputName].validationRules = Object.create(null);
      if (input.hasAttribute('required')) {
        formDescription[inputName].validationRules.required = true;
      }
      if (input.getAttribute('type') === 'email') {
        formDescription[inputName].validationRules.email = true;
      }
      if (input.getAttribute('type') === 'tel') {
        formDescription[inputName].validationRules.tel = true;
      }
      if (input.hasAttribute('max')) {
        formDescription[inputName].validationRules.max = input.getAttribute('max');
      }
      if (input.hasAttribute('min')) {
        formDescription[inputName].validationRules.min = input.getAttribute('min');
      }
      if (input.hasAttribute('maxlength')) {
        formDescription[inputName].validationRules.maxLength = input.getAttribute('maxlength');
      }
      if (input.hasAttribute('minlength')) {
        formDescription[inputName].validationRules.minLength = input.getAttribute('minlength');
      }
      if (inputName === 'cc-number') {
        formDescription[inputName].validationRules.ccNumber = true;
      }
      if (inputName === 'cc-csc') {
        formDescription[inputName].validationRules.ccCsc = true;
      }
      if (inputName === 'cc-exp') {
        formDescription[inputName].validationRules.ccExp = true;
      }
    });

    return validation(formDescription);
  }

  function validation(formObject) {
    function sideWhiteSpacesOff(value) {
      return value.trim();
    }

    function checkRequired(field) {
      if (field.value.length === 0) {
        field.errorMessage = 'This is required field, please, fill it';
        return false;
      } else {
        field.errorMessage = '';
        return true;
      }
    }

    function checkMinLength(field) {
      if (field.value.length < field.validationRules.minLength) {
        field.errorMessage = 'Input is too short, minimum allowable length: ' + field.validationRules.minLength;
        return false;
      } else {
        field.errorMessage = '';
        return true;
      }
    }

    function checkMaxLength(field) {
      if (field.value.length > field.validationRules.maxLength) {
        field.errorMessage = 'Input is too long, maximum allowable length: ' + field.validationRules.maxLength;
        return false;
      } else {
        field.errorMessage = '';
        return true;
      }
    }

    function checkMin(field) {
      if (field.value < field.validationRules.min) {
        field.errorMessage = 'Input is too small, minimum allowable value: ' + field.validationRules.min;
        return false;
      } else {
        field.errorMessage = '';
        return true;
      }
    }

    function checkMax(field) {
      if (field.value > field.validationRules.max) {
        field.errorMessage = 'Input is too large, maximum allowable value: ' + field.validationRules.max;
        return false;
      } else {
        field.errorMessage = '';
        return true;
      }
    }

    function checkEmail(field) {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field.value)) {
        field.errorMessage = 'Invalid email';
        return false;
      } else {
        field.errorMessage = '';
        return true;
      }
    }

    function checkTel(field) {
      if (!/^\+?\d{1,2}\d{10}$/.test(field.value)) {
        field.errorMessage = 'Invalid phone number';
        return false;
      } else {
        field.errorMessage = '';
        return true;
      }
    }

    function checkCCNumber(field) {
      if (!/^\d{4}(\s\d{4}){3}$/.test(field.value)) {
        field.errorMessage = 'Invalid credit card number';
        return false;
      } else {
        field.errorMessage = '';
        return true;
      }
    }

    function checkCSC(field) {
      if (!/^\d{3}$/.test(field.value)) {
        field.errorMessage = 'Invalid CSC';
        return false;
      } else {
        field.errorMessage = '';
        return true;
      }
    }

    function checkCCExp(field) {
      var currentDate = new Date();
      var expDate = field.value.split('-');
      if ((currentDate.getFullYear() > expDate[0]) || (currentDate.getFullYear() === expDate[0] &&
          currentDate.getMonth() + 1 > expDate[1])) {
        field.errorMessage = 'Credit card is no longer valid';
        return false;
      } else {
        field.errorMessage = '';
        return true;
      }
    }

    var checkResultsArray = [];
    var checkResult;

    for (var key in formObject) {
      formObject[key].value = sideWhiteSpacesOff(formObject[key].value);

      if (formObject[key].validationRules.required) {
        checkResult = checkRequired(formObject[key]);
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (formObject[key].validationRules.minLength) {
        checkResult = checkMinLength(formObject[key]);
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (formObject[key].validationRules.maxLength) {
        checkResult = checkMaxLength(formObject[key]);
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (formObject[key].validationRules.min) {
        checkResult = checkMin(formObject[key]);
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (formObject[key].validationRules.max) {
        checkResult = checkMax(formObject[key]);
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (formObject[key].validationRules.email) {
        checkResult = checkEmail(formObject[key]);
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (formObject[key].validationRules.tel) {
        checkResult = checkTel(formObject[key]);
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (formObject[key].validationRules.ccNumber) {
        checkResult = checkCCNumber(formObject[key]);
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (formObject[key].validationRules.ccCsc) {
        checkResult = checkCSC(formObject[key]);
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (formObject[key].validationRules.ccExp) {
        checkResultsArray.push(checkCCExp(formObject[key]));
      }
    }

    return (checkResultsArray.indexOf(false) === -1);
  }
}());