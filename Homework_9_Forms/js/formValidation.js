;(function() {

  var formsCollection = document.querySelectorAll('.js-form-validation');

  formsCollection.forEach(function(form) {
    var inputsCollection = form.querySelectorAll('input, select, textarea');
    createTooltip(form, inputsCollection);

    form.setAttribute('novalidate', true);

    // customised Credit Card Number field input
    var ccNumberField = form.querySelector('[data-name="cc-number"]');
    if (ccNumberField) {
      ccNumberField.addEventListener('input', function() {
        var cardCode = this.value.replace(/[^\d]/g, '').substring(0, 16);
        cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
        this.value = cardCode;
      }, false);
    }

    var formDescription = Object.create(null);

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      var isValid = formValidation(inputsCollection, formDescription);

      if (isValid) {
        var formValid = new Event('formIsValid');
        form.dispatchEvent(formValid);
        inputsCollection.forEach(function(input) {
          input.classList.remove('input-container__input--correct', 'input-container__input--error');
          if (input.getAttribute('type') === 'checkbox') {
            form.querySelector('[for="' + input.getAttribute('id') + '"]').classList.remove('pseudo-element--error', 'pseudo-element--correct');
          }
        });
      } else {
        var formInvalid = new Event('formIsInvalid');
        form.dispatchEvent(formInvalid);
        var elementFocused = false;

        inputsCollection.forEach(function(input) {
          input.classList.remove('input-container__input--correct', 'input-container__input--error');
          if (input.getAttribute('type') === 'checkbox') {
            form.querySelector('[for="' + input.getAttribute('id') + '"]').classList.remove('pseudo-element--error', 'pseudo-element--correct');
          }

          var inputName = input.dataset.name;
          var tooltip = document.body.querySelector('[data-for-input="' + inputName + '"]');

          if (formDescription[inputName].errorMessage !== '') {
            if (!elementFocused) {
              input.focus();
              window.scrollTo(0, getCoordinates(input).top - 60);
            }
            elementFocused = true;

            if (input.getAttribute('type') === 'checkbox') {
              form.querySelector('[for="' + input.getAttribute('id') + '"]').classList.add('pseudo-element--error');
            }
            input.classList.add('input-container__input--error');
            tooltip.classList.add('input-container__tooltip--visible');
            tooltip.innerHTML = formDescription[inputName].errorMessage;
          } else {
            if (input.getAttribute('type') === 'checkbox') {
              form.querySelector('[for="' + input.getAttribute('id') + '"]').classList.add('pseudo-element--correct');
            }
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
      if (form.querySelector('[data-for-input="' + input.dataset.name + '"]')) {
        return;
      }
      var tooltip = document.createElement('p');
      tooltip.setAttribute('data-for-input', input.dataset.name);
      tooltip.classList.add('input-container__tooltip');
      input.parentNode.appendChild(tooltip);
    });
  }

  function formValidation(inputsCollection, formDescription) {
    var checkResultsArray = [];
    var checkResult;

    for (var i = 0; i < inputsCollection.length; i++) {
      var input = inputsCollection[i];
      var inputName = input.dataset.name;
      formDescription[inputName] = Object.create(null);
      formDescription[inputName].value = sideWhiteSpacesOff(input.value);
      formDescription[inputName].errorMessage = '';

      if (input.hasAttribute('required')) {
        if (input.getAttribute('type') === 'checkbox') {
          checkResult = checkCheckboxRequired(formDescription[inputName], input.checked);
        } else {
          checkResult = checkRequired(formDescription[inputName]);
        }
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (input.hasAttribute('max')) {
        checkResult = checkMax(formDescription[inputName], input.getAttribute('max'));
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (input.hasAttribute('min')) {
        checkResult = checkMin(formDescription[inputName], input.getAttribute('min'));
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (input.hasAttribute('maxlength')) {
        checkResult = checkMaxLength(formDescription[inputName], input.getAttribute('maxlength'));
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (input.hasAttribute('minlength')) {
        checkResult = checkMinLength(formDescription[inputName], input.getAttribute('minlength'));
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (input.getAttribute('type') === 'email') {
        checkResult = checkEmail(formDescription[inputName]);
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (input.getAttribute('type') === 'tel') {
        checkResult = checkTel(formDescription[inputName]);
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (inputName === 'cc-number') {
        checkResult = checkCCNumber(formDescription[inputName]);
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (inputName === 'cc-csc') {
        checkResult = checkCSC(formDescription[inputName]);
        checkResultsArray.push(checkResult);
        if (!checkResult) {
          continue;
        }
      }
      if (inputName === 'cc-exp') {
        checkResultsArray.push(checkCCExp(formDescription[inputName]));
      }
    }

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

    function checkCheckboxRequired(field, isChecked) {
      if (!isChecked) {
        field.errorMessage = 'This is required field, please, fill it';
        return false;
      } else {
        field.errorMessage = '';
        return true;
      }
    }

    function checkMinLength(field, minLength) {
      if (field.value.length < minLength) {
        field.errorMessage = 'Input is too short, minimum allowable length: ' + minLength;
        return false;
      } else {
        field.errorMessage = '';
        return true;
      }
    }

    function checkMaxLength(field, maxLength) {
      if (field.value.length > maxLength) {
        field.errorMessage = 'Input is too long, maximum allowable length: ' + maxLength;
        return false;
      } else {
        field.errorMessage = '';
        return true;
      }
    }

    function checkMin(field, min) {
      if (field.value < min) {
        field.errorMessage = 'Input is too small, minimum allowable value: ' + min;
        return false;
      } else {
        field.errorMessage = '';
        return true;
      }
    }

    function checkMax(field, max) {
      if (field.value > max) {
        field.errorMessage = 'Input is too large, maximum allowable value: ' + max;
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
      if (!/^\d{4}(\s?\d{4}){3}$/.test(field.value)) {
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

    return (checkResultsArray.indexOf(false) === -1);
  }
}());