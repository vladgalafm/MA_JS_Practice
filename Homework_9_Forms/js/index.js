var formsCollection = document.querySelectorAll('.js-form-validation');

formsCollection.forEach(function(form) {
  var inputCollection = form.querySelectorAll('input, select, textarea');

  form.addEventListener('formIsValid', function() {
    alert('All fields filled correctly');
  });

  form.addEventListener('formIsInvalid', function() {

  });
});