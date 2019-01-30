var formsCollection = document.querySelectorAll('.js-form-validation');

formsCollection.forEach(function(form) {

  form.addEventListener('formIsValid', function() {
    alert('All fields filled correctly');
  });

});