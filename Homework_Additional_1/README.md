# MA_JS_Additional_Practice_Homework_1

* Завантажити масив з даними про тварин з `https://tanuhaua.github.io/datas-file-json/animals/animals.json` такого виду:

```javascript
[
  {id: "animals", parent: null},
  {id: "mammals", parent: "animals"}
]
```

* Сформувати з нього об'єкт такого виду (погрупувати по властивості `parent`):

```javascript
{
  "animals": {
    "mammals": {
      "cats": {
        "siamese": {},
        "persian": {}
      },
      "dogs": {
        "labrador": {},
        "chihuahua": {}
      }
    }
  }
}
```

* і вивести в консоль результат

[Click here to see results](https://vladgalafm.github.io/MA_JS_Practice/Homework_Additional_1/)
