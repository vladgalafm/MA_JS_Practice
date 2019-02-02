# Form validation library

[Library operation example](https://vladgalafm.github.io/MA_JS_Practice/Homework_9_Forms/)

1. To use this form validation library, copy `formValidation.js` and add it to your project, like in the example below. Also, make sure you've did the same with `tooltip.css`.

```html
<link href="css/tooltip.css" rel="stylesheet">
  ...
<script src="js/formValidation.js"></script>
```

2. Add `class="js-form-validation"` to forms you want to validate.

```html
<form class="js-form-validation" action="#" method="post">
  ...
<form>
```

3. This library is configured by form fields attributes. So, for example, if you want your email-input to be checked, this input should has `type="email"` attribute (read more about input attributes [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)).

4. Add `data-name` attributes to all your `<input>` elements with values like in [this](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) standart (_par. 4.10.18.7 Autofill_).

Example:
```html
<!-- this input is for credit card number, so data-name attribute should have the same value as an autocomplete attribute -->

<input data-name="cc-number" name="card-number" id="cc-num" autocomplete="cc-number">
```

Notice: you can fill these attributes with values you'd like, but if you want to use all features of this library, please, follow instructions.

4.1. If you have an email, password or telephone confirmation field, name it's `data-name` like in field which you want bind to your confirmation field + add `-confirm` postfix to it's `data-name`.

Example:

```html
<input data-name="password" name="password" id="pass" type="password" required>
  ...
<input data-name="password-confirm" name="password-confirm" id="pass-conf" type="password" required>
```

5. Wrap your inputs into blocks and add `class="input-container"` to these blocks. If it's possible, you can wrap inputs' `<lable>` into containers too.

```html
<div class="input-container">
  <label for="email">Email</label>
  <input data-name="email" name="email" id="email" type="email" autocomplete="email">
</div>
```

6. If want to add some events after form validation process, when form turns valid or not valid, use _formIsValid_ and _formIsInvalid_ custom events.

Example:
```javascript
// if form is valid, you will see alert message

var form = document.querySelector('.js-form-validation');
form.addEventListener('formIsValid', function() {
  alert('All fields filled correctly');
});
```